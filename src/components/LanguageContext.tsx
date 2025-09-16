import React, { createContext, useContext, useState, useEffect } from 'react';

interface Language {
  code: string;
  name: string;
  native: string;
}

interface LanguageContextType {
  currentLanguage: string;
  setLanguage: (code: string) => void;
  translate: (text: string, translations?: Record<string, string>) => string;
  languages: Language[];
}

const languages: Language[] = [
  { code: 'en', name: 'English', native: 'English' },
  { code: 'ml', name: 'Malayalam', native: 'മലയാളം' },
  { code: 'hi', name: 'Hindi', native: 'हिन्दी' },
  { code: 'ta', name: 'Tamil', native: 'தமிழ்' },
  { code: 'te', name: 'Telugu', native: 'తెలుగు' },
  { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ' },
  { code: 'bn', name: 'Bengali', native: 'বাংলা' },
  { code: 'gu', name: 'Gujarati', native: 'ગુજરાતી' },
];

// Common translations for key terms
const translations: Record<string, Record<string, string>> = {
  'Smart Bharat': {
    ml: 'സ്മാർട്ട് ഭാരത്',
    hi: 'स्मार्ट भारत',
    ta: 'ஸ்மார்ட் பாரத்',
    te: 'స్మార్ట్ భారత్',
    kn: 'ಸ್ಮಾರ್ಟ್ ಭಾರತ್',
    bn: 'স্মার্ট ভারত',
    gu: 'સ્માર્ટ ભારત'
  },
  'Farming Assistant': {
    ml: 'കൃഷി സഹായി',
    hi: 'कृषि सहायक',
    ta: 'விவசாய உதவியாளர்',
    te: 'వ్యవసాయ సహాయకుడు',
    kn: 'ಕೃಷಿ ಸಹಾಯಕ',
    bn: 'কৃষি সহায়ক',
    gu: 'કૃષિ સહાયક'
  },
  'Dashboard': {
    ml: 'ഡാഷ്‌ബോർഡ്',
    hi: 'डैशबोर्ड',
    ta: 'டாஷ்போர்டு',
    te: 'డాష్‌బోర్డ్',
    kn: 'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',
    bn: 'ড্যাশবোর্ড',
    gu: 'ડેશબોર્ડ'
  },
  'Voice Assistant': {
    ml: 'വോയ്സ് അസിസ്റ്റന്റ്',
    hi: 'वॉयस असिस्टेंट',
    ta: 'குரல் உதவியாளர்',
    te: 'వాయిస్ అసిస్టెంట్',
    kn: 'ವಾಯ್ಸ್ ಅಸಿಸ್ಟೆಂಟ್',
    bn: 'ভয়েস অ্যাসিস্ট্যান্ট',
    gu: 'વોઇસ એસિસ્ટન્ટ'
  },
  'Market Prices': {
    ml: 'മാർക്കറ്റ് വിലകൾ',
    hi: 'बाजार भाव',
    ta: 'சந்தை விலைகள்',
    te: 'మార్కెట్ ధరలు',
    kn: 'ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳು',
    bn: 'বাজার দাম',
    gu: 'બજાર ભાવ'
  },
  'Weather Advisory': {
    ml: 'കാലാവസ്ഥാ ഉപദേശം',
    hi: 'मौसम सलाह',
    ta: 'வானிலை ஆலோசனை',
    te: 'వాతావరణ సలహా',
    kn: 'ಹವಾಮಾನ ಸಲಹೆ',
    bn: 'আবহাওয়া পরামর্শ',
    gu: 'હવામાન સલાહ'
  },
  'Crop Health': {
    ml: 'വിള ആരോഗ്യം',
    hi: 'फसल स्वास्थ्य',
    ta: 'பயிர் நலம்',
    te: 'పంట ఆరోగ్యం',
    kn: 'ಬೆಳೆ ಆರೋಗ್ಯ',
    bn: 'ফসলের স্বাস্থ্য',
    gu: 'પાકનું સ્વાસ્થ્ય'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  // Load saved language preference
  useEffect(() => {
    const savedLanguage = localStorage.getItem('smart-bharat-language');
    if (savedLanguage && languages.some(lang => lang.code === savedLanguage)) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const setLanguage = (code: string) => {
    setCurrentLanguage(code);
    localStorage.setItem('smart-bharat-language', code);
  };

  const translate = (text: string, customTranslations?: Record<string, string>) => {
    if (currentLanguage === 'en') return text;
    
    // Check custom translations first
    if (customTranslations && customTranslations[currentLanguage]) {
      return customTranslations[currentLanguage];
    }
    
    // Check common translations
    if (translations[text] && translations[text][currentLanguage]) {
      return translations[text][currentLanguage];
    }
    
    // Return original text if no translation found
    return text;
  };

  return (
    <LanguageContext.Provider value={{ 
      currentLanguage, 
      setLanguage, 
      translate, 
      languages 
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;