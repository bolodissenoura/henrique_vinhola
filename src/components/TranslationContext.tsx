import { TFunction } from 'i18next';
import "i18next";
import React, { createContext, useContext, ReactNode, useState, Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next'; // Substitua 'sua-lib-de-traducao' pela biblioteca que você está usando

interface TranslationContextProps {
  t: TFunction;
  changeLanguage: (lang: string) => void;
  language: string;
  currentLanguage: string;
  setCurrentLanguage: Dispatch<SetStateAction<string>>;
  handleChangeLanguage: () => void;
}

const TranslationContext = createContext<TranslationContextProps | undefined>(undefined);

export const useTranslationContext = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslationContext must be used within a TranslationProvider');
  }
  return context;
};

interface TranslationProviderProps {
  children: ReactNode;
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({ children }) => {
  const { t, i18n: { changeLanguage, language } } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language);

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === 'pt' ? 'en' : 'pt';
    changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  return (
    <TranslationContext.Provider value={{ t, changeLanguage, language, currentLanguage, setCurrentLanguage, handleChangeLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};
