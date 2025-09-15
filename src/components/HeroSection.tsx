import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Mic, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedBackground } from "./FloatingElements";
import heroImage from "@/assets/hero-smart-bharat.jpg";

interface HeroSectionProps {
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  return (
    <section className={`relative py-24 px-4 overflow-hidden ${className}`}>
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/60 z-10"></div>
        <video
          className="absolute inset-0 w-full h-full object-cover"
          poster={heroImage}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Fields and farms of India"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          <source src="/videos/hero.webm" type="video/webm" />
          <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm" type="video/webm" />
        </video>
      </div>

      {/* Animated Background Elements */}
      <AnimatedBackground className="relative z-20 container mx-auto text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Badge */}
          <div className="flex justify-center animate-fadeSlideUp">
            <Badge className="bg-gradient-primary text-cream-50 border-gold-300 backdrop-blur-sm px-6 py-2 text-base font-semibold shadow-glow">
              <Sparkles className="w-4 h-4 mr-2" />
              Smart Bharat Innovation Project
            </Badge>
          </div>

          {/* Main Heading */}
          <div className="space-y-6 animate-fadeSlideUp" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Empowering{" "}
              <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-saffron-400 bg-clip-text text-transparent">
                Farmers
              </span>
              <br />
              Through Technology
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              A comprehensive agricultural platform offering voice-based assistance, real-time market prices, 
              AI-powered crop health detection, and weather advisory services in multiple regional languages.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fadeSlideUp" style={{ animationDelay: '0.4s' }}>
            <Button asChild size="lg" variant="premium" className="text-lg px-8 py-4">
              <Link to="/dashboard" className="flex items-center gap-3">
                <Users className="w-6 h-6" />
                Go to Dashboard
                <span className="ml-1">→</span>
              </Link>
            </Button>
            <Button asChild size="lg" variant="floating" className="text-lg px-8 py-4">
              <Link to="/voice" className="flex items-center gap-3">
                <Mic className="w-6 h-6" />
                Voice Assistant
                <span className="ml-1">🎤</span>
              </Link>
            </Button>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-fadeSlideUp" style={{ animationDelay: '0.6s' }}>
            {[
              { title: "Voice AI", desc: "12+ Languages", icon: "🗣️" },
              { title: "Real-time Data", desc: "Live Market Prices", icon: "📊" },
              { title: "Smart Detection", desc: "AI Crop Health", icon: "🌱" }
            ].map((feature, index) => (
              <div key={index} className="glass rounded-2xl p-6 text-center group hover:scale-105 transition-all duration-300">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="font-bold text-white text-lg mb-2">{feature.title}</h3>
                <p className="text-cream-100/80">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedBackground>
    </section>
  );
};

export default HeroSection;