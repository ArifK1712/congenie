'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-[#030712] relative overflow-hidden transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        
        {/* Main Banner Card */}
        <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-br from-[#0a0f24] via-[#0d1430] to-[#040612] border border-slate-800 text-white p-8 sm:p-12 lg:p-16 shadow-2xl">
          {/* Background decoration glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-cyan/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent-purple/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            

            {/* left Column: 3D Genie visual */}
            <motion.div 
              className="w-56 h-56 sm:w-72 sm:h-72 lg:w-120 lg:h-120 relative z-10"
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Soft purple/cyan ambient glow behind mascot */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-purple/20 to-accent-cyan/15 blur-3xl rounded-full scale-75 animate-pulse-slow pointer-events-none" />
              
              {/* 3D polished genie image */}
              <img 
                src="/congenie_mascot.png" 
                alt="ConGenie 3D Mascot"
                className="w-full h-full object-contain relative z-10 filter drop-shadow-[0_20px_40px_rgba(147,51,234,0.25)]"
              />

              {/* Magical energy particles / glowing circles around */}
              <div className="absolute top-1/4 left-1/4 w-3.5 h-3.5 rounded-full bg-accent-cyan/40 blur-[1px] animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-2 h-2 rounded-full bg-accent-purple/40 blur-[1px] animate-pulse" />
            </motion.div>
            {/* right Column: Existing content */}
            <div className="flex-1 text-center lg:text-left space-y-8 max-w-2xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-accent-cyan/40 bg-accent-cyan/10 text-accent-cyan text-xs font-semibold shadow-neon-cyan animate-pulse">
                <Sparkles className="w-4 h-4 text-accent-cyan" />
                <span>Get Started Today</span>
              </div>
              
              <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight leading-tight text-white">
                Ready to Run Smarter Events with AI?
              </h2>
              
              <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                Book a demo and discover how our all-in-one event technology platform can simplify planning, automate operations, and elevate attendee experiences.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
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
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
