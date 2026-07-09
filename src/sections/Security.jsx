'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Lock, 
  Database, 
  CloudLightning, 
  Activity, 
  Globe, 
  FileLock, 
  HardDriveUpload 
} from 'lucide-react';

export default function Security() {
  const points = [
    { title: 'Role-Based Permissions', desc: 'Isolate sensitive tenant properties. Restrict speaker edits and delegate profiles securely.', icon: ShieldCheck },
    { title: 'Secure Payment Handling', desc: 'PCI-DSS compliant checkouts direct to your Stripe/gateway account. No credit cards storage.', icon: Lock },
    { title: 'Enterprise Data Encryption', desc: 'All data is encrypted in transit using TLS 1.3 and at rest using AES-256 standards.', icon: Database },
    { title: 'Cloud-Ready Autoscaling', desc: 'Built on AWS multi-region infrastructure. Instantly scales to handle traffic spikes during major ticket releases.', icon: CloudLightning },
    { title: 'Multi-Event Tenant Sync', desc: 'Run multiple exhibitions, congresses, or meetings simultaneously under one brand umbrella.', icon: Activity },
    { title: 'Multi-Language & Locale', desc: 'Support international registrations with multi-lingual UI translation routing out of the box.', icon: Globe },
    { title: 'Immutable Audit Logs', desc: 'Track every action taken by organizers, staffs, and admins with detailed access histories.', icon: FileLock },
    { title: 'Backup-Ready Architecture', desc: 'Daily database backup nodes stored in geo-redundant isolated clouds for maximum safety.', icon: HardDriveUpload }
  ];

  return (
    <section className="py-24 bg-white dark:bg-[#070b19] border-t border-slate-100 dark:border-slate-900 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/5 text-green-600 dark:text-green-400 text-xs font-semibold mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>High Security Standards</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary dark:text-white">
            Enterprise-Grade Security & Global Scalability
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Trusted by governments and international congresses. We guarantee data privacy, compliance, and flawless platform reliability.
          </p>
        </div>

        {/* Grid of Security Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((p, idx) => {
            const SecurityIcon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="glass-card p-6 rounded-2xl border border-slate-200/50 dark:border-slate-800/40 hover:border-accent-blue/30 dark:hover:border-accent-cyan/30 transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 w-fit mb-6">
                    <SecurityIcon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-base text-primary dark:text-white mb-3">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                    {p.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
