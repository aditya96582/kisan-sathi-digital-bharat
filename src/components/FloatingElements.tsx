import React from 'react';
import { cn } from '@/lib/utils';

interface FloatingParticleProps {
  className?: string;
  delay?: string;
}

export const FloatingParticle: React.FC<FloatingParticleProps> = ({ 
  className, 
  delay = "0s" 
}) => (
  <div 
    className={cn(
      "absolute w-2 h-2 bg-gold-300 rounded-full opacity-60 animate-pulse",
      "animate-float",
      className
    )}
    style={{ 
      animationDelay: delay,
      animationDuration: "4s"
    }}
  />
);

interface GlowOrbProps {
  size?: "sm" | "md" | "lg";
  color?: "gold" | "saffron" | "green" | "blue";
  className?: string;
}

export const GlowOrb: React.FC<GlowOrbProps> = ({ 
  size = "md", 
  color = "gold",
  className 
}) => {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24", 
    lg: "w-32 h-32"
  };
  
  const colorClasses = {
    gold: "bg-gold-300/20",
    saffron: "bg-saffron-500/20",
    green: "bg-indian-green-500/20", 
    blue: "bg-indian-blue-500/20"
  };

  return (
    <div 
      className={cn(
        "absolute rounded-full blur-xl opacity-40 animate-pulse",
        sizeClasses[size],
        colorClasses[color],
        className
      )}
      style={{
        background: `radial-gradient(circle, ${
          color === 'gold' ? 'hsl(var(--gold-300) / 0.3)' :
          color === 'saffron' ? 'hsl(var(--saffron-500) / 0.3)' :
          color === 'green' ? 'hsl(var(--indian-green-500) / 0.3)' :
          'hsl(var(--indian-blue-500) / 0.3)'
        }, transparent 70%)`
      }}
    />
  );
};

interface AnimatedBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ 
  children, 
  className 
}) => (
  <div className={cn("relative overflow-hidden", className)}>
    {/* Floating Particles */}
    <FloatingParticle className="top-10 left-10" delay="0s" />
    <FloatingParticle className="top-20 right-20" delay="1s" />
    <FloatingParticle className="top-40 left-1/4" delay="2s" />
    <FloatingParticle className="bottom-20 right-10" delay="0.5s" />
    <FloatingParticle className="bottom-40 left-20" delay="1.5s" />
    
    {/* Glow Orbs */}
    <GlowOrb color="gold" size="lg" className="top-0 right-0 -translate-y-1/2 translate-x-1/2" />
    <GlowOrb color="saffron" size="md" className="bottom-0 left-0 translate-y-1/2 -translate-x-1/2" />
    <GlowOrb color="green" size="sm" className="top-1/2 right-1/4" />
    <GlowOrb color="blue" size="sm" className="bottom-1/4 left-1/3" />
    
    {/* Content */}
    <div className="relative z-10">
      {children}
    </div>
  </div>
);

export default AnimatedBackground;