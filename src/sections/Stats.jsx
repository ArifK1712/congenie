'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Counter from '../components/Counter';
import { Sparkles, Calendar, Layers, Headphones, Users } from 'lucide-react';

// Easy-to-update stats configuration
const statsConfig = [
  { label: 'Registrations Managed', value: '100', suffix: 'K+', icon: Users },
  { label: 'Events Supported', value: '500', suffix: '+', icon: Calendar },
  { label: 'Available Modules', value: '30', suffix: '+', icon: Layers },
  { label: 'Platform Reliability', value: '99', suffix: '.9%', icon: Sparkles },
  { label: 'Customer Support', value: '24', suffix: '/7', icon: Headphones },
];

export default function Stats() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <section 
      id="stats" 
      className="py-16 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.16),transparent_55%),linear-gradient(135deg,#07091f_0%,#0b0d2b_50%,#08091d_100%)] border-y border-white/5 transition-colors duration-300 relative overflow-hidden max-w-[1400px] mx-auto rounded-4xl"
    >
      {/* Subtle background overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(148,163,184,0.015)_1px,transparent_1px)] [background-size:2rem_2rem] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Shared Container Panel */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {/* Statistics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-6 md:gap-y-12 lg:gap-0 lg:divide-x lg:divide-white/5">
            {statsConfig.map((stat, idx) => {
              const StatIcon = stat.icon;

              // Border rules for clean cell layout on mobile, now matching dark theme borders
              const borderClasses = [
                'border-r border-b border-white/5 pb-8 md:border-none md:pb-0',
                'border-b border-white/5 pb-8 md:border-none md:pb-0',
                'border-r border-b border-white/5 pb-8 pt-4 md:border-none md:pb-0 md:pt-0',
                'border-b border-white/5 pb-8 pt-4 md:border-none md:pb-0 md:pt-0',
                'col-span-2 pt-6 md:col-span-1 md:pt-0'
              ][idx];

              return (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className={`flex flex-col items-center text-center px-4 group cursor-default ${borderClasses}`}
                >
                  {/* Translucent Dark Glass Icon Container */}
                  <div className="w-15 h-15 rounded-xl border flex items-center justify-center mb-4 transition-all duration-300 group-hover:-translate-y-0.5 bg-white/[0.05] border-purple-400/20 shadow-[0_0_30px_rgba(124,58,237,0.12)] backdrop-blur-sm group-hover:border-purple-400/40 group-hover:bg-purple-500/10 group-hover:shadow-[0_0_35px_rgba(139,92,246,0.22)] text-purple-400">
                    <StatIcon className="w-8 h-8 stroke-[1.5]" />
                  </div>

                  {/* Value + Suffix */}
                  <h3 className="flex items-baseline">
                    <span className="font-display font-black text-4xl sm:text-5xl text-white transition-colors duration-300 group-hover:text-purple-300">
                      <Counter value={stat.value} duration={1.8} />
                      {stat.suffix && (
                        <span className="text-slate-400 font-sans font-medium text-2xl sm:text-3xl ml-0.5">
                          {stat.suffix}
                        </span>
                      )}
                    </span>
                  </h3>

                  {/* Label */}
                  <p className="mt-2 text-sm text-slate-400 font-light tracking-wide">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
