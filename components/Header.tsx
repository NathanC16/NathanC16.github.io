
import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext.tsx';
import { translations } from '../lib/translations.js';
import LanguageSwitcher from './LanguageSwitcher.tsx';
import GithubIcon from './icons/GithubIcon.tsx';

const Header = () => {
  const context = useContext(LanguageContext);
  const lang = context?.language || 'pt';
  const t = translations[lang];

  return (
    <header className="relative mb-12">
      <a 
        href="https://github.com/NathanC16" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="GitHub Profile"
        className="absolute top-4 left-4 z-20 flex items-center gap-2 rounded-sm border border-transparent p-2 text-[#ff00c1] transition-all duration-300 group shadow-[0_0_8px_rgba(255,0,193,0.4)] hover:border-[#ff00c1] hover:bg-[#ff00c1]/10 hover:text-white hover:shadow-[0_0_25px_rgba(255,0,193,0.9)]"
      >
        <GithubIcon className="h-5 w-5" />
        <span className="hidden sm:inline text-sm group-hover:underline">NathanC16</span>
      </a>
      <LanguageSwitcher />
      <h1 
        className="relative text-3xl sm:text-4xl md:text-6xl font-bold uppercase text-center glitch"
        data-text={t.portfolioTitle}
      >
        {t.portfolioTitle}
      </h1>
      <p className="text-center mt-4 text-[#00f0ff] flex items-center justify-center flex-wrap">
        <span className="text-[#00ff41]">guest@debian:</span>
        <span className="text-gray-400">~</span>
        <span className="text-[#ff00c1]">$</span>
        <span className="ml-2">{t.commandLine}</span>
        <span className="ml-2 h-5 w-2 bg-[#00f0ff] animate-blink" aria-hidden="true"></span>
      </p>
    </header>
  );
};

export default Header;