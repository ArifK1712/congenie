'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Presentation, 
  Building2, 
  Briefcase, 
  ClipboardCheck, 
  Handshake, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  Check,
  UserPlus,
  Calendar,
  Ticket,
  Users,
  Mail,
  QrCode,
  Award,
  BarChart3,
  Smartphone
} from 'lucide-react';

const moduleIcons = {
  'Registration': UserPlus,
  'Agenda Management': Calendar,
  'Ticketing & Payments': Ticket,
  'Attendee Management': Users,
  'Email Communication': Mail,
  'Onsite Check-in': ShieldCheck,
  'Badge Printing': QrCode,
  'Sponsor & Exhibitor': Award,
  'Reports & Analytics': BarChart3,
  'Mobile App': Smartphone
};

const moduleDescs = {
  'Registration': 'Custom form logic, conditional fields, ticket tier rules, and attendee onboarding workflows.',
  'Agenda Management': 'Dynamic multi-track schedulers, drag-and-drop conflict alerts, and session streams.',
  'Ticketing & Payments': 'Secure payment processing, multi-currency invoices, promo codes, and group bookings.',
  'Attendee Management': 'Centralised attendee database with approval workflows, categories, and communication tools.',
  'Email Communication': 'Drip marketing tools, personalised VIP invitations, automated confirmations, and SMS alerts.',
  'Onsite Check-in': 'Sub-2-second QR scanning, thermal printing kiosks, and real-time attendance tracking.',
  'Badge Printing': 'Custom badge design, bulk thermal printing, and self-service kiosk support.',
  'Sponsor & Exhibitor': 'Exhibitor scanning apps, interactive floor plans, lead collection, and branding zones.',
  'Reports & Analytics': 'Real-time financial dashboards, NPS logs, sponsor ROI reports, and post-event summaries.',
  'Mobile App': 'Attendee-facing app with personal schedule, matchmaking, session alerts, and digital badge.'
};

const solutionsData = [
  {
    id: 'conferences',
    tabTitle: 'Conferences',
    icon: Presentation,
    title: 'Conferences & Summits',
    longDescription: 'Multi-track academic agendas, speaker slide collectors, live polling, and intelligent scheduling for large-scale programs.',
    bullets: [
      'Multi-track agenda management',
      'Speaker and abstract workflows',
      'Live polling and audience Q&A',
      'Certificate and accreditation pathways'
    ],
    insight: 'Built for high-volume, multi-day programs',
    chips: ['Agenda Builder', 'Speaker Portals', 'Accreditation'],
    relatedModules: ['Agenda Management', 'Registration', 'Reports & Analytics', 'Mobile App']
  },
  {
    id: 'exhibitions',
    tabTitle: 'Exhibitions',
    icon: Building2,
    title: 'Exhibitions & Expos',
    longDescription: 'Manage exhibitors, floor plans, lead capture, booth activity, and visitor engagement from one connected platform.',
    bullets: [
      'Interactive floor maps',
      'Exhibitor lead retrieval app',
      'Sponsorship package builder',
      'Lead reporting dashboard'
    ],
    insight: 'Built for high-traffic exhibitions',
    chips: ['Exhibitor Portal', 'Lead Capture'],
    relatedModules: ['Sponsor & Exhibitor', 'Ticketing & Payments', 'Registration', 'Reports & Analytics']
  },
  {
    id: 'corporate',
    tabTitle: 'Corporate',
    icon: Briefcase,
    title: 'Corporate Events & AGMs',
    longDescription: 'Deliver secure, branded corporate events with registration, document access, voting, and SSO support.',
    bullets: [
      'SAML SSO & secure access pathways',
      'Live polling & anonymous voting',
      'Branded attendee app experience',
      'Resource and document libraries'
    ],
    insight: 'Built for secure corporate operations',
    chips: ['Secure Access', 'White Label', 'SSO'],
    relatedModules: ['Registration', 'Email Communication', 'Onsite Check-in', 'Mobile App']
  },
  {
    id: 'medical',
    tabTitle: 'Medical',
    icon: ClipboardCheck,
    title: 'Medical Congresses',
    longDescription: 'Support abstracts, CME credits, scientific committees, certificates, and faculty workflows for medical events.',
    bullets: [
      'Abstract review & grading workflows',
      'CME credit tracking & certificates',
      'Scientific committee admin panels',
      'Faculty & speaker slide management'
    ],
    insight: 'Built for CME and abstract protocols',
    chips: ['Abstract Review', 'CME Tracking'],
    relatedModules: ['Registration', 'Agenda Management', 'Badge Printing', 'Reports & Analytics']
  },
  {
    id: 'trade',
    tabTitle: 'Trade Missions',
    icon: Handshake,
    title: 'Trade Missions',
    longDescription: 'Coordinate buyers, sellers, delegations, matchmaking, meeting schedules, and business outcomes.',
    bullets: [
      'Interest-based B2B matchmaking matrix',
      'Delegate flight & lodging coordination',
      'Custom appointment scheduler tool',
      'Matchmaking feedback & ROI reports'
    ],
    insight: 'Built for high-value B2B connections',
    chips: ['B2B Matchmaking', 'Meeting Scheduler'],
    relatedModules: ['Registration', 'Attendee Management', 'Email Communication', 'Reports & Analytics']
  },
  {
    id: 'government',
    tabTitle: 'Government',
    icon: ShieldCheck,
    title: 'Government Summits',
    longDescription: 'Enable secure check-in, VIP protocols, encrypted credentials, delegate management, and offline validation.',
    bullets: [
      'VIP protocols & security badge flow',
      'Encrypted delegate records & credentials',
      'Offline local database override system',
      'Multi-agency check-in coordination'
    ],
    insight: 'Built for secure high-level events',
    chips: ['Secure Validation', 'VIP Protocols'],
    relatedModules: ['Onsite Check-in', 'Badge Printing', 'Registration', 'Attendee Management']
  }
];

export default function MergedSolutions() {
  const [activeTab, setActiveTab] = useState('conferences');

  const activeSolution = solutionsData.find(s => s.id === activeTab) || solutionsData[0];

  return (
    <section 
      id="solutions"
      className="py-20 lg:py-24 bg-white dark:bg-[#030712] transition-colors duration-300 relative overflow-hidden"
    >
      {/* Decorative glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-purple/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-cyan/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Subtle Dot Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(147,51,234,0.015)_1px,transparent_1px)] [background-size:2rem_2rem] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-accent-purple/35 bg-accent-purple/5 text-accent-purple text-xs font-semibold mb-4 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-accent-purple" />
            <span>Platform Solutions</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-primary dark:text-white tracking-tight leading-tight">
            Everything You Need to Run Any Event
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-500 dark:text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
            From conferences and exhibitions to medical congresses, trade missions, and corporate events, ConGenie delivers purpose-built modules customized for your event environment.
          </p>
        </div>

        {/* Tab Selector Buttons (Horizontal Scroll on Mobile) */}
        <div className="flex overflow-x-auto pb-4 mb-10 gap-2 dark:border-slate-900 scrollbar-thin">
          <div className="flex mx-auto gap-2 px-4 md:px-0">
            {solutionsData.map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    isActive 
                      ? 'bg-accent-purple text-white shadow-lg shadow-accent-purple/20' 
                      : 'border border-slate-200/60 dark:border-slate-800/40 bg-white/50 dark:bg-[#0c1228]/35 text-slate-500 hover:text-accent-purple hover:border-accent-purple/40 dark:text-slate-400 dark:hover:text-white'
                  }`}
                >
                  <TabIcon className="w-4 h-4" />
                  <span>{tab.tabTitle}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Tab Content Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
          >
            {/* Left Column: Solution Details */}
            <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/50 bg-white dark:bg-slate-950/40">
              <div className="space-y-6">
                <div>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-primary dark:text-white tracking-tight leading-tight">
                    {activeSolution.title}
                  </h3>
                  <p className="mt-3 text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                    {activeSolution.longDescription}
                  </p>
                </div>

                {/* Bullets List */}
                <div className="space-y-3 pt-2">
                  {activeSolution.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-center space-x-3 text-slate-650 dark:text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-accent-purple/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-accent-purple" />
                      </div>
                      <span className="text-sm font-light">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Insight Card */}
              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-900">
                <div className="bg-accent-purple/5 border border-accent-purple/10 p-4 rounded-2xl">
                  <span className="block font-mono text-xs font-bold uppercase text-accent-purple tracking-wider mb-1">Platform Insight</span>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-light">{activeSolution.insight}</p>
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Relevant Modules Grid */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="text-left mb-6">
                <span className="text-xs font-mono font-bold text-accent-purple uppercase tracking-wider block mb-1">
                  RELEVANT MODULES
                </span>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  These core modules support the specific needs of {activeSolution.title}.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeSolution.relatedModules.map((moduleName, idx) => {
                  const ModuleIcon = moduleIcons[moduleName] || Users;
                  const moduleDesc = moduleDescs[moduleName] || '';
                  return (
                    <div
                      key={idx}
                      className="bg-white dark:bg-slate-900/30 border border-slate-200/80 dark:border-slate-800/80 p-5 rounded-2xl text-left hover:border-accent-purple/40 hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 w-max text-accent-purple group-hover:bg-accent-purple/10 transition-colors duration-300 mb-4">
                        <ModuleIcon className="w-5 h-5" />
                      </div>
                      <h4 className="font-display font-bold text-sm sm:text-base text-primary dark:text-white mb-2">
                        {moduleName}
                      </h4>
                      <p className="text-slate-500 dark:text-slate-400 font-light leading-relaxed text-sm">
                        {moduleDesc}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* View all modules link */}
              <div className="text-right mt-6">
                <a
                  href="/features"
                  className="inline-flex items-center space-x-1 text-xs font-semibold text-accent-purple hover:text-[#6c28e2] transition-colors"
                >
                  <span>View All Modules</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
