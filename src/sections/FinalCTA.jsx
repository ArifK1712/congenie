'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section id="contact" className="pb-20  dark:bg-[#030712] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        
        {/* Main Banner Card */}
        <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-br from-[#0a0f24] via-[#0d1430] to-[#040612] border border-slate-800 text-white p-5 sm:p-8 lg:p-10 shadow-2xl">
          {/* Background decoration glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-cyan/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent-purple/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center gap-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-accent-cyan/40 bg-accent-cyan/10 text-accent-cyan text-xs font-semibold shadow-neon-cyan animate-pulse">
              <Sparkles className="w-4 h-4 text-accent-cyan" />
              <span>Get Started Today</span>
            </div>
            
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight leading-tight text-white max-w-3xl">
              Ready to Run Smarter Events?
            </h2>
            
            <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed max-w-xl">
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
                className="w-full sm:w-auto relative group px-6 py-4 rounded-xl text-white font-semibold text-sm bg-accent-purple hover:bg-[#6c28e2] hover:scale-102 transition-all duration-300 flex items-center justify-center space-x-2"
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
