'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  QrCode,
  ArrowRight,
  BadgeCheck,
  Printer,
  Users,
  Wifi,
  WifiOff,
  ShieldCheck,
  Zap,
  Lock,
  MapPin,
  Monitor,
  RefreshCw,
  AlertTriangle,
  CheckCircle2,
  Activity,
  Settings,
  Smartphone,
  Clock,
  RotateCcw,
  Server,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import FinalCTA from '../../../sections/FinalCTA';

// ─── Asset imports ────────────────────────────────────────────────────────────
import checkinHero from '../../../assets/checkin-hero.png';
import checkinJourney from '../../../assets/checkin-journey.png';
import checkinKioskHuman from '../../../assets/checkin-kiosk-human.png';
import checkinLiveDashboard from '../../../assets/checkin-live-dashboard.png';

// ─── Animation variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

// ─── InView wrapper ───────────────────────────────────────────────────────────
function InView({ children, className = '', delay = 0, variants = fadeUp }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: variants.hidden,
        visible: {
          ...variants.visible,
          transition: { ...variants.visible.transition, delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

// ─── Label badges ─────────────────────────────────────────────────────────────
function Label({ icon: Icon, children }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border border-accent-purple/30 bg-accent-purple/8 text-accent-purple tracking-wide uppercase">
      {Icon && <Icon className="w-3.5 h-3.5" />}
      <span>{children}</span>
    </div>
  );
}

function LabelLight({ icon: Icon, children }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border border-white/20 bg-white/10 text-white tracking-wide uppercase">
      {Icon && <Icon className="w-3.5 h-3.5" />}
      <span>{children}</span>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PAGE
// ═══════════════════════════════════════════════════════════════════════════════
export default function OnSiteCheckInPage() {

  // ─── Combined fast & controlled entry capabilities ──────────────────────────
  const combinedCapabilities = [
    {
      icon: QrCode,
      title: 'QR & Manual Scanning',
      body: 'Scan any QR code, barcode or NFC ticket type instantly, with manual lookup fallback.',
    },
    {
      icon: Monitor,
      title: 'Self-Service Kiosk Check-In',
      body: 'Attendees scan themselves in at branded kiosks, reducing queues without extra staff.',
    },
    {
      icon: Printer,
      title: 'Instant Badge Printing',
      body: 'Print custom-branded thermal badges on demand at the point of entry in < 2 seconds.',
    },
    {
      icon: MapPin,
      title: 'Zone-Based Access Control',
      body: 'Define granular access rules for exhibition floors, VIP lounges, sessions and press zones.',
    },
    {
      icon: ShieldCheck,
      title: 'VIP, Staff & Speaker Access Rules',
      body: 'Dedicated lanes and automated permissions for high-priority guests and event staff.',
    },
    {
      icon: AlertTriangle,
      title: 'Re-Entry & Restricted-Access Alerts',
      body: 'Real-time alerts and automated anti-passback controls for restricted zones and gate re-entry.',
    },
  ];

  // ─── Badge & kiosk features ─────────────────────────────────────────────────
  const badgeFeatures = [
    { icon: BadgeCheck, text: 'Custom badge templates per attendee category' },
    { icon: Printer, text: 'Multiple printer support across all gates' },
    { icon: Users, text: 'Walk-in registration at the kiosk' },
    { icon: RotateCcw, text: 'Reprint and replacement badges' },
    { icon: ShieldCheck, text: 'VIP and category-based badge designs' },
  ];

  // ─── Access control features ────────────────────────────────────────────────
  const accessFeatures = [
    { icon: Lock, title: 'Session-Level Access', body: 'Restrict entry to specific sessions by ticket type, category or invitation status.' },
    { icon: ShieldCheck, title: 'VIP and Staff Access', body: 'Dedicated lanes and permissions for VIP guests, speakers and operational staff.' },
    { icon: MapPin, title: 'Zone-Based Permissions', body: 'Define access zones per area — exhibition floor, speaker lounge, press zone — with automated enforcement.' },
    { icon: Users, title: 'Workshop Capacity Validation', body: 'Automatically prevent over-capacity entry to workshops and breakout sessions.' },
    { icon: RefreshCw, title: 'Re-Entry Control', body: 'Allow or block attendee re-entry at any gate based on your event rules.' },
    { icon: AlertTriangle, title: 'Restricted-Area Alerts', body: 'Instant alert notifications when an attendee attempts entry to a restricted zone.' },
  ];

  // ─── Offline features (4 essential capabilities) ────────────────────────────
  const offlineFeatures = [
    { icon: WifiOff, title: 'Offline Scanning', body: 'All devices continue scanning without internet using locally cached data.' },
    { icon: Server, title: 'Local Attendee Data', body: 'Attendee list is securely cached on-device before the event starts.' },
    { icon: RefreshCw, title: 'Automatic Sync', body: 'Check-in records automatically sync to the cloud when online.' },
    { icon: CheckCircle2, title: 'Duplicate-Scan Protection', body: 'Prevents the same ticket from being used twice across any gate.' },
  ];

  return (
    <main className="min-h-screen pt-20 bg-white overflow-x-hidden">

      {/* ══════════════════════════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-white overflow-hidden border-b border-slate-200">
        {/* Ambient glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-purple/6 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-200/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 relative z-10 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left: copy */}
            <motion.div
              className="space-y-6 max-w-xl"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.div variants={fadeUp}>
                <Label icon={QrCode}>ConGenie On-Site Check-In</Label>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-[1.05] tracking-tight"
              >
                Faster Entry.{' '}
                <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-accent-purple via-violet-500 to-indigo-500 bg-clip-text text-transparent">
                  Smarter On-Site Operations.
                </span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-slate-600 text-lg font-light leading-relaxed">
                Manage attendee arrival, QR scanning, badge printing and access control from one connected on-site system.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 pt-1">
                <a
                  href="#journey"
                  id="hero-explore-btn"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-accent-purple hover:bg-[#6c28e2] text-white font-semibold shadow-lg shadow-accent-purple/25 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Explore Check-In
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/contact"
                  id="hero-demo-btn"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all duration-300"
                >
                  Book a Demo
                </Link>
              </motion.div>

              {/* Supporting stats */}
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-5 pt-1">
                {[
                  { icon: Zap, text: 'Instant scanning' },
                  { icon: BadgeCheck, text: 'Auto badge printing' },
                  { icon: WifiOff, text: 'Works offline' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-1.5 text-slate-500">
                    <Icon className="w-3.5 h-3.5 text-accent-purple" />
                    {text}
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: hero visual */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute -inset-4 bg-accent-purple/5 rounded-3xl blur-3xl pointer-events-none" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-accent-purple/10 border border-slate-200 max-w-xl ms-auto">
                <Image
                  src={checkinHero}
                  alt="Modern self-service check-in kiosk with QR scanner and badge printer for event management"
                  className="w-full h-auto object-cover"
                  priority
                />
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                  className="absolute top-5 right-5 bg-white/92 backdrop-blur-md border border-accent-purple/20 rounded-2xl px-4 py-2.5 shadow-lg flex items-center gap-2"
                >
                  <BadgeCheck className="w-3.5 h-3.5 text-accent-purple" />
                  <span className="text-xs font-bold text-accent-purple">Badge Printed</span>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          2. CHECK-IN JOURNEY
      ══════════════════════════════════════════════════════════════════ */}
      <section id="journey" className="py-16 lg:py-20 bg-gradient-to-b from-[#faf9ff] to-white relative overflow-hidden">
        {/* Soft background glows */}
        <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-accent-purple/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-violet-300/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column: Heading & Content */}
            <InView className="lg:col-span-5 space-y-6">
              <Label icon={Zap}>Check-In Journey</Label>
              <h2 className="font-display font-bold text-slate-900 leading-tight">
                Move Attendees from Arrival to Entry in Seconds
              </h2>
              <p className="text-slate-600 font-light text-lg leading-relaxed">
                A frictionless four-step flow that gets every attendee verified, badged, and through the door with zero friction.
              </p>

              {/* Journey Highlights */}
              <div className="space-y-4 pt-2">
                {[
                  { title: 'Sub-Second Verification', desc: 'Scan mobile wallets, printed PDFs, or dynamic QR badges instantly.' },
                  { title: 'Automated Badge Trigger', desc: 'Hardware-synced thermal printing triggers automatically upon scan.' },
                  { title: 'Live Gate Security', desc: 'Real-time anti-passback and category validation at every door.' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3.5 group">
                    <div className="w-6 h-6 rounded-full bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-accent-purple group-hover:text-white transition-colors">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent-purple group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h5 className="font-display font-bold text-slate-900">{item.title}</h5>
                      <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-purple hover:bg-[#6c28e2] text-white font-semibold shadow-lg shadow-accent-purple/20 hover:-translate-y-0.5 transition-all duration-300"
                >
                  See Demo Workflow
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </InView>

            {/* Right Column: Premium 2x2 Interactive Workflow Panel */}
            <InView className="lg:col-span-7" variants={{ hidden: { opacity: 0, scale: 0.96 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }}>
              <div className="relative rounded-[28px] border border-slate-200/80 bg-white/70 backdrop-blur-xl p-6 sm:p-8 shadow-2xl shadow-purple-200/30 overflow-hidden">
                {/* Decorative subtle background accents */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-accent-purple/10 to-transparent rounded-full blur-3xl pointer-events-none" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-accent-purple/20 to-transparent" />

                {/* Header tag */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold text-slate-700 tracking-wider uppercase">Live Check-In Workflow</span>
                  </div>
                  <span className="text-[11px] font-semibold text-accent-purple bg-accent-purple/10 border border-accent-purple/20 px-2.5 py-1 rounded-full">
                    Average Speed: 2.1s
                  </span>
                </div>

                {/* 2x2 Interactive Product Cards Grid */}
                <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4">

                  {/* Card 1: Scan Ticket */}
                  <div className="relative bg-white border border-slate-200/90 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-accent-purple/40 transition-all duration-300 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center">
                          <Smartphone className="w-4 h-4 text-accent-purple" />
                        </div>
                        <span className="text-xs font-bold text-slate-400">STEP 01</span>
                      </div>
                      <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">Scanned ✓</span>
                    </div>
                    <div>
                      <h6 className="font-semibold text-slate-900">Scan Ticket</h6>
                      <p className="text-slate-500 mt-0.5">Attendee presents dynamic QR code</p>
                    </div>
                    {/* Mini UI Component Preview */}
                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-2.5 flex items-center gap-3">
                      <div className="w-8 h-8 bg-white border border-slate-200 rounded-lg flex items-center justify-center shrink-0">
                        <QrCode className="w-5 h-5 text-slate-800" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[11px] font-semibold text-slate-800 truncate">#TICK-88492</div>
                        <div className="text-[10px] text-slate-400">0.12s scan time</div>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Verify Attendee */}
                  <div className="relative bg-white border border-slate-200/90 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-indigo-400/40 transition-all duration-300 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                        </div>
                        <span className="text-xs font-bold text-slate-400">STEP 02</span>
                      </div>
                      <span className="text-[10px] font-semibold text-indigo-600 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded-full">Verified</span>
                    </div>
                    <div>
                      <h6 className="font-semibold text-slate-900">Verify Attendee</h6>
                      <p className="text-slate-500 mt-0.5">Matched to registration system</p>
                    </div>
                    {/* Mini UI Component Preview */}
                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-2.5 flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center justify-center shrink-0">
                        SC
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[11px] font-semibold text-slate-800 truncate">Sarah Chen</div>
                        <div className="text-[10px] text-indigo-600 font-medium">VIP Speaker</div>
                      </div>
                    </div>
                  </div>

                  {/* Card 3: Print Badge */}
                  <div className="relative bg-white border border-slate-200/90 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-violet-400/40 transition-all duration-300 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-violet-50 border border-violet-200 flex items-center justify-center">
                          <Printer className="w-4 h-4 text-violet-600" />
                        </div>
                        <span className="text-xs font-bold text-slate-400">STEP 03</span>
                      </div>
                      <span className="text-[10px] font-semibold text-violet-600 bg-violet-50 border border-violet-200 px-2 py-0.5 rounded-full">Printing</span>
                    </div>
                    <div>
                      <h6 className="font-semibold text-slate-900">Print Badge</h6>
                      <p className="text-slate-500 text-xs mt-0.5">Thermal badge prints in &lt; 2s</p>
                    </div>
                    {/* Mini UI Component Preview */}
                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-2.5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <BadgeCheck className="w-4 h-4 text-violet-600" />
                        <span className="text-[11px] font-medium text-slate-700">Badge #4092</span>
                      </div>
                      <span className="text-[10px] font-bold text-slate-400">READY</span>
                    </div>
                  </div>

                  {/* Card 4: Entry Approved */}
                  <div className="relative bg-white border border-emerald-200/90 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-emerald-400/50 transition-all duration-300 space-y-3 bg-gradient-to-br from-emerald-50/30 to-white">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                          <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        </div>
                        <span className="text-xs font-bold text-slate-400">STEP 04</span>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 border border-emerald-300 px-2 py-0.5 rounded-full">Passed ✓</span>
                    </div>
                    <div>
                      <h6 className="font-semibold text-slate-900">Entry Approved</h6>
                      <p className="text-slate-500 mt-0.5">Turnstile unlocked & logged</p>
                    </div>
                    {/* Mini UI Component Preview */}
                    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-2.5 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                        <span className="text-[11px] font-bold text-emerald-800">Gate A Clear</span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                  </div>

                </div>

                {/* Footer status summary */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-accent-purple" />
                    <p>Seamless hardware-to-cloud sync</p>
                  </div>
                  <p className="font-semibold text-slate-700">100% Reliable</p>
                </div>

              </div>
            </InView>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          3. REAL-WORLD KIOSK EXPERIENCE (Split Layout)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column: Realistic Attendee Kiosk Photo */}
            <InView className="lg:col-span-6" variants={scaleIn}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/80 border border-slate-200">
                <Image
                  src={checkinKioskHuman}
                  alt="Attendee using a self-service check-in kiosk at a professional conference event venue"
                  width={640}
                  height={480}
                  className="w-full h-auto object-cover"
                />
              </div>
            </InView>

            {/* Right Column: Marketing Content & 4 Concise Benefits */}
            <InView className="lg:col-span-6 space-y-6">
              <Label icon={Printer}>Arrival Experience</Label>
              <h2 className="font-display font-bold text-slate-900 leading-tight">
                Create a Faster, More Professional Arrival Experience
              </h2>
              <p className="text-slate-600 font-light text-lg leading-relaxed">
                Transform your event lobby into an efficient entry hub. Attendees check in independently within seconds, leaving your team free to deliver high-touch event hospitality.
              </p>

              {/* 4 Concise Benefits */}
              <div className="space-y-3.5 pt-1">
                {[
                  { icon: Monitor, text: 'Self-service attendee check-in' },
                  { icon: QrCode, text: 'Instant QR verification' },
                  { icon: Printer, text: 'Automatic badge printing' },
                  { icon: Zap, text: 'Faster entry with fewer queues' },
                ].map((b) => {
                  const Icon = b.icon;
                  return (
                    <div key={b.text} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-accent-purple" />
                      </div>
                      <h6 className="text-slate-800 font-semibold">{b.text}</h6>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-accent-purple hover:bg-[#6c28e2] text-white font-semibold text-sm shadow-lg shadow-accent-purple/25 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Explore Check-In
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </InView>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          5. ACCESS CONTROL & FAST ENTRY (Everything You Need for Fast, Controlled Entry)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-[#0c0826] via-[#130d35] to-[#070b19] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-accent-purple/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-0 right-80 w-120 h-120 bg-accent-purple opacity-40 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 relative z-10">
          
          <InView className="text-center mb-16 space-y-3 max-w-3xl mx-auto">
            <LabelLight icon={ShieldCheck}>Access Control & Fast Entry</LabelLight>
            <h2 className="font-display font-bold text-white">
              Everything You Need for Fast, Controlled Entry
            </h2>
            <p className="text-slate-400 font-light text-lg">
              Combine rapid QR check-in, self-service badging, and granular zone security into one unified gate management system.
            </p>
          </InView>

          {/* Split Layout: Access Visual on Left, 6 Feature Rows on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column: Access Control Visual */}
            <InView className="lg:col-span-5" variants={scaleIn}>
              <div className="relative rounded-3xl bg-white/5 border border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-accent-purple" />
                    <h6 className="font-semibold text-white">Gate Validation Terminal</h6>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                    Active System
                  </span>
                </div>

                {/* Approved State Preview */}
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-4 flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">Gate Access Approved</div>
                    <div className="text-emerald-400 text-xs font-medium mt-0.5">VIP · Main Hall · Workshop A</div>
                  </div>
                </div>

                {/* Restricted State Preview */}
                <div className="bg-rose-500/10 border border-rose-500/30 rounded-2xl p-4 flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center shrink-0">
                    <Lock className="w-6 h-6 text-rose-400" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">Access Restricted</div>
                    <div className="text-rose-400 text-xs font-medium mt-0.5">Speaker Lounge · Staff Only Zone</div>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <p>Real-time Anti-Passback</p>
                  </div>
                  <p className="text-slate-300 font-medium">Synced Across 12 Gates</p>
                </div>
              </div>
            </InView>

            {/* Right Column: 6 Compact Icon-Led Feature Rows with Subtle Separators */}
            <InView className="lg:col-span-7">
              <div className="divide-y divide-white/10 border-y border-white/10">
                {combinedCapabilities.map((cap, i) => {
                  const Icon = cap.icon;
                  return (
                    <motion.div
                      key={cap.title}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp}
                      className="py-4 first:pt-0 last:pb-0 flex items-start gap-4 group hover:bg-white/[0.02] transition-colors rounded-xl px-2"
                    >
                      <div className="w-9 h-9 rounded-xl bg-accent-purple/15 border border-accent-purple/30 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-accent-purple/30 transition-colors">
                        <Icon className="w-4.5 h-4.5 text-accent-purple" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h6 className="font-semibold text-white mb-1">{cap.title}</h6>
                        <p className="text-slate-400 leading-relaxed">{cap.body}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </InView>

          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          7. OFFLINE AND RELIABLE CHECK-IN (light, simplified 4-column)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="pt-14 lg:pt-16 pb-0 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">

          <InView className="text-center mb-10 space-y-2 max-w-3xl mx-auto">
            <Label icon={WifiOff}>Offline Reliability</Label>
            <h2 className="font-display font-bold text-slate-900">
              Keep Check-In Running Even Without Internet
            </h2>
            <p className="text-slate-600 font-light text-base">
              Built for real-world venues where connectivity is never guaranteed.
            </p>
          </InView>

          {/* Clean 4-column layout on desktop, stacked on mobile */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={stagger}
          >
            {offlineFeatures.map((f) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                className="bg-gradient-to-br from-[#faf9ff] to-white border border-slate-200 rounded-2xl p-5 hover:border-accent-purple/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-xl bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center mb-3">
                  <f.icon className="w-4 h-4 text-accent-purple" />
                </div>
                <h5 className="font-display font-bold text-slate-900 mb-1">{f.title}</h5>
                <p className="text-slate-500 leading-relaxed">{f.body}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* System Status Panel */}
          <InView delay={0.1} variants={fadeUp}>
            <div className="w-full bg-gradient-to-br from-[#faf9ff] to-white border border-slate-200 rounded-2xl p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <h5 className="font-display font-bold text-slate-800">System Status</h5>
                </div>
                <p className="text-[11px] font-medium text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">All Systems Online</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { label: 'Gate A Scanner', status: 'Online', ok: true },
                  { label: 'Gate B Scanner', status: 'Syncing', ok: true },
                  { label: 'Badge Printer 1', status: 'Online', ok: true },
                  { label: 'Badge Printer 2', status: 'Online', ok: true },
                ].map((d) => (
                  <div key={d.label} className="p-2 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                    <span className="text-slate-600 truncate">{d.label}</span>
                    <span className={`font-semibold ${d.ok ? 'text-emerald-600' : 'text-amber-600'}`}>
                      {d.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </InView>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          8. FINAL CTA
      ══════════════════════════════════════════════════════════════════ */}
      <FinalCTA />

    </main>
  );
}
