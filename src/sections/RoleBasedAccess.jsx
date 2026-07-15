'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldAlert, 
  Settings, 
  Briefcase, 
  Mic, 
  Award, 
  Store, 
  UserCheck, 
  User, 
  Smartphone 
} from 'lucide-react';

export default function RoleBasedAccess() {
  const roles = [
    { title: 'Super Admin', icon: ShieldAlert, desc: 'Full tenant controls, payment keys configurations, global metrics, organizations profiles, billing keys.' },
    { title: 'Event Organizer', icon: Settings, desc: 'Manage agendas, speaker portals, registration database, coupon codes, onsite hardware, travel tracking.' },
    { title: 'Client / Event Host', icon: Briefcase, desc: 'Access real-time reports, financial balances summaries, ticket sales velocities, sponsor status views.' },
    { title: 'Speaker', icon: Mic, desc: 'Upload bios, submit slides, manage presentation sessions details, view session polls, download certificates.' },
    { title: 'Sponsor', icon: Award, desc: 'Modify sponsor branding banners, upload lead materials, view B2B meeting matches list, check sponsor ROI data.' },
    { title: 'Exhibitor', icon: Store, desc: 'Customize digital booths, allocate staff badges, download scanner app, scan delegate barcodes at booths.' },
    { title: 'Delegate', icon: UserCheck, desc: 'Configure B2B matchmaking availability, select sessions, reserve hotels, upload flight detail documents.' },
    { title: 'Attendee', icon: User, desc: 'View sessions agenda, build personal track calendars, request B2B meetings, submit feedback surveys.' },
    { title: 'Onsite Staff', icon: Smartphone, desc: 'Access check-in app scanners, verify registrations, override badges print commands, register walk-ins.' }
  ];

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

  return (
    <section className="py-24 bg-white dark:bg-[#070b19] border-y border-slate-100 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-accent-purple/30 bg-accent-purple/5 text-accent-purple text-xs font-semibold mb-4">
            <span>Granular Permissions</span>
          </div>
          <h2 className="font-display text-primary dark:text-white">
            Role-Based Access for Safe Collaboration
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Secure workspaces tailored for everyone. Keep system configurations locked while empowering participants to manage their assets.
          </p>
        </div>

        {/* Roles Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {roles.map((role) => {
            const IconComp = role.icon;
            return (
              <motion.div
                key={role.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -4 }}
                className="glass-card p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/40 hover:shadow-lg transition-all duration-300 flex items-start space-x-4"
              >
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-350">
                  <IconComp className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-primary dark:text-white mb-2">
                    {role.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                    {role.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
