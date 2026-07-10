'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Small Events',
      desc: 'Perfect for smaller workshops, executive courses, and local corporate meetings.',
      features: [
        'Up to 250 Registrants limit',
        'Custom Registration Form builder',
        'Multi-currency Ticketing Gateway',
        'Standard Email Confirmations',
        'QR Check-in scanner access'
      ],
      recommended: false
    },
    {
      name: 'Conferences',
      desc: 'Ideal for multi-track academic congresses, association meetings, and regional summits.',
      features: [
        'Up to 1,500 Registrants limit',
        'Multi-day multi-track Agenda',
        'Speaker submission portal access',
        'Basic AI agenda planners helper',
        'Automated Badging print setup',
        'Email campaign automation builder'
      ],
      recommended: false
    },
    {
      name: 'Enterprise Events',
      desc: 'For large trade shows, exhibitions, international congresses, and summits.',
      features: [
        'Unlimited Registrants',
        'Advanced B2B Matchmaking engine',
        'Exhibitor lead scanning logins',
        'Accommodation & travel visa trackers',
        'White-label Web & Attendee app options',
        'Dedicated event success support manager'
      ],
      recommended: true
    },
    {
      name: 'Custom Platform',
      desc: 'Custom multi-tenant platform for government bureaus, event agencies, and venues.',
      features: [
        'Multi-event portal dashboards',
        'Custom SSO (SAML/Okta) login sync',
        'Sandbox testing environments access',
        'Granular API integrations mappings',
        'Custom SLAs & server hosting options'
      ],
      recommended: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white dark:bg-[#070b19] border-t border-slate-100 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-accent-blue/30 bg-accent-blue/5 text-accent-blue text-xs font-semibold mb-4">
            <span>Enterprise Tiers</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary dark:text-white">
            Flexible Licensing Tiers for Every Scale
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Choose a plan that fits your attendee volume and required modules. Select a preloaded template or request custom keys.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={`relative rounded-3xl p-[1px] ${
                plan.recommended
                  ? 'bg-gradient-to-tr from-accent-cyan via-accent-blue to-accent-purple shadow-xl'
                  : 'bg-slate-200/60 dark:bg-slate-800/40'
              }`}
            >
              <div className="glass-card h-full p-8 rounded-[23px] flex flex-col justify-between relative overflow-hidden bg-white dark:bg-[#090f25]/90">
                {plan.recommended && (
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-accent-purple to-accent-blue text-[8px] font-black uppercase text-white px-4 py-1.5 rounded-bl-xl tracking-wider flex items-center space-x-1">
                    <Sparkles className="w-3 h-3 text-white" />
                    <span>Recommended</span>
                  </div>
                )}

                <div>
                  <h3 className="font-display font-black text-xl text-primary dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 min-h-[50px] leading-relaxed font-light mb-6">
                    {plan.desc}
                  </p>
                  
                  <hr className="border-slate-100 dark:border-slate-800/60 mb-6" />

                  {/* Feature lists */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start space-x-2.5 text-xs text-slate-650 dark:text-slate-350">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contact"
                  className={`block text-center py-3.5 rounded-xl text-xs font-bold transition-all duration-300 ${
                    plan.recommended
                      ? 'bg-accent-purple hover:bg-[#6c28e2] text-white'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-850'
                  }`}
                >
                  Request Pricing
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
