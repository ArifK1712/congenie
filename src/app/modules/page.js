'use client';

import React from 'react';
import Modules from '../../sections/Modules';
import RoleBasedAccess from '../../sections/RoleBasedAccess';
import { motion } from 'framer-motion';
import { Sparkles, Terminal, Shield, Cpu, RefreshCw, CheckCircle2 } from 'lucide-react';

export default function ModulesPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#030712] transition-colors duration-300">
      
      {/* Visual Header */}
      <div className="pt-32 pb-16 bg-gradient-to-b from-[#0a0f24] to-[#030712] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.025)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-purple/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-4 relative z-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-accent-purple/35 bg-accent-purple/5 text-accent-purple text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Developer & Admin Suite</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl tracking-tight max-w-4xl mx-auto">
            Interactive Platform Modules Library
          </h1>
          <p className="mt-6 text-sm sm:text-base text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
            Dive deep into the functional modules that compose the ConGenie event tech stack. Explore interactive simulated dashboard consoles below.
          </p>
        </div>
      </div>

      {/* Renders the Spectacular interactive 3-column command center console */}
      <Modules />

      {/* Renders Role-Based access lists */}
      <RoleBasedAccess />

      {/* Technical Workflow / Security section */}
      <section className="py-24 bg-slate-100/50 dark:bg-[#040612] border-t border-slate-200/50 dark:border-slate-900 relative">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Tech overview */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-[10px] font-bold text-accent-purple uppercase tracking-widest block">System Security & Operations</span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary dark:text-white leading-tight">
                Enterprise Infrastructure You Can Rely On
              </h2>
              <p className="text-xs sm:text-sm text-slate-550 dark:text-slate-400 font-light leading-relaxed">
                ConGenie is built for zero-downtime operations. Whether running offline barcode scans or processing Stripe transactions, our systems guarantee data consistency and secure protocols.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-xl bg-accent-purple/10 text-accent-purple shrink-0">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-primary dark:text-white">SOC2 & GDPR Compliance</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-light">Data isolation, local database hosting options, and full GDPR cookie consent workflows.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-xl bg-accent-cyan/10 text-accent-cyan shrink-0">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-primary dark:text-white">Robust REST APIs</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-light">Directly sync registration data with Salesforce, HubSpot, and regional membership systems.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Workflow card console */}
            <div className="lg:col-span-6">
              <div className="bg-white dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 rounded-[28px] p-6 sm:p-8 shadow-xl">
                <div className="flex items-center space-x-2 pb-4 border-b border-slate-100 dark:border-slate-800 mb-6">
                  <Terminal className="w-4 h-4 text-accent-purple" />
                  <span className="font-mono text-xs text-slate-450 dark:text-slate-500 font-bold uppercase">Automated Lifecycle Workflow</span>
                </div>

                <div className="space-y-4">
                  {[
                    { step: '01', title: 'Webhooks Triggered', desc: 'Attendee registers via CRM; API syncs details and issues custom ticket QR.' },
                    { step: '02', title: 'AI Matchmaking Schedule', desc: 'System parses buyer categories and allocates speedmeeting rooms and tables.' },
                    { step: '03', title: 'Onsite Check-in Broadcast', desc: 'Scan at entrance prints badge and records arrival timestamp in local DB.' },
                    { step: '04', title: 'Post-Event Revenue Audit', desc: 'Auto-generates financial returns charts and sends receipts to delegate emails.' }
                  ].map((wf, idx) => (
                    <div key={idx} className="flex space-x-4">
                      <span className="font-mono font-black text-sm text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/20 w-8 h-8 rounded-full flex items-center justify-center shrink-0">
                        {wf.step}
                      </span>
                      <div className="text-left">
                        <h4 className="font-bold text-sm text-primary dark:text-white">{wf.title}</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-light">{wf.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
