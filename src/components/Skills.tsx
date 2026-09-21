import React from 'react';
import { SKILL_CATEGORIES } from '../data';
import {
  Cpu,
  TrendingUp,
  Palette,
  Sparkles,
  Zap,
  Terminal,
  Code,
  BarChart3,
  Share2,
  PenTool,
  Image as ImageIcon,
  Presentation,
  FileText,
  Camera,
  Video,
  UtensilsCrossed,
} from 'lucide-react';

export const Skills: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'ai':
        return <Cpu className="w-6 h-6 text-lavender-primary" />;
      case 'marketing':
        return <TrendingUp className="w-6 h-6 text-lavender-primary" />;
      case 'design':
        return <Palette className="w-6 h-6 text-lavender-primary" />;
      case 'creative':
        return <Sparkles className="w-6 h-6 text-lavender-primary" />;
      default:
        return <Cpu className="w-6 h-6 text-lavender-primary" />;
    }
  };

  const getSubIcon = (subIcon: string) => {
    switch (subIcon) {
      case 'bolt':
        return <Zap className="w-4 h-4" />;
      case 'terminal':
        return <Terminal className="w-4 h-4" />;
      case 'code':
        return <Code className="w-4 h-4" />;
      case 'chart':
        return <BarChart3 className="w-4 h-4" />;
      case 'share':
        return <Share2 className="w-4 h-4" />;
      case 'pen':
        return <PenTool className="w-4 h-4" />;
      case 'image':
        return <ImageIcon className="w-4 h-4" />;
      case 'presentation':
        return <Presentation className="w-4 h-4" />;
      case 'file':
        return <FileText className="w-4 h-4" />;
      case 'camera':
        return <Camera className="w-4 h-4" />;
      case 'video':
        return <Video className="w-4 h-4" />;
      case 'book':
        return <UtensilsCrossed className="w-4 h-4" />;
      default:
        return <Zap className="w-4 h-4" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-lavender-primary block mb-2">
            Expertise &amp; Abilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-lavender-dark">
            Highlighted Skills
          </h2>
          <p className="text-lavender-muted text-sm sm:text-base mt-3">
            Combining analytical business acumen with modern AI tooling and design aesthetics.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-2xl p-6 sm:p-8 border-t-4 border-t-lavender-primary border-x border-b border-lavender-100 shadow-xs hover:shadow-md transition-shadow"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-lavender-100 text-lavender-primary flex items-center justify-center shadow-inner">
                  {getCategoryIcon(category.iconName)}
                </div>
                <h3 className="font-heading font-bold text-xl text-lavender-dark">
                  {category.title}
                </h3>
              </div>

              {/* Individual Skill Items */}
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-lavender-50/80 border border-lavender-100/90 hover:translate-x-1 hover:border-lavender-200 transition-all duration-200"
                  >
                    <div className="w-8 h-8 rounded-lg bg-lavender-primary text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                      {getSubIcon(skill.subIcon)}
                    </div>
                    <span className="font-bold text-lavender-dark text-sm sm:text-base">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
