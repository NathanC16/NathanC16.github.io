
import React, { useContext } from 'react';
import ProjectCard from './ProjectCard.tsx';
import { LanguageContext } from '../contexts/LanguageContext.tsx';
import { translations } from '../lib/translations.js';

const ProjectList = ({ projects }) => {
  const context = useContext(LanguageContext);
  const lang = context?.language || 'pt';
  const t = translations[lang];

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 text-[#00ff41]">
        {t.projectsTitle}
      </h2>
      <div className="border-2 border-[#00f0ff] p-4 bg-[#0d0208]/50 shadow-[0_0_15px_rgba(0,240,255,0.4)]">
        {projects.length === 0 ? (
          <div className="text-center text-[#ff00c1] p-8 min-h-[200px] flex flex-col items-center justify-center">
            <p className="text-lg">{t.emptyProjectList}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
            <div className="group relative border border-dashed border-gray-600 bg-black/20 p-4 transition-all duration-300 flex flex-col h-full hover:border-[#ff00c1] hover:shadow-[0_0_20px_rgba(255,0,193,0.5)]">
              <p className="text-xs text-gray-400 mb-1">-rw-r--r-- 1 guest guest 0 {new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit' })}</p>
              <h3 className="text-xl font-bold text-gray-500 mb-2 group-hover:text-[#ff00c1] transition-colors duration-300">{t.newProjectsTitle}</h3>
              <p className="text-gray-400 text-sm mb-4">{t.newProjectsDescription}</p>
              <div className="mt-auto pt-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-gray-700/50 text-gray-400 px-2 py-1">
                    {t.newProjectsStatus}
                  </span>
                  <span className="h-4 w-2 bg-gray-400 animate-blink" aria-hidden="true"></span>
                </div>
                <p className="mt-2 text-xs text-red-700">{t.newProjectsError}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectList;