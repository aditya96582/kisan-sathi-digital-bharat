import { Link, Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mic, TrendingUp, Cloud, Shield, Globe } from "lucide-react";

export default function Layout() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header - Saffron/Orange */}
      <header className="bg-accent text-accent-foreground sticky top-0 z-50 shadow-sm rounded-b-2xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 hover-scale">
              <div className="w-9 h-9 bg-white/15 rounded-lg flex items-center justify-center">
                <span className="font-bold">SB</span>
              </div>
              <span className="text-lg font-semibold">Smart Bharat</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/dashboard" className="story-link">Dashboard</Link>
              <Link to="/voice" className="story-link flex items-center gap-1"><Mic className="w-4 h-4" />Voice</Link>
              <Link to="/prices" className="story-link flex items-center gap-1"><TrendingUp className="w-4 h-4" />Prices</Link>
              <Link to="/weather" className="story-link flex items-center gap-1"><Cloud className="w-4 h-4" />Weather</Link>
              <Link to="/terrasense-lab" className="story-link flex items-center gap-1"><Shield className="w-4 h-4" />TerraSense</Link>
              <Link to="/ai-insights" className="story-link flex items-center gap-1"><Globe className="w-4 h-4" />AI</Link>
            </nav>
            <div className="flex items-center gap-2">
              <Button asChild size="sm" variant="secondary">
                <Link to="/voice">Start Talking</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer - India Green */}
      <footer className="bg-primary text-primary-foreground mt-12 rounded-t-2xl">
        <div className="container mx-auto px-4 py-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-8 h-8 bg-white/15 rounded-lg flex items-center justify-center">SB</div>
            <span className="font-semibold">Smart Bharat Innovation</span>
          </div>
          <p className="opacity-90 text-sm">Empowering farmers through technology • Made in India</p>
          <div className="text-xs opacity-80 mt-2">© {new Date().getFullYear()} Smart Bharat • All rights reserved</div>
        </div>
      </footer>
    </div>
  );
}
