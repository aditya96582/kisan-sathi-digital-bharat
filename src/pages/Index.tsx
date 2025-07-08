import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mic, TrendingUp, Camera, Cloud, Users, Shield, Globe, Zap, GamepadIcon, QrCode, Calendar, Gift } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-smart-bharat.jpg";

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
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-info/5">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SB</span>
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-info bg-clip-text text-transparent">
                Smart Bharat
              </h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link to="/dashboard" className="text-muted-foreground hover:text-primary transition-colors">
                Dashboard
              </Link>
              <Link to="/voice" className="text-muted-foreground hover:text-primary transition-colors">
                Voice Assistant
              </Link>
              <Link to="/prices" className="text-muted-foreground hover:text-primary transition-colors">
                Mandi Prices
              </Link>
              <Link to="/agri-game" className="text-muted-foreground hover:text-primary transition-colors">
                Games
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="container mx-auto text-center relative z-20">
          <Badge className="mb-4 bg-primary/20 text-white border-primary/30 backdrop-blur-sm">
            🚀 Smart Bharat Innovation Project
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Empowering Farmers Through Technology
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            A comprehensive agricultural platform offering voice-based assistance, real-time market prices, 
            AI-powered crop health detection, and weather advisory services in multiple regional languages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow text-white hover:shadow-lg transition-all">
              <Link to="/dashboard" className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Go to Dashboard
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 backdrop-blur-sm">
              <Link to="/agri-game" className="flex items-center gap-2">
                <GamepadIcon className="w-5 h-5" />
                Play & Learn
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced agricultural technology solutions designed for Indian farmers
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-center mb-4">{feature.description}</CardDescription>
                  <Button asChild className="w-full">
                    <Link to={feature.href}>Explore Feature</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/5 to-info/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Smart Bharat?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transforming agriculture through innovative technology solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-4 shadow-sm">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technology Stack</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built with modern, scalable technologies for optimal performance
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {['React', 'TypeScript', 'AI/ML', 'Voice API', 'PWA', 'Cloud'].map((tech, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-semibold text-sm">{tech}</span>
                </div>
                <p className="text-muted-foreground text-sm">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-50 border-t">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SB</span>
            </div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-info bg-clip-text text-transparent">
              Smart Bharat Innovation
            </h3>
          </div>
          <p className="text-muted-foreground mb-6">
            Empowering farmers through technology • Built with ❤️ for Digital India
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span>© 2024 Smart Bharat Innovation Project</span>
            <span>•</span>
            <span>Made in India</span>
            <span>•</span>
            <span>For Farmers, By Technology</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;