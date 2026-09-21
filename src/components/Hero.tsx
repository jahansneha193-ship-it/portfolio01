import React from 'react';
import { PORTRAIT_DESKTOP_URL, PORTRAIT_MOBILE_URL } from '../data';
import { Sparkles, Bot, Brain } from 'lucide-react';

interface HeroProps {
  onExploreWork: () => void;
  onConnect: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onConnect }) => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pt-8 pb-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Intro & Stats */}
          <div className="lg:col-span-7 flex flex-col justify-center order-1">
            {/* Mobile Header with Side-by-side Avatar (sm and down) */}
            <div className="flex items-center justify-between gap-4 lg:block">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="text-lavender-primary font-bold text-xs sm:text-sm tracking-widest uppercase">
                    — HELLO, I'M
                  </span>
                </div>

                <h1
                  id="hero-title"
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-lavender-dark tracking-tight leading-[1.1] mb-3"
                >
                  Yeamin Jahan
                </h1>

                <p className="text-sm sm:text-base lg:text-xl font-semibold text-lavender-primary mb-2">
                  BBA Student <span className="text-lavender-300">|</span> AI Learner{' '}
                  <span className="text-lavender-300">|</span> Creative &amp; Marketing
                  Enthusiast
                </p>
              </div>

              {/* Mobile Portrait Thumbnail Frame (Visible on mobile/tablet, hidden on lg) */}
              <div className="block lg:hidden flex-shrink-0 relative w-28 h-36 sm:w-36 sm:h-44">
                <div className="w-full h-full arch-portrait-frame overflow-hidden border-2 border-white shadow-md bg-lavender-100">
                  <img
                    src={PORTRAIT_MOBILE_URL}
                    alt="Yeamin Jahan portrait"
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                  />
                </div>
                {/* Mini orbiting badges for mobile */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div
                    className="absolute w-7 h-7 rounded-full bg-white shadow-md border border-lavender-200 text-lavender-primary flex items-center justify-center badge-orbit-1"
                    title="ChatGPT"
                  >
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div
                    className="absolute w-7 h-7 rounded-full bg-white shadow-md border border-lavender-200 text-lavender-primary flex items-center justify-center badge-orbit-2"
                    title="Gemini"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <div
                    className="absolute w-7 h-7 rounded-full bg-white shadow-md border border-lavender-200 text-lavender-primary flex items-center justify-center badge-orbit-3"
                    title="Claude"
                  >
                    <Brain className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Intro paragraph */}
            <p className="text-base sm:text-lg text-lavender-muted leading-relaxed mt-4 mb-8 max-w-2xl">
              I am a BBA student with an interest in Artificial Intelligence,
              Digital Marketing, Content Creation, Design and creative work. I
              enjoy learning new skills, exploring technology and turning ideas
              into meaningful projects.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreWork}
                id="hero-explore-btn"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-lavender-primary text-white font-semibold text-base shadow-lg shadow-lavender-primary/25 hover:bg-lavender-hover hover:scale-[1.02] transition-all cursor-pointer"
              >
                Explore My Work
              </button>
              <button
                onClick={onConnect}
                id="hero-connect-btn"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border-2 border-lavender-primary text-lavender-primary font-semibold text-base hover:bg-lavender-50 transition-all cursor-pointer"
              >
                Let's Connect
              </button>
            </div>

            {/* Quick ATS / Academic Credentials Strip */}
            <div className="grid grid-cols-3 gap-4 pt-8 mt-8 border-t border-lavender-100 text-center sm:text-left">
              <div>
                <span className="block font-heading font-bold text-2xl text-lavender-dark">
                  BBA
                </span>
                <span className="text-xs text-lavender-muted">
                  Marketing Major
                </span>
              </div>
              <div>
                <span className="block font-heading font-bold text-2xl text-lavender-dark">
                  AI
                </span>
                <span className="text-xs text-lavender-muted">
                  Prompting &amp; Tools
                </span>
              </div>
              <div>
                <span className="block font-heading font-bold text-2xl text-lavender-dark">
                  5.00
                </span>
                <span className="text-xs text-lavender-muted">
                  HSC &amp; SSC GPA
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Lavender Curved Panel & Arch Portrait with Rotating Orbit */}
          <div className="lg:col-span-5 relative hidden lg:flex items-center justify-center order-2">
            {/* Soft Lavender Background Panel matching screenshot */}
            <div className="absolute -right-36 top-1/2 -translate-y-1/2 w-[520px] h-[550px] bg-lavender-100/90 rounded-l-[160px] -z-10 shadow-inner"></div>

            {/* Arch Frame & Orbit Container */}
            <div className="relative w-[340px] h-[450px] flex items-center justify-center">
              {/* Dashed Orbit Track */}
              <div className="absolute w-[300px] h-[300px] rounded-full border border-dashed border-lavender-300 pointer-events-none"></div>

              {/* Orbiting Badges */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {/* ChatGPT Badge */}
                <div
                  className="absolute px-3 py-1.5 rounded-full bg-white shadow-md border border-lavender-200 text-lavender-dark text-xs font-semibold flex items-center gap-1.5 badge-orbit-1 pointer-events-auto"
                  title="ChatGPT Generative Workflows"
                >
                  <span className="w-5 h-5 rounded-full bg-lavender-100 text-lavender-primary flex items-center justify-center">
                    <Bot className="w-3 h-3" />
                  </span>
                  <span>ChatGPT</span>
                </div>

                {/* Gemini Badge */}
                <div
                  className="absolute px-3 py-1.5 rounded-full bg-white shadow-md border border-lavender-200 text-lavender-dark text-xs font-semibold flex items-center gap-1.5 badge-orbit-2 pointer-events-auto"
                  title="Google Gemini AI"
                >
                  <span className="w-5 h-5 rounded-full bg-lavender-100 text-lavender-primary flex items-center justify-center">
                    <Sparkles className="w-3 h-3" />
                  </span>
                  <span>Gemini</span>
                </div>

                {/* Claude Badge */}
                <div
                  className="absolute px-3 py-1.5 rounded-full bg-white shadow-md border border-lavender-200 text-lavender-dark text-xs font-semibold flex items-center gap-1.5 badge-orbit-3 pointer-events-auto"
                  title="Claude Anthropic AI"
                >
                  <span className="w-5 h-5 rounded-full bg-lavender-100 text-lavender-primary flex items-center justify-center">
                    <Brain className="w-3 h-3" />
                  </span>
                  <span>Claude</span>
                </div>
              </div>

              {/* Arch-Shaped Portrait Frame */}
              <div className="relative w-[280px] h-[400px] arch-portrait-frame overflow-hidden border-4 border-white shadow-2xl bg-white">
                <img
                  src={PORTRAIT_DESKTOP_URL}
                  alt="Yeamin Jahan - Portrait"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
