'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Mail, 
  QrCode, 
  FileText, 
  Calendar, 
  Award, 
  Bot, 
  PlayCircle 
} from 'lucide-react';

export default function Automation() {
  const workflows = [
    {
      trigger: 'On Registration',
      triggerIcon: PlayCircle,
      actions: [
        { name: 'Dispatched Confirmation Email', icon: Mail },
        { name: 'Generated Entry QR Code', icon: QrCode }
      ]
    },
    {
      trigger: 'On B2B Match Confirmed',
      triggerIcon: Bot,
      actions: [
        { name: 'Blocked Calendars slots', icon: Calendar },
        { name: 'Sent meeting invites to both parties', icon: Mail }
      ]
    },
    {
      trigger: 'On Session Checkout',
      triggerIcon: QrCode,
      actions: [
        { name: 'Dispatched survey feedback form', icon: FileText },
        { name: 'Auto-released Attendance Certificate', icon: Award }
      ]
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-[#070b19] border-y border-slate-100 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-accent-purple/30 bg-accent-purple/5 text-accent-purple text-xs font-semibold mb-4">
            <span>Workflow Automation</span>
          </div>
          <h2 className="font-display text-primary dark:text-white">
            Set It on Autopilot with Event Workflows
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Define automated rules that trigger emails, reminders, and documents updates based on participant actions.
          </p>
        </div>

        {/* Workflows Diagram */}
        <div className="space-y-12 max-w-4xl mx-auto">
          {workflows.map((flow, idx) => {
            const TriggerIcon = flow.triggerIcon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col md:flex-row items-center justify-between p-6 sm:p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/40 bg-slate-50 dark:bg-slate-900/30 gap-6"
              >
                {/* Trigger Block */}
                <div className="flex items-center space-x-4 w-full md:w-1/3">
                  <div className="p-3 rounded-2xl bg-accent-blue/15 text-accent-blue flex-shrink-0">
                    <TriggerIcon className="w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <span className="text-[10px] text-accent-blue font-bold uppercase tracking-wider">Trigger Event</span>
                    <h3 className="text-base font-bold text-slate-850 dark:text-slate-100">{flow.trigger}</h3>
                  </div>
                </div>

                {/* Connection arrow on larger screens */}
                <div className="hidden md:flex text-slate-350 dark:text-slate-700 flex-1 justify-center">
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                    <div className="h-[2px] w-12 bg-slate-200 dark:bg-slate-800" />
                    <ArrowRight className="w-4 h-4 text-accent-blue" />
                  </div>
                </div>

                {/* Actions Block */}
                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-1/2">
                  {flow.actions.map((act, actIdx) => {
                    const ActIcon = act.icon;
                    return (
                      <div
                        key={actIdx}
                        className="flex-1 glass-card p-4 rounded-2xl border border-slate-200/50 dark:border-slate-800/40 flex items-center space-x-3 hover:border-accent-cyan/30 transition-all duration-300"
                      >
                        <div className="p-2 rounded-lg bg-accent-cyan/10 text-accent-cyan flex-shrink-0">
                          <ActIcon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 leading-tight">
                          {act.name}
                        </span>
                      </div>
                    );
                  })}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
