'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy,
  Briefcase,
  Building,
  Heart,
  Globe,
  Landmark,
  Network,
  Workflow,
  Tv,
  Users,
} from 'lucide-react';

const eventTypes = [
  { title: 'Conferences', description: 'Multi-track academic, scientific, or corporate annual conferences.', icon: Trophy },
  { title: 'Exhibitions', description: 'Large-scale trade shows with exhibitor booths and lead collection.', icon: Briefcase },
  { title: 'Corporate Events', description: 'AGMs, product launches, partner summits, and town halls.', icon: Building },
  { title: 'Medical Congresses', description: 'Highly regulated academic healthcare symposiums with abstract submissions.', icon: Heart },
  { title: 'Trade Missions', description: 'International delegations, B2B matchmaking, and high-level bilateral summits.', icon: Globe },
  { title: 'Government Events', description: 'Secure protocols, VIP registrations, and multi-agency coordination.', icon: Landmark },
  { title: 'Summits', description: 'Exclusive high-profile meetings for heads of state, CEOs, or field experts.', icon: Network },
  { title: 'Workshops', description: 'Interactive training sessions, breakout classes, and certifications.', icon: Workflow },
  { title: 'Hybrid Events', description: 'Blending on-site experiences with virtual streams and chat tools.', icon: Tv },
  { title: 'Networking Events', description: 'Icebreakers, matchmaking speed-meetings, and gala dinners.', icon: Users },
];

const iconStyle = 'text-accent-purple dark:text-purple-400 bg-purple-50 dark:bg-purple-950/20 border-purple-100/50 dark:border-purple-900/30';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
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

export default function TrustedBy() {
  return (
    <section id="event-types" className="py-24 bg-white dark:bg-[#070b19] dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-primary dark:text-white">
            Built for Large-Scale, Complex Events
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            From single-day workshops to massive global summits, our software scales to meet the unique needs of different industries and formats.
          </p>
        </div>

        {/* Event Type Cards — all 10 visible, 5 per row on desktop */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
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
                className="glass-card p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:border-accent-purple/30 group"
              >
                <div className={`w-12 h-12 rounded-full border flex items-center justify-center mb-4 transition-transform duration-300 group-hover:-translate-y-0.5 ${iconStyle}`}>
                  <IconComponent className="w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="font-display font-bold text-base text-primary dark:text-white mb-2">
                  {event.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-light text-sm">
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
