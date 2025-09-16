import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  MapPin, 
  Crop, 
  Droplets, 
  Ruler, 
  Phone, 
  Mail,
  Calendar,
  TreePine,
  Wheat,
  Save,
  Edit3,
  Plus,
  X
} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface CropInfo {
  id: string;
  name: string;
  nameML: string;
  area: string;
  season: string;
  variety: string;
}

export const FarmerProfile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [crops, setCrops] = useState<CropInfo[]>([
    { id: '1', name: 'Rice', nameML: 'നെല്ല്', area: '2.5', season: 'Kharif', variety: 'Jaya' },
    { id: '2', name: 'Coconut', nameML: 'തെങ്ങ്', area: '1.0', season: 'Perennial', variety: 'Dwarf' }
  ]);

  const [profile, setProfile] = useState({
    name: 'രാധിക നായർ (Radhika Nair)',
    phone: '+91 9876543210',
    email: 'radhika.farmer@gmail.com',
    location: 'കുട്ടനാട്, ആലപ്പുഴ (Kuttanad, Alappuzha)',
    village: 'Ramankary',
    district: 'Alappuzha',
    totalLand: '3.5',
    soilType: 'Clay Loam',
    irrigationType: 'Canal & Rain-fed',
    farmingExperience: '15',
    farmingType: 'Traditional + Organic'
  });

  const addCrop = () => {
    const newCrop: CropInfo = {
      id: Date.now().toString(),
      name: '',
      nameML: '',
      area: '',
      season: '',
      variety: ''
    };
    setCrops([...crops, newCrop]);
  };

  const removeCrop = (id: string) => {
    setCrops(crops.filter(crop => crop.id !== id));
  };

  const updateCrop = (id: string, field: keyof CropInfo, value: string) => {
    setCrops(crops.map(crop => 
      crop.id === id ? { ...crop, [field]: value } : crop
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-warm py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            കർഷക പ്രൊഫൈൽ
          </h1>
          <p className="text-lg text-muted-foreground">
            Your personalized farming profile for Kerala agriculture
          </p>
        </div>

        {/* Profile Picture & Basic Info */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-gentle">
          <CardHeader className="text-center pb-4">
            <div className="relative inline-block">
              <div className="w-24 h-24 bg-gradient-kerala rounded-full flex items-center justify-center shadow-nature mx-auto mb-4">
                <User className="w-12 h-12 text-white" />
              </div>
              {isEditing && (
                <Button size="sm" variant="ghost" className="absolute bottom-0 right-0 w-8 h-8 p-0 rounded-full bg-primary text-white">
                  <Edit3 className="w-4 h-4" />
                </Button>
              )}
            </div>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl text-foreground">{profile.name}</CardTitle>
              <Button
                variant={isEditing ? "default" : "outline"}
                onClick={() => setIsEditing(!isEditing)}
                className="gap-2"
              >
                {isEditing ? <Save className="w-4 h-4" /> : <Edit3 className="w-4 h-4" />}
                {isEditing ? 'Save Profile' : 'Edit Profile'}
              </Button>
            </div>
          </CardHeader>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Personal Information */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-gentle">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <User className="w-5 h-5 text-primary" />
                വ്യക്തിഗത വിവരങ്ങൾ (Personal Information)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">പേര് (Name)</Label>
                  <Input
                    id="name"
                    value={profile.name}
                    disabled={!isEditing}
                    onChange={(e) => setProfile({...profile, name: e.target.value})}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">ഫോൺ (Phone)</Label>
                  <Input
                    id="phone"
                    value={profile.phone}
                    disabled={!isEditing}
                    onChange={(e) => setProfile({...profile, phone: e.target.value})}
                    className="mt-1"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email">ഇമെയിൽ (Email)</Label>
                <Input
                  id="email"
                  type="email"
                  value={profile.email}
                  disabled={!isEditing}
                  onChange={(e) => setProfile({...profile, email: e.target.value})}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="location">സ്ഥലം (Location)</Label>
                <Input
                  id="location"
                  value={profile.location}
                  disabled={!isEditing}
                  onChange={(e) => setProfile({...profile, location: e.target.value})}
                  className="mt-1"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="village">ഗ്രാമം (Village)</Label>
                  <Input
                    id="village"
                    value={profile.village}
                    disabled={!isEditing}
                    onChange={(e) => setProfile({...profile, village: e.target.value})}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="district">ജില്ല (District)</Label>
                  <Select disabled={!isEditing} value={profile.district}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Alappuzha">Alappuzha</SelectItem>
                      <SelectItem value="Ernakulam">Ernakulam</SelectItem>
                      <SelectItem value="Idukki">Idukki</SelectItem>
                      <SelectItem value="Kannur">Kannur</SelectItem>
                      <SelectItem value="Kasaragod">Kasaragod</SelectItem>
                      <SelectItem value="Kollam">Kollam</SelectItem>
                      <SelectItem value="Kottayam">Kottayam</SelectItem>
                      <SelectItem value="Kozhikode">Kozhikode</SelectItem>
                      <SelectItem value="Malappuram">Malappuram</SelectItem>
                      <SelectItem value="Palakkad">Palakkad</SelectItem>
                      <SelectItem value="Pathanamthitta">Pathanamthitta</SelectItem>
                      <SelectItem value="Thiruvananthapuram">Thiruvananthapuram</SelectItem>
                      <SelectItem value="Thrissur">Thrissur</SelectItem>
                      <SelectItem value="Wayanad">Wayanad</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Farm Information */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-gentle">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <TreePine className="w-5 h-5 text-primary" />
                കൃഷിസ്ഥല വിവരങ്ങൾ (Farm Information)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="totalLand">മൊത്തം ഭൂമി (Total Land - Acres)</Label>
                  <Input
                    id="totalLand"
                    value={profile.totalLand}
                    disabled={!isEditing}
                    onChange={(e) => setProfile({...profile, totalLand: e.target.value})}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="experience">അനുഭവം (Experience - Years)</Label>
                  <Input
                    id="experience"
                    value={profile.farmingExperience}
                    disabled={!isEditing}
                    onChange={(e) => setProfile({...profile, farmingExperience: e.target.value})}
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="soilType">മണ്ണിന്റെ തരം (Soil Type)</Label>
                <Select disabled={!isEditing} value={profile.soilType}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Clay Loam">Clay Loam (കളിമൺ)</SelectItem>
                    <SelectItem value="Sandy Loam">Sandy Loam (മണൽമണ്ണ്)</SelectItem>
                    <SelectItem value="Red Soil">Red Soil (ചുവന്ന മണ്ണ്)</SelectItem>
                    <SelectItem value="Black Soil">Black Soil (കറുത്ത മണ്ണ്)</SelectItem>
                    <SelectItem value="Laterite">Laterite (ലാറ്ററൈറ്റ്)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="irrigation">നനയന രീതി (Irrigation Type)</Label>
                <Input
                  id="irrigation"
                  value={profile.irrigationType}
                  disabled={!isEditing}
                  onChange={(e) => setProfile({...profile, irrigationType: e.target.value})}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="farmingType">കൃഷി രീതി (Farming Type)</Label>
                <Select disabled={!isEditing} value={profile.farmingType}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Traditional">Traditional (പരമ്പരാഗത)</SelectItem>
                    <SelectItem value="Organic">Organic (ജൈവിക)</SelectItem>
                    <SelectItem value="Traditional + Organic">Traditional + Organic</SelectItem>
                    <SelectItem value="Modern">Modern (ആധുനിക)</SelectItem>
                    <SelectItem value="Integrated">Integrated (സംയോജിത)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Crop Information */}
        <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-gentle">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Wheat className="w-5 h-5 text-primary" />
                വിള വിവരങ്ങൾ (Crop Information)
              </CardTitle>
              {isEditing && (
                <Button onClick={addCrop} size="sm" variant="outline" className="gap-2">
                  <Plus className="w-4 h-4" />
                  Add Crop
                </Button>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {crops.map((crop, index) => (
                <div key={crop.id} className="p-4 border border-border/50 rounded-lg bg-card/30 relative">
                  {isEditing && (
                    <Button
                      onClick={() => removeCrop(crop.id)}
                      size="sm"
                      variant="ghost"
                      className="absolute top-2 right-2 w-8 h-8 p-0 text-destructive hover:bg-destructive/10"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    <div>
                      <Label>വിള (Crop)</Label>
                      <Input
                        value={crop.name}
                        disabled={!isEditing}
                        onChange={(e) => updateCrop(crop.id, 'name', e.target.value)}
                        placeholder="e.g., Rice"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label>മലയാളം പേര് (Malayalam Name)</Label>
                      <Input
                        value={crop.nameML}
                        disabled={!isEditing}
                        onChange={(e) => updateCrop(crop.id, 'nameML', e.target.value)}
                        placeholder="e.g., നെല്ല്"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label>വിസ്തീർണ്ണം (Area - Acres)</Label>
                      <Input
                        value={crop.area}
                        disabled={!isEditing}
                        onChange={(e) => updateCrop(crop.id, 'area', e.target.value)}
                        placeholder="e.g., 2.5"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label>സീസൺ (Season)</Label>
                      <Select 
                        disabled={!isEditing} 
                        value={crop.season}
                        onValueChange={(value) => updateCrop(crop.id, 'season', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select season" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Kharif">Kharif (ഖരീഫ്)</SelectItem>
                          <SelectItem value="Rabi">Rabi (റബി)</SelectItem>
                          <SelectItem value="Summer">Summer (വേനൽ)</SelectItem>
                          <SelectItem value="Perennial">Perennial (ശാശ്വത)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>ഇനം (Variety)</Label>
                      <Input
                        value={crop.variety}
                        disabled={!isEditing}
                        onChange={(e) => updateCrop(crop.id, 'variety', e.target.value)}
                        placeholder="e.g., Jaya"
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Save Button */}
        {isEditing && (
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-gradient-kerala text-white hover:shadow-nature transition-all duration-500 hover:scale-105 px-8 py-4"
              onClick={() => setIsEditing(false)}
            >
              <Save className="w-5 h-5 mr-2" />
              പ്രൊഫൈൽ സംരക്ഷിക്കുക (Save Profile)
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FarmerProfile;