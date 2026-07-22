'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Users,
  Mic2,
  Award,
  BarChart3,
  Calendar,
  CheckCircle2,
  ArrowRight,
  FileText,
  Upload,
  Globe,
  Star,
  ShieldCheck,
  Zap,
  Mail,
  PieChart,
  Target,
  Layers,
  Sparkles,
  UserCheck,
  Building2,
  QrCode,
  TrendingUp,
  Download,
  Share2,
  BadgeCheck,
  LayoutDashboard,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import FinalCTA from '../../../sections/FinalCTA';

// ─── Asset imports ────────────────────────────────────────────────────────────
import speakerSponsorHero from '../../../assets/speaker-sponsor-hero.png';
import speakerManagementHuman from '../../../assets/speaker-management-human.png';
import sponsorBoothHuman from '../../../assets/sponsor-booth-human.png';

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
export default function SpeakerSponsorPage() {

  const [activeTab, setActiveTab] = useState(0);

  // ─── Interactive Workflow Tabs Data ──────────────────────────────────────────
  const workflowTabs = [
    {
      label: 'Speaker Onboarding',
      icon: Mic2,
      heading: 'Self-Service Speaker Portal & Content Collection',
      body: 'Speakers upload bios, session slides, headshots, and AV preferences directly. Automated email reminders track missing assets so organizers never chase deadlines manually.',
      highlights: [
        { title: 'Automated Bio & Photo Intake', desc: 'Custom intake forms automatically format speaker cards for web & mobile app.' },
        { title: 'Slide Version Control', desc: 'Speakers submit presentation decks with real-time version history.' },
        { title: 'AV & Session Requirements', desc: 'Collect mic preferences, presentation aspect ratios, and co-speaker details.' }
      ]
    },
    {
      label: 'Sponsor Portal',
      icon: Building2,
      heading: 'Brand Asset Collection & Tier Management',
      body: 'Give sponsors a dedicated portal to manage logos, company descriptions, promotional videos, sponsored session listings, and representative passes in one organized hub.',
      highlights: [
        { title: 'High-Res Logo Uploads', desc: 'Vector and PNG asset collection optimized for event web, app, and badge print.' },
        { title: 'Sponsor Representative Badges', desc: 'Assign staff tickets and booth representative badges automatically.' },
        { title: 'TIer-Based Visibility Rules', desc: 'Configure Diamond, Gold, and Silver tier visibility across all event touchpoints.' }
      ]
    },
    {
      label: 'Lead Capture & ROI',
      icon: BarChart3,
      heading: 'Instant Badge Scanning & Real-Time Analytics',
      body: 'Empower sponsors to scan attendee badges with the mobile app, capture custom qualifying notes, export leads instantly, and measure ROI with live engagement reports.',
      highlights: [
        { title: 'Instant Mobile Lead Scanning', desc: 'Scan attendee QR badges at booths and sessions with sub-second response.' },
        { title: 'Custom Qualifier Surveys', desc: 'Equip booth staff with custom lead scoring forms and follow-up tags.' },
        { title: 'Real-Time ROI Dashboard', desc: 'Sponsors view total scans, peak booth hours, and export CSV/Excel lead files.' }
      ]
    }
  ];

  // ─── Combined Speaker & Sponsor Capabilities ──────────────────────────────
  const combinedCapabilities = [
    {
      icon: UserCheck,
      title: 'Self-Service Speaker Portal',
      body: 'Dedicated portal for speakers to submit bios, headshots, session decks, and AV preferences without organizer friction.',
    },
    {
      icon: Upload,
      title: 'Automated Asset Collection & Reminders',
      body: 'Automated notification workflows prompt speakers and sponsors to submit missing materials before deadlines.',
    },
    {
      icon: Building2,
      title: 'Tiered Sponsor Management',
      body: 'Configure sponsor packages, booth allocations, representative passes, and multi-tier brand visibility rules.',
    },
    {
      icon: QrCode,
      title: 'Mobile Lead Scanning App',
      body: 'Enable booth representatives to scan attendee badges, add lead notes, and rate prospect urgency on site.',
    },
    {
      icon: BarChart3,
      title: 'Real-Time Sponsor Analytics & Lead Export',
      body: 'Live dashboard giving sponsors instant access to scanned leads, booth engagement stats, and one-click CSV export.',
    },
    {
      icon: Globe,
      title: 'Web & Mobile App Synchronization',
      body: 'All approved speaker profiles and sponsor logos sync instantly across website schedules, mobile apps, and digital signage.',
    },
  ];

  // ─── Sponsor ROI Feature Points ─────────────────────────────────────────────
  const sponsorRoiPoints = [
    { title: 'Instant QR Badge Scanning', desc: 'Scan attendee passes using iOS/Android mobile apps at booths or sponsored sessions.' },
    { title: 'Custom Qualifying Questions', desc: 'Add lead tags, buying timeline ratings, and custom notes directly after scanning.' },
    { title: 'Live Dashboard & Instant Export', desc: 'Sponsors export verified lead contact lists to CSV/Excel anytime during or after the event.' },
    { title: 'Verified Lead Compliance', desc: 'Fully GDPR/CCPA compliant lead consent capture with audit-ready timestamping.' },
  ];

  return (
    <main className="min-h-screen pt-20 bg-white overflow-x-hidden">

      {/* ══════════════════════════════════════════════════════════════════
          1. HERO (Bright, Light Hero with 3D Visual)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-white overflow-hidden border-b border-slate-200">
        {/* Ambient glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-purple/6 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-200/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 relative z-10 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left: Copy */}
            <motion.div
              className="space-y-6 max-w-xl"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.div variants={fadeUp}>
                <Label icon={Mic2}>Speaker &amp; Sponsor Platform</Label>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-[1.05] tracking-tight"
              >
                Empower Speakers.{' '}
                <span className="bg-gradient-to-r from-accent-purple via-violet-500 to-indigo-500 bg-clip-text text-transparent">
                  Maximize Sponsor ROI.
                </span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-slate-600 text-lg font-light leading-relaxed">
                Streamline speaker onboarding, automate content collection, and provide sponsors with real-time lead retrieval and ROI tracking — all from one unified portal.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href="/contact"
                  id="hero-cta-primary"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-accent-purple hover:bg-[#6c28e2] text-white font-semibold shadow-lg shadow-accent-purple/25 hover:shadow-accent-purple/35 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Explore Speaker &amp; Sponsor Hub
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#workflow"
                  id="hero-cta-secondary"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 transition-all duration-300"
                >
                  See Workflow
                </a>
              </motion.div>

              {/* Trust signals */}
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6 pt-2 text-slate-500">
                {[
                  { icon: UserCheck, text: 'Self-service portals' },
                  { icon: QrCode, text: 'Instant mobile lead scanning' },
                  { icon: BarChart3, text: 'Real-time ROI analytics' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2">
                    <Icon className="w-4 h-4 text-accent-purple" />
                    <span className="font-medium">{text}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: Hero 3D Graphic */}
            <motion.div
              className="relative max-w-xl ms-auto w-full"
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-accent-purple/8 rounded-3xl blur-3xl pointer-events-none" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-accent-purple/15 border border-slate-200">
                  <Image
                    src={speakerSponsorHero}
                    alt="ConGenie Speaker and Sponsor Platform Dashboard showing speaker intake and sponsor ROI lead analytics"
                    className="w-full h-auto object-cover"
                    priority
                  />
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.5 }}
                    className="absolute top-5 right-5 bg-white/92 backdrop-blur-md border border-accent-purple/20 rounded-2xl px-4 py-2.5 shadow-lg flex items-center gap-2.5"
                  >
                    <BadgeCheck className="w-4 h-4 text-accent-purple" />
                    <span className="font-bold text-accent-purple">100% Asset Synced</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          2. WORKFLOW SECTION (Interactive 3-Tab Portal Workflow)
      ══════════════════════════════════════════════════════════════════ */}
      <section id="workflow" className="py-16 lg:py-20 bg-gradient-to-b from-[#faf9ff] to-white relative overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-accent-purple/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 relative z-10">

          <InView className="text-center mb-12 space-y-3 max-w-3xl mx-auto">
            <Label icon={Zap}>Integrated Workflow</Label>
            <h2 className="font-display font-bold text-slate-900">
              One Unified Portal for Speakers &amp; Sponsors
            </h2>
            <p className="text-slate-600 font-light text-lg">
              Manage speaker content intake, sponsor brand assets, and booth lead capture in three simple stages.
            </p>
          </InView>

          {/* Tab Selection */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200 gap-1.5 flex-wrap justify-center">
              {workflowTabs.map((tab, i) => {
                const Icon = tab.icon;
                const isActive = activeTab === i;
                return (
                  <button
                    key={tab.label}
                    onClick={() => setActiveTab(i)}
                    className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-accent-purple text-white shadow-md shadow-accent-purple/20'
                        : 'text-slate-600 hover:text-accent-purple hover:bg-white/60'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Tab Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="w-full rounded-[28px] border border-slate-200/90 bg-white/80 backdrop-blur-xl p-8 sm:p-10 shadow-2xl shadow-purple-100/50"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Left Column: Heading & Body */}
                <div className="lg:col-span-6 space-y-5">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-bold text-accent-purple uppercase tracking-wider">
                      Stage 0{activeTab + 1} Workflow
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-slate-900 leading-tight">
                    {workflowTabs[activeTab].heading}
                  </h3>
                  <p className="text-slate-600 font-light text-lg leading-relaxed">
                    {workflowTabs[activeTab].body}
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent-purple hover:bg-[#6c28e2] text-white font-semibold shadow-md shadow-accent-purple/20 hover:-translate-y-0.5 transition-all duration-300"
                    >
                      Request Portal Access
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Right Column: Key Feature Highlights */}
                <div className="lg:col-span-6 space-y-4">
                  {workflowTabs[activeTab].highlights.map((h, idx) => (
                    <div
                      key={h.title}
                      className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4.5 space-y-1.5 hover:border-accent-purple/40 hover:bg-white transition-all duration-300"
                    >
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4.5 h-4.5 text-accent-purple shrink-0" />
                        <h5 className="font-display font-bold text-slate-900">{h.title}</h5>
                      </div>
                      <p className="text-slate-500 leading-relaxed ps-7">{h.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          3. REAL-WORLD SPEAKER MANAGEMENT (Split Layout with Realistic Photo)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column: Realistic Speaker Event Photo */}
            <InView className="lg:col-span-6" variants={scaleIn}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/80 border border-slate-200">
                <Image
                  src={speakerManagementHuman}
                  alt="Keynote speaker presenting on stage at an enterprise technology conference event"
                  width={640}
                  height={480}
                  className="w-full h-auto object-cover"
                />
              </div>
            </InView>

            {/* Right Column: Marketing Content & 4 Speaker Benefits */}
            <InView className="lg:col-span-6 space-y-6">
              <Label icon={Mic2}>Speaker Experience</Label>
              <h2 className="font-display font-bold text-slate-900 leading-tight">
                Delight Keynote Speakers with a Dedicated Portal
              </h2>
              <p className="text-slate-600 font-light text-lg leading-relaxed">
                Give VIP speakers, panelists, and moderators a frictionless self-service portal to manage their sessions, track schedule updates, and submit slides effortlessly.
              </p>

              {/* 4 Concise Benefits */}
              <div className="space-y-4 pt-1">
                {[
                  { icon: UserCheck, title: 'Self-Service Bio & Profile Control', desc: 'Speakers update bios, LinkedIn handles, and headshots anytime.' },
                  { icon: Upload, title: 'Direct Slide & Deck Submissions', desc: 'Upload PowerPoint or Keynote files directly to the session stage.' },
                  { icon: Calendar, title: 'Personalized Speaker Schedules', desc: 'Speakers see their exact session times, green room details, and AV checks.' },
                  { icon: Mail, title: 'Automated Content Intake Reminders', desc: 'Automated email nudges ensure decks are submitted before rehearsals.' },
                ].map((b) => {
                  const Icon = b.icon;
                  return (
                    <div key={b.title} className="flex items-start gap-3.5">
                      <div className="w-8 h-8 rounded-xl bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-accent-purple" />
                      </div>
                      <div>
                        <h5 className="font-display font-bold text-slate-900">{b.title}</h5>
                        <p className="text-slate-500 leading-relaxed">{b.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-accent-purple hover:bg-[#6c28e2] text-white font-semibold shadow-lg shadow-accent-purple/25 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Explore Speaker Portal
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </InView>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          4. ACCESS CONTROL & CAPABILITIES (Dark Navy Section with Glow)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-[#0c0826] via-[#130d35] to-[#070b19] relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-accent-purple/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-0 right-80 w-120 h-120 bg-accent-purple opacity-40 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 relative z-10">
          
          <InView className="text-center mb-16 space-y-3 max-w-3xl mx-auto">
            <LabelLight icon={ShieldCheck}>Speaker &amp; Sponsor Capabilities</LabelLight>
            <h2 className="font-display font-bold text-white">
              Everything You Need for Seamless Management
            </h2>
            <p className="text-slate-400 font-light text-lg">
              Combine automated intake, brand management, and lead retrieval into one scalable enterprise event platform.
            </p>
          </InView>

          {/* Split Layout: Access Control Visual on Left, 6 Feature Rows on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column: Management Terminal Visual */}
            <InView className="lg:col-span-5" variants={scaleIn}>
              <div className="relative rounded-3xl bg-white/5 border border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <LayoutDashboard className="w-5 h-5 text-accent-purple" />
                    <span className="font-bold text-white text-sm">Speaker &amp; Sponsor Console</span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                    Live Portal
                  </span>
                </div>

                {/* Speaker Status Card */}
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-4 flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0">
                    <Mic2 className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Keynote Deck Approved</div>
                    <div className="text-emerald-400 text-xs font-medium mt-0.5">48/48 Speakers Submitted</div>
                  </div>
                </div>

                {/* Sponsor Lead Status Card */}
                <div className="bg-accent-purple/15 border border-accent-purple/30 rounded-2xl p-4 flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-accent-purple/20 border border-accent-purple/40 flex items-center justify-center shrink-0">
                    <BarChart3 className="w-6 h-6 text-accent-purple" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Sponsor Lead Capture</div>
                    <div className="text-accent-purple text-xs font-medium mt-0.5">2,410 Scanned Leads Synced</div>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Real-Time Cloud Sync</span>
                  </div>
                  <span className="text-slate-300 font-medium">100% Verified Data</span>
                </div>
              </div>
            </InView>

            {/* Right Column: 6 Compact Feature Rows */}
            <InView className="lg:col-span-7">
              <div className="divide-y divide-white/10 border-y border-white/10">
                {combinedCapabilities.map((cap) => {
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
                        <h5 className="font-display font-bold text-white mb-1">{cap.title}</h5>
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
          5. REAL-WORLD SPONSOR ROI HUB (Split Layout with Exhibition Photo)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-[#faf9ff] to-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column: Content & 4 ROI Points */}
            <InView className="lg:col-span-6 space-y-6">
              <Label icon={Award}>Sponsor ROI &amp; Lead Retrieval</Label>
              <h2 className="font-display font-bold text-slate-900 leading-tight">
                Prove Measurable ROI to Every Event Sponsor
              </h2>
              <p className="text-slate-600 font-light text-lg leading-relaxed">
                Turn trade show booths into high-converting lead engines. Sponsors use ConGenie mobile badge scanning to capture, qualify, and export leads in real time.
              </p>

              {/* 4 Feature Points */}
              <div className="space-y-4 pt-1">
                {sponsorRoiPoints.map((pt) => (
                  <div key={pt.title} className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-xl bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-accent-purple" />
                    </div>
                    <div>
                      <h5 className="font-display font-bold text-slate-900">{pt.title}</h5>
                      <p className="text-slate-500 leading-relaxed">{pt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-accent-purple hover:bg-[#6c28e2] text-white font-semibold shadow-lg shadow-accent-purple/25 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Request Sponsor Demo
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </InView>

            {/* Right Column: Realistic Sponsor Booth Photo */}
            <InView className="lg:col-span-6" variants={scaleIn}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/80 border border-slate-200">
                <Image
                  src={sponsorBoothHuman}
                  alt="Modern exhibition booth at corporate tech conference with booth staff scanning attendee badge"
                  width={640}
                  height={480}
                  className="w-full h-auto object-cover"
                />
              </div>
            </InView>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          6. FINAL CTA
      ══════════════════════════════════════════════════════════════════ */}
      <FinalCTA />

    </main>
  );
}
