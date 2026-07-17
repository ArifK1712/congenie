'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

// ─── FAQ data — update or extend as needed ───────────────────────────────────
const faqs = [
  {
    id: 'faq-1',
    question: 'Can ConGenie support multiple events simultaneously?',
    answer: 'Yes. ConGenie is built for multi-event management. Subscribe once and spin up unlimited separate event portals, each with its own registration forms, agenda, attendees, and reports — all managed from a single admin dashboard.',
  },
  {
    id: 'faq-2',
    question: 'Does ConGenie support in-person, virtual, and hybrid events?',
    answer: 'Absolutely. ConGenie supports all event formats. For in-person events, you get onsite check-in, badge printing, and session tracking. For virtual and hybrid events, you can integrate live streaming, virtual attendee portals, and online networking features.',
  },
  {
    id: 'faq-3',
    question: 'Can the platform be white-labelled?',
    answer: 'Yes. ConGenie offers white-labelling options so you can present the platform under your own brand — including custom domain, logo, colour scheme, and email templates — providing a seamless experience for your attendees.',
  },
  {
    id: 'faq-4',
    question: 'Does ConGenie include onsite check-in and badge printing?',
    answer: 'Yes. ConGenie includes a full onsite operations suite with sub-2-second QR code scanning, thermal badge printing, self-service kiosks, and real-time attendance tracking. The system works offline too, so connectivity issues never disrupt your event.',
  },
  {
    id: 'faq-5',
    question: 'Does ConGenie support Arabic and other languages?',
    answer: 'Yes. ConGenie supports multilingual configurations including Arabic (with RTL layout support), French, Spanish, and other languages. Registration forms, emails, and attendee-facing portals can be fully localised.',
  },
  {
    id: 'faq-6',
    question: 'Can ConGenie integrate with payment gateways?',
    answer: 'Yes. ConGenie integrates with leading payment gateways including Stripe, PayFort, and other regional processors. It supports multi-currency transactions, automated VAT invoicing, group bookings, promo codes, and refund management.',
  },
  {
    id: 'faq-7',
    question: 'Can users explore the platform before purchasing?',
    answer: 'Yes. You can explore ConGenie through our guided walkthrough or request a personalised demo with our team. Use the "Explore ConGenie" option above to browse the platform explorer, or book a demo for a full guided session tailored to your event type.',
  },
  {
    id: 'faq-8',
    question: 'How does onboarding work?',
    answer: 'Every ConGenie customer is paired with a dedicated onboarding manager who guides you through platform setup, imports your existing data, configures your registration forms, and conducts a dry run before your event goes live. Most clients are fully set up within one to two weeks.',
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="pt-16 bg-white transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-accent-purple/35 bg-accent-purple/5 text-accent-purple text-xs font-semibold mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FAQs</span>
          </div>
          <h2 className="font-display text-primary">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-slate-500 leading-relaxed">
            Everything you need to know about the ConGenie platform.
          </p>
        </div>

        {/* Accordion */}
        <dl className="space-y-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-accent-purple/40 shadow-lg shadow-accent-purple/5 bg-white'
                    : 'border-slate-200/70 bg-white hover:border-accent-purple/25'
                }`}
              >
                {/* Question button */}
                <dt>
                  <button
                    id={`${faq.id}-btn`}
                    aria-expanded={isOpen}
                    aria-controls={`${faq.id}-panel`}
                    onClick={() => toggle(faq.id)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-purple/50 focus-visible:ring-offset-2 rounded-2xl"
                  >
                    <span className={`font-display font-semibold text-sm sm:text-base leading-snug transition-colors duration-200 ${
                      isOpen ? 'text-accent-purple' : 'text-primary group-hover:text-accent-purple'
                    }`}>
                      {faq.question}
                    </span>
                    <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? 'bg-accent-purple/15 text-accent-purple rotate-180'
                        : 'bg-slate-100 text-slate-400 group-hover:bg-accent-purple/10 group-hover:text-accent-purple'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>
                </dt>

                {/* Answer panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.dd
                      id={`${faq.id}-panel`}
                      role="region"
                      aria-labelledby={`${faq.id}-btn`}
                      key={faq.id}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-slate-600">
                        {faq.answer}
                      </p>
                    </motion.dd>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </dl>

      </div>
    </section>
  );
}
