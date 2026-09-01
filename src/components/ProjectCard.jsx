import React from 'react';

const ProjectCard = ({ name, description, language, url, stars }) => {
  return (
    <div className="relative group rounded-xl bg-gradient-to-br from-gray-800 to-black p-[1px] transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
      <div className="bg-[#111] rounded-xl h-full p-6 flex flex-col relative overflow-hidden">
        {/* Glow effect behind */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-500/20 transition-all"></div>
        
        <div className="flex justify-between items-start mb-3 relative z-10">
          <h3 className="text-2xl font-bold text-white m-0 tracking-tight">
            <span translate="no" className="notranslate">{name}</span>
          </h3>
          {language && (
            <span className="text-xs px-2 py-1 bg-gray-800 rounded-full text-gray-300">
              {language}
            </span>
          )}
        </div>
        <p className="text-gray-300 flex-1 text-sm mb-6 leading-relaxed relative z-10">
          {description || 'Sin descripción disponible.'}
        </p>
        <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-800/50 relative z-10">
          <span className="text-gray-300 flex items-center gap-1.5 font-medium">
            {stars > 0 && (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400 drop-shadow-sm"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                {stars}
              </>
            )}
          </span>
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Ver en GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.6a6 6 0 0 0-1.6-4.2 6 6 0 0 0-.4-4.2s-1.4-.5-4 1.2a13.2 13.2 0 0 0-5 0c-2.6-1.7-4-1.2-4-1.2a6 6 0 0 0-.4 4.2 6 6 0 0 0-1.6 4.2c0 3.6 3 5.6 6 5.6a4.8 4.8 0 0 0-1 3.2v4"></path><path d="M9 18c-4.5 1.5-5-2.5-7-3"></path></svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
