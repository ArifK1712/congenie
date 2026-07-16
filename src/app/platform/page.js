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
import aiOrb from '../../assets/ai_orb.png';

// Brand Monochrome Integration Logo Components
const StripeLogo = () => (
  <svg viewBox="0 0 64 26" fill="currentColor" className="w-12 h-6">
    <path d="M13.25 10.25c0-1.37.98-2 2.65-2 1.35 0 2.4.37 3.07.74l.63-3.4c-.75-.37-2.19-.74-4-.74-4.1 0-6.64 2.21-6.64 5.92 0 4.02 3 5.49 6.03 5.49 1.63 0 2.87-.29 3.59-.6l-.63-3.4c-.6.27-1.6.49-2.65.49-1.54 0-2.28-.71-2.28-1.93zM21.2 5.06h3.69V1.49h-3.69v3.57zm0 10.45h3.69V7.51h-3.69v8zm14.36-5.83c0-1.57-1-2.17-2.48-2.17-1.46 0-2.48.58-2.48 2.17v5.83h-3.69V7.51h3.45v1.07c.8-.84 2-1.33 3.61-1.33 3 0 5.11 1.76 5.11 5.16v3.1h-3.52v-4.99zm8.56-2.17c-1.35 0-2.16.66-2.52 1.41V7.51h-3.69v11.66h3.69v-3.63a3.32 3.32 0 0 0 2.52 1c2.61 0 4.54-2 4.54-5.06 0-2.92-1.93-5-4.54-5zm-.67 6.45c-1.11 0-1.85-.75-1.85-2.07s.74-2.07 1.85-2.07 1.85.75 1.85 2.07-.74 2.07-1.85 2.07zm14.15-4.38H52c.16-1.11 1-1.63 2.16-1.63a3.42 3.42 0 0 1 2 .58l1-2.47c-.89-.53-2.31-.82-3.79-.82-3.45 0-5.74 1.95-5.74 5.5s2.21 5.43 5.62 5.43a6.83 6.83 0 0 0 4-.93l-.75-2.53a4 4 0 0 1-2.58.74c-1.36 0-2.09-.64-2.21-1.69h9.8v-2.18zm-6.19-.88c.09-.76.67-1.22 1.5-1.22s1.33.46 1.41 1.22h-2.91zM7 7.51H3.59V1.8L0 2.57v4.94h-2V10h2v4.86c0 2.76 1.85 3.59 4.19 3.59a7.66 7.66 0 0 0 2-.28l-.34-2.94a4.11 4.11 0 0 1-1.29.17c-1 0-1.46-.46-1.46-1.54V10H7V7.51z"/>
  </svg>
);

const SalesforceLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M18.8 11.2c-.4-2.2-2.3-3.8-4.6-3.8-.7 0-1.4.2-2 .5C11.3 5.7 9.1 4 6.5 4 3.5 4 1 6.5 1 9.5c0 .3 0 .6.1.9C.5 11.1 0 12 0 13c0 1.7 1.3 3 3 3h15c1.7 0 3-1.3 3-3 .1-1.1-.4-2.1-1.2-2.8z"/>
  </svg>
);

const HubSpotLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M21.365 10.282c-.611 0-1.04-.337-1.24-.803l-1.956-1.956c-.234.464-.633.856-1.238.856-.99 0-1.792-.803-1.792-1.792s.802-1.792 1.792-1.792c.607 0 1.004.392 1.238.856l1.956 1.956c.201-.466.629-.803 1.24-.803.774 0 1.402.628 1.402 1.402a1.405 1.405 0 0 1-1.402 1.431zm-14.774 9.04a1.405 1.405 0 0 1 1.402-1.431h4c.774 0 1.402.628 1.402 1.431v2.666c0 .774-.628 1.402-1.402 1.402h-4a1.405 1.405 0 0 1-1.402-1.402v-2.666zm-2.029-7.009c0-.774.628-1.402 1.402-1.402h11.196c.774 0 1.402.628 1.402 1.402s-.628 1.402-1.402 1.402H5.964c-.774 0-1.402-.628-1.402-1.402zm7.438-10.282c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10 4.477-10 10-10zm0 18c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6z"/>
  </svg>
);

const SlackLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523 2.528 2.528 0 0 1-2.522-2.523 2.528 2.528 0 0 1 2.522-2.52h2.52v2.52zm1.261 0a2.528 2.528 0 0 1 5.056 0v5.046a2.528 2.528 0 0 1-5.056 0v-5.046zm2.528-6.313a2.528 2.528 0 0 1 2.52-2.522 2.528 2.528 0 0 1 2.523 2.522 2.528 2.528 0 0 1-2.523 2.52h-2.52v-2.52zm0 1.262a2.528 2.528 0 0 1 0 5.055H3.784a2.528 2.528 0 0 1 0-5.055h5.047zm6.308 5.051a2.528 2.528 0 0 1 2.52-2.52 2.528 2.528 0 0 1 2.522 2.52 2.528 2.528 0 0 1-2.522 2.522h-2.52v-2.522zm-1.261 0a2.528 2.528 0 0 1-5.056 0v-5.047a2.528 2.528 0 0 1 5.056 0v5.047zm-2.528 6.309a2.528 2.528 0 0 1-2.52-2.523 2.528 2.528 0 0 1 2.52-2.52h2.528v2.52a2.528 2.528 0 0 1-2.528 2.523zm0-1.261a2.528 2.528 0 0 1 0-5.056h5.047a2.528 2.528 0 0 1 0 5.056H15.18v-5.056z"/>
  </svg>
);

const ZoomLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 13.5c0 .28-.22.5-.5.5h-8c-.28 0-.5-.22-.5-.5v-7c0-.28.22-.5.5-.5h8c.28 0 .5.22.5.5v7zM20 9.5v5l-2.5-1.88v-1.24L20 9.5z"/>
  </svg>
);

const WhatsAppLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M12.012 2C6.485 2 2 6.485 2 12.012c0 1.91.532 3.693 1.455 5.23L2.03 22l4.902-1.397c1.472.822 3.167 1.303 4.975 1.303a9.99 9.99 0 0 0 10.005-10.012A9.99 9.99 0 0 0 12.012 2zm5.727 13.918c-.247.697-1.24 1.282-1.722 1.332-.48.05-1.1.258-3.237-.624a10.286 10.286 0 0 1-4.453-3.924c-.958-1.307-1.532-2.825-1.532-4.394 0-1.85.958-2.73 1.302-3.08.344-.35.918-.518 1.413-.518.165 0 .31.008.435.015.358.017.538.04.775.603.298.71 1.023 2.502 1.11 2.682.088.18.147.387.027.625-.12.238-.18.388-.358.597-.18.21-.377.47-.538.63-.18.18-.368.377-.16.732.21.353.922 1.523 1.977 2.463 1.36 1.213 2.507 1.59 2.862 1.77.355.18.563.15.772-.09.21-.24.908-1.058 1.15-1.42.24-.362.48-.302.812-.18.332.122 2.112.997 2.472 1.178.362.18.602.27.692.422.09.15.09.873-.157 1.57z"/>
  </svg>
);

const ZapierLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M19 10.5h-5.5V5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v5.5H5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h5.5V19c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-5.5H19c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z"/>
  </svg>
);

const GoogleAnalyticsLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-5h2v5zm4 0h-2V7h2v10zm4 0h-2v-3h2v3z"/>
  </svg>
);

// Standardized SaaS Frame Wrapper Component
function ProductFrame({ children, className = "" }) {
  return (
    <div className={`relative rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-[#070b22]/70 backdrop-blur-md shadow-2xl p-1.5 transition-all duration-500 hover:border-accent-purple/35 ${className}`}>
      {/* Browser style header */}
      <div className="flex items-center space-x-1.5 px-3 py-2 border-b border-slate-100 dark:border-slate-900 bg-slate-50/50 dark:bg-slate-950/50 rounded-t-xl mb-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400/80 dark:bg-red-500/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80 dark:bg-amber-500/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400/80 dark:bg-green-500/60" />
        <div className="flex-1 text-[10px] text-slate-400 dark:text-slate-500 font-mono text-center pr-10 truncate select-none">congenie.com/platform</div>
      </div>
      <div className="relative rounded-lg overflow-hidden bg-slate-100/50 dark:bg-slate-950/50">
        {children}
      </div>
    </div>
  );
}

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
      label: 'Attendee App',
      title: 'Native Attendee Mobile App',
      desc: 'Keep attendees connected on the move. Provide digital schedules, push reminders, interactive venue maps, smart matchmaking networking, and Q&A.',
      image: platformEngagementImage
    }
  ];

  const timelinePhases = [
    {
      step: '01',
      title: 'Planning',
      icon: Calendar,
      desc: 'Map rooms, multi-track schedules, and abstracts.'
    },
    {
      step: '02',
      title: 'Promotion',
      icon: Globe,
      desc: 'Launch invite pages, promo codes, and checkouts.'
    },
    {
      step: '03',
      title: 'Registration',
      icon: Users,
      desc: 'Process secure Stripe payouts and approval logic.'
    },
    {
      step: '04',
      title: 'Onsite Ops',
      icon: QrCode,
      desc: 'Scan digital passes and print badges at the door.'
    },
    {
      step: '05',
      title: 'Engagement',
      icon: Smartphone,
      desc: 'Host matchmaking, push alerts, and Q&A.'
    },
    {
      step: '06',
      title: 'Analytics',
      icon: BarChart3,
      desc: 'Analyze ROI charts and export CRM database logs.'
    }
  ];

  return (
    <main className="min-h-screen transition-colors duration-300 bg-slate-50 dark:bg-[#020314] text-slate-700 dark:text-slate-300 overflow-x-hidden">
      
      {/* 1. HERO SECTION (Layered product composition, clean, bright, premium, refined spacing) */}
      <section className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 bg-slate-50 dark:bg-[#070b19] border-b border-slate-200/60 dark:border-slate-900 overflow-hidden flex flex-col justify-center min-h-[80vh] w-full">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-accent-purple/10 dark:bg-accent-purple/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-blue/10 dark:bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(132,61,245,0.025)_1px,transparent_1px)] [background-size:2rem_2rem] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content (Expanded Width) */}
            <div className="lg:col-span-6 text-left space-y-6 lg:pr-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-accent-purple/35 bg-accent-purple/5 text-accent-purple text-xs font-semibold shadow-sm backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 text-accent-purple animate-pulse" />
                <span>Enterprise Suite</span>
              </div>
              
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-5xl xl:text-6xl text-primary dark:text-white tracking-tight leading-tight max-w-xl lg:max-w-2xl">
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
            
            {/* Right Layered Illustration (Moved right, reduced overlap) */}
            <div className="lg:col-span-6 relative flex justify-center items-center min-h-[420px] lg:min-h-[480px] lg:translate-x-8 lg:pl-4">
              <div className="absolute -inset-10 rounded-full bg-gradient-to-r from-accent-purple/15 to-accent-blue/5 blur-3xl pointer-events-none opacity-80 animate-pulse-slow" />
              
              <div className="relative w-full max-w-lg lg:max-w-none">
                {/* Background Panel Left - Registration Preview (Reduced size and overlap) */}
                <motion.div 
                  initial={{ opacity: 0.85, x: -30, y: 20, rotate: -2 }}
                  whileHover={{ scale: 1.03, y: 5, zIndex: 30, opacity: 1 }}
                  transition={{ duration: 0.6, type: "spring" }}
                  className="absolute -left-12 bottom-10 w-[42%] z-10 hidden sm:block pointer-events-auto"
                >
                  <ProductFrame>
                    <img
                      src={platformRegistrationImage.src || platformRegistrationImage}
                      alt="Registration Setup preview card"
                      className="w-full h-auto object-cover max-h-[160px] brightness-95"
                    />
                  </ProductFrame>
                </motion.div>

                {/* Main Foreground Panel - Dashboard Overview (Prominent & Centered) */}
                <div className="relative z-20 w-[95%] mx-auto lg:w-full">
                  <ProductFrame className="border-accent-purple/20 shadow-accent-purple/5">
                    <img
                      src={platformHeroImage.src || platformHeroImage}
                      alt="ConGenie central platform dashboard overview visual"
                      className="w-full h-auto object-cover max-h-[360px]"
                    />
                  </ProductFrame>
                </div>

                {/* Background Panel Right - Analytics & Reports (Reduced size and overlap) */}
                <motion.div 
                  initial={{ opacity: 0.8, x: 20, y: -15, rotate: 3 }}
                  whileHover={{ scale: 1.03, y: -25, zIndex: 30, opacity: 1 }}
                  transition={{ duration: 0.6, type: "spring" }}
                  className="absolute -right-8 -top-8 w-[40%] z-10 hidden sm:block pointer-events-auto"
                >
                  <ProductFrame>
                    <img
                      src={platformAnalyticsImage.src || platformAnalyticsImage}
                      alt="Analytics Overview preview card"
                      className="w-full h-auto object-cover max-h-[140px] brightness-95"
                    />
                  </ProductFrame>
                </motion.div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. EVENT LIFECYCLE OVERVIEW (Dark themed, fixed visibility by default) */}
      <section id="lifecycle" className="py-24 bg-[#020314] text-white relative overflow-hidden border-b border-slate-900">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-purple/8 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
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

          {/* Timeline Visual Layout (Visible by default without JS dependencies) */}
          <div className="relative mt-12 px-2">
            {/* Desktop Horizontal Line with glowing pulse (Visible by default) */}
            <div className="absolute top-[48px] left-[10%] right-[10%] h-[3px] bg-gradient-to-r from-accent-purple/20 via-accent-blue/30 to-accent-cyan/20 hidden lg:block overflow-hidden">
              <motion.div 
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 w-[40%] h-full bg-gradient-to-r from-transparent via-accent-purple/80 to-transparent"
              />
            </div>

            {/* Timeline stages (Fully visible without scroll trigger opacities) */}
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 relative z-10">
              {timelinePhases.map((phase, idx) => {
                const PhaseIcon = phase.icon;
                return (
                  <div 
                    key={idx} 
                    className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 group p-5 rounded-2xl bg-[#090d24]/60 border border-slate-700/50 transition-all duration-300 hover:border-accent-purple hover:bg-[#0c1232]/85 shadow-lg"
                  >
                    {/* Step bubble */}
                    <div className="w-14 h-14 rounded-2xl bg-[#0d1232] border border-slate-700 flex items-center justify-center shadow-lg relative z-20 group-hover:border-accent-purple group-hover:shadow-accent-purple/20 transition-all duration-300 shrink-0">
                      <PhaseIcon className="w-5 h-5 text-accent-purple group-hover:text-accent-cyan transition-colors" />
                    </div>

                    <div className="space-y-2">
                      <span className="font-mono text-[10px] font-bold text-accent-lavender/50 uppercase tracking-widest">
                        Phase {phase.step}
                      </span>
                      <h4 className="font-display font-bold text-lg text-white group-hover:text-accent-purple transition-colors">
                        {phase.title}
                      </h4>
                      <p className="text-xs text-slate-300 font-light leading-relaxed">
                        {phase.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* 3. REGISTRATION & TICKETING (Light Theme - Alternating Layout: Left Image) */}
      <section className="py-20 bg-white dark:bg-[#070b19] border-y border-slate-100 dark:border-slate-900 transition-colors duration-300 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Image Column */}
            <div className="lg:col-span-6 relative">
              <ProductFrame className="shadow-2xl">
                <img
                  src={platformRegistrationImage.src || platformRegistrationImage}
                  alt="Registration setup dashboard visual"
                  className="w-full h-auto rounded-lg object-contain"
                />
              </ProductFrame>
            </div>

            {/* Right Details Column */}
            <div className="lg:col-span-6 text-left space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-accent-purple/30 bg-accent-purple/5 text-accent-purple text-xs font-semibold">
                <span>Phase 02 Setup</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary dark:text-white">
                Frictionless Registration & Secure Ticketing
              </h2>
              <p className="text-sm sm:text-base text-slate-555 dark:text-slate-400 font-light leading-relaxed">
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

      {/* 4. AGENDA & SPEAKER MANAGEMENT (Dark Theme - Layered Composition: Right Image & Custom Card Overlay) */}
      <section className="py-20 bg-[#020314] text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-accent-purple/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
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

            {/* Right Image Column with Custom Overlay Card */}
            <div className="lg:col-span-6 relative order-1 lg:order-2">
              <ProductFrame className="shadow-2xl border-slate-800">
                <img
                  src={platformAgendaImage.src || platformAgendaImage}
                  alt="Agenda building layout illustration"
                  className="w-full h-auto rounded-lg object-contain"
                />
              </ProductFrame>
              
              {/* Layered Custom Speaker Card Overlay (Positioned carefully) */}
              <div 
                className="absolute -bottom-6 -right-6 w-[240px] rounded-2xl border border-slate-800 bg-[#090d24]/95 backdrop-blur-md p-4 shadow-2xl z-20 hidden md:block"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-accent-purple to-accent-blue flex items-center justify-center font-bold text-white text-xs shadow-inner">
                    SJ
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xs font-bold text-white leading-none">Dr. Sarah Jenkins</h4>
                    <span className="text-[9px] text-slate-500 font-mono mt-0.5 block">Keynote Presenter</span>
                  </div>
                </div>
                <div className="mt-3 space-y-2 border-t border-slate-900 pt-2 text-[10px] text-slate-400">
                  <div className="flex justify-between items-center">
                    <span>Abstract Review:</span>
                    <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[8px] font-bold">Approved</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Slides status:</span>
                    <span className="text-accent-lavender font-mono text-[9px]">intro_ai.pdf</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. ATTENDEE ENGAGEMENT (Light Theme - Central Visual Layout, Increased Mockup Size) */}
      <section className="py-20 bg-white dark:bg-[#070b19] border-y border-slate-100 dark:border-slate-900 transition-colors duration-300 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header block */}
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-accent-cyan/35 bg-accent-cyan/5 text-accent-cyan text-xs font-semibold">
              <span>Phase 04 Engagement</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary dark:text-white">
              Immersive Attendee App & B2B Matchmaking
            </h2>
            <p className="text-slate-555 dark:text-slate-400 font-light leading-relaxed max-w-xl mx-auto">
              Connect attendees natively on iOS and Android. Run targeted push updates, maps, B2B matchmaking meetups, and coordinate live audience polling.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center pt-4">
            {/* Left Column (2 features) */}
            <div className="lg:col-span-4 space-y-8 text-left order-2 lg:order-1 lg:pr-4">
              <div className="flex space-x-4">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-accent-purple shrink-0 h-max shadow-sm">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-primary dark:text-white">Native Event App</h4>
                  <p className="text-xs text-slate-555 dark:text-slate-450 mt-1 font-light leading-relaxed">
                    Schedules, personalized maps, instant push updates, and digital entry badges in a custom brand theme.
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-accent-purple shrink-0 h-max shadow-sm">
                  <Network className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-primary dark:text-white">B2B Matchmaking</h4>
                  <p className="text-xs text-slate-555 dark:text-slate-450 mt-1 font-light leading-relaxed">
                    AI-driven algorithm schedules structured buyer-seller slots dynamically based on shared interests.
                  </p>
                </div>
              </div>
            </div>

            {/* Center Column (Mockup increased by 15-20% and brought closer) */}
            <div className="lg:col-span-4 flex justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-[330px]">
                {/* Purple Radial Glow behind the phone */}
                <div className="absolute -inset-10 rounded-full bg-accent-purple/15 dark:bg-accent-purple/10 blur-3xl pointer-events-none" />
                <ProductFrame className="shadow-2xl relative z-10">
                  <img
                    src={platformEngagementImage.src || platformEngagementImage}
                    alt="Attendee engagement app interface mockup"
                    className="w-full h-auto rounded-lg object-cover max-h-[440px]"
                  />
                </ProductFrame>
              </div>
            </div>

            {/* Right Column (2 features) */}
            <div className="lg:col-span-4 space-y-8 text-left order-3 lg:pl-4">
              <div className="flex space-x-4">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-accent-purple shrink-0 h-max shadow-sm">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-primary dark:text-white">Live Q&A & Polls</h4>
                  <p className="text-xs text-slate-555 dark:text-slate-455 mt-1 font-light leading-relaxed">
                    Interact directly with panels, sessions, and speakers with real-time screen display integrations.
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-accent-purple shrink-0 h-max shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-primary dark:text-white">Targeted Push Alerts</h4>
                  <p className="text-xs text-slate-555 dark:text-slate-455 mt-1 font-light leading-relaxed">
                    Broadcast changes and room announcements to segmented lists based on ticket tiers.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. ONSITE EVENT OPERATIONS (Dark Theme - Large Full-Width Interface Showcase) */}
      <section className="py-20 bg-[#020314] text-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Top text block */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-accent-purple/35 bg-accent-purple/5 text-accent-lavender text-xs font-semibold">
              <span>Phase 03 Operations</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Reliable Onsite Logistics & Rapid Badge Printing
            </h2>
            <p className="text-sm sm:text-base text-slate-400 font-light leading-relaxed max-w-xl mx-auto">
              Avoid entry bottlenecks. Run high-performance kiosks with offline check-in backups, scan QR codes, and print custom thermal badges in under 2 seconds.
            </p>
          </div>

          {/* Full-width showcase illustration */}
          <div className="max-w-5xl mx-auto relative pt-4">
            <div className="absolute -inset-6 rounded-3xl bg-accent-purple/5 blur-2xl pointer-events-none" />
            <ProductFrame className="border-slate-800 shadow-3xl">
              <img
                src={platformOnsiteImage.src || platformOnsiteImage}
                alt="Onsite badge printing visual panel"
                className="w-full h-auto rounded-lg object-cover max-h-[460px] lg:max-h-[500px]"
              />
            </ProductFrame>

            {/* Custom Overlay Stats */}
            <div className="absolute top-10 right-6 bg-[#030616]/90 border border-slate-800/80 backdrop-blur-md py-2.5 px-4 rounded-xl shadow-lg text-[10px] font-mono hidden md:flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-ping" />
              <span className="text-slate-355">PRINTER ONLINE • 1.8s BADGE GENERATION</span>
            </div>
          </div>

          {/* Spans flow layout below */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-12 max-w-4xl mx-auto">
            {[
              'Thermal Badge Printing',
              'Self-Check-In Kiosk Mode',
              'QR Scanning Gateways',
              'Real-Time Session Trackers',
              'Offline-First Data Syncing',
              'Exhibitor Lead Retrieval Keys'
            ].map((item, idx) => (
              <span key={idx} className="px-3.5 py-2 rounded-xl text-xs font-medium border border-slate-800 bg-[#0d122b]/50 text-slate-300 shadow-sm">
                {item}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* 7. ANALYTICS & REPORTING (Light Theme - Alternating Layout: Left Image & Overlay card) */}
      <section className="py-20 bg-white dark:bg-[#070b19] border-y border-slate-100 dark:border-slate-900 transition-colors duration-300 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Image Column with Custom Overlay */}
            <div className="lg:col-span-6 relative">
              <ProductFrame className="shadow-2xl">
                <img
                  src={platformAnalyticsImage.src || platformAnalyticsImage}
                  alt="Metrics and reporting layout illustration"
                  className="w-full h-auto rounded-lg object-contain"
                />
              </ProductFrame>

              {/* Data Sync Status Card */}
              <div 
                className="absolute -bottom-6 -right-6 w-[260px] rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#070b20]/95 backdrop-blur-md p-4 shadow-2xl z-20 hidden md:block"
              >
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2 mb-2">
                  <span className="text-[10px] font-mono font-bold text-accent-purple uppercase tracking-wider">Integration Sync</span>
                  <span className="text-[9px] bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded-full font-bold">Active</span>
                </div>
                <div className="space-y-2 text-[10px]">
                  <div className="flex justify-between items-center text-slate-500">
                    <span>Salesforce Database:</span>
                    <span className="text-slate-900 dark:text-white font-mono font-semibold">1,402 leads synced</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-500">
                    <span>HubSpot Contact Lists:</span>
                    <span className="text-slate-900 dark:text-white font-mono font-semibold">Real-time active</span>
                  </div>
                </div>
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
              <p className="text-sm sm:text-base text-slate-555 dark:text-slate-400 font-light leading-relaxed">
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

      {/* 8. AI-OPTIMIZED WORKFLOWS (Redesigned Connected Intelligence Layout) */}
      <section className="py-24 bg-[#05081c] text-white relative overflow-hidden border-t border-slate-900">
        {/* Soft Background glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-cyan/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs font-semibold backdrop-blur-sm">
              <Brain className="w-3.5 h-3.5" />
              <span>Smart Engine</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Connected AI Intelligence Layer
            </h2>
            <p className="text-slate-400 font-light leading-relaxed max-w-xl mx-auto">
              We weave smart automation natively across every module to remove manual friction and optimize event operations.
            </p>
          </div>

          {/* Interactive node mapping diagram (Fully visible by default, aligned cards) */}
          <div className="relative mt-12 min-h-[520px]">
            {/* SVG Connecting lines with flowing signals (hidden on mobile, coordinates aligned precisely to card centers) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block" style={{ zIndex: 0 }}>
              {/* Left Node 1 (top) to Core */}
              <motion.path 
                d="M 33% 25% C 40% 25%, 43% 50%, 50% 50%" 
                stroke="#00f0ff" 
                strokeWidth="2.5" 
                strokeOpacity="0.5"
                strokeDasharray="5 5"
                fill="none"
                animate={{ strokeDashoffset: [0, -20] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 1.5 }}
              />
              {/* Left Node 2 (bottom) to Core */}
              <motion.path 
                d="M 33% 75% C 40% 75%, 43% 50%, 50% 50%" 
                stroke="#00f0ff" 
                strokeWidth="2.5" 
                strokeOpacity="0.5"
                strokeDasharray="5 5"
                fill="none"
                animate={{ strokeDashoffset: [0, -20] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 1.5 }}
              />
              {/* Core to Right Node 1 (top) */}
              <motion.path 
                d="M 50% 50% C 57% 50%, 60% 16%, 66% 16%" 
                stroke="#843DF5" 
                strokeWidth="2.5" 
                strokeOpacity="0.5"
                strokeDasharray="5 5"
                fill="none"
                animate={{ strokeDashoffset: [0, -20] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 1.8 }}
              />
              {/* Core to Right Node 2 (middle) */}
              <motion.path 
                d="M 50% 50% C 57% 50%, 60% 50%, 66% 50%" 
                stroke="#843DF5" 
                strokeWidth="2.5" 
                strokeOpacity="0.5"
                strokeDasharray="5 5"
                fill="none"
                animate={{ strokeDashoffset: [0, -20] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 1.8 }}
              />
              {/* Core to Right Node 3 (bottom) */}
              <motion.path 
                d="M 50% 50% C 57% 50%, 60% 84%, 66% 84%" 
                stroke="#843DF5" 
                strokeWidth="2.5" 
                strokeOpacity="0.5"
                strokeDasharray="5 5"
                fill="none"
                animate={{ strokeDashoffset: [0, -20] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 1.8 }}
              />
            </svg>

            {/* Grid structure (Balanced alignment, no hidden states) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Left Column: 2 Cards (Vertically balanced) */}
              <div className="lg:col-span-4 space-y-8 flex flex-col justify-center h-full">
                {[
                  { title: 'Registration Flow', action: 'AI Validation', desc: 'SSO matches and whitelists checked. Flag duplicate registrants and verify billing codes in real-time.' },
                  { title: 'Agenda Builder', action: 'AI Optimization', desc: 'Tracks conflicts and capacity spikes auto-resolved. Speaker overlaps detected and room allocations optimized.' }
                ].map((node, idx) => (
                  <div key={idx} className="bg-[#090e2b]/80 border border-slate-800 rounded-3xl p-6 relative overflow-hidden group hover:border-[#22D3EE]/35 transition-all duration-300 shadow-xl min-h-[160px] flex flex-col justify-center">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-accent-cyan/5 rounded-full blur-xl pointer-events-none" />
                    <h4 className="font-semibold text-[10px] text-slate-500 uppercase tracking-widest">{node.title}</h4>
                    <div className="h-[2px] w-6 bg-accent-cyan my-3 group-hover:w-12 transition-all duration-500" />
                    <h3 className="font-display font-extrabold text-base text-white mb-2">{node.action}</h3>
                    <p className="text-xs text-slate-350 leading-relaxed font-light">{node.desc}</p>
                  </div>
                ))}
              </div>

              {/* Center Column: Core AI Engine (Increased visual scale) */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center py-6">
                <div className="relative w-48 h-48 flex items-center justify-center">
                  {/* Rotating Glowing ring */}
                  <div className="absolute inset-0 rounded-full border border-dashed border-accent-cyan/35 animate-[spin_12s_linear_infinite]" />
                  <div className="absolute inset-2 rounded-full border border-accent-purple/25 animate-[spin_8s_linear_infinite_reverse]" />
                  
                  {/* Glowing background */}
                  <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-accent-purple/20 to-accent-cyan/20 blur-2xl animate-pulse-slow" />
                  
                  {/* Central Orb Image */}
                  <div className="relative w-34 h-34 rounded-full border border-slate-700 bg-[#070c27] flex items-center justify-center p-2 shadow-2xl overflow-hidden transition-all duration-500 hover:border-accent-purple">
                    <img 
                      src={aiOrb.src || aiOrb}
                      alt="AI Core Engine glowing hub"
                      className="w-full h-full object-contain animate-float"
                    />
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <h4 className="text-xs font-mono font-bold text-accent-cyan uppercase tracking-widest">ConGenie AI Engine</h4>
                  <span className="text-[10px] text-slate-400 mt-1 block">Unified Intelligence Hub</span>
                </div>
              </div>

              {/* Right Column: 3 Cards */}
              <div className="lg:col-span-4 space-y-6 flex flex-col justify-center h-full">
                {[
                  { title: 'Attendee Hub', action: 'AI Matchmaking', desc: 'Match B2B meetings dynamically depending on participant interests and calendar schedules.' },
                  { title: 'Data Engine', action: 'AI Insights', desc: 'Predict registration patterns, track revenue velocity, and forecast VIP waitlist volumes.' },
                  { title: 'Automation Layer', action: 'AI Workflows', desc: 'Trigger segments, auto-assign waitlists, and dispatch certificates upon checking benchmarks.' }
                ].map((node, idx) => (
                  <div key={idx} className="bg-[#090e2b]/80 border border-slate-800 rounded-3xl p-6 relative overflow-hidden group hover:border-accent-purple/35 transition-all duration-300 shadow-xl min-h-[125px] flex flex-col justify-center">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-accent-purple/5 rounded-full blur-xl pointer-events-none" />
                    <h4 className="font-semibold text-[10px] text-slate-500 uppercase tracking-widest">{node.title}</h4>
                    <div className="h-[2px] w-6 bg-accent-purple my-3 group-hover:w-12 transition-all duration-500" />
                    <h3 className="font-display font-extrabold text-base text-white mb-2">{node.action}</h3>
                    <p className="text-xs text-slate-355 leading-relaxed font-light">{node.desc}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 9. INTEGRATIONS (Light Theme - Category Hub-and-Spoke Grid, Central Node Node) */}
      <section className="py-20 bg-white dark:bg-[#070b19] border-y border-slate-100 dark:border-slate-900 transition-colors duration-300 relative overflow-hidden">
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

          {/* Central ConGenie Platform Hub Node */}
          <div className="flex flex-col items-center mb-16 relative">
            {/* Central Node Circle */}
            <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-accent-purple to-accent-blue text-white flex items-center justify-center shadow-xl shadow-accent-purple/20 border-4 border-white dark:border-[#020314] z-10">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <div className="text-xs font-mono font-bold text-accent-purple mt-3 tracking-widest uppercase">CONGENIE HUB</div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-light mt-1 max-w-sm text-center">
              Central secure database synchronizer syncing webhook payloads natively.
            </p>
            
            {/* Spoke connector lines radiating to categories (Desktop only) */}
            <div className="absolute top-[40px] left-1/2 -translate-x-1/2 w-[72%] h-[2px] bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent -z-10 hidden lg:block" />
            <div className="w-[2px] h-10 bg-gradient-to-b from-slate-200 dark:from-slate-800 to-transparent -mt-1 hidden lg:block" />
          </div>

          {/* Structured Integration Grid by Category (Dense logo items) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto pt-4">
            
            {/* 1. Payments */}
            <div className="p-5 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/80 shadow-sm flex flex-col justify-between transition-all duration-300 hover:border-accent-purple/30 hover:-translate-y-1">
              <div>
                <span className="text-[9px] font-mono font-bold text-accent-purple uppercase tracking-widest block mb-1">Payments</span>
                <h4 className="text-sm font-bold text-primary dark:text-white mb-2">Instant Payouts</h4>
                <p className="text-[11px] text-slate-500 font-light leading-relaxed mb-4">Collect tickets proceeds securely into your bank.</p>
              </div>
              <div className="flex items-center justify-center h-14 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-850 rounded-xl text-slate-400 hover:text-[#635BFF] transition-colors duration-300 shadow-sm">
                <StripeLogo />
              </div>
            </div>

            {/* 2. CRM & Database */}
            <div className="p-5 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/80 shadow-sm flex flex-col justify-between transition-all duration-300 hover:border-accent-purple/30 hover:-translate-y-1">
              <div>
                <span className="text-[9px] font-mono font-bold text-accent-purple uppercase tracking-widest block mb-1">CRM & Sales</span>
                <h4 className="text-sm font-bold text-primary dark:text-white mb-2">Contact Sync</h4>
                <p className="text-[11px] text-slate-500 font-light leading-relaxed mb-4">Sync check-ins and registrant records natively.</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center justify-center h-14 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-850 rounded-xl text-slate-400 hover:text-[#FF7A59] transition-colors duration-300 shadow-sm" title="HubSpot">
                  <HubSpotLogo />
                </div>
                <div className="flex items-center justify-center h-14 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-850 rounded-xl text-slate-400 hover:text-[#00A1E0] transition-colors duration-300 shadow-sm" title="Salesforce">
                  <SalesforceLogo />
                </div>
              </div>
            </div>

            {/* 3. Collaboration */}
            <div className="p-5 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/80 shadow-sm flex flex-col justify-between transition-all duration-300 hover:border-accent-purple/30 hover:-translate-y-1">
              <div>
                <span className="text-[9px] font-mono font-bold text-accent-purple uppercase tracking-widest block mb-1">Collaboration</span>
                <h4 className="text-sm font-bold text-primary dark:text-white mb-2">Live Chat & Video</h4>
                <p className="text-[11px] text-slate-500 font-light leading-relaxed mb-4">Broadcast alerts and stream digital webinars.</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center justify-center h-14 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-850 rounded-xl text-slate-400 hover:text-[#4A154B] transition-colors duration-300 shadow-sm" title="Slack">
                  <SlackLogo />
                </div>
                <div className="flex items-center justify-center h-14 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-850 rounded-xl text-slate-400 hover:text-[#2D8CFF] transition-colors duration-300 shadow-sm" title="Zoom">
                  <ZoomLogo />
                </div>
              </div>
            </div>

            {/* 4. Marketing */}
            <div className="p-5 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/80 shadow-sm flex flex-col justify-between transition-all duration-300 hover:border-accent-purple/30 hover:-translate-y-1">
              <div>
                <span className="text-[9px] font-mono font-bold text-accent-purple uppercase tracking-widest block mb-1">Marketing</span>
                <h4 className="text-sm font-bold text-primary dark:text-white mb-2">Dispatch Alerts</h4>
                <p className="text-[11px] text-slate-500 font-light leading-relaxed mb-4">Send ticket receipts and confirmations.</p>
              </div>
              <div className="flex items-center justify-center h-14 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-850 rounded-xl text-slate-400 hover:text-[#25D366] transition-colors duration-300 shadow-sm">
                <WhatsAppLogo />
              </div>
            </div>

            {/* 5. Automation */}
            <div className="p-5 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/80 shadow-sm flex flex-col justify-between transition-all duration-300 hover:border-accent-purple/30 hover:-translate-y-1">
              <div>
                <span className="text-[9px] font-mono font-bold text-accent-purple uppercase tracking-widest block mb-1">Data & Flows</span>
                <h4 className="text-sm font-bold text-primary dark:text-white mb-2">Custom Pipelines</h4>
                <p className="text-[11px] text-slate-500 font-light leading-relaxed mb-4">Trigger multi-step tasks and track campaigns.</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center justify-center h-14 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-850 rounded-xl text-slate-400 hover:text-[#FF4F00] transition-colors duration-300 shadow-sm" title="Zapier">
                  <ZapierLogo />
                </div>
                <div className="flex items-center justify-center h-14 bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-850 rounded-xl text-slate-400 hover:text-[#E37400] transition-colors duration-300 shadow-sm" title="Google Analytics">
                  <GoogleAnalyticsLogo />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 10. INTERACTIVE PRODUCT SHOWCASE (Dark themed Simulator with tab background slide) */}
      <section className="py-24 bg-[#020314] text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-purple/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-accent-cyan/35 bg-accent-cyan/5 text-accent-cyan text-xs font-semibold">
              <span>Interactive Simulator</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Interact with the Platform
            </h2>
            <p className="text-slate-400 font-light leading-relaxed max-w-xl mx-auto">
              Select a tab below to switch the simulated dashboard console and explore each core component view.
            </p>
          </div>

          {/* Interactive Showcase Panel */}
          <div className="space-y-8">
            {/* Tabs Navigation */}
            <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto bg-[#090d24]/50 border border-slate-800/80 p-2 rounded-2xl backdrop-blur-sm">
              {showcaseTabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors duration-300 focus:outline-none ${
                      isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div 
                        layoutId="activeTabBackground"
                        className="absolute inset-0 bg-accent-purple rounded-xl shadow-lg shadow-accent-purple/20"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Display area */}
            <div className="max-w-5xl mx-auto">
              <AnimatePresence mode="wait">
                {showcaseTabs.map((tab) => {
                  if (tab.id !== activeTab) return null;
                  return (
                    <motion.div
                      key={tab.id}
                      initial={{ opacity: 0, y: 10, scale: 0.99 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.99 }}
                      transition={{ duration: 0.3 }}
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

                      {/* Right: standardized frame mockup */}
                      <div className="lg:col-span-7 relative w-full">
                        <ProductFrame className="border-slate-800">
                          <img
                            src={tab.image.src || tab.image}
                            alt={`${tab.label} console preview`}
                            className="w-full h-auto rounded-lg object-contain max-h-[320px] mx-auto"
                          />
                        </ProductFrame>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </section>

      {/* 11. WHY TEAMS CHOOSE CONGENIE (Replaced 6-card grid with 3 premium Business Outcomes) */}
      <section className="py-24 bg-white dark:bg-[#070b19] border-y border-slate-100 dark:border-slate-900 transition-colors duration-300 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
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

          {/* Premium Editorial Outcomes (Increased Typography Sizing) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            
            {/* Outcome 01 */}
            <div className="flex flex-col justify-between text-left group">
              <div className="space-y-4">
                <span className="font-display text-6xl sm:text-7xl font-extrabold text-accent-purple/20 group-hover:text-accent-purple/40 transition-colors select-none block">
                  01
                </span>
                <h3 className="font-sans font-extrabold text-2xl text-primary dark:text-white tracking-tight">
                  One Connected Event Ecosystem
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                  Eliminate disconnected CSV spreadsheets. All registration tiers, schedules, badge terminals, and mobile portals sync automatically to a single real-time database.
                </p>
              </div>
              <div className="mt-6 py-3 px-4 rounded-xl bg-accent-purple/5 border border-accent-purple/10 dark:border-accent-purple/20 text-accent-purple dark:text-accent-lavender text-xs font-semibold flex items-center space-x-2 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-accent-purple dark:text-accent-cyan shrink-0" />
                <span>100% Data Sync Accuracy & Zero Latency</span>
              </div>
            </div>

            {/* Outcome 02 */}
            <div className="flex flex-col justify-between text-left group">
              <div className="space-y-4">
                <span className="font-display text-6xl sm:text-7xl font-extrabold text-accent-purple/20 group-hover:text-accent-purple/40 transition-colors select-none block">
                  02
                </span>
                <h3 className="font-sans font-extrabold text-2xl text-primary dark:text-white tracking-tight">
                  Faster Execution with Automation
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                  Leverage built-in tools for schedule conflict detection, automatic B2B matchmaking coordination, and instant billing validation to save coordination hours.
                </p>
              </div>
              <div className="mt-6 py-3 px-4 rounded-xl bg-accent-purple/5 border border-accent-purple/10 dark:border-accent-purple/20 text-accent-purple dark:text-accent-lavender text-xs font-semibold flex items-center space-x-2 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-accent-purple dark:text-accent-cyan shrink-0" />
                <span>85% Reduction in Coordinator Hours</span>
              </div>
            </div>

            {/* Outcome 03 */}
            <div className="flex flex-col justify-between text-left group">
              <div className="space-y-4">
                <span className="font-display text-6xl sm:text-7xl font-extrabold text-accent-purple/20 group-hover:text-accent-purple/40 transition-colors select-none block">
                  03
                </span>
                <h3 className="font-sans font-extrabold text-2xl text-primary dark:text-white tracking-tight">
                  Enterprise Control & Security
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                  Run high-stakes events securely. Supports corporate single sign-on (SSO), isolated client schemas, custom SAML validation, and robust offline check-in resiliency.
                </p>
              </div>
              <div className="mt-6 py-3 px-4 rounded-xl bg-accent-purple/5 border border-accent-purple/10 dark:border-accent-purple/20 text-accent-purple dark:text-accent-lavender text-xs font-semibold flex items-center space-x-2 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-accent-purple dark:text-accent-cyan shrink-0" />
                <span>SOC2 Compliant & 99.99% Core System SLA</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 12. CTA */}
      <FinalCTA />

    </main>
  );
}
