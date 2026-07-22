'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Smartphone,
  ArrowRight,
  Users,
  Bell,
  MessageSquare,
  MapPin,
  BarChart3,
  Zap,
  Star,
  Calendar,
  QrCode,
  Download,
  Globe,
  Lock,
  Settings,
  Eye,
  FileText,
  Video,
  Clock,
  Navigation,
  Layers,
  Activity,
  Award,
  Target,
  BarChart2,
  Radio,
  BookOpen,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import FinalCTA from '../../../sections/FinalCTA';
import eventAppVenueHuman from '../../../assets/event-app-venue-human.png';
import eventAppAgenda from '../../../assets/attendee-features.png';
import eventAppNotifications from '../../../assets/event-app-notifications.png';
import appmanagement from '../../../assets/app-management.png';

import registrationIcon from '../../../assets/icons/registration.png';
import attendeesIcon from '../../../assets/icons/attendees.png';
import agendaIcon from '../../../assets/icons/agenda.png';
import sponsorsIcon from '../../../assets/icons/sponsors.png';
import checkinIcon from '../../../assets/icons/checkin.png';
import analyticsIcon from '../../../assets/icons/analytics.png';
import meetingsIcon from '../../../assets/icons/meetings.png';
import surveysIcon from '../../../assets/icons/surveys.png';

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
export default function EventAppPage() {

  const [activeJourney, setActiveJourney] = useState(0);

  // ─── Journey stages data ────────────────────────────────────────────────────
  const journeyStages = [
    {
      label: 'Before the Event',
      icon: Calendar,
      heading: 'Arrive Prepared, Not Confused',
      body: 'Attendees access registration details, personalised session recommendations, saved agenda and travel information before the event begins.',
      features: [
        { icon: FileText, title: 'Registration summary & ticket access' },
        { icon: Calendar, title: 'Personal agenda builder' },
        { icon: Target, title: 'AI-powered session recommendations' },
        { icon: Navigation, title: 'Venue directions & travel details' },
      ],
    },
    {
      label: 'Arrival',
      icon: QrCode,
      heading: 'Smooth Entry. Zero Queues.',
      body: 'Digital tickets and QR codes get attendees through the door instantly. Venue maps guide them straight to where they need to be.',
      features: [
        { icon: QrCode, title: 'Digital QR entry ticket' },
        { icon: MapPin, title: 'Interactive venue map & wayfinding' },
        { icon: Clock, title: 'Live check-in status update' },
        { icon: Bell, title: 'Welcome notification on arrival' },
      ],
    },
    {
      label: 'During the Event',
      icon: Radio,
      heading: 'Stay In Sync, All Day Long',
      body: 'Live agenda updates, real-time polls and Q&A keep attendees connected and engaged throughout every session.',
      features: [
        { icon: Calendar, title: 'Live updated personal agenda' },
        { icon: Activity, title: 'Live session polls & Q&A' },
        { icon: Bell, title: 'Instant schedule change alerts' },
        { icon: Download, title: 'Session documents & resources' },
      ],
    },
    {
      label: 'Networking',
      icon: Users,
      heading: 'Connect With the Right People',
      body: 'AI-powered attendee recommendations, meeting scheduling and private messaging make every networking opportunity intentional and productive.',
      features: [
        { icon: Target, title: 'AI-powered connection suggestions' },
        { icon: MessageSquare, title: 'Private in-app messaging' },
        { icon: Calendar, title: 'Meeting requests & scheduling' },
        { icon: Award, title: 'Digital contact exchange' },
      ],
    },
    {
      label: 'After the Event',
      icon: BookOpen,
      heading: 'Keep the Value Going Post-Event',
      body: 'Session recordings, downloadable materials, certificates and surveys extend the event value long after the doors close.',
      features: [
        { icon: Video, title: 'On-demand session recordings' },
        { icon: Download, title: 'Speaker presentations & documents' },
        { icon: Award, title: 'Digital attendance certificates' },
        { icon: Star, title: 'Post-event surveys & feedback' },
      ],
    },
  ];

  // ─── Core features (dark section) ──────────────────────────────────────────
  const coreFeatures = [
    {
      icon: Target,
      title: 'Personalised Home Feed',
      body: 'Each attendee sees a unique home screen surfacing relevant sessions, connections and announcements.',
    },
    {
      icon: Calendar,
      title: 'Smart Agenda Builder',
      body: 'Build and follow a personal agenda with real-time updates, room changes and session reminders.',
    },
    {
      icon: Activity,
      title: 'Live Polls & Q&A',
      body: 'Collect real-time audience responses and questions during sessions to drive active participation.',
    },
    {
      icon: Users,
      title: 'AI-Powered Networking',
      body: 'Intelligent connection suggestions, private messaging and structured meeting scheduling.',
    },
    {
      icon: Star,
      title: 'Session Ratings',
      body: 'Gather satisfaction scores for every session instantly, visible to organisers in real time.',
    },
    {
      icon: Award,
      title: 'Gamification',
      body: 'Reward participation, exhibitor visits and activity completion to sustain engagement throughout the day.',
    },
  ];

  // ─── Access & Notifications features ────────────────────────────────────────
  const accessFeatures = [
    {
      icon: MapPin,
      title: 'Interactive Venue Maps',
      body: 'Floor maps with session room directions, exhibitor locations and accessible routes.',
    },
    {
      icon: QrCode,
      title: 'Digital Ticket & QR Entry',
      body: 'Mobile entry passes with unique QR codes, instant verification and badge printing support.',
    },
    {
      icon: FileText,
      title: 'Content & Resources',
      body: 'Speaker slides, session recordings, certificates and documents all accessible inside the app.',
    },
    {
      icon: Bell,
      title: 'Push Notifications',
      body: 'Targeted announcements, session reminders and emergency alerts with full read-rate tracking.',
    },
  ];


  // ─── Integrations ───────────────────────────────────────────────────────────
const integrations = [
  { label: 'Registration', delay: 0.05, icon: registrationIcon },
  { label: 'Attendees', delay: 0.1, icon: attendeesIcon },
  { label: 'Agenda', delay: 0.15, icon: agendaIcon },
  { label: 'Sponsors', delay: 0.2, icon: sponsorsIcon },
  { label: 'Check-In', delay: 0.25, icon: checkinIcon },
  { label: 'Analytics', delay: 0.3, icon: analyticsIcon },
  { label: 'Meetings', delay: 0.35, icon: meetingsIcon },
  { label: 'Surveys', delay: 0.4, icon: surveysIcon },
];

  return (
    <main className="min-h-screen pt-20 bg-white overflow-x-hidden">

      {/* ══════════════════════════════════════════════════════════════════
          1. HERO — Realistic attendee photo right side
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-white overflow-hidden border-b border-slate-200">
        {/* Ambient glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-purple/6 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-200/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 relative z-10 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left: text */}
            <motion.div
              className="space-y-6 max-w-xl"
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.div variants={fadeUp}>
                <Label icon={Smartphone}>ConGenie Event App</Label>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 leading-[1.05] tracking-tight"
              >
                Your Entire Event.{' '}
                <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-accent-purple via-violet-500 to-indigo-500 bg-clip-text text-transparent">
                  Inside One Intelligent App.
                </span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-slate-600 text-lg font-light leading-relaxed">
                Give attendees, speakers, sponsors and organisers one personalised mobile experience — from discovery and planning to live engagement and post-event follow-up.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 pt-1">
                <a
                  href="#journey"
                  id="hero-explore-btn"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-accent-purple hover:bg-[#6c28e2] text-white font-semibold text-sm shadow-lg shadow-accent-purple/25 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Explore the App
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/contact"
                  id="hero-demo-btn"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 hover:border-slate-300 transition-all duration-300"
                >
                  Book a Demo
                </Link>
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-5 pt-1">
                {[
                  { icon: Target, text: 'Personalised experiences' },
                  { icon: Zap, text: 'Real-time updates' },
                  { icon: Globe, text: 'Every device' },
                ].map(({ icon: Icon, text }) => (
                  <p key={text} className="flex items-center gap-1.5 text-slate-500">
                    <Icon className="w-3.5 h-3.5 text-accent-purple" />
                    {text}
                  </p>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: realistic attendee photo */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute -inset-4 bg-accent-purple/5 rounded-3xl blur-3xl pointer-events-none" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-accent-purple/10 border border-slate-200 max-w-xl ms-auto">
                <Image
                  src={eventAppVenueHuman}
                  alt="Professional event attendee using the ConGenie Event App to navigate a modern conference venue"
                  className="w-full h-auto object-cover"
                  priority
                />
                {/* Floating stat chip */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="absolute bottom-5 left-5 bg-white/92 backdrop-blur-md border border-slate-200 rounded-2xl px-4 py-2.5 shadow-lg flex items-center gap-2.5"
                >
                  <div className="w-7 h-7 rounded-lg bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center">
                    <Users className="w-3.5 h-3.5 text-accent-purple" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800">4,820 Active Users</div>
                    <div className="text-[10px] text-emerald-600 font-semibold">↑ 18% this event</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          2. EVENT JOURNEY — 5-stage interactive tabs
      ══════════════════════════════════════════════════════════════════ */}
      <section id="journey" className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">

          <InView className="text-center mb-10 space-y-3 max-w-3xl mx-auto">
            <Label icon={Calendar}>Event Journey</Label>
            <h2 className="font-display text-slate-900">
              Build Connected Event Journeys
            </h2>
            <p className="text-slate-600 font-light text-lg">
              Guide attendees through a tailored mobile experience — before, during and after your event.
            </p>
          </InView>

          {/* Stage tabs — horizontal scroll on mobile */}
          <div className="overflow-x-auto no-scrollbar">
            <div className="flex gap-2 min-w-max mx-auto justify-start lg:justify-center pb-2 px-1">
              {journeyStages.map((stage, i) => {
                const Icon = stage.icon;
                const isActive = activeJourney === i;
                return (
                  <button
                    key={i}
                    id={`journey-tab-${i}`}
                    onClick={() => setActiveJourney(i)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-300 whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'bg-accent-purple border-accent-purple text-white'
                        : 'bg-white border-slate-200 text-slate-600 hover:border-accent-purple/40 hover:text-accent-purple'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {stage.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab content panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeJourney}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 bg-linear-to-br from-[#faf9ff] to-white border border-slate-200 rounded-3xl p-8 lg:p-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Left: stage description */}
                <div className="space-y-4 ">
                  {(() => {
                    const stage = journeyStages[activeJourney];
                    const StageIcon = stage.icon;
                    return (
                      <>
                        <div className="flex items-center gap-2 text-xs font-bold text-accent-purple uppercase tracking-widest">
                          <StageIcon className="w-3.5 h-3.5" />
                          {stage.label}
                        </div>
                        <h3 className="font-display text-slate-900">{stage.heading}</h3>
                        <p className="text-slate-600 font-light text-lg leading-relaxed">{stage.body}</p>
                      </>
                    );
                  })()}
                </div>

                {/* Right: feature chips */}
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                  variants={stagger}
                  initial="hidden"
                  animate="visible"
                >
                  {journeyStages[activeJourney].features.map((f, fi) => {
                    const FIcon = f.icon;
                    return (
                      <motion.div
                        key={fi}
                        variants={fadeUp}
                        className="flex items-center gap-2.5 bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-sm"
                      >
                        <div className="w-7 h-7 rounded-lg bg-accent-purple/10 flex items-center justify-center shrink-0">
                          <FIcon className="w-3.5 h-3.5 text-accent-purple" />
                        </div>
                        <p className="font-medium text-slate-700 leading-tight">{f.title}</p>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          3. CORE EVENT APP FEATURES (dark)
          Merges: Personalisation, Agenda, Engagement, Networking
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-[#070b19] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-purple/8 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 relative z-10">
          <InView className="text-center mb-12 space-y-3 max-w-3xl mx-auto">
            <LabelLight icon={Smartphone}>Core Event App Features</LabelLight>
            <h2 className="font-display text-white">
              Everything Attendees Need. In One Place.
            </h2>
            <p className="text-slate-400 font-light text-lg">
              Personalisation, agenda management, live engagement and AI-powered networking — all inside one seamless experience.
            </p>
          </InView>         
          
          {/* 3-col feature card grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={stagger}
          >
            {coreFeatures.map((f) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/8 hover:border-accent-purple/25 transition-all duration-300 group"
              >
                <div className="w-9 h-9 rounded-xl bg-accent-purple/20 border border-accent-purple/30 flex items-center justify-center mb-4 group-hover:bg-accent-purple/30 transition-colors">
                  <f.icon className="w-4 h-4 text-accent-purple" />
                </div>
                <h5 className="font-display text-white mb-1.5">{f.title}</h5>
                <p className="text-slate-400 leading-relaxed">{f.body}</p>
              </motion.div>
            ))}
          </motion.div>
          {/* Wide product image */}
          <InView delay={0.1} variants={scaleIn}>
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-accent-purple/15">
              <Image
                src={eventAppAgenda}
                alt="ConGenie Event App showing personalised agenda with live session status and networking recommendations"
                className="w-full h-auto object-cover"
              />
            </div>
          </InView>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          4. NAVIGATION, ACCESS & NOTIFICATIONS (light)
          Merges: Venue Wayfinding, Digital Ticket, Resources, Notifications
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-[#faf9ff] to-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left: features */}
            <motion.div
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={stagger}
            >
              <motion.div variants={fadeUp}>
                <Label icon={Navigation}>Navigation, Access &amp; Notifications</Label>
              </motion.div>
              <motion.h2 variants={fadeUp} className="font-display text-slate-900">
                Everything Attendees Need to Navigate Your Event
              </motion.h2>
              <motion.p variants={fadeUp} className="text-slate-600 font-light text-lg leading-relaxed">
                From digital entry tickets to real-time push notifications, the ConGenie Event App keeps attendees informed, on time and in the right place.
              </motion.p>

              <motion.div variants={stagger} className="space-y-5">
                {accessFeatures.map((f) => (
                  <motion.div key={f.title} variants={fadeUp} className="flex items-start gap-4 group">
                    <div className="w-9 h-9 rounded-xl bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-accent-purple/15 transition-colors">
                      <f.icon className="w-4 h-4 text-accent-purple" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="font-display font-bold text-slate-800 mb-0.5">{f.title}</h5>
                      <p className="text-slate-500 leading-relaxed">{f.body}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: notifications visual */}
            <InView className="flex justify-center lg:justify-end" delay={0.15} variants={scaleIn}>
              <div className="relative w-full max-w-xl">
                <div className="absolute -inset-4 bg-accent-purple/5 rounded-3xl blur-3xl pointer-events-none" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/80 border border-slate-200">
                  <Image
                    src={eventAppNotifications}
                    alt="ConGenie Event App showing push notifications, digital ticket and venue navigation"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </InView>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          5. ORGANISER CONTROL (dark purple gradient)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-[#0c0826] via-[#130d35] to-[#070b19] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-accent-purple/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 relative z-10">
          <InView className="text-center mb-12 space-y-3 max-w-3xl mx-auto">
            <LabelLight icon={Settings}>Centralised App Management</LabelLight>
            <h2 className="font-display text-white">
              Control the Entire App Without Managing Multiple Systems
            </h2>
            <p className="text-slate-400 font-light text-lg">
              Configure content, navigation, permissions and communications directly from the ConGenie platform — no coding required.
            </p>
          </InView>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">

            {/* Left panels */}
            <motion.div
              className="space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={stagger}
            >
              {[
                { icon: Layers, title: 'App Branding & Appearance', body: 'Custom colours, logos and splash screens that match your event identity.' },
                { icon: Navigation, title: 'Navigation Configuration', body: 'Control which menu items appear for each attendee role and in what order.' },
                { icon: Lock, title: 'Role-Based Permissions', body: 'Precise access rules per attendee type, session, content or feature.' },
                { icon: Globe, title: 'Multilingual Content', body: 'Publish in multiple languages with built-in translation management.' },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/8 transition-colors duration-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-accent-purple/20 border border-accent-purple/30 flex items-center justify-center shrink-0">
                      <item.icon className="w-3.5 h-3.5 text-accent-purple" />
                    </div>
                    <h5 className="font-display font-bold text-white">{item.title}</h5>
                  </div>
                  <p className="text-slate-400 leading-relaxed">{item.body}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Centre hub */}
            <InView className="flex items-center justify-center" delay={0.1} variants={scaleIn}>
              <div className="relative">
                <Image
                    src={appmanagement}
                    alt="ConGenie Event App showing push notifications, digital ticket and venue navigation"
                    className="max-w-[280] h-auto object-cover"
                  />
              </div>
            </InView>

            {/* Right panels */}
            <motion.div
              className="space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={stagger}
            >
              {[
                { icon: FileText, title: 'Content Publishing', body: 'Publish agendas, speaker profiles, documents and resources in real time.' },
                { icon: Bell, title: 'Notification Management', body: 'Send, schedule and track all app communications from one dashboard.' },
                { icon: Zap, title: 'Feature Activation', body: 'Enable polls, Q&A, networking, maps and gamification per event.' },
                { icon: Eye, title: 'App Preview', body: 'Preview the live attendee experience before publishing any change.' },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/8 transition-colors duration-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-accent-purple/20 border border-accent-purple/30 flex items-center justify-center shrink-0">
                      <item.icon className="w-3.5 h-3.5 text-accent-purple" />
                    </div>
                    <h5 className="font-display font-bold text-white">{item.title}</h5>
                  </div>
                  <p className="text-slate-400 leading-relaxed">{item.body}</p>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          6. ANALYTICS & INTEGRATIONS (light)
          Merges: Analytics + Integrations hub
      ══════════════════════════════════════════════════════════════════ */}
      <section className="pt-16 lg:pt-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4">
          <InView className="text-center mb-12 space-y-3 mx-auto">
            <Label icon={BarChart3}>Analytics &amp; Integrations</Label>
            <h2 className="font-display text-slate-900">
              Connected with Every Part of ConGenie
            </h2>
            <p className="text-slate-600 font-light">
              The Event App is natively integrated with every ConGenie module — one source of truth.
            </p>
          </InView>
          <div className="flex flex-col items-center gap-10">
            {/* Top row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-20">
              {integrations.slice(0, 4).map((integ) => (
                <motion.div
                  key={integ.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: integ.delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center gap-1.5"
                >
              <Image
                src={integ.icon}
                alt={integ.label}
                width={100}
                height={100}
                className="object-contain"
              />
                  <h6 className="font-semibold text-slate-900 text-center">{integ.label}</h6>
                </motion.div>
              ))}
            </div>

            {/* Central hub */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-accent-purple to-violet-600 shadow-xl shadow-accent-purple/30 flex items-center justify-center">
                <Smartphone className="w-9 h-9 text-white" />
              </div>
              <div className="font-bold text-accent-purple">Event App ConGenie</div>
            </motion.div>

            {/* Bottom row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-20">
              {integrations.slice(4).map((integ) => (
                <motion.div
                  key={integ.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: integ.delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center gap-1.5"
                >
                  <Image
                src={integ.icon}
                alt={integ.label}
                width={100}
                height={100}
                className="object-contain"
              />
                  <h6 className="font-semibold text-slate-900 text-center">{integ.label}</h6>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          7. FINAL CTA
      ══════════════════════════════════════════════════════════════════ */}
      <FinalCTA />

    </main>
  );
}
