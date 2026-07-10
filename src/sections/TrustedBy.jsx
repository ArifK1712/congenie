'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Tv, 
  Building, 
  Heart, 
  Globe, 
  Landmark, 
  Trophy, 
  Users, 
  Briefcase, 
  Workflow, 
  Network 
} from 'lucide-react';

export default function TrustedBy() {
  const eventTypes = [
    { title: 'Conferences', description: 'Multi-track academic, scientific, or corporate annual conferences.', icon: Trophy, color: 'text-blue-500 bg-blue-500/10' },
    { title: 'Exhibitions', description: 'Large-scale trade shows with exhibitor booths and lead collection.', icon: Briefcase, color: 'text-cyan-500 bg-cyan-500/10' },
    { title: 'Corporate Events', description: 'AGMs, product launches, partner summits, and town halls.', icon: Building, color: 'text-purple-500 bg-purple-500/10' },
    { title: 'Medical Congresses', description: 'Highly regulated academic healthcare symposiums with abstract submissions.', icon: Heart, color: 'text-red-500 bg-red-500/10' },
    { title: 'Trade Missions', description: 'International delegations, B2B matchmaking, and high-level bilateral summits.', icon: Globe, color: 'text-emerald-500 bg-emerald-500/10' },
    { title: 'Government Events', description: 'Secure protocols, VIP registrations, and multi-agency coordination.', icon: Landmark, color: 'text-amber-500 bg-amber-500/10' },
    { title: 'Summits', description: 'Exclusive high-profile meetings for heads of state, CEOs, or field experts.', icon: Network, color: 'text-indigo-500 bg-indigo-500/10' },
    { title: 'Workshops', description: 'Interactive training sessions, breakout classes, and certifications.', icon: Workflow, color: 'text-pink-500 bg-pink-500/10' },
    { title: 'Hybrid Events', description: 'Blending on-site experiences with virtual streams and chat tools.', icon: Tv, color: 'text-violet-500 bg-violet-500/10' },
    { title: 'Networking Events', description: 'Icebreakers, matchmaking speed-meetings, and gala dinners.', icon: Users, color: 'text-teal-500 bg-teal-500/10' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section className="py-24 bg-white dark:bg-[#070b19] border-y border-slate-100 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary dark:text-white">
            Built for Large-Scale, Complex Events
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            From single-day workshops to massive global summits, our software scales to meet the unique needs of different industries and formats.
          </p>
        </div>

        {/* Logo cloud or clean list of event types */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {eventTypes.map((event) => {
            const IconComponent = event.icon;
            return (
              <motion.div
                key={event.title}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                className="glass-card p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl group"
              >
                <div className={`p-4 rounded-xl ${event.color} transition-all duration-300 group-hover:scale-110 mb-4`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-base text-primary dark:text-white mb-2">
                  {event.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                  {event.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
