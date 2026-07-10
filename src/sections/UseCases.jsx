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
  ShieldAlert,
  Fingerprint,
  KeyRound,
  UserCheck
} from 'lucide-react';

export default function UseCases() {
  const [hoveredLabel, setHoveredLabel] = useState('Built for diverse event ecosystems');

  return (
    <section 
      id="usecases"
      className="pb-28 bg-[#FFFFFF] transition-colors duration-300 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 50% 45%, rgba(147, 51, 234, 0.1), transparent 40%),
          linear-gradient(180deg, #FFFFFF 0%, #F8F7FC 100%)
        `
      }}
    >
      {/* Subtle Dot Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(147,51,234,0.02)_1px,transparent_1px)] [background-size:2rem_2rem] pointer-events-none" />

      {/* Decorative Technical Curved Paths */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-15" viewBox="0 0 1440 800" fill="none">
        <path d="M-100 200 C 300 400, 500 100, 900 300 C 1200 450, 1300 200, 1600 400" stroke="#9333EA" strokeWidth="1.5" strokeDasharray="6 6" />
        <path d="M-50 600 C 400 400, 800 700, 1100 500 C 1300 400, 1400 600, 1500 450" stroke="#C084FC" strokeWidth="1" />
      </svg>

      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 relative">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-[#9333EA]/35 bg-[#9333EA]/5 text-[#9333EA] text-xs font-semibold mb-4 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#9333EA]" />
            <span>Industry Solutions</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#0A1744] tracking-tight leading-tight">
            Built for Every{' '}
            <span className="bg-gradient-to-r from-[#6B21A8] via-[#9333EA] to-[#C084FC] bg-clip-text text-transparent">
              Event Environment
            </span>
          </h2>

          <p className="mt-4 text-slate-500 font-light leading-relaxed max-w-2xl mx-auto">
            From global conferences and exhibitions to medical congresses, trade missions, and government summits, ConGenie delivers purpose-built workflows for every event format.
          </p>

          {/* Interactive Floating Label near header */}
          <div className="mt-6 h-6 flex justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={hoveredLabel}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
                className="text-xl font-bold tracking-wider uppercase text-[#9333EA]/70 px-3 py-1 rounded-full"
              >
                {hoveredLabel}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        {/* Asymmetric 12-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch auto-rows-max">
          
          {/* 1. Large Featured Card on the Left (Conferences & Summits) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            onMouseEnter={() => setHoveredLabel('Built for complex multi-track programs')}
            onMouseLeave={() => setHoveredLabel('Built for diverse event ecosystems')}
            className="col-span-12 lg:col-span-5 lg:row-span-3 group relative rounded-[28px] p-px transition-all duration-300 cursor-pointer overflow-hidden flex"
            style={{
              background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.25), rgba(147, 51, 234, 0.05))',
            }}
            whileHover={{
              y: -6,
              background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.55), rgba(147, 51, 234, 0.15))',
              boxShadow: '0 24px 60px rgba(15, 23, 42, 0.06), 0 0 40px rgba(147, 51, 234, 0.08)'
            }}
          >
            {/* Shimmer overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(147,51,234,0.03)_50%,transparent_75%)] bg-[length:250%_250%] pointer-events-none animate-[shimmer_6s_linear_infinite] z-0" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.06)_0%,transparent_70%)] pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500 z-0" />

            <div className="h-full w-full rounded-[27px] p-8 flex flex-col justify-between relative overflow-hidden z-10 bg-gradient-to-br from-white via-white to-[#F8F7FC]/80 shadow-2xl shadow-slate-900/5">
              
              {/* Decorative timeline visual pattern */}
              <div className="absolute right-0 top-12 w-24 h-48 opacity-20 pointer-events-none">
                <div className="w-px h-full bg-gradient-to-b from-[#9333EA]/40 to-transparent mx-auto relative">
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#9333EA] animate-ping" />
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#9333EA]" />
                  <div className="absolute top-20 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#A855F7]" />
                  <div className="absolute top-36 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#C084FC]" />
                </div>
              </div>

              {/* Main content */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center border"
                    style={{
                      background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.14), rgba(147, 51, 234, 0.05))',
                      borderColor: 'rgba(147, 51, 234, 0.25)',
                      boxShadow: '0 8px 24px rgba(147, 51, 234, 0.12)'
                    }}
                  >
                    <Presentation className="w-5 h-5 text-[#9333EA]" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold tracking-wider text-[#9333EA] bg-[#9333EA]/6 px-2 py-0.5 rounded">
                      FEATURED SOLUTION
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#0A1744] tracking-tight leading-tight">
                    Conferences & Summits
                  </h3>
                  <p className="text-slate-500 font-light leading-relaxed">
                    Multi-track academic agendas, speaker slide collectors, live polling, and intelligent scheduling for large-scale programs.
                  </p>
                </div>

                {/* Capability Bullet points */}
                <div className="grid grid-cols-1 gap-y-2.5 pt-2">
                  {[
                    'Multi-track agenda management',
                    'Speaker and abstract workflows',
                    'Live polling and engagement',
                    'Registration and attendee management',
                    'Workshop and session scheduling',
                    'Certificate and accreditation workflows',
                    'Sponsor and exhibitor coordination',
                    'Real-time analytics and reporting'
                  ].map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-center space-x-2.5 text-slate-600 font-light">
                      <div className="w-4.5 h-4.5 rounded-full bg-[#9333EA]/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-[#9333EA]" />
                      </div>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom section with CTA and platform insight */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <div className="bg-[#9333EA]/5 border border-[#9333EA]/10 p-3.5 rounded-2xl mb-5">
                  <span className="block font-mono font-bold uppercase text-[#9333EA] tracking-wider mb-0.5">Platform Insight</span>
                  <p className="text-slate-550 font-light">Built for high-volume, multi-day programs</p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* 2. Top-Middle Card (Exhibitions & Expos) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onMouseEnter={() => setHoveredLabel('Built for high-traffic exhibitions')}
            onMouseLeave={() => setHoveredLabel('Built for diverse event ecosystems')}
            className="col-span-12 md:col-span-6 lg:col-span-4 group relative rounded-[28px] p-px transition-all duration-300 cursor-pointer overflow-hidden h-[245px] flex"
            style={{
              background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.18), rgba(147, 51, 234, 0.05))',
            }}
            whileHover={{
              y: -6,
              background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.45), rgba(147, 51, 234, 0.15))',
              boxShadow: '0 20px 45px rgba(15, 23, 42, 0.06)'
            }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.04)_0%,transparent_70%)] pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500 z-0" />
            <div className="h-full w-full rounded-[27px] p-6 flex flex-col justify-between relative overflow-hidden z-10 bg-white/90">
              
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center border"
                    style={{
                      background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.14), rgba(147, 51, 234, 0.05))',
                      borderColor: 'rgba(147, 51, 234, 0.25)'
                    }}
                  >
                    <Building2 className="w-4.5 h-4.5 text-[#9333EA]" />
                  </div>
                  <span className="text-xs font-semibold tracking-wider text-[#9333EA] bg-[#9333EA]/6 px-2 py-0.5 rounded">EXPO</span>
                </div>
                <h4 className="font-display font-extrabold text-lg text-[#0A1744] tracking-tight">Exhibitions & Expos</h4>
                <p className=" text-slate-500 font-light leading-relaxed line-clamp-2">
                  Manage exhibitors, floor plans, lead capture, booth activity, and visitor engagement from one connected platform.
                </p>
              </div>

              <div className="flex justify-between items-center pt-2 border-t border-slate-100/80">
                <div className="flex gap-1.5">
                  {['Exhibitor Portal', 'Lead Capture'].map((chip, cIdx) => (
                    <span key={cIdx} className="px-2 py-0.5 rounded-full text-xs font-mono tracking-wider font-semibold bg-[#9333EA]/5 border border-[#9333EA]/10 text-[#9333EA]">{chip}</span>
                  ))}
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#9333EA] group-hover:translate-x-1 transition-all" />
              </div>

            </div>
          </motion.div>

          {/* 3. Top-Right Card (Corporate Events & AGMs) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onMouseEnter={() => setHoveredLabel('Built for secure corporate operations')}
            onMouseLeave={() => setHoveredLabel('Built for diverse event ecosystems')}
            className="col-span-12 md:col-span-6 lg:col-span-3 group relative rounded-[28px] p-px transition-all duration-300 cursor-pointer overflow-hidden h-[245px] flex"
            style={{
              background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.18), rgba(147, 51, 234, 0.05))',
            }}
            whileHover={{
              y: -6,
              background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.45), rgba(147, 51, 234, 0.15))',
              boxShadow: '0 20px 45px rgba(15, 23, 42, 0.06)'
            }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.04)_0%,transparent_70%)] pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500 z-0" />
            <div className="h-full w-full rounded-[27px] p-6 flex flex-col justify-between relative overflow-hidden z-10 bg-white/90">
              
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center border"
                    style={{
                      background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.14), rgba(147, 51, 234, 0.05))',
                      borderColor: 'rgba(147, 51, 234, 0.25)'
                    }}
                  >
                    <Briefcase className="w-4.5 h-4.5 text-[#9333EA]" />
                  </div>
                  <span className="text-xs font-semibold tracking-wider text-[#9333EA] bg-[#9333EA]/6 px-2 py-0.5 rounded">CORPORATE</span>
                </div>
                <h4 className="font-display font-extrabold text-lg text-[#0A1744] tracking-tight">Corporate Events & AGMs</h4>
                <p className="text-slate-500 font-light leading-relaxed line-clamp-2">
                  Deliver secure, branded corporate events with registration, document access, voting, and SSO support.
                </p>
              </div>

              <div className="flex justify-between items-center pt-2 border-t border-slate-100/80">
                <div className="flex gap-1.5">
                  {['Secure Access', 'White Label'].map((chip, cIdx) => (
                    <span key={cIdx} className="px-2 py-0.5 rounded-full text-xs font-mono tracking-wider font-semibold bg-[#9333EA]/5 border border-[#9333EA]/10 text-[#9333EA]">{chip}</span>
                  ))}
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#9333EA] group-hover:translate-x-1 transition-all" />
              </div>

            </div>
          </motion.div>

          {/* 4. Bottom-Middle-Left Card (Medical Congresses) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            onMouseEnter={() => setHoveredLabel('Built for CME and abstract protocols')}
            onMouseLeave={() => setHoveredLabel('Built for diverse event ecosystems')}
            className="col-span-12 md:col-span-6 lg:col-span-3 group relative rounded-[28px] p-px transition-all duration-300 cursor-pointer overflow-hidden h-[245px] flex"
            style={{
              background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.18), rgba(147, 51, 234, 0.05))',
            }}
            whileHover={{
              y: -6,
              background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.45), rgba(147, 51, 234, 0.15))',
              boxShadow: '0 20px 45px rgba(15, 23, 42, 0.06)'
            }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.04)_0%,transparent_70%)] pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500 z-0" />
            <div className="h-full w-full rounded-[27px] p-6 flex flex-col justify-between relative overflow-hidden z-10 bg-white/90">
              
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center border"
                    style={{
                      background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.14), rgba(147, 51, 234, 0.05))',
                      borderColor: 'rgba(147, 51, 234, 0.25)'
                    }}
                  >
                    <ClipboardCheck className="w-4.5 h-4.5 text-[#9333EA]" />
                  </div>
                  <span className="text-xs font-semibold tracking-wider text-[#9333EA] bg-[#9333EA]/6 px-2 py-0.5 rounded">MEDICAL</span>
                </div>
                <h4 className="font-display font-extrabold text-lg text-[#0A1744] tracking-tight">Medical Congresses</h4>
                <p className=" text-slate-500 font-light leading-relaxed line-clamp-2">
                  Support abstracts, CME credits, scientific committees, certificates, and faculty workflows for medical events.
                </p>
              </div>

              <div className="flex justify-between items-center pt-2 border-t border-slate-100/80">
                <div className="flex gap-1.5">
                  {['Abstract Review', 'CME Tracking'].map((chip, cIdx) => (
                    <span key={cIdx} className="px-2 py-0.5 rounded-full text-xs font-mono tracking-wider font-semibold bg-[#9333EA]/5 border border-[#9333EA]/10 text-[#9333EA]">{chip}</span>
                  ))}
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#9333EA] group-hover:translate-x-1 transition-all" />
              </div>

            </div>
          </motion.div>

          {/* 5. Bottom-Middle-Right Card (Trade Missions) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            onMouseEnter={() => setHoveredLabel('Built for high-value B2B connections')}
            onMouseLeave={() => setHoveredLabel('Built for diverse event ecosystems')}
            className="col-span-12 md:col-span-6 lg:col-span-4 group relative rounded-[28px] p-px transition-all duration-300 cursor-pointer overflow-hidden h-[245px] flex"
            style={{
              background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.18), rgba(147, 51, 234, 0.05))',
            }}
            whileHover={{
              y: -6,
              background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.45), rgba(147, 51, 234, 0.15))',
              boxShadow: '0 20px 45px rgba(15, 23, 42, 0.06)'
            }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.04)_0%,transparent_70%)] pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500 z-0" />
            <div className="h-full w-full rounded-[27px] p-6 flex flex-col justify-between relative overflow-hidden z-10 bg-white/90">
              
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center border"
                    style={{
                      background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.14), rgba(147, 51, 234, 0.05))',
                      borderColor: 'rgba(147, 51, 234, 0.25)'
                    }}
                  >
                    <Handshake className="w-4.5 h-4.5 text-[#9333EA]" />
                  </div>
                  <span className="text-xs font-semibold tracking-wider text-[#9333EA] bg-[#9333EA]/6 px-2 py-0.5 rounded">B2B</span>
                </div>
                <h4 className="font-display font-extrabold text-lg text-[#0A1744] tracking-tight">Trade Missions</h4>
                <p className=" text-slate-500 font-light leading-relaxed line-clamp-2">
                  Coordinate buyers, sellers, delegations, matchmaking, meeting schedules, and business outcomes.
                </p>
              </div>

              <div className="flex justify-between items-center pt-2 border-t border-slate-100/80">
                <div className="flex gap-1.5">
                  {['B2B Matchmaking', 'Meeting Scheduler'].map((chip, cIdx) => (
                    <span key={cIdx} className="px-2 py-0.5 rounded-full text-xs font-mono tracking-wider font-semibold bg-[#9333EA]/5 border border-[#9333EA]/10 text-[#9333EA]">{chip}</span>
                  ))}
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#9333EA] group-hover:translate-x-1 transition-all" />
              </div>

            </div>
          </motion.div>

          {/* 6. Full-Width Lower Card (Government Summits) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onMouseEnter={() => setHoveredLabel('Built for secure high-level events')}
            onMouseLeave={() => setHoveredLabel('Built for diverse event ecosystems')}
            className="col-span-12 lg:col-span-7 group relative rounded-[28px] p-px transition-all duration-300 cursor-pointer overflow-hidden min-h-[210px] flex"
            style={{
              background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.18), rgba(147, 51, 234, 0.05))',
            }}
            whileHover={{
              y: -6,
              background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.45), rgba(147, 51, 234, 0.15))',
              boxShadow: '0 20px 45px rgba(15, 23, 42, 0.06)'
            }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.04)_0%,transparent_70%)] pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500 z-0" />
            
            <div className="h-full w-full rounded-[27px] p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-stretch gap-6 relative overflow-hidden z-10 bg-white/90">
              
              {/* Left Side: Content */}
              <div className="flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center border"
                      style={{
                        background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.14), rgba(147, 51, 234, 0.05))',
                        borderColor: 'rgba(147, 51, 234, 0.25)'
                      }}
                    >
                      <ShieldCheck className="w-4.5 h-4.5 text-[#9333EA]" />
                    </div>
                    <span className="text-xs font-semibold tracking-wider text-[#9333EA] bg-[#9333EA]/6 px-2 py-0.5 rounded uppercase">GOVERNMENT</span>
                  </div>
                  <h4 className="font-display font-extrabold text-lg sm:text-xl text-[#0A1744] tracking-tight">Government Summits</h4>
                  <p className="text-slate-500 font-light leading-relaxed">
                    Enable secure check-in, VIP protocols, encrypted credentials, delegate management, and offline validation.
                  </p>
                </div>

                <div className="flex justify-between items-center pt-2 border-t border-slate-100/80">
                  <div className="flex gap-1.5">
                    {['Secure Validation', 'VIP Protocols'].map((chip, cIdx) => (
                      <span key={cIdx} className="px-2 py-0.5 rounded-full text-xs font-mono tracking-wider font-semibold bg-[#9333EA]/5 border border-[#9333EA]/10 text-[#9333EA]">{chip}</span>
                    ))}
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#9333EA] group-hover:translate-x-1 transition-all sm:hidden" />
                </div>
              </div>

              {/* Right Side: Security Control Panel */}
              <div className="w-full sm:w-[220px] bg-[#9333EA]/5 border border-[#9333EA]/10 rounded-2xl p-4 flex flex-col justify-between gap-3 flex-shrink-0">
                <div className="flex items-center justify-between border-b border-[#9333EA]/10 pb-2">
                  <span className="text-xs font-mono font-bold text-[#9333EA] uppercase tracking-wider flex items-center gap-1">
                    <Fingerprint className="w-3.5 h-3.5" />
                    Security Panel
                  </span>
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                </div>
                
                <div className="space-y-2 text-[10px] font-medium text-slate-650">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-slate-500"><KeyRound className="w-3 h-3 text-[#9333EA]" /> Encrypted Credentials</span>
                    <span className="text-green-600 font-bold font-mono">Active</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-slate-500"><UserCheck className="w-3 h-3 text-[#9333EA]" /> VIP Access Protocols</span>
                    <span className="text-green-600 font-bold font-mono">Secured</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-slate-500"><ShieldCheck className="w-3 h-3 text-[#9333EA]" /> Offline DB Validation</span>
                    <span className="text-green-600 font-bold font-mono">Syncing</span>
                  </div>
                </div>

                <div className="text-xs text-[#9333EA]/80 font-mono tracking-widest text-center mt-1 border-t border-[#9333EA]/10 pt-2 uppercase font-bold">
                  CHECK-IN SECURED
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Center Premium CTA Area */}
        <div className="mt-16 text-center flex flex-col items-center gap-4">
          <a
            href="/solutions"
            className="inline-flex items-center gap-2 bg-accent-purple hover:bg-[#6c28e2] text-white text-base font-medium px-8 py-4 rounded-xl shadow-lg shadow-accent-purple/25 transition-all duration-300 hover:scale-105 group"
          >
            <span>Explore Industry Solutions</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
