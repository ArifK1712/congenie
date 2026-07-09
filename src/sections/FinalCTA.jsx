'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-[#030712] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Banner Card */}
        <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-br from-[#0a0f24] via-[#0d1430] to-[#040612] border border-slate-800 text-white p-8 sm:p-12 lg:p-16 shadow-2xl text-center">
          {/* Background decoration glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-cyan/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent-purple/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-3xl mx-auto space-y-8 relative z-10">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-accent-cyan/40 bg-accent-cyan/10 text-accent-cyan text-xs font-semibold shadow-neon-cyan animate-pulse mx-auto">
              <Sparkles className="w-4 h-4 text-accent-cyan" />
              <span>Get Started Today</span>
            </div>
            
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight leading-tight text-white">
              Ready to Run Smarter Events with AI?
            </h2>
            
            <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto font-light leading-relaxed">
              Book a demo and discover how our all-in-one event technology platform can simplify planning, automate operations, and elevate attendee experiences.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto relative group px-6 py-4 rounded-xl text-white font-semibold text-sm bg-accent-purple hover:bg-[#6c28e2] hover:scale-102 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Book a Demo</span>
                <Sparkles className="w-4 h-4 text-white group-hover:animate-spin" />
              </Link>
              
              <Link
                href="/contact?ref=talk"
                className="w-full sm:w-auto px-6 py-4 rounded-xl text-slate-350 font-semibold text-sm bg-[#0f1738]/60 border border-slate-800 hover:bg-[#0f1738]/95 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Talk to Our Team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            {/* Quick Perks */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-slate-905/20 mt-8">
              {[
                '15-Min Free Consultation',
                'Tailored Core Setup Keys',
                'Matchmaking Dashboard Demo',
                'Dedicated API Mapping Specs'
              ].map((perk, pIdx) => (
                <div key={pIdx} className="flex items-center space-x-2 text-xs text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan flex-shrink-0" />
                  <span>{perk}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
