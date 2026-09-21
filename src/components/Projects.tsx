import React from 'react';
import { ProjectItem } from '../types';
import { PROJECTS } from '../data';
import {
  Presentation,
  Image as ImageIcon,
  Code,
  TrendingUp,
  Palette,
  LayoutGrid,
  ArrowRight,
} from 'lucide-react';

interface ProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const getProjectIcon = (iconType: ProjectItem['iconType']) => {
    switch (iconType) {
      case 'deck':
        return <Presentation className="w-8 h-8" />;
      case 'branding':
        return <ImageIcon className="w-8 h-8" />;
      case 'code':
        return <Code className="w-8 h-8" />;
      case 'marketing':
        return <TrendingUp className="w-8 h-8" />;
      case 'artwork':
        return <Palette className="w-8 h-8" />;
      case 'canva':
        return <LayoutGrid className="w-8 h-8" />;
      default:
        return <Presentation className="w-8 h-8" />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-lavender-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-lavender-primary block mb-2">
            Selected Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-lavender-dark">
            My Projects
          </h2>
          <p className="text-lavender-muted text-sm sm:text-base mt-3">
            A showcase of practical design, digital marketing campaigns, and AI explorations.
          </p>
        </div>

        {/* 6 Cards Grid: 3 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden border border-lavender-100 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col group"
            >
              {/* Card Header Media Graphic with Badge */}
              <div className="h-48 bg-gradient-to-br from-lavender-100 via-lavender-200/60 to-lavender-100 flex items-center justify-center p-6 relative">
                <div className="w-16 h-16 rounded-2xl bg-white text-lavender-primary flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  {getProjectIcon(project.iconType)}
                </div>
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/95 text-lavender-primary text-xs font-bold shadow-xs border border-lavender-200/50">
                  {project.tag}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-lg text-lavender-dark mb-2 group-hover:text-lavender-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-lavender-muted text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <button
                  onClick={() => onSelectProject(project)}
                  className="w-full py-2.5 px-4 rounded-xl bg-lavender-50 hover:bg-lavender-primary text-lavender-primary hover:text-white font-semibold text-sm border border-lavender-200/80 hover:border-lavender-primary transition-all flex items-center justify-center gap-2 group/btn cursor-pointer"
                >
                  <span>View Project</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
