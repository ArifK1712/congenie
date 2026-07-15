'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section id="contact" className="py-16 lg:py-20 dark:bg-[#030712] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        
        {/* Main Banner Card */}
        <div className="relative rounded-[32px] overflow-hidden bg-[radial-gradient(circle_at_50%_100%,rgba(132,61,245,0.20),transparent_42%),radial-gradient(circle_at_15%_50%,rgba(132,61,245,0.12),transparent_34%),linear-gradient(110deg,#0d102d_0%,#080d20_55%,#061525_100%)] border border-slate-800 text-white p-5 sm:p-8 lg:p-10">
          {/* Background decoration glow */}
          <div className="absolute top-0 right-80 w-120 h-120 bg-accent-purple opacity-40 rounded-full blur-[100px] pointer-events-none" />

          {/* Left bottom curved line and points */}
          <svg className="absolute left-0 bottom-0 w-48 h-48 pointer-events-none opacity-25" viewBox="0 0 100 100" fill="none" aria-hidden="true">
            <path d="M-10 110 C 20 80, 40 50, 20 10 C 15 -10, 5 -20, -5 -30" stroke="#843df5" strokeWidth="0.8" strokeDasharray="3 3" />
            <path d="M-20 100 C 10 70, 30 40, 10 0" stroke="#843df5" strokeWidth="0.5" />
            <circle cx="21" cy="52" r="1.5" fill="#a855f7" className="animate-pulse" />
            <circle cx="11" cy="80" r="1" fill="#a855f7" />
          </svg>

          {/* Right curved line and points */}
          <svg className="absolute right-0 top-0 w-64 h-64 pointer-events-none opacity-20" viewBox="0 0 100 100" fill="none" aria-hidden="true">
            <path d="M110 -10 C 80 20, 50 40, 80 80 C 90 95, 105 105, 115 110" stroke="#843df5" strokeWidth="0.8" strokeDasharray="4 2" />
            <path d="M120 -20 C 90 10, 60 30, 90 70" stroke="#843df5" strokeWidth="0.5" />
            <circle cx="79" cy="40" r="1.5" fill="#a855f7" className="animate-pulse" />
            <circle cx="89" cy="71" r="1" fill="#a855f7" />
          </svg>

          <div className="relative z-10 flex flex-col items-center text-center gap-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-accent-purple/40 bg-accent-purple/15 text-accent-lavender text-xs font-semibold animate-pulse">
              <Sparkles className="w-4 h-4 text-accent-purple" />
              <span>Get Started Today</span>
            </div>
            
            <h2 className="font-display text-white max-w-3xl">
              Ready to Run Smarter Events?
            </h2>
            
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-xl">
              Explore the platform yourself or speak with our team about your next event.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#platform-explorer"
                className="w-full sm:w-auto px-6 py-4 rounded-xl text-slate-300 font-semibold text-sm bg-[#0f1738]/60 border border-slate-800 hover:bg-[#0f1738]/95 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Explore ConGenie</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/contact"
                className="w-full sm:w-auto relative group px-6 py-4 rounded-xl text-white font-semibold text-sm bg-accent-purple hover:bg-[#6c28e2] hover:scale-102 transition-all duration-300 flex items-center justify-center space-x-2 shadow-[0_0_24px_rgba(132,61,245,0.38)]"
              >
                <span>Book a Demo</span>
                <Sparkles className="w-4 h-4 text-white group-hover:animate-spin" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
