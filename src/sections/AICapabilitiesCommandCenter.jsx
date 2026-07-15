'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Bot,
  Calendar,
  Brain,
  BarChart3,
  Sparkles,
  ArrowRight,
  Activity,
  Workflow,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ---------------------------------------------------------------------------
// Per-card accent palette
// Each module has a distinct accent applied by default (not just on hover)
// ---------------------------------------------------------------------------
const modules = [
  {
    id: 'copilot',
    title: 'AI Event Copilot',
    desc: 'Coordinates event workflows, monitors live activity, identifies operational issues, and recommends the next best action in real time.',
    status: 'Live Orchestration',
    icon: Workflow,
    // Cyan-to-violet
    accentA: '#00E5FF',
    accentB: '#8B5CF6',
    borderColor: 'rgba(0,229,255,0.45)',
    iconBg: 'rgba(0,229,255,0.12)',
    iconBorder: 'rgba(0,229,255,0.35)',
    glowColor: 'rgba(0,229,255,0.14)',
    badgeColor: '#00E5FF',
    badgeBg: 'rgba(0,229,255,0.08)',
    badgeBorder: 'rgba(0,229,255,0.3)',
    pipeline: ['Monitor live activity', 'Identify operational risks', 'Coordinate workflows', 'Recommend next action'],
  },
  {
    id: 'chatbot',
    title: 'AI Assistant Chatbot',
    desc: '24/7 attendee concierge for registration, sessions, venue, travel, and support questions.',
    status: 'Always Available',
    icon: Bot,
    // Cyan
    accentA: '#22D3EE',
    accentB: '#06B6D4',
    borderColor: 'rgba(34,211,238,0.42)',
    iconBg: 'rgba(34,211,238,0.12)',
    iconBorder: 'rgba(34,211,238,0.32)',
    glowColor: 'rgba(34,211,238,0.12)',
    badgeColor: '#22D3EE',
    badgeBg: 'rgba(34,211,238,0.08)',
    badgeBorder: 'rgba(34,211,238,0.28)',
    pipeline: ['Process query', 'Search knowledge base', 'Generate response', 'Instant reply'],
  },
  {
    id: 'planner',
    title: 'AI Agenda Planner',
    desc: 'Automatically builds schedules, detects conflicts, recommends timings, and optimises room usage.',
    status: 'Conflict Aware',
    icon: Calendar,
    // Electric blue
    accentA: '#3B82F6',
    accentB: '#1D4ED8',
    borderColor: 'rgba(59,130,246,0.42)',
    iconBg: 'rgba(59,130,246,0.12)',
    iconBorder: 'rgba(59,130,246,0.32)',
    glowColor: 'rgba(59,130,246,0.12)',
    badgeColor: '#60A5FA',
    badgeBg: 'rgba(59,130,246,0.08)',
    badgeBorder: 'rgba(59,130,246,0.28)',
    pipeline: ['Analyze tracks', 'Check room conflicts', 'Optimize schedule', 'Finalize agenda'],
  },
  {
    id: 'matchmaking',
    title: 'AI Matchmaking',
    desc: 'Connects attendees, buyers, exhibitors, speakers, and sponsors using shared interests and business goals.',
    status: 'Smart Pairing',
    icon: Brain,
    // Violet
    accentA: '#A855F7',
    accentB: '#7C3AED',
    borderColor: 'rgba(168,85,247,0.42)',
    iconBg: 'rgba(168,85,247,0.12)',
    iconBorder: 'rgba(168,85,247,0.32)',
    glowColor: 'rgba(168,85,247,0.12)',
    badgeColor: '#C084FC',
    badgeBg: 'rgba(168,85,247,0.08)',
    badgeBorder: 'rgba(168,85,247,0.28)',
    pipeline: ['Analyse attendee goals', 'Identify profiles', 'Calculate compatibility', 'Recommend meetings'],
  },
  {
    id: 'reporting',
    title: 'AI Reporting & Insights',
    desc: 'Transforms event activity, engagement, sentiment, and revenue data into actionable insights.',
    status: 'Real-Time Analytics',
    icon: BarChart3,
    // Blue-cyan
    accentA: '#06B6D4',
    accentB: '#2563EB',
    borderColor: 'rgba(6,182,212,0.42)',
    iconBg: 'rgba(6,182,212,0.12)',
    iconBorder: 'rgba(6,182,212,0.32)',
    glowColor: 'rgba(6,182,212,0.12)',
    badgeColor: '#22D3EE',
    badgeBg: 'rgba(6,182,212,0.08)',
    badgeBorder: 'rgba(6,182,212,0.28)',
    pipeline: ['Ingest event metrics', 'Compute NPS & ROI', 'Model future outcomes', 'Generate dashboard'],
  },
  {
    id: 'recommendation',
    title: 'AI Recommendation Engine',
    desc: 'Suggests relevant sessions, workshops, people, exhibitors, and content for every attendee.',
    status: 'Personalised',
    icon: Sparkles,
    // Purple
    accentA: '#9333EA',
    accentB: '#6D28D9',
    borderColor: 'rgba(147,51,234,0.42)',
    iconBg: 'rgba(147,51,234,0.12)',
    iconBorder: 'rgba(147,51,234,0.32)',
    glowColor: 'rgba(147,51,234,0.12)',
    badgeColor: '#C084FC',
    badgeBg: 'rgba(147,51,234,0.08)',
    badgeBorder: 'rgba(147,51,234,0.28)',
    pipeline: ['Map attendee interests', 'Scan session metadata', 'Rank recommendations', 'Deliver suggestions'],
  },
];

// ---------------------------------------------------------------------------
// Desktop card positions — 6-card layout, 960px tall stage
// Core centre at (640, 480)
//
//   [0] AI Event Copilot   — top-centre
//   [1] AI Chatbot         — upper-left
//   [2] AI Agenda Planner  — lower-left
//   [3] AI Matchmaking     — upper-right
//   [4] AI Reporting       — lower-right
//   [5] AI Recommendation  — bottom-centre
// ---------------------------------------------------------------------------
const cardPositions = [
  // Copilot — top-centre
  { left: '50%', top: '1%',     transform: 'translateX(-50%)' },
  // Chatbot — upper-left  (pushed down from 14% → 22%)
  { left: '1%',  top: '22%',    transform: 'none' },
  // Planner — lower-left  (pushed up from bottom:8% → bottom:16%)
  { left: '1%',  bottom: '16%', transform: 'none' },
  // Matchmaking — upper-right  (pushed down from 14% → 22%)
  { right: '1%', top: '22%',    transform: 'none' },
  // Reporting — lower-right  (pushed up from bottom:8% → bottom:16%)
  { right: '1%', bottom: '16%', transform: 'none' },
  // Recommendation — bottom-centre
  { left: '50%', bottom: '1%',  transform: 'translateX(-50%)' },
];

// ---------------------------------------------------------------------------
// SVG connector paths  —  viewBox 0 0 1280 960
// Core centre ≈ (640, 480)
// Card rough screen centres mapped to SVG coords:
//   Copilot (top-centre)       ≈ (640,  80)
//   Chatbot (upper-left)       ≈ (175, 240)
//   Planner (lower-left)       ≈ (175, 700)
//   Matchmaking (upper-right)  ≈ (1105, 240)
//   Reporting (lower-right)    ≈ (1105, 700)
//   Recommendation (bottom)    ≈ (640, 890)
// ---------------------------------------------------------------------------
const connectorPaths = [
  // Copilot — straight up
  { d: 'M 640 440 L 640 155' },
  // Chatbot — upper-left diagonal
  { d: 'M 588 452 C 480 420, 360 330, 240 255' },
  // Planner — lower-left diagonal
  { d: 'M 588 508 C 480 550, 360 625, 240 700' },
  // Matchmaking — upper-right diagonal
  { d: 'M 692 452 C 800 420, 920 330, 1040 255' },
  // Reporting — lower-right diagonal
  { d: 'M 692 508 C 800 550, 920 625, 1040 700' },
  // Recommendation — straight down
  { d: 'M 640 520 L 640 870' },
];

// ---------------------------------------------------------------------------
// Helper: build card default + hover style props
// ---------------------------------------------------------------------------
function cardStyle(m, isActive, isOtherActive) {
  return {
    borderGrad: `linear-gradient(135deg, ${m.accentA}, ${m.accentB})`,
    boxShadow: isActive
      ? `0 24px 64px rgba(0,0,0,0.55), 0 0 40px ${m.glowColor.replace('0.12', '0.28')}, inset 0 1px 0 rgba(255,255,255,0.07)`
      : `0 18px 55px rgba(0,0,0,0.4), 0 0 28px ${m.glowColor}, inset 0 1px 0 rgba(255,255,255,0.05)`,
    scale: isActive ? 'scale(1.035)' : isOtherActive ? 'scale(0.97)' : 'scale(1)',
    opacity: 1,
    translateY: isActive ? '-7px' : '0px',
  };
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function AICapabilitiesCommandCenter() {
  const [activeIdx, setActiveIdx] = useState(0); // Copilot active by default
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header group
      gsap.from('.aicmd-header', {
        y: 36,
        opacity: 0,
        stagger: 0.12,
        duration: 0.75,
        ease: 'power3.out',
        immediateRender: false,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 78%' },
      });

      // Central core
      gsap.from('.aicmd-core', {
        scale: 0.7,
        opacity: 0,
        duration: 0.9,
        ease: 'back.out(1.4)',
        immediateRender: false,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' },
      });

      // Cards
      const cards = gsap.utils.toArray('.aicmd-card');
      if (cards.length) {
        gsap.from(cards, {
          y: 28,
          opacity: 0,
          scale: 0.92,
          stagger: 0.1,
          duration: 0.75,
          ease: 'power3.out',
          immediateRender: false,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        });
      }

      // Connector lines
      gsap.from('.aicmd-line', {
        strokeDashoffset: 900,
        duration: 1.4,
        ease: 'power2.inOut',
        immediateRender: false,
        stagger: 0.1,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 68%' },
      });

      // CTA
      gsap.from('.aicmd-cta', {
        y: 18,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
        immediateRender: false,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 40%' },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const hasActive = activeIdx !== null;

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-[#050816] text-white relative w-full select-none"
      style={{ overflowX: 'clip', overflowY: 'visible' }}
    >
      {/* ── Keyframes ── */}
      <style>{`
        @keyframes _orbit-cw  { from { transform:rotate(0deg);   } to { transform:rotate(360deg);  } }
        @keyframes _orbit-ccw { from { transform:rotate(360deg); } to { transform:rotate(0deg);    } }
        @keyframes _core-glow { 0%,100%{opacity:.5;transform:scale(1);}  50%{opacity:.9;transform:scale(1.05);} }
        @keyframes _dash-flow { 0%{stroke-dashoffset:220;} 100%{stroke-dashoffset:0;} }
        @keyframes _icon-beat  { 0%,100%{transform:scale(1);}  50%{transform:scale(1.18);} }

        .aicmd-orbit-cw  { animation:_orbit-cw  24s linear infinite; }
        .aicmd-orbit-ccw { animation:_orbit-ccw 18s linear infinite; }
        .aicmd-core-glow { animation:_core-glow  3.5s ease-in-out infinite; }
        .aicmd-dash-flow {
          stroke-dasharray:14 110;
          animation:_dash-flow 4.5s linear infinite;
        }
        .aicmd-card-active-icon { animation:_icon-beat 1.4s ease-in-out infinite; }
      `}</style>

      {/* ── Ambient glows ── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute bottom-0 w-180 h-180 bg-accent-purple opacity-40 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-150 h-120 bg-accent-purple opacity-40 rounded-full blur-[100px] pointer-events-none" />
      </div>

      {/* ── Content wrapper ── */}
      <div className="max-w-[1400px] mx-auto px-4 relative z-10 flex flex-col items-center text-center">

        {/* Badge */}
        <div className="aicmd-header inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/5 text-cyan-400 text-xs font-semibold mb-5 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Intelligent Automation</span>
        </div>

        {/* Heading */}
        <h2 className="aicmd-header font-display text-white max-w-4xl">
          Built-In AI to Automate Event Operations
        </h2>

        {/* Sub-copy */}
        <p className="aicmd-header mt-4 text-slate-400 max-w-2xl leading-relaxed">
          From attendee support and agenda planning to matchmaking, reporting, and personalised
          recommendations — ConGenie brings every intelligent workflow into one connected AI ecosystem.
        </p>

        {/* ══════════════════════════════════════════════════════════════
            DESKTOP ORBITAL STAGE  (≥ 1024px)
        ══════════════════════════════════════════════════════════════ */}
        <div
          className="relative w-full max-w-[1280px] mx-auto mt-14 hidden lg:block"
          style={{ minHeight: '960px', overflow: 'visible' }}
        >
          {/* SVG connector layer */}
          <svg
            className="absolute inset-0 pointer-events-none"
            style={{ width: '100%', height: '100%', zIndex: 1 }}
            viewBox="0 0 1280 960"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="aicmd-lg-cyan-violet" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   stopColor="#00E5FF" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.7" />
              </linearGradient>
              <linearGradient id="aicmd-lg-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   stopColor="#22D3EE" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.7" />
              </linearGradient>
              <linearGradient id="aicmd-lg-blue" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   stopColor="#3B82F6" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.7" />
              </linearGradient>
              <linearGradient id="aicmd-lg-violet" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   stopColor="#A855F7" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.7" />
              </linearGradient>
              <linearGradient id="aicmd-lg-blue-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   stopColor="#06B6D4" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#2563EB" stopOpacity="0.7" />
              </linearGradient>
              <linearGradient id="aicmd-lg-purple" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   stopColor="#9333EA" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#6D28D9" stopOpacity="0.7" />
              </linearGradient>
              {/* Pulse overlay gradient (always moving) */}
              <linearGradient id="aicmd-pulse" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stopColor="transparent" />
                <stop offset="40%"  stopColor="#00E5FF" />
                <stop offset="60%"  stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>

            {/* Per-module gradient IDs in same order as modules array */}
            {[
              'url(#aicmd-lg-cyan-violet)', // Copilot
              'url(#aicmd-lg-cyan)',         // Chatbot
              'url(#aicmd-lg-blue)',         // Planner
              'url(#aicmd-lg-violet)',       // Matchmaking
              'url(#aicmd-lg-blue-cyan)',    // Reporting
              'url(#aicmd-lg-purple)',       // Recommendation
            ].map((grad, i) => {
              const isAct = activeIdx === i;
              return (
                <g key={i}>
                  {/* Base path — always visible with module colour */}
                  <path
                    className="aicmd-line"
                    d={connectorPaths[i].d}
                    fill="none"
                    stroke={isAct ? grad : modules[i].borderColor.replace('0.45','0.22').replace('0.42','0.2')}
                    strokeWidth={isAct ? 2.5 : 1.5}
                    style={{
                      strokeDasharray: 900,
                      strokeDashoffset: 0,
                      transition: 'stroke 0.4s, stroke-width 0.4s',
                    }}
                  />
                  {/* Travelling data pulse */}
                  <path
                    d={connectorPaths[i].d}
                    fill="none"
                    stroke="url(#aicmd-pulse)"
                    strokeWidth="4"
                    className="aicmd-dash-flow"
                    style={{ opacity: isAct ? 1 : 0.4, transition: 'opacity 0.4s' }}
                  />
                </g>
              );
            })}
          </svg>

          {/* ── Central AI Core ── */}
          <div
            className="aicmd-core absolute"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '370px',
              height: '370px',
              zIndex: 3,
            }}
          >
            {/* Rotating orbit rings */}
            <div className="absolute inset-0 rounded-full border border-cyan-400/20 aicmd-orbit-cw scale-110 pointer-events-none" />
            <div className="absolute inset-4 rounded-full border border-dashed border-purple-500/20 aicmd-orbit-ccw scale-105 pointer-events-none" />
            <div className="absolute inset-8 rounded-full border border-blue-500/10 aicmd-orbit-cw pointer-events-none" />

            {/* Core body */}
            <div className="absolute inset-[28px] rounded-full bg-gradient-to-br from-[#0c122e] to-[#040615] border-2 border-blue-500/40 shadow-[0_0_70px_rgba(37,99,235,0.22)] flex flex-col justify-center items-center p-7 overflow-hidden backdrop-blur-md">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-cyan-400/10 aicmd-core-glow pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center text-center w-full">
                <div className="w-14 h-14 rounded-full bg-blue-500/10 border border-cyan-400/30 flex items-center justify-center shadow-inner relative overflow-hidden mb-1">
                  <div className="absolute inset-0 bg-[radial-gradient(#00e5ff_1px,transparent_1px)] [background-size:6px_6px] opacity-35" />
                  <Activity className="w-6 h-6 text-cyan-400 animate-pulse relative z-10" />
                </div>
                <span className="text-[9px] font-mono tracking-[0.2em] text-slate-400 uppercase">ConGenie Engine</span>
                <span className="text-md font-extrabold text-white leading-none">AI COMMAND CORE</span>

                {/* Active pipeline panel */}
                <div className="w-fullborder rounded-lg p-2.5 mt-1 flex flex-col justify-center items-center">
                  <span className="text-md text-cyan-400 uppercase font-mono tracking-widest block mb-1">Active Process</span>
                  <span className="text-sm text-slate-300 leading-snug font-light text-center px-1">
                    {modules[activeIdx].pipeline.join(' ➔ ')}
                  </span>
                </div>
              </div>
            </div>

            
          </div>

          {/* ── Capability Cards ── */}
          {modules.map((m, idx) => {
            const Icon = m.icon;
            const isAct = activeIdx === idx;
            const isOtherAct = hasActive && !isAct;
            const pos = cardPositions[idx];
            const s = cardStyle(m, isAct, isOtherAct);

            return (
              <div
                key={m.id}
                className="aicmd-card absolute"
                style={{
                  ...pos,
                  width: '295px',
                  zIndex: 4,
                  opacity: s.opacity,
                  visibility: 'visible',
                  transition: 'opacity 0.35s ease, transform 0.35s ease',
                  transform: `${pos.transform || ''} translateY(${s.translateY})`.trim(),
                }}
                onMouseEnter={() => setActiveIdx(idx)}
                onMouseLeave={() => setActiveIdx(idx)} // keep last hovered active
              >
                {/* Gradient border */}
                <div
                  className="rounded-2xl p-px cursor-pointer"
                  style={{
                    background: s.borderGrad,
                    boxShadow: s.boxShadow,
                    transform: s.scale,
                    transition: 'all 0.35s ease',
                  }}
                >
                  {/* Glass body */}
                  <div
                    className="rounded-[15px] p-5 space-y-3 relative overflow-hidden"
                    style={{
                      background: 'rgba(14,24,52,0.96)',
                      backdropFilter: 'blur(18px)',
                      minHeight: '162px',
                    }}
                  >
                    {/* Corner glow — always visible, brighter on active */}
                    <div
                      className="absolute -top-10 -right-10 w-28 h-28 rounded-full blur-2xl pointer-events-none transition-opacity duration-400"
                      style={{
                        backgroundColor: m.accentA,
                        opacity: isAct ? 0.22 : 0.1,
                      }}
                    />

                    {/* Icon + status badge row */}
                    <div className="flex items-center justify-between">
                      <div
                        className={`p-2.5 rounded-xl border transition-all duration-300 ${isAct ? 'aicmd-card-active-icon' : ''}`}
                        style={{
                          background: m.iconBg,
                          borderColor: m.iconBorder,
                          boxShadow: `0 0 ${isAct ? 24 : 14}px ${m.iconBg}`,
                        }}
                      >
                        <Icon className="w-5 h-5" style={{ color: m.accentA }} />
                      </div>
                      <span
                        className="text-xs font-mono font-bold tracking-wider px-2.5 py-0.5 rounded-full uppercase border transition-all duration-300"
                        style={{
                          color: m.badgeColor,
                          borderColor: m.badgeBorder,
                          background: m.badgeBg,
                          boxShadow: isAct ? `0 0 12px ${m.badgeBg}` : 'none',
                        }}
                      >
                        {m.status}
                      </span>
                    </div>

                    {/* Title + description */}
                    <div className="space-y-1.5">
                      <h3 className="font-semibold text-xl text-white leading-snug">
                        {m.title}
                      </h3>
                      <p className="text-slate-400 leading-tight">
                        {m.desc}
                      </p>
                    </div>

                    {/* Bottom accent bar — always visible, brighter on active */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-[15px] transition-opacity duration-400"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${m.accentA}, ${m.accentB}, transparent)`,
                        opacity: isAct ? 0.8 : 0.35,
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* END desktop stage */}

        {/* ══════════════════════════════════════════════════════════════
            TABLET LAYOUT  (sm … lg)
        ══════════════════════════════════════════════════════════════ */}
        <div className="mt-14 w-full max-w-3xl hidden sm:flex lg:hidden flex-col items-center gap-10">
          {/* Compact core */}
          <div className="w-[210px] h-[210px] rounded-full bg-gradient-to-br from-[#0c122e] to-[#040615] border-2 border-blue-500/40 shadow-[0_0_40px_rgba(37,99,235,0.18)] flex flex-col justify-center items-center p-5 relative">
            <div className="absolute inset-0 rounded-full border border-dashed border-cyan-400/20 aicmd-orbit-cw scale-105 pointer-events-none" />
            <Activity className="w-6 h-6 text-cyan-400 mb-1.5 animate-pulse" />
            <span className="text-[9px] font-mono text-slate-400 tracking-widest uppercase">ConGenie Engine</span>
            <span className="text-xs font-extrabold text-white mt-0.5">Core Running</span>
            <div className="w-full bg-[#050816] border border-slate-700/60 rounded-lg p-1.5 mt-2 min-h-[36px] flex flex-col justify-center items-center">
              <span className="text-[8px] text-slate-300 font-light text-center leading-snug">
                {modules[activeIdx].pipeline.join(' ➔ ')}
              </span>
            </div>
          </div>

          {/* 2-col grid — Copilot first, spanning full width */}
          <div className="grid grid-cols-2 gap-5 w-full text-left">
            {/* Copilot spans 2 columns */}
            {modules.map((m, idx) => {
              const Icon = m.icon;
              const isAct = activeIdx === idx;
              return (
                <div
                  key={m.id}
                  className={`aicmd-card cursor-pointer rounded-2xl p-px transition-all duration-350 ${idx === 0 ? 'col-span-2' : ''}`}
                  style={{
                    background: `linear-gradient(135deg, ${m.accentA}, ${m.accentB})`,
                    boxShadow: isAct
                      ? `0 20px 50px rgba(0,0,0,0.5), 0 0 30px ${m.glowColor.replace('0.12','0.25')}`
                      : `0 10px 30px rgba(0,0,0,0.35), 0 0 18px ${m.glowColor}`,
                    transform: isAct ? 'scale(1.02)' : 'scale(1)',
                    opacity: 1,
                    visibility: 'visible',
                  }}
                  onClick={() => setActiveIdx(idx)}
                >
                  <div
                    className="rounded-[15px] p-5 space-y-3 h-full"
                    style={{
                        background: 'rgba(14,24,52,0.96)',
                        backdropFilter: 'blur(16px)',
                        minHeight: '130px'
                      }}
                    >
                    <div className="flex items-center justify-between">
                      <div
                        className="p-2.5 rounded-xl border"
                        style={{ background: m.iconBg, borderColor: m.iconBorder, boxShadow: `0 0 14px ${m.iconBg}` }}
                      >
                        <Icon className="w-4 h-4" style={{ color: m.accentA }} />
                      </div>
                      <span
                        className="text-[8px] font-mono font-bold tracking-wider px-2 py-0.5 rounded-full uppercase border"
                        style={{ color: m.badgeColor, borderColor: m.badgeBorder, background: m.badgeBg }}
                      >
                        {m.status}
                      </span>
                    </div>
                    <h3 className="text-sm text-white">{m.title}</h3>
                    <p className="text-[11px] text-slate-400 leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            MOBILE LAYOUT  (< sm)
        ══════════════════════════════════════════════════════════════ */}
        <div className="mt-12 w-full sm:hidden flex flex-col items-center gap-8">
          {/* Mini core */}
          <div className="w-[160px] h-[160px] rounded-full bg-gradient-to-br from-[#0c122e] to-[#040615] border border-blue-500/40 shadow-lg flex flex-col justify-center items-center p-4 relative">
            <Activity className="w-5 h-5 text-cyan-400 mb-1 animate-pulse" />
            <span className="text-[8px] font-mono text-slate-400 tracking-widest uppercase">ConGenie</span>
            <span className="text-[10px] font-extrabold text-white">Active</span>
            <div className="w-full bg-[#050816] border border-slate-700/60 rounded-md p-1.5 mt-2 min-h-[28px] flex flex-col justify-center items-center">
              <span className="text-[7px] text-slate-300 text-center font-light leading-tight">
                {modules[activeIdx].pipeline.slice(0, 2).join(' ➔ ')}…
              </span>
            </div>
          </div>

          {/* Vertical timeline */}
          <div className="relative border-l-2 border-cyan-400/20 pl-6 text-left space-y-5 w-full max-w-xs mx-auto">
            {modules.map((m, idx) => {
              const Icon = m.icon;
              const isAct = activeIdx === idx;
              return (
                <div key={m.id} className="relative cursor-pointer" onClick={() => setActiveIdx(idx)}>
                  {/* Timeline dot */}
                  <div
                    className="absolute -left-[31px] top-4 w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all"
                    style={{
                      background: isAct ? m.accentA : '#050816',
                      borderColor: isAct ? m.accentA : '#334155',
                      boxShadow: isAct ? `0 0 12px ${m.glowColor}` : 'none',
                    }}
                  >
                    {isAct && <div className="w-1.5 h-1.5 bg-[#050816] rounded-full" />}
                  </div>

                  <div
                    className="rounded-xl p-px transition-all duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${m.accentA}, ${m.accentB})`,
                      opacity: isAct ? 1 : 0.82,
                      boxShadow: isAct ? `0 8px 28px ${m.glowColor.replace('0.12','0.22')}` : `0 4px 16px ${m.glowColor}`,
                    }}
                  >
                    <div className="bg-[#0c1630] p-4 rounded-[11px] space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] font-mono font-bold uppercase" style={{ color: m.badgeColor }}>{m.status}</span>
                        <Icon className="w-4 h-4" style={{ color: m.accentA }} />
                      </div>
                      <h4 className="text-xs text-white">{m.title}</h4>
                      <p className="text-[10px] text-slate-400 leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="aicmd-cta mt-16 flex flex-col items-center gap-3 relative z-10">
          <Link
            href="/ai-capabilities"
            className="inline-flex items-center gap-2 bg-accent-purple hover:bg-[#6c28e2] text-white text-base font-medium px-8 py-4 rounded-xl shadow-lg shadow-accent-purple/25 transition-all duration-300 hover:scale-105 group"
          >
            <span>Explore AI Capabilities</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
