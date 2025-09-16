import { Button } from "@/components/ui/button";
import { Mic, TrendingUp, Camera, Cloud, Users, Shield, Globe, Zap, GamepadIcon, QrCode, Calendar, Gift, FlaskConical, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { FeatureGrid } from "@/components/PremiumCard";
import { KeralaVideoSection } from "@/components/KeralaVideoSection";
import { AnimatedBackground } from "@/components/FloatingElements";

const Index = () => {
  const features = [
    {
      icon: <Mic className="w-8 h-8 text-primary" />,
      title: "Voice Assistant",
      description: "Multi-language voice support for Hindi, Tamil, Telugu, Bengali and more",
      href: "/voice"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-success" />,
      title: "Live Mandi Prices",
      description: "Real-time agricultural market prices with trend analysis",
      href: "/prices"
    },
    {
      icon: <Camera className="w-8 h-8 text-warning" />,
      title: "Crop Health Detection",
      description: "AI-powered crop disease detection using camera technology",
      href: "/crop-health"
    },
    {
      icon: <Cloud className="w-8 h-8 text-info" />,
      title: "Weather Advisory",
      description: "Location-based weather forecasts and farming recommendations",
      href: "/weather"
    },
    {
      icon: <GamepadIcon className="w-8 h-8 text-primary" />,
      title: "Agri Knowledge Game",
      description: "Gamified learning with rewards and tokens for real-life benefits",
      href: "/agri-game"
    },
    {
      icon: <QrCode className="w-8 h-8 text-info" />,
      title: "e-Pass Generator",
      description: "QR-based digital mandi entry pass for priority sale and queue-free entry",
      href: "/e-pass"
    },
    {
      icon: <Shield className="w-8 h-8 text-success" />,
      title: "Blockchain Tracking",
      description: "Transparent and secure mandi payment tracking with blockchain technology",
      href: "/blockchain-tracking"
    },
    {
      icon: <Calendar className="w-8 h-8 text-warning" />,
      title: "Crop Calendar",
      description: "Personalized farming schedule with SMS & voice reminders",
      href: "/crop-calendar"
    },
    {
      icon: <Gift className="w-8 h-8 text-primary" />,
      title: "Subsidy Finder", 
      description: "Find government schemes with audio explanations in local languages",
      href: "/subsidy-finder"
    },
    {
      icon: <FlaskConical className="w-8 h-8 text-success" />,
      title: "AI Soil Testing",
      description: "Advanced soil analysis using camera and lab testing for optimal yields",
      href: "/soil-testing",
      badge: "New",
      featured: true
    },
    {
      icon: <Target className="w-8 h-8 text-info" />,
      title: "Livestock Management",
      description: "Monitor animal health, track productivity with AI-powered insights",
      href: "/livestock-management",
      badge: "Premium"
    }
  ];

  const stats = [
    { value: "1M+", label: "Farmers Reached" },
    { value: "50+", label: "Crops Supported" },
    { value: "12", label: "Languages" },
    { value: "24/7", label: "Support" }
  ];

  const benefits = [
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Digital Inclusion",
      description: "Bringing technology to rural, non-literate populations"
    },
    {
      icon: <Shield className="w-6 h-6 text-success" />,
      title: "Secure & Reliable",
      description: "Safe data handling with offline capabilities"
    },
    {
      icon: <Globe className="w-6 h-6 text-info" />,
      title: "Multi-Language",
      description: "Support for 12+ regional languages"
    },
    {
      icon: <Zap className="w-6 h-6 text-warning" />,
      title: "Real-time Updates",
      description: "Live market prices and weather alerts"
    }
  ];

  return (
    <AnimatedBackground className="min-h-screen bg-gradient-warm">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Stats Section */}
      <StatsSection className="bg-gradient-warm" />

      {/* Kerala Video Section */}
      <KeralaVideoSection />
      
      {/* Features Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-kerala-green via-backwater-blue to-spice-warm bg-clip-text text-transparent">
              കേരള കൃഷിക്കുള്ള AI സൊല്യൂഷനുകൾ
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Advanced agricultural technology solutions designed specifically for Kerala farmers
            </p>
          </div>
          <FeatureGrid features={features} />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 bg-gradient-gold-light">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gold-700">
              Why Choose Smart Bharat?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transforming agriculture through innovative technology solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group hover-lift p-6 rounded-2xl bg-cream-50 border-2 border-gold-200">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-card group-hover:scale-110 transition-transform duration-300">
                  <div className="text-cream-50">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gold-700">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedBackground>
  );
};

export default Index;