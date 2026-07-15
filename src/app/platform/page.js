'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, ArrowRight, Check, CheckCircle2, Brain, 
  ShieldCheck, Layers, Bot, Calendar, Users, 
  Activity, TrendingUp, Smartphone, Network, 
  Database, Mail, MessageSquare, BarChart3, 
  Zap, Workflow, Globe, QrCode, Printer, Shield,
  Layers3, HelpCircle, CheckSquare, Clock
} from 'lucide-react';

import FinalCTA from '../../sections/FinalCTA';

// Import newly generated unique visual assets
import platformHeroImage from '../../assets/platform-hero.png';
import platformRegistrationImage from '../../assets/platform-registration.png';
import platformAgendaImage from '../../assets/platform-agenda.png';
import platformEngagementImage from '../../assets/platform-engagement.png';
import platformOnsiteImage from '../../assets/platform-onsite.png';
import platformAnalyticsImage from '../../assets/platform-analytics.png';

export default function PlatformPage() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const showcaseTabs = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      title: 'Unified Command Console',
      desc: 'Get a bird\'s-eye view of your entire event lifecycle metrics. Real-time statistics, active registration trackers, and AI-driven warnings converge in one high-fidelity panel.',
      image: platformHeroImage
    },
    {
      id: 'registration',
      label: 'Registration',
      title: 'Conditional Registration Pipelines',
      desc: 'Design beautiful, conditional ticket checkout pages that dynamically adjust questions and calculations depending on registrant tier, coupon codes, and SSO status.',
      image: platformRegistrationImage
    },
    {
      id: 'agenda',
      label: 'Agenda',
      title: 'Multi-Track Schedule Planner',
      desc: 'Build complex, multi-track, multi-room schedules in minutes. Manage session capacity limits, speaker files, abstracts, and conflicts with drag-and-drop ease.',
      image: platformAgendaImage
    },
    {
      id: 'badge',
      label: 'Badge Printing',
      title: 'Fast Check-In & Badge Creator',
      desc: 'Deliver flawless check-in gates. Sync offline scanner profiles, run quick kiosk touchpoints, and print custom thermal badges in less than 2 seconds.',
      image: platformOnsiteImage
    },
    {
      id: 'analytics',
      label: 'Analytics',
      title: 'Revenue & Attendance Metrics',
      desc: 'Review multi-dimensional reports, sponsor booth visitor analytics, survey feedbacks, and export data directly to Salesforce, Excel, or internal systems.',
      image: platformAnalyticsImage
    },
    {
      id: 'mobile-app',
      label: 'Mobile App',
      title: 'Native Attendee Mobile App',
      desc: 'Keep attendees connected on the move. Provide digital schedules, push reminders, interactive venue maps, smart matchmaking networking, and Q&A.',
      image: platformEngagementImage
    }
  ];

  const timelinePhases = [
    {
      step: '01',
      title: 'Planning',
      desc: 'Map rooms, design multi-track layouts, build speaker collection forms, and assign abstract committees.'
    },
    {
      step: '02',
      title: 'Promotion',
      desc: 'Launch responsive event landing pages, configure promotional codes, and target invite lists.'
    },
    {
      step: '03',
      title: 'Registration',
      desc: 'Open ticketing tiers, process payments via Stripe, and run custom approval logic workflows.'
    },
    {
      step: '04',
      title: 'Onsite Ops',
      desc: 'Deploy check-in kiosks, scan attendee QR passes, and auto-print thermal badges at the door.'
    },
    {
      step: '05',
      title: 'Engagement',
      desc: 'Host Q&A, run native matchmaking sessions, trigger app polls, and send push notifications.'
    },
    {
      step: '06',
      title: 'Analytics',
      desc: 'Review ROI performance charts, send CME certificates, and export custom database records.'
    }
  ];

  return (
    <main className="min-h-screen transition-colors duration-300 bg-slate-50 dark:bg-[#020314] text-slate-700 dark:text-slate-300 overflow-x-hidden">
      
      {/* 1. HERO SECTION (Light, elegant, premium, minimal inner-page hero) */}
      <section className="relative py-24 sm:py-32 bg-slate-50 dark:bg-[#070b19] border-b border-slate-200/60 dark:border-slate-900 overflow-hidden flex flex-col justify-center min-h-[75vh] w-full">
        {/* Soft Purple Ambient Glows & Gradients */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-accent-purple/10 dark:bg-accent-purple/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-blue/10 dark:bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(132,61,245,0.03)_1px,transparent_1px)] [background-size:2rem_2rem] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 text-left space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-accent-purple/35 bg-accent-purple/5 text-accent-purple text-xs font-semibold shadow-sm backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 text-accent-purple animate-pulse" />
                <span>Enterprise Suite</span>
              </div>
              
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-primary dark:text-white tracking-tight leading-tight">
                Powerful Platform Built for{' '}
                <span className="bg-gradient-to-r from-accent-purple to-accent-blue bg-clip-text text-transparent">
                  Every Stage
                </span>{' '}
                of Your Event
              </h1>
              
              <p className="text-base sm:text-lg text-slate-550 dark:text-slate-400 font-light leading-relaxed max-w-xl">
                ConGenie manages your entire event lifecycle. From pre-event registrations and complex speaker timelines to onsite check-ins, networking, and post-event analytics, all modules operate on a unified real-time database.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-white font-semibold text-sm bg-accent-purple hover:bg-[#6c28e2] transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-accent-purple/10"
                >
                  <span>Book a Demo</span>
                  <Sparkles className="w-4 h-4 text-white" />
                </Link>
                <a
                  href="#lifecycle"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-slate-600 dark:text-slate-300 font-semibold text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-850 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Explore Modules</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
            
            {/* Right Illustration - Clean Product Mockup */}
            <div className="lg:col-span-6 relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-accent-purple/10 to-accent-blue/10 blur-2xl pointer-events-none opacity-80" />
              <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-[#0d122b]/80 backdrop-blur-xl shadow-2xl p-2 transition-all duration-500 hover:border-accent-purple/30">
                <img
                  src={platformHeroImage.src || platformHeroImage}
                  alt="ConGenie central platform dashboard overview visual"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. EVENT LIFECYCLE OVERVIEW (Dark themed overview to alternate) */}
      <section id="lifecycle" className="py-24 bg-[#020314] text-white relative overflow-hidden border-b border-slate-900">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-purple/8 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-accent-purple/45 bg-accent-purple/10 text-accent-lavender text-xs font-semibold">
              <span>Dynamic Roadmap</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              End-to-End Orchestration
            </h2>
            <p className="text-slate-400 font-light leading-relaxed max-w-xl mx-auto">
              Event logistics are complex. ConGenie simplifies execution by consolidating separated tools into a single logical timeline.
            </p>
          </div>

          {/* Timeline Visual Layout */}
          <div className="relative mt-12 px-2">
            {/* Desktop Horizontal Line */}
            <div className="absolute top-[32px] left-[8%] right-[8%] h-[2px] bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan opacity-20 hidden lg:block" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
              {timelinePhases.map((phase, idx) => (
                <div key={idx} className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 group">
                  {/* Step bubble */}
                  <div className="w-16 h-16 rounded-2xl bg-[#090d24] border border-slate-800 flex items-center justify-center shadow-md relative z-20 group-hover:border-accent-purple transition-all duration-300">
                    <span className="font-mono text-sm font-bold text-accent-purple dark:text-accent-lavender">
                      {phase.step}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-display font-bold text-lg text-white group-hover:text-accent-purple transition-colors">
                      {phase.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                      {phase.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. REGISTRATION & TICKETING (Light themed segment) */}
      <section className="py-24 bg-white dark:bg-[#070b19] border-y border-slate-100 dark:border-slate-900 transition-colors duration-300 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-2 shadow-2xl">
                <img
                  src={platformRegistrationImage.src || platformRegistrationImage}
                  alt="Registration setup dashboard visual"
                  className="w-full h-auto rounded-lg object-contain"
                />
              </div>
            </div>

            {/* Right Details Column */}
            <div className="lg:col-span-6 text-left space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-accent-purple/30 bg-accent-purple/5 text-accent-purple text-xs font-semibold">
                <span>Phase 02 Setup</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary dark:text-white">
                Frictionless Registration & Secure Ticketing
              </h2>
              <p className="text-sm sm:text-base text-slate-550 dark:text-slate-400 font-light leading-relaxed">
                Build adaptable, conditional registration pipelines. Design ticket packages, configure instant coupon triggers, and collect corporate billing payouts globally with reliable security checks.
              </p>

              {/* Grid lists */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  'Online Registration Forms',
                  'Multi-step Conditional Logic',
                  'Secure Ticketing Tiers',
                  'Instant QR Code Passes',
                  'Global Payment Processor',
                  'Flexible Promo Coupons',
                  'Admin Verification Workflow'
                ].map((feat, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-slate-650 dark:text-slate-350">
                    <div className="p-1 rounded bg-accent-purple/10 border border-accent-purple/20 text-accent-purple dark:text-accent-lavender shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm font-light">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. AGENDA & SPEAKER MANAGEMENT (Dark themed segment) */}
      <section className="py-24 bg-[#020314] text-white relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-accent-purple/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Details Column */}
            <div className="lg:col-span-6 text-left space-y-6 order-2 lg:order-1">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-accent-purple/35 bg-accent-purple/5 text-accent-lavender text-xs font-semibold">
                <span>Phase 01 Planning</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
                Cohesive Agenda Builder & Speaker Hubs
              </h2>
              <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed">
                Coordinate complex agendas across dozens of rooms and days. Presenters access individual dashboards to upload slide files, update bio credentials, and agree to policy parameters directly.
              </p>

              {/* Grid lists */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  'Drag-and-Drop Agenda Builder',
                  'Multi-track Concurrent Sessions',
                  'Self-Service Speaker Portals',
                  'Room Capacity Allocations',
                  'Abstract Evaluation Workflow',
                  'AI-Assisted Schedule Optimization'
                ].map((feat, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-slate-300">
                    <div className="p-1 rounded bg-[#7C3AED]/20 border border-[#7C3AED]/35 text-accent-lavender shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm font-light">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-6 relative order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-950/80 shadow-2xl p-2">
                <img
                  src={platformAgendaImage.src || platformAgendaImage}
                  alt="Agenda building layout illustration"
                  className="w-full h-auto rounded-lg object-contain"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. ATTENDEE ENGAGEMENT (Light themed segment) */}
      <section className="py-24 bg-white dark:bg-[#070b19] border-y border-slate-100 dark:border-slate-900 transition-colors duration-300 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-2 shadow-2xl">
                <img
                  src={platformEngagementImage.src || platformEngagementImage}
                  alt="Attendee engagement app interface mockup"
                  className="w-full h-auto rounded-lg object-contain"
                />
              </div>
            </div>

            {/* Right Details Column */}
            <div className="lg:col-span-7 text-left space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-accent-cyan/30 bg-accent-cyan/5 text-accent-cyan text-xs font-semibold">
                <span>Phase 04 Engagement</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary dark:text-white">
                Immersive Attendee App & B2B Matchmaking
              </h2>
              <p className="text-sm sm:text-base text-slate-550 dark:text-slate-400 font-light leading-relaxed">
                Connect attendees natively on iOS and Android. Run targeted push updates, interactive map guides, B2B matchmaking meetups, live audience polling questionnaires, and instant session Q&A coordinate widgets.
              </p>

              {/* Layout for engagement features (avoiding standard cards) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {[
                  { icon: Smartphone, title: 'Native Event App', desc: 'Schedules, maps, updates, and virtual entry badges.' },
                  { icon: Network, title: 'B2B Matchmaking', desc: 'AI coordinates buyer-seller slots automatically.' },
                  { icon: MessageSquare, title: 'Live Q&A & Polls', desc: 'Interact with panels, speakers, and audiences in real-time.' },
                  { icon: Mail, title: 'Targeted Push Alerts', desc: 'Send reminders and capacity announcements instantly.' }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex space-x-4">
                      <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-accent-cyan shrink-0 h-max">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-primary dark:text-white">{item.title}</h4>
                        <p className="text-xs text-slate-550 dark:text-slate-450 mt-1 font-light leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. ONSITE EVENT OPERATIONS (Dark themed segment) */}
      <section className="py-24 bg-[#020314] text-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Details Column */}
            <div className="lg:col-span-6 text-left space-y-6 order-2 lg:order-1">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-accent-purple/35 bg-accent-purple/5 text-accent-lavender text-xs font-semibold">
                <span>Phase 03 Operations</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
                Reliable Onsite Logistics & Rapid Badge Printing
              </h2>
              <p className="text-sm sm:text-base text-slate-450 dark:text-slate-405 font-light leading-relaxed">
                Avoid entry bottlenecks. Run high-performance kiosks with offline checking backups, scan QR codes on mobile screens, print badges in under 2 seconds, and collect booth leads securely.
              </p>

              {/* Spans flow layout */}
              <div className="flex flex-wrap gap-3 pt-2">
                {[
                  'Thermal Badge Printing',
                  'Self-Check-In Kiosk Mode',
                  'QR Scanning Gateways',
                  'Real-Time Session Trackers',
                  'Offline-First Data Syncing',
                  'Exhibitor Lead Retrieval Keys'
                ].map((item, idx) => (
                  <span key={idx} className="px-3.5 py-2 rounded-xl text-xs font-medium border border-slate-800 bg-[#0d122b]/50 text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-6 relative order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-950/80 shadow-2xl p-2">
                <img
                  src={platformOnsiteImage.src || platformOnsiteImage}
                  alt="Onsite badge printing visual panel"
                  className="w-full h-auto rounded-lg object-contain"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. ANALYTICS & REPORTING (Light themed segment) */}
      <section className="py-24 bg-white dark:bg-[#070b19] border-y border-slate-100 dark:border-slate-900 transition-colors duration-300 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Image Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-2 shadow-2xl">
                <img
                  src={platformAnalyticsImage.src || platformAnalyticsImage}
                  alt="Metrics and reporting layout illustration"
                  className="w-full h-auto rounded-lg object-contain"
                />
              </div>
            </div>

            {/* Right Details Column */}
            <div className="lg:col-span-6 text-left space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-accent-purple/30 bg-accent-purple/5 text-accent-purple text-xs font-semibold">
                <span>Phase 05 Analytics</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary dark:text-white">
                Detailed Performance Reports & Live Data Hubs
              </h2>
              <p className="text-sm sm:text-base text-slate-550 dark:text-slate-400 font-light leading-relaxed">
                Access deep ROI analytics. Monitor ticket revenues, sponsor booth visitor metrics, live session attendance data, and coordinate automated CME certificate keys based on custom attendee thresholds.
              </p>

              {/* Grid lists */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  'Live command metrics monitor',
                  'Registration growth analytics',
                  'Revenue invoicing logs',
                  'Room checkout tracking stats',
                  'Survey feedback compilation',
                  'CSV & API record exports',
                  'AI predictive pace insights'
                ].map((feat, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-slate-650 dark:text-slate-350">
                    <div className="p-1 rounded bg-accent-purple/10 border border-accent-purple/20 text-accent-purple dark:text-accent-lavender shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm font-light">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. AI ACROSS EVERY FEATURE (Dark themed AI segment) */}
      <section className="py-24 bg-[#05081c] text-white relative overflow-hidden border-t border-slate-900">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-cyan/8 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs font-semibold backdrop-blur-sm">
              <Brain className="w-3.5 h-3.5" />
              <span>Smart Engine</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              AI-Optimized Workflows
            </h2>
            <p className="text-slate-400 font-light leading-relaxed max-w-xl mx-auto">
              We weave intelligence natively across each module to automate scheduling logic and match attendee outcomes.
            </p>
          </div>

          {/* Futuristic Flow Diagram */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { title: 'Registration Flow', action: 'AI Validation', desc: 'SSO matches and whitelists checked. Flag duplicate registrants and verify billing codes in real-time.' },
              { title: 'Agenda Builder', action: 'AI Optimization', desc: 'Tracks conflicts and capacity spikes auto-resolved. Speaker overlaps detected and room allocations optimized.' },
              { title: 'Attendee Hub', action: 'AI Matchmaking', desc: 'Match B2B meetings dynamically depending on participant interests and calendar schedules.' },
              { title: 'Data Engine', action: 'AI Insights', desc: 'Predict registration patterns, track revenue velocity, and forecast VIP waitlist volumes.' }
            ].map((node, idx) => (
              <div key={idx} className="bg-[#090e2b]/80 border border-slate-800 rounded-3xl p-6 relative overflow-hidden group hover:border-[#22D3EE]/35 transition-all duration-300 shadow-xl">
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent-cyan/5 rounded-full blur-xl pointer-events-none" />
                
                <h4 className="font-semibold text-xs text-slate-400 uppercase tracking-widest">{node.title}</h4>
                <div className="h-[2px] w-8 bg-accent-cyan my-3 group-hover:w-16 transition-all duration-500" />
                <h3 className="font-display font-extrabold text-lg text-white mb-2">{node.action}</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-light mt-2">{node.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. INTEGRATIONS (Light themed segment) */}
      <section className="py-24 bg-white dark:bg-[#070b19] border-y border-slate-100 dark:border-slate-900 transition-colors duration-300 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-accent-purple/30 bg-accent-purple/5 text-accent-purple text-xs font-semibold">
              <span>Connected Ecosystem</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary dark:text-white">
              Sleek Integrations Suite
            </h2>
            <p className="text-slate-555 dark:text-slate-400 font-light leading-relaxed max-w-xl mx-auto">
              Sync database streams automatically to your business CRMs, marketing campaigns, and video portals.
            </p>
          </div>

          {/* Premium Logo Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'Stripe', 'Zoom', 'Microsoft Teams', 'Google Calendar', 
              'Outlook', 'Salesforce', 'HubSpot', 'Mailchimp', 
              'Zapier', 'Slack', 'WhatsApp', 'Google Analytics'
            ].map((logo, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center p-6 rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-950 shadow-sm transition-all duration-300 hover:scale-102 hover:shadow-md hover:border-accent-purple/35">
                <span className="font-display text-sm font-extrabold text-slate-800 dark:text-slate-200 tracking-wide">
                  {logo}
                </span>
                <span className="text-[9px] font-mono text-slate-405 mt-1 uppercase tracking-widest">
                  Verified
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 10. INTERACTIVE PRODUCT SHOWCASE (Dark themed segment) */}
      <section className="py-24 bg-[#020314] text-white relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-purple/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-accent-cyan/35 bg-accent-cyan/5 text-accent-cyan text-xs font-semibold">
              <span>Interactive Simulator</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Interact with the Platform
            </h2>
            <p className="text-slate-405 font-light leading-relaxed max-w-xl mx-auto">
              Select a tab below to switch the simulated dashboard console and explore each core component view.
            </p>
          </div>

          {/* Interactive Showcase Panel */}
          <div className="space-y-8">
            {/* Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
              {showcaseTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-3 rounded-xl text-xs font-semibold border transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'border-accent-purple bg-accent-purple/15 text-accent-lavender shadow-lg shadow-accent-purple/10'
                      : 'border-slate-800 bg-[#0d122b]/40 text-slate-400 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Display area */}
            <div className="max-w-5xl mx-auto">
              <AnimatePresence mode="wait">
                {showcaseTabs.map((tab) => {
                  if (tab.id !== activeTab) return null;
                  return (
                    <motion.div
                      key={tab.id}
                      initial={{ opacity: 0, scale: 0.98, y: 15 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.98, y: -15 }}
                      transition={{ duration: 0.35 }}
                      className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#070b22]/70 border border-slate-800/80 rounded-[32px] p-6 sm:p-8 lg:p-10 backdrop-blur-xl"
                    >
                      {/* Left: details */}
                      <div className="lg:col-span-5 text-left space-y-4">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-accent-cyan">Console Screen</span>
                        <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white">
                          {tab.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                          {tab.desc}
                        </p>
                        
                        <div className="pt-2">
                          <Link
                            href="/contact"
                            className="inline-flex items-center space-x-2 text-xs font-semibold text-accent-purple hover:text-accent-lavender group"
                          >
                            <span>Request direct access</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>

                      {/* Right: mock */}
                      <div className="lg:col-span-7 relative">
                        <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-955 p-1">
                          <img
                            src={tab.image.src || tab.image}
                            alt={`${tab.label} console preview`}
                            className="w-full h-auto rounded-lg object-contain max-h-[350px]"
                          />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </section>

      {/* 11. WHY TEAMS CHOOSE CONGENIE (Light themed segment) */}
      <section className="py-24 bg-white dark:bg-[#070b19] border-y border-slate-100 dark:border-slate-900 transition-colors duration-300 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-accent-purple/30 bg-accent-purple/5 text-accent-purple text-xs font-semibold">
              <span>Platform Outcomes</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary dark:text-white">
              Why Teams Choose ConGenie
            </h2>
            <p className="text-slate-555 dark:text-slate-400 font-light leading-relaxed max-w-xl mx-auto">
              We align platform features directly to high-performance output benchmarks.
            </p>
          </div>

          {/* Value Outcome Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: 'Faster Event Setup', desc: 'Deploy whitelists, checkouts, and agenda modules in minutes instead of weeks.' },
              { icon: Workflow, title: 'Reduced Manual Work', desc: 'AI auto-validates inputs, tracks clashes, and matches B2B contacts, saving coordination hours.' },
              { icon: Users, title: 'Better Attendee Engagement', desc: 'Native push notifications, matchmaking triggers, and Q&A tools increase interaction rates.' },
              { icon: Shield, title: 'Enterprise-Grade Security', desc: 'Isolated database schemas, SSO permissions, SAML validation, and SOC2 standards.' },
              { icon: Bot, title: 'AI-Powered Automation', desc: 'Leverage validation prompts, calendar optimization, and predictive analytics.' },
              { icon: Globe, title: 'Scalable for Global Events', desc: 'High-availability server clusters support heavy visitor spikes and offline scanner syncs.' }
            ].map((outcome, idx) => {
              const Icon = outcome.icon;
              return (
                <div key={idx} className="bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 text-left transition-all duration-300 hover:shadow-md hover:border-accent-purple/35 group">
                  <div className="p-3 rounded-2xl bg-accent-purple/5 border border-accent-purple/10 text-accent-purple dark:text-accent-lavender w-max mb-5 group-hover:bg-accent-purple/10 transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-extrabold text-lg text-primary dark:text-white mb-2">
                    {outcome.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-455 leading-relaxed font-light">
                    {outcome.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 12. CTA */}
      <FinalCTA />

    </main>
  );
}
