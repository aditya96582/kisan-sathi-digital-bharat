import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  FlaskConical, 
  Camera, 
  MapPin, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  Calendar,
  Download,
  Smartphone
} from "lucide-react";
import { AnimatedBackground } from "@/components/FloatingElements";

const SoilTesting = () => {
  const [selectedTest, setSelectedTest] = useState<string | null>(null);
  
  const testResults = {
    pH: { value: 6.8, status: "optimal", range: "6.0-7.5" },
    nitrogen: { value: 45, status: "low", range: "40-60 kg/ha" },
    phosphorus: { value: 32, status: "high", range: "15-25 kg/ha" },
    potassium: { value: 180, status: "optimal", range: "150-200 kg/ha" },
    organicMatter: { value: 2.8, status: "optimal", range: "2.5-4.0%" },
    moisture: { value: 65, status: "optimal", range: "60-80%" }
  };

  const recommendations = [
    {
      type: "Fertilizer",
      action: "Apply 15 kg/ha Urea to increase Nitrogen levels",
      priority: "high",
      timing: "Before next sowing"
    },
    {
      type: "Soil Amendment", 
      action: "Reduce Phosphorus fertilizer application by 30%",
      priority: "medium",
      timing: "Next season"
    },
    {
      type: "Crop Selection",
      action: "Ideal for Wheat, Rice, and Sugarcane cultivation",
      priority: "info",
      timing: "Current season"
    }
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case "optimal": return "text-success";
      case "high": return "text-warning";
      case "low": return "text-destructive";
      default: return "text-muted-foreground";
    }
  };

  const getStatusBadge = (status: string) => {
    switch(status) {
      case "optimal": return <Badge className="bg-success text-success-foreground">Optimal</Badge>;
      case "high": return <Badge className="bg-warning text-warning-foreground">High</Badge>;
      case "low": return <Badge className="bg-destructive text-destructive-foreground">Low</Badge>;
      default: return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  return (
    <AnimatedBackground className="min-h-screen bg-cream-50">
      {/* Header */}
      <div className="bg-gradient-hero text-cream-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-cream-50/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <FlaskConical className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">AI Soil Testing Lab</h1>
          <p className="text-xl text-cream-100 max-w-3xl mx-auto">
            Advanced soil analysis using AI-powered camera detection and laboratory testing for optimal crop yields
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="camera" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 bg-gradient-gold-light border-2 border-gold-200">
            <TabsTrigger value="camera" className="flex items-center gap-2">
              <Camera className="w-4 h-4" />
              Camera Test
            </TabsTrigger>
            <TabsTrigger value="lab" className="flex items-center gap-2">
              <FlaskConical className="w-4 h-4" />
              Lab Results
            </TabsTrigger>
            <TabsTrigger value="history" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Test History
            </TabsTrigger>
          </TabsList>

          {/* Camera Testing */}
          <TabsContent value="camera" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="h-fit">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Smartphone className="w-5 h-5" />
                    Smart Camera Analysis
                  </CardTitle>
                  <CardDescription>
                    Take a photo of your soil for instant AI-powered analysis
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="w-full h-64 bg-gradient-cream border-2 border-gold-200 rounded-xl flex items-center justify-center border-dashed">
                    <div className="text-center">
                      <Camera className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                      <p className="text-muted-foreground mb-4">Tap to capture soil sample</p>
                      <Button variant="premium">
                        Open Camera
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="location">Location</Label>
                      <Input id="location" placeholder="Enter field location" />
                    </div>
                    <div>
                      <Label htmlFor="crop">Current Crop</Label>
                      <Input id="crop" placeholder="e.g., Wheat" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>How Camera Testing Works</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    {[
                      { step: 1, title: "Capture Image", desc: "Take a clear photo of soil sample (6-8 inches depth)" },
                      { step: 2, title: "AI Analysis", desc: "Our AI analyzes color, texture, and composition" },
                      { step: 3, title: "Instant Results", desc: "Get immediate soil health assessment" },
                      { step: 4, title: "Recommendations", desc: "Receive personalized farming advice" }
                    ].map((item) => (
                      <div key={item.step} className="flex gap-4">
                        <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-cream-50 font-bold text-sm flex-shrink-0">
                          {item.step}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gold-700">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Lab Results */}
          <TabsContent value="lab" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Test Results */}
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle>Latest Soil Analysis</CardTitle>
                        <CardDescription>Field: North Wheat Field • Date: Jan 8, 2025</CardDescription>
                      </div>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Export PDF
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {Object.entries(testResults).map(([key, result]) => (
                        <div key={key} className="p-4 rounded-xl bg-gradient-cream border border-gold-200">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold capitalize text-gold-700">{key.replace('organicMatter', 'Organic Matter')}</h4>
                            {getStatusBadge(result.status)}
                          </div>
                          <div className="text-2xl font-bold text-gold-600 mb-1">
                            {result.value}{key === 'pH' ? '' : key === 'organicMatter' || key === 'moisture' ? '%' : ' kg/ha'}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Range: {result.range}
                          </div>
                          <Progress 
                            value={result.status === 'optimal' ? 80 : result.status === 'high' ? 95 : 40} 
                            className="mt-2"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Recommendations */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5" />
                      AI Recommendations
                    </CardTitle>
                    <CardDescription>
                      Personalized suggestions based on your soil analysis
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recommendations.map((rec, index) => (
                        <div key={index} className="flex gap-4 p-4 rounded-xl bg-gradient-cream border border-gold-200">
                          <div className="flex-shrink-0">
                            {rec.priority === 'high' ? (
                              <AlertTriangle className="w-5 h-5 text-destructive" />
                            ) : rec.priority === 'medium' ? (
                              <TrendingUp className="w-5 h-5 text-warning" />
                            ) : (
                              <CheckCircle className="w-5 h-5 text-success" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-semibold text-gold-700">{rec.type}</h4>
                              <Badge variant={rec.priority === 'high' ? 'destructive' : rec.priority === 'medium' ? 'secondary' : 'default'}>
                                {rec.priority}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">{rec.action}</p>
                            <p className="text-xs text-gold-600 font-medium">⏱️ {rec.timing}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Soil Health Score */}
              <div className="space-y-6">
                <Card>
                  <CardHeader className="text-center">
                    <CardTitle>Soil Health Score</CardTitle>
                    <CardDescription>Overall assessment</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <div className="w-full h-full rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                        <div className="w-24 h-24 bg-cream-50 rounded-full flex items-center justify-center">
                          <span className="text-2xl font-bold text-green-600">78</span>
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-success text-success-foreground mb-2">Good Health</Badge>
                    <p className="text-sm text-muted-foreground">
                      Your soil shows good fertility with minor improvements needed
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      Test Location
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div><strong>Field:</strong> North Wheat Field</div>
                      <div><strong>GPS:</strong> 28.6139°N, 77.2090°E</div>
                      <div><strong>Area:</strong> 5.2 acres</div>
                      <div><strong>Elevation:</strong> 216m</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* History */}
          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Testing History</CardTitle>
                <CardDescription>Track your soil health over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { date: "Jan 8, 2025", score: 78, status: "Good", field: "North Wheat Field" },
                    { date: "Dec 15, 2024", score: 72, status: "Fair", field: "South Rice Field" },
                    { date: "Nov 20, 2024", score: 85, status: "Excellent", field: "East Cotton Field" },
                  ].map((test, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-gradient-cream border border-gold-200">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-cream-50 font-bold">
                          {test.score}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gold-700">{test.field}</h4>
                          <p className="text-sm text-muted-foreground">{test.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className={
                          test.status === "Excellent" ? "bg-success text-success-foreground" :
                          test.status === "Good" ? "bg-info text-info-foreground" :
                          "bg-warning text-warning-foreground"
                        }>
                          {test.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AnimatedBackground>
  );
};

export default SoilTesting;