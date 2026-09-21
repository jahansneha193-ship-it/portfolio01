import React from 'react';
import { Target } from 'lucide-react';

export const Goal: React.FC = () => {
  return (
    <section
      id="goal"
      className="py-24 bg-gradient-to-b from-lavender-100 via-lavender-200/80 to-lavender-100 relative overflow-hidden text-center"
    >
      {/* Decorative background glows */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-72 h-72 rounded-full bg-white/50 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-80 h-80 rounded-full bg-lavender-300/40 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Center Target Icon in White Circle with 3 concentric rings */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-8 rounded-full bg-white text-lavender-primary flex items-center justify-center shadow-lg border-2 border-lavender-200">
          <Target className="w-10 h-10 sm:w-12 sm:h-12 text-lavender-primary" />
        </div>

        <span className="text-xs font-bold uppercase tracking-widest text-lavender-primary mb-2 block">
          Vision &amp; Mission
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-lavender-dark mb-6">
          My Goal
        </h2>

        <div className="space-y-6 max-w-3xl mx-auto">
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-lavender-dark leading-relaxed">
            &ldquo;My goal is to build a successful career by combining Business,
            Marketing, Creativity and Artificial Intelligence.&rdquo;
          </p>
          <p className="text-base sm:text-lg text-lavender-muted leading-relaxed font-normal">
            &ldquo;I want to continuously improve my skills, work on meaningful
            projects and use technology creatively to grow both personally and
            professionally.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
};
