import React from 'react';

export const AboutMe: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-lavender-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-lavender-primary mb-2 block">
            Who I Am
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-lavender-dark">
            About Me
          </h2>
        </div>

        {/* Rounded Lavender/White Card with Centered Text */}
        <div
          id="about-card"
          className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-lavender-200 relative overflow-hidden text-center"
        >
          {/* Soft decorative background glows */}
          <div className="absolute -top-12 -left-12 w-36 h-36 bg-lavender-100/70 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-36 h-36 bg-lavender-200/50 rounded-full blur-2xl pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-5 relative z-10">
            <p className="text-base sm:text-lg text-lavender-dark font-medium leading-relaxed">
              &ldquo;Hello! I&apos;m Yeamin Jahan, a BBA student with an interest
              in Artificial Intelligence, Digital Marketing, Content Creation,
              Presentation Design and Creative Work.&rdquo;
            </p>
            <p className="text-base sm:text-lg text-lavender-muted leading-relaxed">
              &ldquo;I enjoy learning new technologies, developing creative ideas
              and improving my practical skills. I am always interested in
              learning something new and turning my knowledge into useful
              projects.&rdquo;
            </p>

            {/* Handwritten Signature Quote */}
            <div className="pt-6 border-t border-lavender-100">
              <p className="font-handwriting text-3xl sm:text-4xl text-lavender-primary tracking-wide select-none">
                Dream • Learn • Create • Grow
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
