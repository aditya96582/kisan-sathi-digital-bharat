import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link, useLocation } from "react-router-dom";
import { 
  Menu, 
  X, 
  Mic, 
  Home, 
  BarChart3, 
  Cloud, 
  Beaker, 
  Brain,
  Languages,
  ChevronDown
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
  { code: 'en', name: 'English', native: 'English' },
  { code: 'ml', name: 'Malayalam', native: 'മലയാളം' },
  { code: 'hi', name: 'Hindi', native: 'हिन्दी' },
  { code: 'ta', name: 'Tamil', native: 'தமிழ்' },
  { code: 'te', name: 'Telugu', native: 'తెలుగు' },
  { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ' },
  { code: 'bn', name: 'Bengali', native: 'বাংলা' },
  { code: 'gu', name: 'Gujarati', native: 'ગુજરાતી' },
];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Dashboard', href: '/dashboard', icon: BarChart3 },
    { name: 'Voice Assistant', href: '/voice', icon: Mic },
    { name: 'Market Prices', href: '/prices', icon: BarChart3 },
    { name: 'Weather', href: '/weather', icon: Cloud },
    { name: 'TerraSense Lab', href: '/terrasense', icon: Beaker },
    { name: 'AI Insights', href: '/ai-insights', icon: Brain },
  ];

  const isActive = (href: string) => location.pathname === href;

  const handleLanguageChange = (langCode: string) => {
    setCurrentLanguage(langCode);
    // Add translation logic here
  };

  return (
    <header className="relative bg-gradient-warm backdrop-blur-md border-b border-border/50 shadow-gentle z-50">
      {/* Floating Particles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-2 left-10 w-1 h-1 bg-kerala-green-light/30 rounded-full animate-pulse"></div>
        <div className="absolute top-8 right-20 w-2 h-2 bg-spice-warm/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-3 left-1/3 w-1.5 h-1.5 bg-backwater-blue/25 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-kerala rounded-xl flex items-center justify-center shadow-gentle group-hover:shadow-nature transition-all duration-500">
                <span className="text-white font-bold text-lg">SB</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-nature rounded-xl opacity-0 group-hover:opacity-20 transition-all duration-500 blur"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                Smart Bharat
              </span>
              <span className="text-xs text-muted-foreground">Kerala Farming Assistant</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.name}
                  asChild
                  variant={isActive(item.href) ? "default" : "ghost"}
                  size="sm"
                  className={`relative overflow-hidden transition-all duration-500 hover:scale-105 ${
                    isActive(item.href) 
                      ? 'bg-gradient-kerala text-white shadow-nature' 
                      : 'hover:bg-accent/10 hover:text-primary'
                  }`}
                >
                  <Link to={item.href} className="flex items-center space-x-2">
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{item.name}</span>
                    {isActive(item.href) && (
                      <div className="absolute inset-0 bg-gradient-nature opacity-20 animate-pulse"></div>
                    )}
                  </Link>
                </Button>
              );
            })}
          </nav>

          {/* Language Selector & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2 hover:shadow-gentle transition-all duration-300">
                  <Languages className="w-4 h-4" />
                  <span>{languages.find(lang => lang.code === currentLanguage)?.native}</span>
                  <ChevronDown className="w-3 h-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-card/95 backdrop-blur-md border-border/50">
                {languages.map((language) => (
                  <DropdownMenuItem
                    key={language.code}
                    onClick={() => handleLanguageChange(language.code)}
                    className={`cursor-pointer transition-all duration-300 ${
                      currentLanguage === language.code ? 'bg-accent/20' : 'hover:bg-accent/10'
                    }`}
                  >
                    <span className="font-medium">{language.native}</span>
                    <span className="ml-auto text-xs text-muted-foreground">{language.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button asChild size="sm" className="bg-gradient-kerala text-white hover:shadow-nature transition-all duration-500 hover:scale-105">
              <Link to="/voice" className="flex items-center space-x-2">
                <Mic className="w-4 h-4" />
                <span>കൃഷി സഖി</span> {/* Malayalam for "Farming Friend" */}
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:bg-accent/10 transition-all duration-300"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-card/95 backdrop-blur-md border-b border-border/50 shadow-gentle">
            <div className="px-4 py-4 space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.name}
                    asChild
                    variant={isActive(item.href) ? "default" : "ghost"}
                    size="sm"
                    className={`w-full justify-start transition-all duration-300 ${
                      isActive(item.href) 
                        ? 'bg-gradient-kerala text-white' 
                        : 'hover:bg-accent/10'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Link to={item.href} className="flex items-center space-x-3">
                      <Icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </Link>
                  </Button>
                );
              })}
              
              <div className="pt-4 border-t border-border/50">
                <Button asChild size="sm" className="w-full bg-gradient-kerala text-white">
                  <Link to="/voice" className="flex items-center justify-center space-x-2">
                    <Mic className="w-4 h-4" />
                    <span>കൃഷി സഖി</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;