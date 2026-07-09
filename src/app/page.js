'use client';

import React from 'react';
import Link from 'next/link';
import Hero from '../sections/Hero';
import TrustedBy from '../sections/TrustedBy';
import Lifecycle from '../sections/Lifecycle';
import DashboardPreview from '../sections/DashboardPreview';
import Stats from '../sections/Stats';
import Testimonials from '../sections/Testimonials';
import FinalCTA from '../sections/FinalCTA';
import { 
  Sparkles, ArrowRight, CheckCircle2, UserPlus, Calendar, 
  Ticket, Brain, ShieldCheck, BarChart3, Mail, Award, Bot, 
  Shield, Cpu, Users, Building2, Globe, HeartHandshake,
  QrCode, CalendarRange
} from 'lucide-react';

const coreModules = [
  { title: 'Registration', desc: 'Custom logic forms, ticket tier rules, and attendee onboarding databases.', icon: UserPlus },
  { title: 'Agenda Management', desc: 'Dynamic multi-track schedulers, drag-and-drop conflicts alerts, and streams.', icon: Calendar },
  { title: 'Ticketing & Payments', desc: 'Secure Stripe processing, multi-currency invoices, and group promos.', icon: Ticket },
  { title: 'AI Matchmaking', desc: 'Intelligent buyer-seller matchmaking matrixes and meeting table assignments.', icon: Brain },
  { title: 'Onsite Check-in', desc: 'Fast QR scanners, thermal printing kiosks, and local database overrides.', icon: ShieldCheck },
  { title: 'Reports & Analytics', desc: 'Real-time financial audits, NPS sentiment logs, and sponsor exposure sheets.', icon: BarChart3 },
  { title: 'Sponsor & Exhibitor', desc: 'Exhibitor scanning apps, interactive venue layouts, and branding banner zones.', icon: Award },
  { title: 'Email Communication', desc: 'Drip marketing tools, personalized VIP invitations, and SMS session alerts.', icon: Mail }
];

const aiHighlights = [
  { title: 'AI Assistant Chatbot', desc: '24/7 attendee concierge resolving registration and session questions.', icon: Bot },
  { title: 'AI Agenda Planner', desc: 'Automates scheduling conflicts and suggested room tracks.', icon: Calendar },
  { title: 'AI Matchmaking', desc: 'Suggests high-value pairings and schedules B2B meetings.', icon: Brain },
  { title: 'AI Reporting & Insights', desc: 'Pulls sentiment logs, NPS graphs, and revenue predictions.', icon: BarChart3 },
  { title: 'AI Recommendation Engine', desc: 'Tailors session and workshop suggests based on attendee interests.', icon: Sparkles }
];

const keySolutions = [
  { title: 'Conferences & Summits', desc: 'Multi-track academic agendas, speaker slide collectors, and live polling.', icon: Users },
  { title: 'Exhibitions & Expos', desc: 'Exhibitor scanning portals, interactive floor layouts, and lead metrics.', icon: Building2 },
  { title: 'Corporate Events & AGMs', desc: 'White-label registrations, secure document vaults, and Okta SSO syncs.', icon: Globe },
  { title: 'Medical Congresses', desc: 'Abstract paper reviewers review gates, CME credit metrics, and certificates.', icon: Award },
  { title: 'Trade Missions', desc: 'B2B matchmaking widgets, buyer matchmaking filters, and meeting logs.', icon: Globe },
  { title: 'Government Summits', desc: 'Encrypted QR validation gates, VIP checkmarks, and offline DB support.', icon: ShieldCheck }
];

const whyChooseUs = [
  { title: 'Complete Lifecycle Coverage', desc: 'Bridges pre-event setup, ticket payments, onsite scanning, and post-event audits in one hub.', icon: Cpu },
  { title: 'AI-Powered Automation', desc: 'Let machine learning orchestrate your agenda scheduling, B2B matchmaking, and support.', icon: Brain },
  { title: 'Enterprise-Ready Security', desc: 'SOC2 compliant database hosting options, SAML SSO logins, and full GDPR consent paths.', icon: Shield },
  { title: 'Multi-Event Support', desc: 'Subscribe once and spin up unlimited separate event portals and calendars under one admin.', icon: Calendar },
  { title: 'Secure & Scalable', desc: 'Offline-compatible databases and local printer servers keep lines moving under heavy traffic.', icon: ShieldCheck },
  { title: 'Dedicated Onboarding', desc: 'Paired with onboarding managers who clean CSV directories, layout design styling, and support dry runs.', icon: HeartHandshake }
];

export default function Home() {
  return (
    <div className="w-full relative">
      
      {/* 1. Hero & TrustedBy Sections */}
      <Hero />
      <TrustedBy />

      {/* 2. Platform Overview Section - Redesigned Connected Lifecycle Journey */}
      <section className="py-28 bg-white dark:bg-[#030712] transition-colors duration-300 w-full overflow-hidden relative">
        {/* Background glowing effects */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-accent-purple/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-accent-cyan/5 rounded-full blur-[130px] pointer-events-none" />
        
        {/* Dot pattern background overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:2rem_2rem] opacity-70 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-accent-purple/35 bg-accent-purple/5 text-accent-purple text-xs font-semibold shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-accent-purple" />
              <span>Unified Event Lifecycle Stack</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-primary dark:text-white tracking-tight leading-tight">
              Pre-Event, Onsite, and Post-Event Under One Roof
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-slate-550 dark:text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
              ConGenie unifies disjointed systems into a single intelligent platform. Instead of copying spreadsheets between separate ticketing, speaker portals, and scanner apps, all modules run on a shared, real-time database.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-accent-purple dark:text-accent-cyan hover:underline group"
              >
                <span>Learn more about our approach</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Connected Row Containers */}
          <div className="relative mt-16">
            
            {/* Connected Horizontal Flow Line (Desktop) */}
            <div className="absolute top-[138px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan opacity-40 hidden lg:block overflow-visible pointer-events-none">
              {/* Flowing animated node */}
              <div className="absolute w-2 h-2 rounded-full bg-accent-cyan -translate-y-[3px] animate-[flow-right_3s_linear_infinite]" />
            </div>

            {/* Stages Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
              
              {/* Stage 01: Pre-Event */}
              <div className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-accent-purple to-accent-blue shadow-lg shadow-accent-purple/5 transition-all duration-300">
                <div className="h-full bg-white/90 dark:bg-[#070b20]/90 backdrop-blur-md rounded-[23px] p-6 sm:p-8 flex flex-col justify-between text-left space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-2xl bg-accent-purple/10 text-accent-purple border border-accent-purple/20">
                        <CalendarRange className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500 tracking-wider">STAGE 01</span>
                    </div>

                    <h3 className="font-display font-extrabold text-xl text-primary dark:text-white group-hover:text-accent-purple transition-colors">
                      Pre-Event Setup & Sales
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-550 dark:text-slate-400 font-light leading-relaxed">
                      Design speaker slide portals, open conditional forms, and collect ticket revenues via Stripe. Manage your agendas, databases, and promo codes from one admin dashboard.
                    </p>
                  </div>

                  {/* High-Fidelity Mockup simulation */}
                  <div className="border border-slate-100 dark:border-slate-850 rounded-2xl bg-slate-50/50 dark:bg-slate-950/60 p-4 font-mono text-[10px] space-y-2.5 shadow-inner">
                    <div className="flex justify-between items-center text-slate-450 border-b border-slate-200/50 dark:border-slate-900 pb-1.5">
                      <span>SPEAKER PORTAL</span>
                      <span className="text-emerald-500 font-sans font-bold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" /> Live
                      </span>
                    </div>
                    <div className="space-y-2 text-slate-700 dark:text-slate-300">
                      <div className="flex justify-between items-center bg-white dark:bg-slate-900/60 p-2 rounded border border-slate-200/40 dark:border-slate-855">
                        <span>Abstract File: Sarah_bio.pdf</span>
                        <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 text-[8px] font-bold">Approved</span>
                      </div>
                      <div className="flex justify-between items-center bg-white dark:bg-slate-900/60 p-2 rounded border border-slate-200/40 dark:border-slate-855">
                        <span>Speaker Slide: Opening_Keynote</span>
                        <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-500 text-[8px] font-bold">Reviewing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stage 02: Onsite Ops */}
              <div className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-accent-blue to-accent-cyan shadow-lg shadow-accent-blue/5 transition-all duration-300">
                <div className="h-full bg-white/90 dark:bg-[#070b20]/90 backdrop-blur-md rounded-[23px] p-6 sm:p-8 flex flex-col justify-between text-left space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-2xl bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
                        <QrCode className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500 tracking-wider">STAGE 02</span>
                    </div>

                    <h3 className="font-display font-extrabold text-xl text-primary dark:text-white group-hover:text-accent-blue transition-colors">
                      Onsite Event Operations
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-550 dark:text-slate-400 font-light leading-relaxed">
                      Scan guest tickets using offline-capable check-in apps, trigger thermal badge printing, and monitor real-time attendance counts in the room portals.
                    </p>
                  </div>

                  {/* High-Fidelity Mockup simulation */}
                  <div className="border border-slate-100 dark:border-slate-850 rounded-2xl bg-slate-50/50 dark:bg-slate-950/60 p-4 font-mono text-[10px] space-y-3 shadow-inner relative overflow-hidden">
                    <div className="flex justify-between items-center text-slate-450 border-b border-slate-200/50 dark:border-slate-900 pb-1.5">
                      <span>QR TICKET GATEWAY</span>
                      <span className="text-accent-blue font-sans font-bold">Scanning</span>
                    </div>
                    <div className="flex items-center justify-center p-2 relative bg-white dark:bg-slate-900/60 rounded border border-slate-200/40 dark:border-slate-855 h-[48px]">
                      {/* Scanning laser line overlay */}
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent-blue shadow-neon-blue animate-[scan-y_2s_ease-in-out_infinite]" />
                      <div className="flex items-center space-x-3 w-full">
                        <div className="w-7 h-7 bg-slate-100 dark:bg-slate-950 rounded border border-slate-200 dark:border-slate-800 flex items-center justify-center">
                          <QrCode className="w-5 h-5 text-slate-550 dark:text-slate-350" />
                        </div>
                        <div className="text-left font-sans">
                          <div className="font-bold text-[9px] text-slate-800 dark:text-slate-205">Elena Rostova</div>
                          <div className="text-[7px] text-slate-450">ID: CN-8491</div>
                        </div>
                        <span className="ml-auto text-[8px] font-black text-emerald-500 font-mono">APPROVED</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stage 03: Post-Event */}
              <div className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-accent-cyan to-accent-purple shadow-lg shadow-accent-cyan/5 transition-all duration-300">
                <div className="h-full bg-white/90 dark:bg-[#070b20]/90 backdrop-blur-md rounded-[23px] p-6 sm:p-8 flex flex-col justify-between text-left space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-2xl bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">
                        <BarChart3 className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500 tracking-wider">STAGE 03</span>
                    </div>

                    <h3 className="font-display font-extrabold text-xl text-primary dark:text-white group-hover:text-accent-cyan transition-colors">
                      Post-Event ROI Insights
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-550 dark:text-slate-400 font-light leading-relaxed">
                      Audit sponsor booth ROI, generate financial charts, and send CME completion certificates. Collect surveys and compile overall event performance summaries.
                    </p>
                  </div>

                  {/* High-Fidelity Mockup simulation */}
                  <div className="border border-slate-100 dark:border-slate-850 rounded-2xl bg-slate-50/50 dark:bg-slate-950/60 p-4 font-mono text-[10px] space-y-2.5 shadow-inner">
                    <div className="flex justify-between items-center text-slate-450 border-b border-slate-200/50 dark:border-slate-900 pb-1.5">
                      <span>ROI ANALYTICS</span>
                      <span className="text-accent-purple font-sans font-bold">Generated</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-white dark:bg-slate-900/60 p-2 rounded border border-slate-200/40 dark:border-slate-855">
                        <span className="block text-[7px] text-slate-450 uppercase mb-0.5">NPS Score</span>
                        <span className="text-sm font-black text-accent-cyan">+78 NPS</span>
                      </div>
                      <div className="bg-white dark:bg-slate-900/60 p-2 rounded border border-slate-200/40 dark:border-slate-855">
                        <span className="block text-[7px] text-slate-450 uppercase mb-0.5">Sponsor ROI</span>
                        <span className="text-sm font-black text-accent-purple">5.8x Avg</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 3. Core Modules Preview Section */}
      <section className="py-24 bg-slate-50 dark:bg-[#030712] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary dark:text-white tracking-tight">
              Powerful Core Software Modules
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-slate-550 dark:text-slate-400 font-light">
              Hover or click on features to explore our technical library.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreModules.map((mod, idx) => {
              const Icon = mod.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-white dark:bg-slate-900/30 border border-slate-200/80 dark:border-slate-800/80 p-5 rounded-2xl text-left hover:border-accent-purple/40 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 w-max text-accent-purple group-hover:bg-accent-purple/10 transition-colors duration-300 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-sm sm:text-base text-primary dark:text-white mb-2">
                    {mod.title}
                  </h3>
                  <p className="text-xs text-slate-550 dark:text-slate-400 font-light leading-relaxed">
                    {mod.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/features"
              className="inline-flex items-center space-x-2 bg-white dark:bg-slate-900 border border-slate-250 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold px-6 py-3 rounded-full hover:border-slate-350 dark:hover:border-slate-700 shadow-sm transition-all"
            >
              <span>View All 12 Features</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. AI Capabilities Preview Section */}
      <section className="py-24 bg-gradient-to-b from-[#0a0f24] to-[#040612] text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-cyan/5 rounded-full blur-[130px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-accent-cyan/30 bg-accent-cyan/5 text-accent-cyan text-[10px] font-semibold mb-4">
              <Bot className="w-3.5 h-3.5" />
              <span>Intelligent Automation</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
              Built-In AI to Automate Event Operations
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-slate-400 font-light">
              Let algorithms run your B2B pairings, schedules conflicts checks, and support concierges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {aiHighlights.map((hl, idx) => {
              const Icon = hl.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-[#090b20]/60 border border-slate-850 p-5 rounded-2xl text-left hover:border-accent-cyan/35 transition-colors"
                >
                  <div className="p-2.5 rounded-xl bg-slate-950 text-accent-cyan w-max mb-4">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <h4 className="font-bold text-xs sm:text-sm text-white mb-2">{hl.title}</h4>
                  <p className="text-[11px] text-slate-400 font-light leading-relaxed">{hl.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/ai-capabilities"
              className="inline-flex items-center space-x-2 bg-accent-purple hover:bg-[#6c28e2] text-white text-xs font-black px-6 py-3.5 rounded-xl shadow-lg shadow-accent-purple/20 transition-all"
            >
              <span>Explore AI Capabilities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Event Lifecycle Section */}
      <Lifecycle />

      {/* 6. Dashboard Preview Section */}
      <DashboardPreview />

      {/* 7. Solutions Preview Section */}
      <section className="py-24 bg-white dark:bg-[#070b19] border-y border-slate-100 dark:border-slate-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary dark:text-white tracking-tight">
              Engineered for Diverse Industry Use Cases
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-slate-550 dark:text-slate-400 font-light">
              Tailored templates preloaded for secure, high-capacity coordinates.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {keySolutions.map((sol, idx) => {
              const Icon = sol.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-slate-50 dark:bg-slate-900/40 border border-slate-205/60 dark:border-slate-805/60 p-5 rounded-2xl text-left hover:border-accent-purple/40 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="p-2.5 rounded-xl bg-white dark:bg-slate-950 text-accent-purple w-max mb-4 shadow-sm border border-slate-150 dark:border-slate-850">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-sm sm:text-base text-primary dark:text-white mb-2">
                    {sol.title}
                  </h3>
                  <p className="text-xs text-slate-550 dark:text-slate-400 font-light leading-relaxed">
                    {sol.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/solutions"
              className="inline-flex items-center space-x-2 bg-white dark:bg-slate-900 border border-slate-250 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold px-6 py-3 rounded-full hover:border-slate-350 dark:hover:border-slate-700 shadow-sm transition-all"
            >
              <span>View Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Why Choose Us Section */}
      <section className="py-24 bg-slate-50 dark:bg-[#030712] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold text-accent-purple uppercase tracking-widest block mb-2">Why ConGenie</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary dark:text-white tracking-tight">
              Enterprise Event Tech You Can Rely On
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((w, idx) => {
              const Icon = w.icon;
              return (
                <div key={idx} className="text-left space-y-3">
                  <div className="p-3 bg-accent-purple/10 text-accent-purple rounded-xl w-max">
                    <Icon className="w-5.5 h-5.5" />
                  </div>
                  <h4 className="font-display font-extrabold text-base sm:text-lg text-primary dark:text-white">{w.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-550 dark:text-slate-400 font-light leading-relaxed">{w.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. Stats Section */}
      <Stats />

      {/* 10. Testimonials Section */}
      <Testimonials />

      {/* 11. Final CTA Section */}
      <FinalCTA />

    </div>
  );
}
