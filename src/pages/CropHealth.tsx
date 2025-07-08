import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Camera, Upload, Scan, AlertTriangle, CheckCircle, XCircle, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const CropHealth = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const [confidence, setConfidence] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const sampleDiseases = [
    {
      name: "Leaf Spot",
      hindiName: "पत्ता धब्बा",
      confidence: 92,
      severity: "medium",
      symptoms: ["Dark spots on leaves", "Yellowing around spots", "Leaf drop"],
      treatment: "Apply fungicide spray every 7-10 days",
      prevention: "Ensure proper spacing, avoid overhead watering"
    },
    {
      name: "Powdery Mildew",
      hindiName: "चूर्णी फफूंद",
      confidence: 88,
      severity: "high",
      symptoms: ["White powdery coating", "Stunted growth", "Distorted leaves"],
      treatment: "Use sulfur-based fungicide, improve air circulation",
      prevention: "Plant resistant varieties, avoid overcrowding"
    },
    {
      name: "Aphid Infestation",
      hindiName: "माहू कीट",
      confidence: 95,
      severity: "low",
      symptoms: ["Small insects on leaves", "Sticky honeydew", "Curling leaves"],
      treatment: "Use neem oil or insecticidal soap",
      prevention: "Encourage beneficial insects, regular monitoring"
    },
    {
      name: "Bacterial Blight",
      hindiName: "जीवाणु झुलसा",
      confidence: 78,
      severity: "high",
      symptoms: ["Water-soaked spots", "Brown margins", "Stem cankers"],
      treatment: "Remove affected plants, apply copper-based bactericide",
      prevention: "Use disease-free seeds, avoid wet conditions"
    }
  ];

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string);
        setAnalysisResult(null);
        setConfidence(0);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCameraCapture = () => {
    // In a real implementation, this would access the camera
    toast.info("Camera functionality requires device permissions");
    fileInputRef.current?.click();
  };

  const analyzeCrop = async () => {
    if (!selectedImage) {
      toast.error("Please select an image first");
      return;
    }

    setIsAnalyzing(true);
    setConfidence(0);

    // Simulate AI analysis with progress
    const progressInterval = setInterval(() => {
      setConfidence(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    // Simulate API call
    setTimeout(() => {
      const randomDisease = sampleDiseases[Math.floor(Math.random() * sampleDiseases.length)];
      setAnalysisResult(randomDisease);
      setIsAnalyzing(false);
      setConfidence(randomDisease.confidence);
      toast.success("Analysis complete!");
    }, 2500);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low':
        return 'bg-success text-success-foreground';
      case 'medium':
        return 'bg-warning text-warning-foreground';
      case 'high':
        return 'bg-destructive text-destructive-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'low':
        return <CheckCircle className="w-4 h-4" />;
      case 'medium':
        return <AlertTriangle className="w-4 h-4" />;
      case 'high':
        return <XCircle className="w-4 h-4" />;
      default:
        return <CheckCircle className="w-4 h-4" />;
    }
  };

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
                <Camera className="w-6 h-6 text-warning" />
                <h1 className="text-xl font-bold">Crop Health Detection</h1>
              </div>
            </div>
            <Badge variant="secondary">
              AI-Powered • Real-time Analysis
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Image Upload Section */}
          <Card>
            <CardHeader>
              <CardTitle>Upload Crop Image</CardTitle>
              <CardDescription>
                Take a photo or upload an image of your crop for AI-powered health analysis
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Image Preview */}
              <div className="border-2 border-dashed border-muted rounded-lg p-8 text-center">
                {selectedImage ? (
                  <div className="space-y-4">
                    <img 
                      src={selectedImage} 
                      alt="Selected crop" 
                      className="max-h-64 mx-auto rounded-lg shadow-md"
                    />
                    <Button 
                      variant="outline" 
                      onClick={() => setSelectedImage(null)}
                      className="w-full"
                    >
                      Remove Image
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
                      <Camera className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-lg font-medium">Upload Crop Image</p>
                      <p className="text-sm text-muted-foreground">
                        JPG, PNG or JPEG up to 10MB
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Upload Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <Button 
                  onClick={handleCameraCapture}
                  className="flex items-center gap-2"
                >
                  <Camera className="w-4 h-4" />
                  Take Photo
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center gap-2"
                >
                  <Upload className="w-4 h-4" />
                  Upload File
                </Button>
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />

              {/* Analyze Button */}
              <Button 
                onClick={analyzeCrop}
                disabled={!selectedImage || isAnalyzing}
                className="w-full bg-warning hover:bg-warning/90"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Scan className="w-4 h-4 mr-2" />
                    Analyze Crop Health
                  </>
                )}
              </Button>

              {/* Analysis Progress */}
              {isAnalyzing && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Analysis Progress</span>
                    <span>{confidence}%</span>
                  </div>
                  <Progress value={confidence} className="h-2" />
                </div>
              )}
            </CardContent>
          </Card>

          {/* Analysis Results */}
          <Card>
            <CardHeader>
              <CardTitle>Analysis Results</CardTitle>
              <CardDescription>
                AI-powered crop health diagnosis and recommendations
              </CardDescription>
            </CardHeader>
            <CardContent>
              {analysisResult ? (
                <div className="space-y-6">
                  {/* Disease Detection */}
                  <div className="p-4 bg-card rounded-lg border">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-lg">{analysisResult.name}</h3>
                      <Badge className={getSeverityColor(analysisResult.severity)}>
                        {getSeverityIcon(analysisResult.severity)}
                        <span className="ml-1 capitalize">{analysisResult.severity}</span>
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {analysisResult.hindiName}
                    </p>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm">Confidence:</span>
                      <div className="flex-1">
                        <Progress value={analysisResult.confidence} className="h-2" />
                      </div>
                      <span className="text-sm font-medium">{analysisResult.confidence}%</span>
                    </div>
                  </div>

                  {/* Symptoms */}
                  <div>
                    <h4 className="font-semibold mb-2">Symptoms Detected</h4>
                    <ul className="space-y-1">
                      {analysisResult.symptoms.map((symptom: string, index: number) => (
                        <li key={index} className="flex items-center space-x-2 text-sm">
                          <div className="w-2 h-2 bg-destructive rounded-full" />
                          <span>{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Treatment */}
                  <div>
                    <h4 className="font-semibold mb-2">Recommended Treatment</h4>
                    <div className="p-3 bg-success/10 rounded-lg">
                      <p className="text-sm">{analysisResult.treatment}</p>
                    </div>
                  </div>

                  {/* Prevention */}
                  <div>
                    <h4 className="font-semibold mb-2">Prevention Tips</h4>
                    <div className="p-3 bg-info/10 rounded-lg">
                      <p className="text-sm">{analysisResult.prevention}</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="w-full">
                      Save Report
                    </Button>
                    <Button className="w-full">
                      Get Expert Help
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <Scan className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-lg font-medium mb-2">No Analysis Yet</p>
                  <p className="text-sm text-muted-foreground">
                    Upload a crop image and click analyze to get AI-powered health insights
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">AI Detection</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Advanced machine learning models trained on thousands of crop images for accurate disease detection.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Instant Results</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Get immediate analysis results with confidence scores and detailed recommendations.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Offline Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Basic disease detection works offline using lightweight models stored locally.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CropHealth;