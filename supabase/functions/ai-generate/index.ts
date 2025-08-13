import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const GEMINI_API_KEY = Deno.env.get("GEMINI_API_KEY");
const MODEL = "gemini-1.5-flash-latest";

function tryParseJsonText(text: string): any | null {
  try {
    return JSON.parse(text);
  } catch (_) {}
  // Remove markdown code fences if present
  try {
    const cleaned = text
      .replace(/^```(json)?/i, "")
      .replace(/```$/i, "")
      .trim();
    return JSON.parse(cleaned);
  } catch (_) {}
  // Try to extract JSON substring
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start !== -1 && end !== -1 && end > start) {
    const sliced = text.slice(start, end + 1);
    try {
      return JSON.parse(sliced);
    } catch (_) {}
  }
  return null;
}

serve(async (req) => {
  // CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (!GEMINI_API_KEY) {
    return new Response(
      JSON.stringify({ error: "Missing GEMINI_API_KEY" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }

  try {
    const body = await req.json();
    const { query, section = "General", targetLang = "", userLocale = "", context = {} } = body ?? {};

    if (!query || typeof query !== "string") {
      return new Response(
        JSON.stringify({ error: "'query' is required as a string" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const system = `You are Smart Bharat's agricultural AI assistant. Answer with high precision, grounded in agronomy best practices.
- Respect the user's intent and the section context: ${section}.
- Be concise, answer the asked question only. If critical info is missing, ask a single clarifying question.
- Prefer metric units. Include safe, practical steps a farmer can follow.
- If targetLang provided, respond in that language. Else detect language from the user's query and respond in that language.
- Never fabricate data; say you don't know if uncertain.
Return strictly JSON with keys: { "language": "<BCP-47 like hi-IN>", "answer": "<final reply>" }.`;

    const userText = [
      `User locale: ${userLocale || "unknown"}`,
      `Target language (optional): ${targetLang || "not provided"}`,
      `Section: ${section}`,
      `Context: ${JSON.stringify(context).slice(0, 2000)}`,
      `\nUser query: ${query}`,
      `\nRespond with JSON only.`,
    ].join("\n");

    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            { role: "user", parts: [{ text: `${system}\n\n${userText}` }] },
          ],
        }),
      },
    );

    if (!geminiRes.ok) {
      const errText = await geminiRes.text();
      console.error("Gemini error:", errText);
      return new Response(
        JSON.stringify({ error: "Gemini request failed", detail: errText }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const data = await geminiRes.json();
    const textOutput: string = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
    const parsed = tryParseJsonText(textOutput) || { language: targetLang || userLocale || "en-US", answer: textOutput || "" };

    return new Response(JSON.stringify(parsed), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("ai-generate error:", error);
    return new Response(
      JSON.stringify({ error: (error as Error).message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
