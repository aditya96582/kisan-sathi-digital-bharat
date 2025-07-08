import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Cloud, Sun, CloudRain, Wind, Droplets, Thermometer, Eye, Navigation, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const WeatherAdvisory = () => {
  const [location, setLocation] = useState("Delhi, India");
  const [currentWeather, setCurrentWeather] = useState({
    temperature: 28,
    condition: "Partly Cloudy",
    humidity: 65,
    windSpeed: 12,
    visibility: 8,
    pressure: 1013,
    uvIndex: 6,
    rainfall: 0
  });

  const forecast = [
    { day: "Today", icon: "partly-cloudy", high: 32, low: 22, rain: 10 },
    { day: "Tomorrow", icon: "cloudy", high: 29, low: 20, rain: 40 },
    { day: "Wednesday", icon: "rainy", high: 26, low: 18, rain: 80 },
    { day: "Thursday", icon: "sunny", high: 31, low: 21, rain: 5 },
    { day: "Friday", icon: "partly-cloudy", high: 33, low: 23, rain: 15 },
    { day: "Saturday", icon: "rainy", high: 27, low: 19, rain: 70 },
    { day: "Sunday", icon: "sunny", high: 30, low: 22, rain: 0 }
  ];

  const farmingAdvice = [
    {
      title: "Irrigation Recommendation",
      type: "water",
      priority: "high",
      message: "Heavy rainfall expected on Wednesday. Avoid irrigation for next 2 days.",
      icon: <Droplets className="w-5 h-5" />
    },
    {
      title: "Pest Control Alert",
      type: "pest",
      priority: "medium",
      message: "High humidity levels may increase pest activity. Monitor crops closely.",
      icon: <AlertTriangle className="w-5 h-5" />
    },
    {
      title: "Harvesting Window",
      type: "harvest",
      priority: "high",
      message: "Clear weather expected Thursday-Friday. Ideal for harvesting operations.",
      icon: <Sun className="w-5 h-5" />
    },
    {
      title: "Spraying Advisory",
      type: "spray",
      priority: "low",
      message: "Avoid pesticide spraying during high wind conditions (>15 km/h).",
      icon: <Wind className="w-5 h-5" />
    }
  ];

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case 'sunny':
        return <Sun className="w-8 h-8 text-yellow-500" />;
      case 'cloudy':
        return <Cloud className="w-8 h-8 text-gray-500" />;
      case 'rainy':
        return <CloudRain className="w-8 h-8 text-blue-500" />;
      case 'partly-cloudy':
        return <Sun className="w-8 h-8 text-yellow-400" />;
      default:
        return <Sun className="w-8 h-8 text-yellow-500" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'destructive';
      case 'medium':
        return 'warning';
      case 'low':
        return 'secondary';
      default:
        return 'secondary';
    }
  };

  const getUVLevel = (uvIndex: number) => {
    if (uvIndex <= 2) return { level: 'Low', color: 'text-success' };
    if (uvIndex <= 5) return { level: 'Moderate', color: 'text-warning' };
    if (uvIndex <= 7) return { level: 'High', color: 'text-destructive' };
    return { level: 'Very High', color: 'text-destructive' };
  };

  const uvInfo = getUVLevel(currentWeather.uvIndex);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-info/5">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <Link to="/">
                  <ArrowLeft className="w-5 h-5" />
                </Link>
              </Button>
              <div className="flex items-center space-x-2">
                <Cloud className="w-6 h-6 text-info" />
                <h1 className="text-xl font-bold">Weather Advisory</h1>
              </div>
            </div>
            <Badge variant="secondary">
              Location-Based • Real-time Updates
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Location Input */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Location</CardTitle>
            <CardDescription>
              Enter your location for personalized weather and farming advice
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex space-x-4">
              <Input
                placeholder="Enter city, state or coordinates..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="flex-1"
              />
              <Button>Update Location</Button>
            </div>
          </CardContent>
        </Card>

        {/* Current Weather */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Current Weather</CardTitle>
            <CardDescription>{location}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-4">
                <Cloud className="w-16 h-16 text-info" />
                <div>
                  <div className="text-3xl font-bold">{currentWeather.temperature}°C</div>
                  <div className="text-muted-foreground">{currentWeather.condition}</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Droplets className="w-5 h-5 text-blue-500" />
                  <div>
                    <div className="text-sm text-muted-foreground">Humidity</div>
                    <div className="font-medium">{currentWeather.humidity}%</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Wind className="w-5 h-5 text-gray-500" />
                  <div>
                    <div className="text-sm text-muted-foreground">Wind Speed</div>
                    <div className="font-medium">{currentWeather.windSpeed} km/h</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Eye className="w-5 h-5 text-green-500" />
                  <div>
                    <div className="text-sm text-muted-foreground">Visibility</div>
                    <div className="font-medium">{currentWeather.visibility} km</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Sun className="w-5 h-5 text-yellow-500" />
                  <div>
                    <div className="text-sm text-muted-foreground">UV Index</div>
                    <div className={`font-medium ${uvInfo.color}`}>
                      {currentWeather.uvIndex} ({uvInfo.level})
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 7-Day Forecast */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>7-Day Forecast</CardTitle>
            <CardDescription>
              Extended weather forecast for farming planning
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {forecast.map((day, index) => (
                <div key={index} className="text-center p-3 bg-muted/50 rounded-lg">
                  <div className="text-sm font-medium mb-2">{day.day}</div>
                  <div className="flex justify-center mb-2">
                    {getWeatherIcon(day.icon)}
                  </div>
                  <div className="text-sm space-y-1">
                    <div className="font-medium">{day.high}°/{day.low}°</div>
                    <div className="flex items-center justify-center space-x-1">
                      <Droplets className="w-3 h-3 text-blue-500" />
                      <span className="text-xs">{day.rain}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Farming Advisory */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Farming Advisory</CardTitle>
            <CardDescription>
              Weather-based recommendations for your farming activities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {farmingAdvice.map((advice, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg">
                  <div className="flex-shrink-0">
                    {advice.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-medium">{advice.title}</h4>
                      <Badge variant={getPriorityColor(advice.priority) as any} className="text-xs">
                        {advice.priority}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{advice.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Weather Alerts */}
        <Card>
          <CardHeader>
            <CardTitle>Weather Alerts</CardTitle>
            <CardDescription>
              Important weather warnings for your region
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-4 bg-warning/10 border border-warning/20 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-warning">Heavy Rainfall Warning</h4>
                  <p className="text-sm text-muted-foreground">
                    Heavy rainfall expected on Wednesday (80% chance). Prepare for potential waterlogging in low-lying areas.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 bg-info/10 border border-info/20 rounded-lg">
                <Wind className="w-5 h-5 text-info flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-info">Strong Wind Advisory</h4>
                  <p className="text-sm text-muted-foreground">
                    Wind speeds may reach 25-30 km/h tomorrow. Secure loose items and avoid aerial spraying.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WeatherAdvisory;