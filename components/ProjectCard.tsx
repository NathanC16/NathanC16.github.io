
import React, { useContext } from 'react';
import FolderIcon from './icons/FolderIcon.tsx';
import GithubIcon from './icons/GithubIcon.tsx';
import { LanguageContext } from '../contexts/LanguageContext.tsx';

const ProjectCard = ({ project }) => {
  const context = useContext(LanguageContext);
  const lang = context?.language || 'pt';

  return (
    <div className="group relative border border-[#00ff41]/50 bg-black/30 p-4 transition-all duration-300 hover:border-[#00ff41] hover:shadow-[0_0_20px_rgba(0,255,65,0.5)] h-full flex flex-col">
      <div className="flex justify-between items-start mb-2">
        <FolderIcon style={{ width: '2rem', height: '2rem' }} className="text-[#00f0ff]" />
        <div className="flex items-center gap-3">
            {project.githubUrl && (
                 <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository" className="text-[#ff00c1] hover:text-white transition-colors duration-300">
                    <GithubIcon className="w-5 h-5" />
                </a>
            )}
        </div>
      </div>
       <p className="text-xs text-gray-300 mb-1">-rwxr-xr-x 1 guest guest 4096 {new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit' })}</p>
      <h3 className="text-xl font-bold text-[#00ff41] mb-2">{project.name[lang]}</h3>
      <p className="text-gray-300 text-sm mb-4">{project.description[lang]}</p>
      <div className="flex flex-wrap gap-2 mt-auto pt-4">
        {project.techStack.map((tech, index) => (
          <span key={index} className="text-xs bg-[#00f0ff]/10 text-[#00f0ff] px-2 py-1">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
