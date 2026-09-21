import React from 'react';
import { EDUCATION_ITEMS } from '../data';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-lavender-primary block mb-2">
            Academic Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-lavender-dark">
            Education &amp; Training
          </h2>
          <p className="text-lavender-muted text-sm sm:text-base mt-2">
            Academic qualifications and specialized technical certificates.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-lavender-200 space-y-10 ml-2 sm:ml-6">
          {EDUCATION_ITEMS.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-white border-4 border-lavender-primary shadow-xs group-hover:scale-125 transition-transform duration-200" />

              {/* Content Card */}
              <div className="bg-lavender-50/90 rounded-2xl p-6 border border-lavender-100 shadow-xs hover:shadow-md transition-shadow">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-lavender-dark">
                    {item.degree}
                  </h3>
                  {item.badgeType === 'enrolled' && (
                    <span className="px-3 py-1 rounded-full bg-lavender-primary text-white text-xs font-semibold shadow-xs">
                      {item.statusBadge}
                    </span>
                  )}
                  {item.badgeType === 'year' && (
                    <span className="px-3 py-1 rounded-full bg-lavender-200 text-lavender-dark text-xs font-bold">
                      {item.statusBadge}
                    </span>
                  )}
                  {item.badgeType === 'batch' && (
                    <span className="px-3 py-1 rounded-full bg-lavender-primary/10 text-lavender-primary text-xs font-bold">
                      {item.statusBadge}
                    </span>
                  )}
                </div>

                {item.major && (
                  <p className="text-lavender-primary font-semibold text-sm mb-2">
                    {item.major}
                  </p>
                )}

                {item.institution && (
                  <p className="text-lavender-primary font-semibold text-sm mb-2">
                    {item.institution}
                  </p>
                )}

                {item.result && (
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-lavender-dark bg-white px-3 py-1 rounded-lg border border-lavender-200 shadow-xs mt-1 mb-1">
                    <span>Result:</span>
                    <span className="text-lavender-primary">{item.result}</span>
                  </div>
                )}

                {item.description && (
                  <p className="text-lavender-muted text-sm leading-relaxed mt-2">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
