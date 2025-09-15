import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Target, 
  Heart, 
  Calendar, 
  TrendingUp,
  AlertTriangle,
  Thermometer,
  Activity,
  MapPin,
  Pill,
  Users,
  BarChart3
} from "lucide-react";
import { AnimatedBackground } from "@/components/FloatingElements";

const LivestockManagement = () => {
  const [selectedAnimal, setSelectedAnimal] = useState<string | null>(null);
  
  const livestock = [
    {
      id: "COW001",
      name: "Ganga",
      type: "Holstein Friesian",
      age: "4 years",
      weight: "450 kg",
      health: "excellent",
      milkYield: "28 L/day",
      lastCheckup: "2 days ago",
      temperature: "38.5°C",
      heartRate: "72 bpm",
      location: "Barn A-12"
    },
    {
      id: "COW002", 
      name: "Yamuna",
      type: "Jersey",
      age: "3 years",
      weight: "380 kg",
      health: "good",
      milkYield: "22 L/day",
      lastCheckup: "1 week ago",
      temperature: "38.8°C",
      heartRate: "75 bpm",
      location: "Barn A-15"
    },
    {
      id: "COW003",
      name: "Saraswati",
      type: "Gir",
      age: "5 years", 
      weight: "420 kg",
      health: "needs_attention",
      milkYield: "18 L/day",
      lastCheckup: "3 days ago",
      temperature: "39.2°C",
      heartRate: "85 bpm",
      location: "Barn B-03"
    }
  ];

  const healthAlerts = [
    {
      animalId: "COW003",
      type: "Temperature Alert",
      message: "Saraswati showing elevated temperature (39.2°C)",
      priority: "high",
      time: "2 hours ago"
    },
    {
      animalId: "COW002",
      type: "Vaccination Due",
      message: "Yamuna due for FMD vaccination",
      priority: "medium", 
      time: "1 day ago"
    },
    {
      animalId: "COW001",
      type: "Breeding Cycle",
      message: "Ganga entering optimal breeding period",
      priority: "info",
      time: "3 days ago"
    }
  ];

  const getHealthColor = (health: string) => {
    switch(health) {
      case "excellent": return "text-success";
      case "good": return "text-info";
      case "needs_attention": return "text-warning";
      case "critical": return "text-destructive";
      default: return "text-muted-foreground";
    }
  };

  const getHealthBadge = (health: string) => {
    switch(health) {
      case "excellent": return <Badge className="bg-success text-success-foreground">Excellent</Badge>;
      case "good": return <Badge className="bg-info text-info-foreground">Good</Badge>;
      case "needs_attention": return <Badge className="bg-warning text-warning-foreground">Needs Attention</Badge>;
      case "critical": return <Badge className="bg-destructive text-destructive-foreground">Critical</Badge>;
      default: return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  return (
    <AnimatedBackground className="min-h-screen bg-cream-50">
      {/* Header */}
      <div className="bg-gradient-hero text-cream-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-cream-50/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Target className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Smart Livestock Management</h1>
          <p className="text-xl text-cream-100 max-w-3xl mx-auto">
            Monitor animal health, track productivity, and manage your livestock with AI-powered insights
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 bg-gradient-gold-light border-2 border-gold-200">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="animals" className="flex items-center gap-2">
              <Target className="w-4 h-4" />
              Animals
            </TabsTrigger>
            <TabsTrigger value="health" className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              Health
            </TabsTrigger>
            <TabsTrigger value="production" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Production
            </TabsTrigger>
          </TabsList>

          {/* Overview */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gold-600">24</div>
                  <div className="text-sm text-muted-foreground">Total Animals</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Heart className="w-8 h-8 text-success mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gold-600">22</div>
                  <div className="text-sm text-muted-foreground">Healthy</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <AlertTriangle className="w-8 h-8 text-warning mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gold-600">2</div>
                  <div className="text-sm text-muted-foreground">Need Attention</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <TrendingUp className="w-8 h-8 text-info mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gold-600">485L</div>
                  <div className="text-sm text-muted-foreground">Daily Milk Yield</div>
                </CardContent>
              </Card>
            </div>

            {/* Health Alerts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Health Alerts
                </CardTitle>
                <CardDescription>Recent alerts and notifications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {healthAlerts.map((alert, index) => (
                    <div key={index} className="flex gap-4 p-4 rounded-xl bg-gradient-cream border border-gold-200">
                      <div className="flex-shrink-0">
                        {alert.priority === 'high' ? (
                          <AlertTriangle className="w-5 h-5 text-destructive" />
                        ) : alert.priority === 'medium' ? (
                          <Calendar className="w-5 h-5 text-warning" />
                        ) : (
                          <Heart className="w-5 h-5 text-info" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-gold-700">{alert.type}</h4>
                          <Badge variant={alert.priority === 'high' ? 'destructive' : alert.priority === 'medium' ? 'secondary' : 'default'}>
                            {alert.priority}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">{alert.message}</p>
                        <p className="text-xs text-gold-600">{alert.time}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Animals */}
          <TabsContent value="animals" className="space-y-6">
            <div className="grid gap-6">
              {livestock.map((animal) => (
                <Card key={animal.id} className="hover:scale-[1.02] transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-cream-50">
                          <Target className="w-6 h-6" />
                        </div>
                        <div>
                          <CardTitle className="flex items-center gap-2">
                            {animal.name} 
                            <span className="text-sm font-normal text-muted-foreground">({animal.id})</span>
                          </CardTitle>
                          <CardDescription>{animal.type} • {animal.age}</CardDescription>
                        </div>
                      </div>
                      {getHealthBadge(animal.health)}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center p-3 rounded-lg bg-gradient-cream">
                        <div className="text-lg font-bold text-gold-600">{animal.weight}</div>
                        <div className="text-xs text-muted-foreground">Weight</div>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-gradient-cream">
                        <div className="text-lg font-bold text-gold-600">{animal.milkYield}</div>
                        <div className="text-xs text-muted-foreground">Daily Yield</div>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-gradient-cream">
                        <div className="text-lg font-bold text-gold-600">{animal.temperature}</div>
                        <div className="text-xs text-muted-foreground">Temperature</div>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-gradient-cream">
                        <div className="text-lg font-bold text-gold-600">{animal.heartRate}</div>
                        <div className="text-xs text-muted-foreground">Heart Rate</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gold-200">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {animal.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        Last checkup: {animal.lastCheckup}
                      </div>
                      <Button variant="outline" size="sm">
                        View Profile
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Health */}
          <TabsContent value="health" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Thermometer className="w-5 h-5" />
                    Temperature Monitoring
                  </CardTitle>
                  <CardDescription>Real-time body temperature tracking</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {livestock.map((animal) => (
                      <div key={animal.id} className="flex items-center justify-between p-3 rounded-lg bg-gradient-cream">
                        <div>
                          <div className="font-semibold text-gold-700">{animal.name}</div>
                          <div className="text-sm text-muted-foreground">{animal.type}</div>
                        </div>
                        <div className="text-right">
                          <div className={`font-bold ${parseFloat(animal.temperature) > 39 ? 'text-destructive' : 'text-success'}`}>
                            {animal.temperature}
                          </div>
                          <div className="text-xs text-muted-foreground">Normal: 38.0-39.0°C</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5" />
                    Vital Signs
                  </CardTitle>
                  <CardDescription>Heart rate and activity monitoring</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {livestock.map((animal) => (
                      <div key={animal.id} className="flex items-center justify-between p-3 rounded-lg bg-gradient-cream">
                        <div>
                          <div className="font-semibold text-gold-700">{animal.name}</div>
                          <div className="text-sm text-muted-foreground">Heart Rate</div>
                        </div>
                        <div className="text-right">
                          <div className={`font-bold ${parseInt(animal.heartRate) > 80 ? 'text-warning' : 'text-success'}`}>
                            {animal.heartRate}
                          </div>
                          <div className="text-xs text-muted-foreground">Normal: 60-80 bpm</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Vaccination Schedule */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Pill className="w-5 h-5" />
                  Vaccination Schedule
                </CardTitle>
                <CardDescription>Upcoming and completed vaccinations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { animal: "Yamuna", vaccine: "FMD (Foot & Mouth Disease)", due: "Tomorrow", status: "due" },
                    { animal: "Ganga", vaccine: "Brucellosis", due: "Next Week", status: "scheduled" },
                    { animal: "Saraswati", vaccine: "Anthrax", due: "Completed", status: "completed" }
                  ].map((vac, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-gradient-cream border border-gold-200">
                      <div>
                        <h4 className="font-semibold text-gold-700">{vac.animal}</h4>
                        <p className="text-sm text-muted-foreground">{vac.vaccine}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant={vac.status === 'due' ? 'destructive' : vac.status === 'scheduled' ? 'secondary' : 'default'}>
                          {vac.due}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Production */}
          <TabsContent value="production" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Milk Production Trends</CardTitle>
                  <CardDescription>Daily milk yield tracking</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {livestock.map((animal) => (
                      <div key={animal.id} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-gold-700">{animal.name}</span>
                          <span className="text-sm font-medium">{animal.milkYield}</span>
                        </div>
                        <Progress 
                          value={parseFloat(animal.milkYield) / 30 * 100} 
                          className="h-2"
                        />
                        <div className="text-xs text-muted-foreground">
                          Target: 30L/day • Current: {animal.milkYield}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Production Summary</CardTitle>
                  <CardDescription>Monthly statistics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 rounded-xl bg-gradient-cream">
                      <div className="text-2xl font-bold text-gold-600">485L</div>
                      <div className="text-sm text-muted-foreground">Today's Total</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-gradient-cream">
                      <div className="text-2xl font-bold text-gold-600">14,550L</div>
                      <div className="text-sm text-muted-foreground">This Month</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-gradient-cream">
                      <div className="text-2xl font-bold text-gold-600">₹48,500</div>
                      <div className="text-sm text-muted-foreground">Monthly Revenue</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-gradient-cream">
                      <div className="text-2xl font-bold text-gold-600">+12%</div>
                      <div className="text-sm text-muted-foreground">vs Last Month</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AnimatedBackground>
  );
};

export default LivestockManagement;