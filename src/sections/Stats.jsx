'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Counter from '../components/Counter';
import { Sparkles, Calendar, Layers, Headphones, Cpu } from 'lucide-react';

export default function Stats() {
  const stats = [
    { label: 'Registrations Managed', value: '100K+', icon: Cpu, color: 'from-blue-500 to-cyan-500' },
    { label: 'Events Supported', value: '500+', icon: Calendar, color: 'from-cyan-500 to-teal-500' },
    { label: 'Feature Modules', value: '50+', icon: Layers, color: 'from-indigo-500 to-purple-500' },
    { label: 'Platform Reliability', value: '99.9%', icon: Sparkles, color: 'from-purple-500 to-pink-500' },
    { label: 'Customer Support Response', value: '24/7', icon: Headphones, color: 'from-pink-500 to-red-500' }
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#070b19] border-y border-slate-100 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
          {stats.map((stat, idx) => {
            const StatIcon = stat.icon;
            // Parse non-numerical parts for the static view, but pass whole string to Counter component
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex flex-col items-center text-center p-6 rounded-2xl border border-slate-100 dark:border-slate-800/40 bg-slate-50/50 dark:bg-slate-900/10 hover:shadow-md transition-shadow"
              >
                <div className={`p-3 rounded-xl bg-gradient-to-tr ${stat.color} text-white mb-4 shadow-sm`}>
                  <StatIcon className="w-5 h-5" />
                </div>
                
                {/* Counter */}
                <h3 className="font-display font-black text-3xl sm:text-4xl text-primary dark:text-white tracking-tight">
                  {stat.value.includes('/') ? (
                    <span>{stat.value}</span>
                  ) : (
                    <Counter value={stat.value} duration={1.8} />
                  )}
                </h3>
                
                <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
