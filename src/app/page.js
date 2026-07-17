'use client';

import React from 'react';
import Hero from '../sections/Hero';
import Stats from '../sections/Stats';
import Lifecycle from '../sections/Lifecycle';
import AICapabilitiesCommandCenter from '../sections/AICapabilitiesCommandCenter';
import DashboardPreview from '../sections/DashboardPreview';
import MergedSolutions from '../sections/MergedSolutions';
import Testimonials from '../sections/Testimonials';
import FAQSection from '../sections/FAQSection';
import FinalCTA from '../sections/FinalCTA';
import {
  Sparkles,
  BarChart3,
  QrCode,
  CalendarRange,
} from 'lucide-react';

export default function Home() {
  return (
    <div className="w-full relative">

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Pre-Event, During-Event & Post-Event Overview Stack */}
      <section className="py-16 lg:py-20 bg-white dark:bg-[#030712] transition-colors duration-300 w-full overflow-hidden relative dark:border-slate-900">
        {/* Background glowing effects */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-accent-purple/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-accent-cyan/5 rounded-full blur-[130px] pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-4 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-accent-purple/35 bg-accent-purple/5 text-accent-purple text-xs font-semibold shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-accent-purple" />
              <span>Unified Event Lifecycle Stack</span>
            </div>
            <h2 className="font-display text-primary dark:text-white">
              Pre-Event, Onsite, and Post-Event Under One Roof
            </h2>
            <p className="mt-4 text-slate-555 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
              ConGenie unifies disjointed systems into a single intelligent platform. Instead of copying spreadsheets between separate ticketing, speaker portals, and scanner apps, all modules run on a shared, real-time database.
            </p>
          </div>

          {/* Connected Row Containers */}
          <div className="relative mt-12">
            
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

                    <h5 className="font-display text-primary dark:text-white group-hover:text-accent-purple transition-colors">
                      Pre-Event Setup & Sales
                    </h5>
                    <p className="text-slate-555 dark:text-slate-400 font-light leading-relaxed">
                      Design speaker slide portals, open conditional forms, and collect ticket revenues via Stripe. Manage your agendas, databases, and promo codes from one admin dashboard.
                    </p>
                  </div>

                  {/* High-Fidelity Mockup simulation */}
                  <div className="border border-slate-100 dark:border-slate-850 rounded-2xl bg-white dark:bg-slate-950/60 p-4 font-mono text-[10px] space-y-2.5">
                    <div className="flex justify-between items-center text-slate-450 border-b border-slate-200/50 dark:border-slate-900 pb-1.5">
                      <span>SPEAKER PORTAL</span>
                      <span className="text-emerald-500 font-sans font-bold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" /> Live
                      </span>
                    </div>
                    <div className="space-y-2 text-slate-705 dark:text-slate-300">
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
              <div className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-accent-purple to-accent-blue shadow-lg shadow-accent-purple/5 transition-all duration-300">
                <div className="h-full bg-white/90 dark:bg-[#070b20]/90 backdrop-blur-md rounded-[23px] p-6 sm:p-8 flex flex-col justify-between text-left space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-2xl bg-accent-purple/10 text-accent-purple border border-accent-purple/20">
                        <QrCode className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500 tracking-wider">STAGE 02</span>
                    </div>

                    <h5 className="font-display text-primary dark:text-white group-hover:text-accent-purple transition-colors">
                      Onsite Event Operations
                    </h5>
                    <p className="text-slate-555 dark:text-slate-400 leading-relaxed">
                      Scan guest tickets using offline-capable check-in apps, trigger thermal badge printing, and monitor real-time attendance counts in the room portals.
                    </p>
                  </div>

                  {/* High-Fidelity Mockup simulation */}
                  <div className="border border-slate-100 dark:border-slate-850 rounded-2xl bg-white dark:bg-slate-950/60 p-4 font-mono text-[10px] space-y-3 relative overflow-hidden">
                    <div className="flex justify-between items-center text-slate-450 border-b border-slate-200/50 dark:border-slate-900 pb-1.5">
                      <span>QR TICKET GATEWAY</span>
                      <span className="text-accent-blue font-sans font-bold">Scanning</span>
                    </div>
                    <div className="flex items-center justify-center p-2 relative bg-white dark:bg-slate-900/60 rounded border border-slate-200/40 dark:border-slate-855 h-[48px]">
                      {/* Scanning laser line overlay */}
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent-blue shadow-neon-blue animate-[scan-y_2s_ease-in-out_infinite]" />
                      <div className="flex items-center space-x-3 w-full">
                        <div className="w-7 h-7 bg-slate-100 dark:bg-slate-955 rounded border border-slate-200 dark:border-slate-800 flex items-center justify-center">
                          <QrCode className="w-5 h-5 text-slate-555 dark:text-slate-350" />
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
              <div className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-accent-purple to-accent-blue shadow-lg shadow-accent-purple/5 transition-all duration-300">
                <div className="h-full bg-white/90 dark:bg-[#070b20]/90 backdrop-blur-md rounded-[23px] p-6 sm:p-8 flex flex-col justify-between text-left space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-2xl bg-accent-purple/10 text-accent-purple border border-accent-purple/20">
                        <BarChart3 className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-400 dark:text-slate-500 tracking-wider">STAGE 03</span>
                    </div>

                    <h5 className="font-display text-primary dark:text-white group-hover:text-accent-purple transition-colors">
                      Post-Event ROI Insights
                    </h5>
                    <p className="text-slate-555 dark:text-slate-400 leading-relaxed">
                      Audit sponsor booth ROI, generate financial charts, and send CME completion certificates. Collect surveys and compile overall event performance summaries.
                    </p>
                  </div>

                  {/* High-Fidelity Mockup simulation */}
                  <div className="border border-slate-100 dark:border-slate-850 rounded-2xl bg-white dark:bg-slate-950/60 p-4 font-mono text-[10px] space-y-2.5">
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

      {/* 3. Statistics */}
      <Stats />

      {/* 5. Intelligent Event Operations (AI) */}
      <AICapabilitiesCommandCenter />

      {/* 6. Dashboard / Product Walkthrough */}
      <DashboardPreview />

      {/* 4. One Platform for Every Stage of Your Event — 5-step roadmap */}
      <Lifecycle />

      {/* 7. Everything You Need to Run Any Event (Merged Section) */}
      <MergedSolutions />

      {/* 8. Testimonials */}
      <Testimonials />

      {/* 9. FAQ */}
      <FAQSection />

      {/* 10. Final Call to Action */}
      <FinalCTA />

    </div>
  );
}
