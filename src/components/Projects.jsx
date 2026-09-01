import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';

const initialProjectsData = [
  {
    name: 'Weekbox',
    description: 'Un mod launcher de FNF reimaginado para la comunidad, hecho y liderado por Britex y Malloy',
    language: '',
    repo: 'Crew-Awesome/Weekbox',
    url: 'https://github.com/Crew-Awesome/Weekbox',
    stars: 0,
  }
];

const Projects = () => {
  const [projectsData, setProjectsData] = useState(initialProjectsData);

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/Crew-Awesome/Weekbox');
        if (response.ok) {
          const data = await response.json();
          setProjectsData(prev => prev.map(p => 
            p.repo === 'Crew-Awesome/Weekbox' ? { ...p, stars: data.stargazers_count } : p
          ));
        }
      } catch (error) {
        console.error('Failed to fetch stars:', error);
      }
    };
    fetchStars();
  }, []);

  return (
    <section className="pb-12">
      <h2 className="text-2xl font-bold mb-6 text-white">Proyectos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
