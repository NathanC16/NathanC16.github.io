
import React, { useState, useCallback } from 'react';
import Header from './components/Header.tsx';
import ProjectList from './components/ProjectList.tsx';
import Footer from './components/Footer.tsx';
import { LanguageProvider } from './contexts/LanguageContext.tsx';
import { translations } from './lib/translations.js';
import Preloader from './components/Preloader.tsx';

const App = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: {
        en: translations.en.projectQrCodeName,
        pt: translations.pt.projectQrCodeName,
      },
      description: {
          en: translations.en.projectQrCodeDescription,
          pt: translations.pt.projectQrCodeDescription,
      },
      techStack: ['Python', 'Tkinter', 'qrcode', 'Pillow'],
      githubUrl: 'https://github.com/NathanC16/QRCode-generator',
    }
  ]);

  const [isBooting, setIsBooting] = useState(true);

  const handleBootingFinished = useCallback(() => {
    setIsBooting(false);
  }, []);

  if (isBooting) {
    return <Preloader onFinished={handleBootingFinished} />;
  }


  return (
    <LanguageProvider>
      <div className="relative min-h-screen antialiased text-[#00f0ff] p-4 md:p-8 selection:bg-[#ff00c1] selection:text-white">
        <div 
          className="absolute inset-0 z-[-1] bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:16px_16px]"
          style={{ maskImage: 'radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)' }}
        ></div>
        <div className="container mx-auto max-w-4xl">
          <Header />
          <main>
            <ProjectList projects={projects} />
          </main>
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
};

export default App;