import React from 'react';
import { CERTIFICATE_PREVIEW_URL } from '../data';
import { Award, Eye, CheckCircle2, ZoomIn } from 'lucide-react';

interface CertificateProps {
  onViewFullCertificate: () => void;
}

export const Certificate: React.FC<CertificateProps> = ({
  onViewFullCertificate,
}) => {
  return (
    <section id="certificate" className="py-20 bg-lavender-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-lavender-primary block mb-2">
            Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-lavender-dark">
            Professional Certificate
          </h2>
          <p className="text-lavender-muted text-sm sm:text-base mt-2">
            Verified certificate of course completion from recognized international programs.
          </p>
        </div>

        {/* Certificate Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-lavender-200 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Certificate Image Box */}
            <div className="lg:col-span-7">
              <div
                onClick={onViewFullCertificate}
                className="relative rounded-2xl overflow-hidden shadow-md border border-lavender-200/90 cursor-pointer group bg-lavender-50"
              >
                <img
                  src={CERTIFICATE_PREVIEW_URL}
                  alt="Certificate of Completion - Yeamin Jahan - Excel Essentials for Workplace Productivity"
                  className="w-full h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-lavender-dark/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                  <span className="px-4 py-2 rounded-full bg-white text-lavender-dark font-semibold text-sm shadow flex items-center gap-2">
                    <ZoomIn className="w-4 h-4 text-lavender-primary" />
                    Click to View Full Size
                  </span>
                </div>
              </div>
            </div>

            {/* Certificate Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lavender-100 text-lavender-primary text-xs font-bold shadow-2xs">
                <CheckCircle2 className="w-4 h-4" />
                <span>Verified Completion</span>
              </div>

              <h3 className="font-heading font-bold text-2xl text-lavender-dark leading-snug">
                Excel Essentials for Workplace Productivity
              </h3>

              <div className="space-y-4 pt-2 text-sm">
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider font-semibold text-lavender-muted">
                    Recipient Name
                  </span>
                  <span className="text-base font-bold text-lavender-dark">
                    Yeamin Jahan
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider font-semibold text-lavender-muted">
                    Issuing Organization
                  </span>
                  <span className="text-base font-bold text-lavender-dark">
                    Passport to Earning Bangladesh (UNICEF &amp; Generation Unlimited)
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider font-semibold text-lavender-muted">
                    Issue Date
                  </span>
                  <span className="text-base font-semibold text-lavender-dark">
                    September 15, 2026
                  </span>
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={onViewFullCertificate}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-lavender-primary text-white font-semibold text-sm shadow-md shadow-lavender-primary/20 hover:bg-lavender-hover transition-all cursor-pointer hover:scale-[1.02]"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Certificate</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
