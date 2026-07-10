'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, HeartHandshake, Rocket, Laptop, Target, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="pt-24 min-h-screen bg-slate-50 dark:bg-[#030712] transition-colors duration-300">
      
      {/* Background glowing effects */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-accent-purple/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Hero section */}
      <div className="max-w-[1400px] mx-auto px-4 py-16 sm:py-24 relative z-10 text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-accent-purple/35 bg-accent-purple/5 text-accent-purple text-xs font-semibold mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Product Mission</span>
        </div>
        <h1 className="font-display font-extrabold text-4xl sm:text-6.5xl text-primary dark:text-white tracking-tight leading-tight max-w-4xl mx-auto">
          Simplifying the Event Lifecycle Through Intelligent Tech
        </h1>
        <p className="mt-6 text-sm sm:text-base text-slate-550 dark:text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
          ConGenie was created to unite disjointed event tools—such as ticketing databases, abstract reviewer grids, check-in kiosks, and B2B scheduling widgets—into a single, high-fidelity command dashboard.
        </p>
      </div>

      {/* Section 1: Target Audiences & Mission */}
      <div className="max-w-[1400px] mx-auto px-4 pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6 text-left">
            <span className="text-[10px] font-bold text-accent-purple uppercase tracking-widest block">Core Positioning</span>
            <h2 className="font-display font-extrabold text-3xl text-primary dark:text-white">
              Who is ConGenie Built For?
            </h2>
            <p className="text-xs sm:text-sm text-slate-550 dark:text-slate-400 leading-relaxed font-light">
              We design software for organizers managing high-complexity operations, commercial B2B matchmaking, and high-security parameters. Our platform empowers:
            </p>
            
            <div className="space-y-4">
              {[
                { title: 'Professional Conference Organizers (PCOs)', desc: 'Managing hundreds of scientific speakers, peer reviews, CME credits, and multi-track sessions.' },
                { title: 'Trade Exhibition Directors', desc: 'Maximizing commercial B2B buyer-seller matchmaking meetings, booth logs, and sponsor ROI values.' },
                { title: 'Corporate & Government Admits', desc: 'Enforcing secure SSO registrations, whitelist credentials, and offline-compatible gate operations.' }
              ].map((item, idx) => (
                <div key={idx} className="flex space-x-3 items-start">
                  <div className="p-1 rounded bg-green-500/10 text-green-500 shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-slate-805 dark:text-slate-205">{item.title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-light mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual block */}
          <div className="bg-[#070a1e]/40 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-8 shadow-xl text-left relative overflow-hidden backdrop-blur-md">
            <div className="absolute top-[-2rem] right-[-2rem] w-32 h-32 bg-accent-purple/10 rounded-full blur-2xl" />
            
            <Target className="w-8 h-8 text-accent-purple mb-6" />
            <h3 className="font-display font-extrabold text-xl text-primary dark:text-white mb-3">Why We Created ConGenie</h3>
            <p className="text-xs sm:text-sm text-slate-550 dark:text-slate-400 font-light leading-relaxed mb-4">
              After coordinating events for years, we noticed coordinators were constantly copying registrant spreadsheets between separate ticketing systems, abstract review grids, check-in apps, and matchmaking widgets.
            </p>
            <p className="text-xs sm:text-sm text-slate-550 dark:text-slate-400 font-light leading-relaxed">
              We built ConGenie to resolve this fragmentation. By deploying a unified database that connects all modules, data flows seamlessly between pre-event setup, onsite logistics, and post-event audits.
            </p>
          </div>

        </div>
      </div>

      {/* Section 2: Tech Approach & Enterprise Readiness */}
      <div className="bg-white dark:bg-[#070b19] border-y border-slate-200/60 dark:border-slate-900 py-24 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-bold text-accent-cyan uppercase tracking-widest block mb-2">Enterprise Ready</span>
            <h2 className="font-display font-extrabold text-3xl text-primary dark:text-white">
              Secure, Scalable & Compliant Infrastructure
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="space-y-4 text-left">
              <div className="p-3 bg-accent-purple/15 text-accent-purple rounded-2xl w-max">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-display font-extrabold text-lg text-primary dark:text-white">SOC2 & GDPR Compliance</h3>
              <p className="text-xs sm:text-sm text-slate-550 dark:text-slate-450 font-light leading-relaxed">
                We prioritize user privacy and system security. Isolated database schemas, regional EU/US hosting preferences, automated cookie checks, and SAML/SSO directory syncing options.
              </p>
            </div>

            <div className="space-y-4 text-left">
              <div className="p-3 bg-accent-cyan/15 text-accent-cyan rounded-2xl w-max">
                <Laptop className="w-6 h-6" />
              </div>
              <h3 className="font-display font-extrabold text-lg text-primary dark:text-white">API Integrations</h3>
              <p className="text-xs sm:text-sm text-slate-550 dark:text-slate-450 font-light leading-relaxed">
                Connect your event registration streams directly to corporate CRM systems like Salesforce, HubSpot, or internal university membership rosters via REST webhooks.
              </p>
            </div>

            <div className="space-y-4 text-left">
              <div className="p-3 bg-accent-blue/15 text-accent-blue rounded-2xl w-max">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-display font-extrabold text-lg text-primary dark:text-white">99.9% Uptime SLA</h3>
              <p className="text-xs sm:text-sm text-slate-550 dark:text-slate-450 font-light leading-relaxed">
                Built on high-availability server clusters to guarantee stable page load speeds and offline-first check-in capabilities even under heavy attendee traffic.
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* Section 3: Onboarding & Implementation approach */}
      <div className="max-w-[1400px] mx-auto px-4  py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 text-left space-y-6">
            <span className="text-[10px] font-bold text-accent-purple uppercase tracking-widest block">Implementation SLA</span>
            <h2 className="font-display font-extrabold text-3xl text-primary dark:text-white">
              Hands-On Support & Guided Onboarding
            </h2>
            <p className="text-xs sm:text-sm text-slate-550 dark:text-slate-400 leading-relaxed font-light">
              We do not just hand over login details and walk away. Every enterprise client is paired with a dedicated onboarding manager who assists with:
            </p>

            <ul className="space-y-3">
              {[
                'Custom CSS layouts and site design styling',
                'Agenda CSV formats cleanups and speaker imports',
                'Regional Stripe integration and invoice setup routing',
                'Onsite coordinator dry run drills and local staff onboarding'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-2 text-xs sm:text-sm text-slate-650 dark:text-slate-350">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#070a1e]/40 p-8 rounded-3xl text-center space-y-6">
            <Rocket className="w-8 h-8 text-accent-cyan mx-auto" />
            <h3 className="font-display font-extrabold text-xl text-primary dark:text-white">Ready to run smarter events?</h3>
            <p className="text-xs text-slate-550 dark:text-slate-400 font-light max-w-sm mx-auto">
              Our implementation timelines average 2-4 weeks from contract to portal deployment. Let us run a audit on your event needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-accent-purple hover:bg-[#6c28e2] text-white text-xs font-black px-6 py-3.5 rounded-xl shadow-lg shadow-accent-purple/20 transition-all"
            >
              <span>Book Discovery Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>

    </main>
  );
}
