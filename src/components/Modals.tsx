import React, { useEffect } from 'react';
import { ProjectItem } from '../types';
import { CERTIFICATE_FULL_URL } from '../data';
import { X, ExternalLink, Award, CheckCircle2 } from 'lucide-react';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-lavender-dark/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
      id="certificate-modal-backdrop"
    >
      <div
        className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl p-4 sm:p-6"
        onClick={(e) => e.stopPropagation()}
        id="certificate-modal-container"
      >
        <div className="flex items-center justify-between pb-4 border-b border-lavender-100 mb-4">
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-heading font-bold text-lg sm:text-xl text-lavender-dark">
                Excel Essentials for Workplace Productivity
              </h4>
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                Verified
              </span>
            </div>
            <p className="text-xs text-lavender-muted mt-0.5">
              Passport to Earning Bangladesh | UNICEF &amp; Generation Unlimited
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-lavender-muted hover:text-lavender-dark hover:bg-lavender-100 transition-colors cursor-pointer"
            aria-label="Close dialog"
            id="close-cert-modal-btn"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="max-h-[75vh] overflow-auto rounded-2xl flex items-center justify-center bg-lavender-50 p-2 sm:p-4">
          <img
            src={CERTIFICATE_FULL_URL}
            alt="Full Certificate of Completion - Yeamin Jahan"
            className="w-full h-auto object-contain rounded-xl shadow-sm"
          />
        </div>
      </div>
    </div>
  );
};

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-lavender-dark/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
      id="project-modal-backdrop"
    >
      <div
        className="relative max-w-lg w-full bg-white rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
        id="project-modal-container"
      >
        <div className="flex items-center justify-between pb-4 border-b border-lavender-100 mb-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full bg-lavender-100 text-lavender-primary text-xs font-bold">
              {project.tag}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-lavender-muted hover:text-lavender-dark hover:bg-lavender-100 transition-colors cursor-pointer"
            aria-label="Close dialog"
            id="close-project-modal-btn"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-4">
          <h4 className="font-heading font-bold text-xl sm:text-2xl text-lavender-dark">
            {project.title}
          </h4>

          <div className="w-full h-36 rounded-2xl bg-gradient-to-br from-lavender-100 to-lavender-200 flex items-center justify-center text-lavender-primary">
            <Award className="w-12 h-12" />
          </div>

          <div className="space-y-2">
            <h5 className="text-xs font-bold uppercase tracking-wider text-lavender-primary">
              Project Overview
            </h5>
            <p className="text-sm text-lavender-dark leading-relaxed">
              {project.detailedDescription || project.description}
            </p>
          </div>

          <div className="pt-4 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-lavender-primary text-white font-semibold text-sm hover:bg-lavender-hover transition-colors cursor-pointer"
            >
              Close Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
