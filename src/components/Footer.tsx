import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Heart, 
  Leaf, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Smartphone,
  Globe
} from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Voice Assistant', href: '/voice' },
    { name: 'Market Prices', href: '/prices' },
    { name: 'Weather Advisory', href: '/weather' },
    { name: 'Crop Health', href: '/crop-health' },
    { name: 'Soil Testing', href: '/soil-testing' },
  ];

  const support = [
    { name: 'Help Center', href: '/help' },
    { name: 'Contact Support', href: '/support' },
    { name: 'Training Videos', href: '/training' },
    { name: 'User Manual', href: '/manual' },
    { name: 'FAQs', href: '/faq' },
    { name: 'Feedback', href: '/feedback' },
  ];

  const government = [
    { name: 'Department of Agriculture', href: '#' },
    { name: 'Government of Kerala', href: '#' },
    { name: 'Digital India', href: '#' },
    { name: 'Krishi Vigyan Kendra', href: '#' },
    { name: 'ICAR Guidelines', href: '#' },
    { name: 'Farmer Welfare', href: '#' },
  ];

  return (
    <footer className="relative bg-gradient-warm border-t border-border/50 overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-kerala-green-light/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-spice-warm/8 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-backwater-blue/6 rounded-full blur-md animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-kerala rounded-xl flex items-center justify-center shadow-gentle">
                <span className="text-white font-bold text-xl">SB</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Smart Bharat</h3>
                <p className="text-sm text-muted-foreground">Kerala Farming Assistant</p>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI-powered personal farming assistant specifically designed for Kerala farmers. 
              Your digital companion for personalized agricultural guidance in Malayalam.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Department of Agriculture, Kerala</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>1800-425-1556 (Toll Free)</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>krishi.sakhi@kerala.gov.in</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className="w-9 h-9 p-0 hover:bg-primary/10 hover:scale-110 transition-all duration-300"
                >
                  <Icon className="w-4 h-4 text-primary" />
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground">കൃഷി സേവനങ്ങൾ</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <Leaf className="w-3 h-3 text-primary/60 group-hover:text-primary transition-colors duration-300" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground">സഹായം & പിന്തുണ</h4>
            <ul className="space-y-3">
              {support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <Smartphone className="w-3 h-3 text-primary/60 group-hover:text-primary transition-colors duration-300" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Government Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground">സർക്കാർ ലിങ്കുകൾ</h4>
            <ul className="space-y-3">
              {government.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <Globe className="w-3 h-3 text-primary/60 group-hover:text-primary transition-colors duration-300" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* App Download Section */}
        <div className="bg-gradient-nature rounded-2xl p-6 mb-8 shadow-gentle border border-border/20">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold text-white mb-2">
                കൃഷി സഖി മൊബൈൽ ആപ്പ്
              </h4>
              <p className="text-white/90 text-sm">
                Download our mobile app for voice assistance in Malayalam and offline access
              </p>
            </div>
            <div className="flex space-x-4">
              <Button variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30 transition-all duration-300">
                Play Store
              </Button>
              <Button variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30 transition-all duration-300">
                App Store
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
              <span>for Kerala Farmers</span>
            </div>
            
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                © {currentYear} Government of Kerala. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Smart Bharat Innovation Project - Department of Agriculture
              </p>
            </div>
            
            <div className="flex space-x-6 text-xs text-muted-foreground">
              <Link to="/privacy" className="hover:text-primary transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary transition-colors duration-300">
                Terms of Service
              </Link>
              <Link to="/accessibility" className="hover:text-primary transition-colors duration-300">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;