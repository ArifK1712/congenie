'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Check, ChevronDown, ChevronUp, HelpCircle, ArrowRight } from 'lucide-react';

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
    recommended: false,
    cta: 'Book Demo'
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
    recommended: false,
    cta: 'Book Demo'
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
    recommended: true,
    cta: 'Request Pricing'
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
    recommended: false,
    cta: 'Contact Sales'
  }
];

const faqs = [
  {
    q: 'Do you charge commission fees on ticket sales?',
    a: 'No. Unlike traditional platforms that take 2% to 5% per transaction, ConGenie operates on a flat license fee based on your expected attendee count and modules. All ticketing proceeds route directly to your Stripe or PayPal account.'
  },
  {
    q: 'Are onsite badging hardware tools included in the plans?',
    a: 'Our software integrates with standard iPad check-in stands and Brother or Zebra thermal printers. We can lease hardware packs (printers, scanners, iPads, and router bridges) or guide your local suppliers on compatibility.'
  },
  {
    q: 'Can we run multiple events under a single subscription?',
    a: 'Yes. Our Conferences and Enterprise tiers allow you to subscribe to annual plans where you can spin up multiple separate event directories, sync agendas, and share credit matrices across your tenant.'
  },
  {
    q: 'Is our event data secure and GDPR-compliant?',
    a: 'Absolutely. We deploy separate isolated databases for enterprise tenants. We support full GDPR data erasure workflows, regional hosting (EU, US, or APAC databases), and TLS encryption.'
  },
  {
    q: 'What is your refund policy if an event is canceled?',
    a: 'We understand that event parameters change. If you need to postpone or cancel an event, we allow you to hold and rollover your registrant license balance to a future calendar date within 12 months.'
  }
];

export default function PricingPage() {
  const [openFaqIdx, setOpenFaqIdx] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  return (
    <main className="pt-24 min-h-screen bg-slate-50 dark:bg-[#030712] transition-colors duration-300">
      
      {/* Glow shapes */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-[600px] h-[600px] bg-accent-purple/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Hero section */}
      <div className="max-w-[1400px] mx-auto px-4 py-16 sm:py-24 relative z-10 text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-accent-purple/35 bg-accent-purple/5 text-accent-purple text-xs font-semibold mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Flexible Licensing</span>
        </div>
        <h1 className="font-display font-extrabold text-4xl sm:text-6.5xl text-primary dark:text-white tracking-tight leading-tight max-w-4xl mx-auto">
          Scale-Ready Licensing Built for Every Event Format
        </h1>
        <p className="mt-6 text-sm sm:text-base text-slate-550 dark:text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
          We operate on a flat licensing model based on your event scale and required modules. No hidden transaction commission surcharges. Select a plan below to request pricing or book a live demo.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="max-w-[1400px] mx-auto px-4 pb-20 relative z-10">
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
                  ? 'bg-gradient-to-tr from-accent-cyan via-accent-blue to-accent-purple shadow-xl shadow-accent-purple/5'
                  : 'bg-slate-200/60 dark:bg-slate-800/40 border border-slate-250 dark:border-slate-800/40'
              }`}
            >
              <div className="h-full p-6 sm:p-8 rounded-[23px] flex flex-col justify-between relative overflow-hidden bg-white dark:bg-[#090f25]/90">
                {plan.recommended && (
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-accent-purple to-accent-blue text-[8px] font-black uppercase text-white px-4 py-1.5 rounded-bl-xl tracking-wider flex items-center space-x-1">
                    <Sparkles className="w-3 h-3 text-white" />
                    <span>Recommended</span>
                  </div>
                )}

                <div>
                  <h3 className="font-display font-extrabold text-xl text-primary dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-slate-550 dark:text-slate-400 min-h-[50px] leading-relaxed font-light mb-6">
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

                <Link
                  href={`/contact?plan=${encodeURIComponent(plan.name)}`}
                  className={`block text-center py-3.5 rounded-xl text-xs font-bold transition-all duration-300 ${
                    plan.recommended
                      ? 'bg-accent-purple hover:bg-[#6c28e2] text-white shadow-lg shadow-accent-purple/20'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-850'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-accent-cyan/30 bg-accent-cyan/5 text-accent-cyan text-[10px] font-semibold mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Licensing FAQ</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl text-primary dark:text-white">
            Frequently Asked Pricing Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIdx === idx;
            return (
              <div 
                key={idx}
                className="bg-white dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between font-bold text-sm sm:text-base text-primary dark:text-white"
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-accent-purple" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-xs sm:text-sm text-slate-550 dark:text-slate-400 font-light leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-4">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Support Panel */}
        <div className="mt-16 text-center text-xs text-slate-500">
          Have an unlisted requirement?{' '}
          <Link href="/contact" className="text-accent-purple dark:text-accent-cyan font-bold hover:underline">
            Contact our event advisory team
          </Link>{' '}
          for custom layouts, multi-tenant billing models, or high-security government summit setups.
        </div>
      </div>

    </main>
  );
}
