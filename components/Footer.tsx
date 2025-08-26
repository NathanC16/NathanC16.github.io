
import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext.tsx';
import { translations } from '../lib/translations.js';

const Footer = () => {
    const sessionId = React.useMemo(() => Math.random().toString(36).substring(2, 10).toUpperCase(), []);
    const context = useContext(LanguageContext);
    const lang = context?.language || 'pt';
    const t = translations[lang];
    
    return (
        <footer className="mt-12 text-center text-sm text-gray-300 border-t-2 border-dashed border-[#00f0ff]/20 pt-6">
            <p>SESSION_ID: {sessionId}</p>
            <p className="mt-2">{t.footerProcessComplete}</p>
        </footer>
    );
};

export default Footer;