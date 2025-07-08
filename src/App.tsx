import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import VoiceAssistant from "./pages/VoiceAssistant";
import MandiPrices from "./pages/MandiPrices";
import CropHealth from "./pages/CropHealth";
import WeatherAdvisory from "./pages/WeatherAdvisory";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/voice" element={<VoiceAssistant />} />
          <Route path="/prices" element={<MandiPrices />} />
          <Route path="/crop-health" element={<CropHealth />} />
          <Route path="/weather" element={<WeatherAdvisory />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
