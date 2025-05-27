import { useState } from 'react';
import Button from './Button';

interface LanguageToggleProps {
  className?: string;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ className = '' }) => {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
    // In a real implementation, this would update the application's language context
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className={className}
      aria-label={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
    >
      {language === 'en' ? 'العربية' : 'English'}
    </Button>
  );
};

export default LanguageToggle;