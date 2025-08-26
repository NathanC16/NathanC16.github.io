
import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext.tsx';

const LanguageSwitcher = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    return null;
  }

  const { language, setLanguage } = context;

  const buttonClasses = (lang) =>
    `px-2 py-1 text-xs uppercase transition-colors duration-300 ${
      language === lang
        ? 'text-[#00ff41] bg-[#00ff41]/20'
        : 'text-gray-300 hover:text-[#00f0ff]'
    }`;

  return (
    <div className="absolute top-4 right-4 md:top-8 md:right-8 flex items-center border border-gray-700 z-10">
      <button onClick={() => setLanguage('en')} className={buttonClasses('en')} aria-label="Switch to English">
        EN
      </button>
      <div className="w-px h-4 bg-gray-700"></div>
      <button onClick={() => setLanguage('pt')} className={buttonClasses('pt')} aria-label="Mudar para Português">
        PT
      </button>
    </div>
  );
};

export default LanguageSwitcher;
