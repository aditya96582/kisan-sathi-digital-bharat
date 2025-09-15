import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { cn } from '@/lib/utils';
import { Users, TrendingUp, Award, Globe } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  trend?: string;
  className?: string;
}

export const StatItem: React.FC<StatItemProps> = ({ 
  icon, 
  value, 
  label, 
  trend,
  className 
}) => (
  <Card className={cn("text-center group hover:scale-105 transition-all duration-500", className)}>
    <CardContent className="p-8">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center text-cream-50 group-hover:scale-110 transition-transform duration-300 shadow-glow">
          {icon}
        </div>
        <div className="space-y-1">
          <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            {value}
          </div>
          <div className="text-sm text-muted-foreground font-medium">{label}</div>
          {trend && (
            <div className="text-xs text-success font-semibold">{trend}</div>
          )}
        </div>
      </div>
    </CardContent>
  </Card>
);

interface StatsSectionProps {
  className?: string;
}

export const StatsSection: React.FC<StatsSectionProps> = ({ className }) => {
  const stats = [
    { 
      icon: <Users className="w-8 h-8" />, 
      value: "1M+", 
      label: "Farmers Reached",
      trend: "+15% this month"
    },
    { 
      icon: <TrendingUp className="w-8 h-8" />, 
      value: "50+", 
      label: "Crops Supported",
      trend: "+5 new crops"
    },
    { 
      icon: <Globe className="w-8 h-8" />, 
      value: "12", 
      label: "Languages",
      trend: "+2 regional languages"
    },
    { 
      icon: <Award className="w-8 h-8" />, 
      value: "24/7", 
      label: "AI Support",
      trend: "99.9% uptime"
    }
  ];

  return (
    <section className={cn("py-20 px-4", className)}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Transforming Agriculture
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real impact, real numbers. See how Smart Bharat is revolutionizing farming across India.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              trend={stat.trend}
              className={`animate-fadeSlideUp delay-${index * 200}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;