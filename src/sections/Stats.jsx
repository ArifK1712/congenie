'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Counter from '../components/Counter';
import { Sparkles, Calendar, Layers, Headphones, Cpu } from 'lucide-react';

export default function Stats() {
  const stats = [
    { label: 'Registrations Managed', value: '100', suffix: 'K+', icon: Cpu, accent: 'text-accent-purple dark:text-purple-400 bg-purple-50 dark:bg-purple-950/20 border-purple-100/50 dark:border-purple-900/30' },
    { label: 'Events Supported', value: '500', suffix: '+', icon: Calendar, accent: 'text-accent-purple dark:text-purple-400 bg-purple-50 dark:bg-purple-950/20 border-purple-100/50 dark:border-purple-900/30' },
    { label: 'Feature Modules', value: '50', suffix: '+', icon: Layers, accent: 'text-accent-purple dark:text-purple-400 bg-purple-50 dark:bg-purple-950/20 border-purple-100/50 dark:border-purple-900/30' },
    { label: 'Platform Reliability', value: '999.', suffix: '%', icon: Sparkles, accent: 'text-accent-purple dark:text-purple-400 bg-purple-50 dark:bg-purple-950/20 border-purple-100/50 dark:border-purple-900/30' },
    { label: 'Customer Support Response', value: '24', suffix: '/7', icon: Headphones, accent: 'text-accent-purple dark:text-purple-400 bg-purple-50 dark:bg-purple-950/20 border-purple-100/50 dark:border-purple-900/30' }
  ];

  // Helper to render value and suffix cleanly
  const renderStatValue = (val, suffix) => {
    return (
      <span className="font-display font-black text-4xl sm:text-5xl text-[#040742] dark:text-white transition-colors duration-300 group-hover:text-accent-purple">
        <Counter value={val} duration={1.8} />
        {suffix && (
          <span className="text-slate-400 dark:text-slate-500 font-sans font-medium text-2xl sm:text-3xl ml-0.5">
            {suffix}
          </span>
        )}
      </span>
    );
  };

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
    <section className="py-16 bg-white dark:bg-[#020314] transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        
        {/* Shared Container Panel */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {/* Statistics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-6 md:gap-y-12 lg:gap-0 lg:divide-x lg:divide-slate-200/60 dark:lg:divide-slate-800/80">
            {stats.map((stat, idx) => {
              const StatIcon = stat.icon;

              // Border rules for clean cell layout on mobile, automatically cleared on tablet/desktop
              const borderClasses = [
                'border-r border-b border-slate-200/40 dark:border-slate-800/40 pb-8 md:border-none md:pb-0',
                'border-b border-slate-200/40 dark:border-slate-800/40 pb-8 md:border-none md:pb-0',
                'border-r border-b border-slate-200/40 dark:border-slate-800/40 pb-8 pt-4 md:border-none md:pb-0 md:pt-0',
                'border-b border-slate-200/40 dark:border-slate-800/40 pb-8 pt-4 md:border-none md:pb-0 md:pt-0',
                'col-span-2 pt-6 md:col-span-1 md:pt-0'
              ][idx];

              return (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className={`flex flex-col items-center text-center px-4 group cursor-default ${borderClasses}`}
                >
                  {/* Subtle Circular Icon Container */}
                  <div className={`w-15 h-15 rounded-xl border flex items-center justify-center mb-4 transition-transform duration-300 group-hover:-translate-y-0.5 ${stat.accent}`}>
                    <StatIcon className="w-8 h-8 stroke-[1.5]" />
                  </div>

                  {/* Value */}
                  <h3 className="flex items-baseline">
                    {renderStatValue(stat.value, stat.suffix)}
                  </h3>

                  {/* Label */}
                  <p className="mt-2">
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
