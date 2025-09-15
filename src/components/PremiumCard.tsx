import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PremiumCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  badge?: string;
  variant?: "default" | "featured" | "premium";
  className?: string;
}

export const PremiumCard: React.FC<PremiumCardProps> = ({
  icon,
  title,
  description,
  href,
  badge,
  variant = "default",
  className
}) => {
  const variants = {
    default: "hover:scale-105",
    featured: "bg-gradient-hero border-gold-500 shadow-premium hover:scale-105 hover:shadow-2xl",
    premium: "bg-gradient-gold-light border-gold-400 shadow-glow hover:scale-105 aura-gold"
  };

  return (
    <Card className={cn(variants[variant], className)}>
      <CardHeader className="text-center">
        {badge && (
          <Badge className="self-center mb-2 bg-gold-500 text-cream-50">
            {badge}
          </Badge>
        )}
        <div className="w-20 h-20 bg-gradient-gold-light rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-card">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-center space-y-4">
        <CardDescription className="leading-relaxed">{description}</CardDescription>
        <Button asChild variant="premium" size="lg" className="w-full">
          <Link to={href} className="group">
            Explore Feature
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

interface FeatureGridProps {
  features: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
    href: string;
    badge?: string;
    featured?: boolean;
  }>;
  className?: string;
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({ features, className }) => (
  <div className={cn("grid md:grid-cols-2 lg:grid-cols-3 gap-8", className)}>
    {features.map((feature, index) => (
      <PremiumCard
        key={index}
        icon={feature.icon}
        title={feature.title}
        description={feature.description}
        href={feature.href}
        badge={feature.badge}
        variant={feature.featured ? "featured" : "default"}
        className={`animation-delay-${index * 100}`}
      />
    ))}
  </div>
);

export default PremiumCard;