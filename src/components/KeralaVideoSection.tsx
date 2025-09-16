import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, User, MapPin, ChevronLeft, ChevronRight } from "lucide-react";

interface VideoCard {
  id: string;
  title: string;
  titleMl: string;
  description: string;
  descriptionMl: string;
  thumbnail: string;
  duration: string;
  farmer: string;
  location: string;
  category: string;
  views: string;
}

const keralaFarmingVideos: VideoCard[] = [
  {
    id: '1',
    title: 'Organic Rice Farming in Kuttanad',
    titleMl: 'കുട്ടനാട്ടിലെ ജൈവിക നെല്ലുകൃഷി',
    description: 'Traditional organic rice farming techniques in Kuttanad backwaters',
    descriptionMl: 'കുട്ടനാട്ടിലെ പരമ്പരാഗത ജൈവിക നെല്ലുകൃഷി രീതികൾ',
    thumbnail: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400',
    duration: '12:45',
    farmer: 'Radhika Nair',
    location: 'Kuttanad, Alappuzha',
    category: 'Rice Farming',
    views: '25,400'
  },
  {
    id: '2',
    title: 'Spice Garden Management',
    titleMl: 'സുഗന്ധവ്യഞ്ജന തോട്ടം പരിപാലനം',
    description: 'Cardamom and pepper cultivation in Western Ghats',
    descriptionMl: 'പശ്ചിമഘട്ടത്തിലെ ഏലക്കയും കുരുമുളകും കൃഷി',
    thumbnail: 'https://images.unsplash.com/photo-1596040033229-a7b7be5bd3ac?w=400',
    duration: '18:30',
    farmer: 'Suresh Kumar',
    location: 'Idukki',
    category: 'Spice Farming',
    views: '18,200'
  },
  {
    id: '3',
    title: 'Coconut Palm Climbing Techniques',
    titleMl: 'തെങ്ങിൻ കയറ്റ വിദ്യകൾ',
    description: 'Modern and traditional coconut harvesting methods',
    descriptionMl: 'ആധുനികവും പരമ്പരാഗതവുമായ തെങ്ങ് വിളവെടുപ്പ് രീതികൾ',
    thumbnail: 'https://images.unsplash.com/photo-1502780402662-acc01917927e?w=400',
    duration: '15:20',
    farmer: 'Mohanan Pillai',
    location: 'Kasaragod',
    category: 'Coconut Farming',
    views: '32,100'
  },
  {
    id: '4',
    title: 'Fish Farming in Rice Fields',
    titleMl: 'നെൽവയലിൽ മത്സ്യകൃഷി',
    description: 'Integrated fish and rice farming system',
    descriptionMl: 'സംയോജിത മത്സ്യ-നെല്ല് കൃഷി സമ്പ്രദായം',
    thumbnail: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400',
    duration: '20:15',
    farmer: 'Latha Menon',
    location: 'Thrissur',
    category: 'Aquaculture',
    views: '14,800'
  },
  {
    id: '5',
    title: 'Banana Cultivation Innovations',
    titleMl: 'വാഴകൃഷിയിലെ പുതുമകൾ',
    description: 'Modern banana farming with drip irrigation',
    descriptionMl: 'ഡ്രിപ്പ് നനയനത്തോടെയുള്ള ആധുനിക വാഴകൃഷി',
    thumbnail: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400',
    duration: '16:40',
    farmer: 'Ravi Varma',
    location: 'Wayanad',
    category: 'Fruit Farming',
    views: '22,300'
  },
  {
    id: '6',
    title: 'Vegetable Terrace Farming',
    titleMl: 'മട്ടുപ്പാവിലെ പച്ചക്കറി കൃഷി',
    description: 'Urban vegetable farming on terraces and rooftops',
    descriptionMl: 'നഗര പ്രദേശങ്ങളിലെ മട്ടുപ്പാവ് പച്ചക്കറി കൃഷി',
    thumbnail: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400',
    duration: '11:25',
    farmer: 'Priya Krishnan',
    location: 'Kochi',
    category: 'Urban Farming',
    views: '19,600'
  }
];

export const KeralaVideoSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videosPerPage = 3;
  const maxIndex = Math.max(0, keralaFarmingVideos.length - videosPerPage);

  const nextSlide = () => {
    setCurrentIndex(Math.min(currentIndex + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(Math.max(currentIndex - 1, 0));
  };

  const visibleVideos = keralaFarmingVideos.slice(currentIndex, currentIndex + videosPerPage);

  return (
    <section className="py-16 px-4 bg-gradient-warm relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-kerala-green-light/8 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-spice-warm/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge className="bg-gradient-kerala text-white border-none mb-4 px-6 py-2 text-sm font-medium shadow-gentle">
            <Play className="w-4 h-4 mr-2" />
            Kerala Farming Stories
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            കേരളത്തിലെ{" "}
            <span className="bg-gradient-to-r from-kerala-green via-backwater-blue to-spice-warm bg-clip-text text-transparent">
              കർഷക
            </span>{" "}
            കഥകൾ
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real farmers, real experiences. Learn from successful Kerala farmers 
            through their inspiring journey and innovative farming techniques.
          </p>
        </div>

        {/* Video Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 z-10">
            <Button
              variant="ghost"
              size="sm"
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 shadow-gentle hover:shadow-nature transition-all duration-300 disabled:opacity-50"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 z-10">
            <Button
              variant="ghost"
              size="sm"
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className="w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 shadow-gentle hover:shadow-nature transition-all duration-300 disabled:opacity-50"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500">
            {visibleVideos.map((video, index) => (
              <Card 
                key={video.id} 
                className="group overflow-hidden border-border/50 shadow-gentle hover:shadow-nature transition-all duration-500 hover:scale-[1.02] bg-card/50 backdrop-blur-sm"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeSlideUp 0.6s ease-out forwards'
                }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{video.duration}</span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-kerala-green/90 text-white text-xs border-none backdrop-blur-sm">
                      {video.category}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-4 space-y-3">
                  <div>
                    <h3 className="font-semibold text-foreground line-clamp-2 mb-1 group-hover:text-primary transition-colors duration-300">
                      {video.titleMl}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {video.descriptionMl}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{video.farmer}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3" />
                      <span>{video.location}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-border/50">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{video.views} views</span>
                      <Button size="sm" variant="ghost" className="text-xs hover:bg-primary/10 hover:text-primary transition-all duration-300">
                        Watch Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(keralaFarmingVideos.length / videosPerPage) }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / videosPerPage) === i 
                    ? 'bg-primary w-8' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-kerala text-white hover:shadow-nature transition-all duration-500 hover:scale-105 px-8 py-4">
            <Play className="w-5 h-5 mr-2" />
            കൂടുതൽ വീഡിയോകൾ കാണുക
          </Button>
        </div>
      </div>
    </section>
  );
};

export default KeralaVideoSection;