'use client';

import React, { useRef, useState } from 'react';
import {
  motion, useScroll, useMotionValueEvent,
  useReducedMotion, useInView,
} from 'framer-motion';
import {
  Cpu, Brain, Shield, Calendar, ShieldCheck, HeartHandshake,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   FEATURE DATA — content unchanged
   ═══════════════════════════════════════════════════════════════ */
const features = [
  {
    id: 'lifecycle', num: '01', side: 'left',
    title: 'Complete Lifecycle Coverage',
    desc: 'Bridges pre-event setup, ticket payments, onsite scanning, and post-event audits in one hub.',
    icon: Cpu,
  },
  {
    id: 'ai', num: '02', side: 'right',
    title: 'AI-Powered Automation',
    desc: 'Let machine learning orchestrate your agenda scheduling, B2B matchmaking, and support.',
    icon: Brain,
  },
  {
    id: 'security', num: '03', side: 'left',
    title: 'Enterprise-Ready Security',
    desc: 'SOC2 compliant database hosting options, SAML SSO logins, and full GDPR consent paths.',
    icon: Shield,
  },
  {
    id: 'multi', num: '04', side: 'right',
    title: 'Multi-Event Support',
    desc: 'Subscribe once and spin up unlimited separate event portals and calendars under one admin.',
    icon: Calendar,
  },
  {
    id: 'scalable', num: '05', side: 'left',
    title: 'Secure & Scalable',
    desc: 'Offline-compatible databases and local printer servers keep lines moving under heavy traffic.',
    icon: ShieldCheck,
  },
  {
    id: 'onboarding', num: '06', side: 'right',
    title: 'Dedicated Onboarding',
    desc: 'Paired with onboarding managers who clean CSV directories, layout design styling, and support dry runs.',
    icon: HeartHandshake,
  },
];

/* ═══════════════════════════════════════════════════════════════
   SVG COORDINATE SYSTEM  (viewBox 0 0 1000 700)
   ═══════════════════════════════════════════════════════════════ */
const CX = 500, CY = 350;

const nodeCoords = {
  lifecycle:  { x: 175, y: 175 },
  ai:         { x: 610, y: 210 },
  security:   { x: 825, y: 175 },
  multi:      { x: 805, y: 515 },
  scalable:   { x: 500, y: 595 },
  onboarding: { x: 195, y: 515 },
};

function connPath(id) {
  const n = nodeCoords[id];
  const dx = CX - n.x, dy = CY - n.y;
  const px = -dy * 0.14, py = dx * 0.14;
  return `M${n.x},${n.y} C${Math.round(n.x + dx * 0.33 + px)},${Math.round(n.y + dy * 0.33 + py)} ${Math.round(CX - dx * 0.33 - px)},${Math.round(CY - dy * 0.33 - py)} ${CX},${CY}`;
}

/* ═══════════════════════════════════════════════════════════════
   ORBITAL SVG — always fully visible; highlight drives emphasis
   ═══════════════════════════════════════════════════════════════ */
function OrbitalSVG({ highlight, onNodeHover, onNodeLeave, reduced }) {
  const PURPLE = 'rgb(132,61,245)';
  const VIOLET = '#9E70FF';

  return (
    <svg viewBox="0 0 1000 700" className="w-full h-full select-none" fill="none" aria-hidden="true">
      <defs>
        <radialGradient id="wc-coreGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={PURPLE} stopOpacity="0.48" />
          <stop offset="100%" stopColor={PURPLE} stopOpacity="0" />
        </radialGradient>
        <radialGradient id="wc-nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={PURPLE} stopOpacity="0.45" />
          <stop offset="100%" stopColor={PURPLE} stopOpacity="0" />
        </radialGradient>
        <pattern id="wc-grid" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
          <circle cx="18" cy="18" r="0.65" fill="#05083B" opacity="0.06" />
        </pattern>
      </defs>

      {/* Dot grid */}
      <rect width="1000" height="700" fill="url(#wc-grid)" />

      {/* ── Orbit ellipses — always visible with enhanced prominence ── */}
      <ellipse cx={CX} cy={CY} rx="295" ry="190" stroke={PURPLE} strokeWidth="0.8"
        strokeDasharray="6 12" opacity="0.2" transform={`rotate(-7 ${CX} ${CY})`} />
      <ellipse cx={CX} cy={CY} rx="215" ry="135" stroke={PURPLE} strokeWidth="0.9"
        strokeDasharray="4 10" opacity="0.22" transform={`rotate(6 ${CX} ${CY})`} />
      <ellipse cx={CX} cy={CY} rx="125" ry="72" stroke={VIOLET} strokeWidth="1.0"
        opacity="0.16" transform={`rotate(-4 ${CX} ${CY})`} />

      {/* ── Connection paths — thicker and clearer ── */}
      {features.map((f, i) => {
        const d = connPath(f.id);
        const on = i === highlight;
        return (
          <g key={f.id}>
            <path d={d} stroke={PURPLE}
              strokeWidth={on ? 2.55 : 1.1}
              opacity={on ? 0.75 : 0.22}
              style={{ transition: 'all 0.7s ease' }} />
            {!reduced && (
              <circle r={on ? 4.2 : 2.0} fill={PURPLE} opacity={on ? 0.8 : 0.25}>
                <animateMotion dur={`${5 + i * 0.7}s`} repeatCount="indefinite" path={d} />
              </circle>
            )}
          </g>
        );
      })}

      {/* 01 · Lifecycle: circular timeline arc without label text */}
      <g opacity={highlight === 0 ? 0.8 : 0.16} style={{ transition: 'opacity 0.7s' }}>
        <path d={`M${nodeCoords.lifecycle.x - 40},${nodeCoords.lifecycle.y + 25} A40,40 0 1,1 ${nodeCoords.lifecycle.x + 40},${nodeCoords.lifecycle.y + 25}`}
          stroke={PURPLE} strokeWidth="1.4" strokeDasharray="5 3.5" />
        <circle cx={nodeCoords.lifecycle.x - 40} cy={nodeCoords.lifecycle.y + 25} r="3.2" fill={PURPLE} />
        <circle cx={nodeCoords.lifecycle.x} cy={nodeCoords.lifecycle.y - 40} r="2.8" fill={VIOLET} />
        <circle cx={nodeCoords.lifecycle.x + 40} cy={nodeCoords.lifecycle.y + 25} r="3.2" fill={VIOLET} />
      </g>

      {/* 02 · AI: neural branching without label text */}
      <g opacity={highlight === 1 ? 0.82 : 0.16} style={{ transition: 'opacity 0.7s' }}>
        {[[-28,-30],[32,-20],[25,30],[-22,28],[38,6],[-35,2.5]].map(([dx,dy],j) => (
          <g key={j}>
            <line x1={nodeCoords.ai.x} y1={nodeCoords.ai.y}
              x2={nodeCoords.ai.x + dx} y2={nodeCoords.ai.y + dy}
              stroke={PURPLE} strokeWidth="1.0" />
            <circle cx={nodeCoords.ai.x + dx} cy={nodeCoords.ai.y + dy} r="2.5" fill={VIOLET} />
          </g>
        ))}
      </g>

      {/* 03 · Security: shield + scan line without label text */}
      <g opacity={highlight === 2 ? 0.78 : 0.16} style={{ transition: 'opacity 0.7s' }}>
        <path d={`M${nodeCoords.security.x},${nodeCoords.security.y - 45} Q${nodeCoords.security.x - 35},${nodeCoords.security.y - 10} ${nodeCoords.security.x - 30},${nodeCoords.security.y + 28} L${nodeCoords.security.x + 30},${nodeCoords.security.y + 28} Q${nodeCoords.security.x + 35},${nodeCoords.security.y - 10} ${nodeCoords.security.x},${nodeCoords.security.y - 45}`}
          stroke={PURPLE} strokeWidth="1.6" strokeDasharray="4 3" />
        {!reduced && (
          <line x1={nodeCoords.security.x - 26} y1={nodeCoords.security.y}
            x2={nodeCoords.security.x + 26} y2={nodeCoords.security.y}
            stroke={VIOLET} strokeWidth="1.0" opacity="0.7">
            <animate attributeName="y1" values={`${nodeCoords.security.y-20};${nodeCoords.security.y+20};${nodeCoords.security.y-20}`} dur="3s" repeatCount="indefinite" />
            <animate attributeName="y2" values={`${nodeCoords.security.y-20};${nodeCoords.security.y+20};${nodeCoords.security.y-20}`} dur="3s" repeatCount="indefinite" />
          </line>
        )}
      </g>

      {/* 04 · Multi-Event: branching nodes */}
      <g opacity={highlight === 3 ? 0.78 : 0.16} style={{ transition: 'opacity 0.7s' }}>
        {[[38,-22,6.5],[43,19,6],[-31,28,5.5],[-36,-14,5]].map(([dx,dy,r],j) => (
          <g key={j}>
            <line x1={nodeCoords.multi.x} y1={nodeCoords.multi.y}
              x2={nodeCoords.multi.x+dx} y2={nodeCoords.multi.y+dy}
              stroke={PURPLE} strokeWidth="0.85" />
            <circle cx={nodeCoords.multi.x+dx} cy={nodeCoords.multi.y+dy}
              r={r} fill="none" stroke={VIOLET} strokeWidth="1.0" />
            <circle cx={nodeCoords.multi.x+dx} cy={nodeCoords.multi.y+dy} r="2.0" fill={VIOLET} />
          </g>
        ))}
      </g>

      {/* 05 · Scalable: expanding rings */}
      <g opacity={highlight === 4 ? 0.75 : 0.14} style={{ transition: 'opacity 0.7s' }}>
        <circle cx={nodeCoords.scalable.x} cy={nodeCoords.scalable.y} r="36" stroke={PURPLE} strokeWidth="0.8" />
        <circle cx={nodeCoords.scalable.x} cy={nodeCoords.scalable.y} r="50" stroke={PURPLE} strokeWidth="0.7" strokeDasharray="2.5 5" />
        <circle cx={nodeCoords.scalable.x} cy={nodeCoords.scalable.y} r="66" stroke={VIOLET} strokeWidth="0.5" strokeDasharray="2 6" />
        {!reduced && (
          <circle cx={nodeCoords.scalable.x} cy={nodeCoords.scalable.y} r="36"
            stroke={PURPLE} strokeWidth="0.6" opacity="0.4" fill="none">
            <animate attributeName="r" values="36;66;36" dur="5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.4;0;0.4" dur="5s" repeatCount="indefinite" />
          </circle>
        )}
      </g>

      {/* 06 · Onboarding: guided path */}
      <g opacity={highlight === 5 ? 0.78 : 0.16} style={{ transition: 'opacity 0.7s' }}>
        <path d={`M${nodeCoords.onboarding.x-42},${nodeCoords.onboarding.y+20} C${nodeCoords.onboarding.x-18},${nodeCoords.onboarding.y+50} ${nodeCoords.onboarding.x+22},${nodeCoords.onboarding.y+50} ${nodeCoords.onboarding.x+48},${nodeCoords.onboarding.y+15}`}
          stroke={PURPLE} strokeWidth="1.3" strokeDasharray="4.5 3.5" />
        <circle cx={nodeCoords.onboarding.x-42} cy={nodeCoords.onboarding.y+20}
          r="6.5" fill="#EEE8FF" stroke={PURPLE} strokeWidth="1.1" />
        <text x={nodeCoords.onboarding.x-42} y={nodeCoords.onboarding.y+22.5}
          textAnchor="middle" fill={PURPLE} fontSize="7" fontWeight="800" style={{ fontFamily: 'system-ui' }}>?</text>
        <circle cx={nodeCoords.onboarding.x+48} cy={nodeCoords.onboarding.y+15} r="4.5" fill={PURPLE} />
      </g>

      {/* ── Feature nodes — always visible (enlarged) ── */}
      {features.map((f, i) => {
        const n = nodeCoords[f.id];
        const on = i === highlight;
        return (
          <g key={`nd-${f.id}`}
            style={{ cursor: 'pointer', transition: 'all 0.5s ease' }}
            onMouseEnter={() => onNodeHover(i)}
            onMouseLeave={onNodeLeave}>
            {on && <circle cx={n.x} cy={n.y} r="52" />}
            <circle cx={n.x} cy={n.y} r="30" fill="none"
              stroke={on ? PURPLE : '#A396CB'}
              strokeWidth={on ? 2.8 : 1.2}
              style={{ transition: 'all 0.5s ease' }} />
            <circle cx={n.x} cy={n.y} r="22"
              fill={on ? PURPLE : '#EEE8FF'}
              stroke={on ? VIOLET : '#C6BAE8'}
              strokeWidth="0.5"
              style={{ transition: 'all 0.5s ease' }} />
            <text x={n.x} y={n.y + 6.0} textAnchor="middle"
              fill={on ? '#FFF' : '#32364D'}
              fontSize="17" fontWeight="800"
              style={{ transition: 'fill 0.5s ease', fontFamily: 'system-ui' }}>
              {f.num}
            </text>
          </g>
        );
      })}

      {/* ── Central core — always visible & visually stronger (significantly enlarged) ── */}
      <g>
        <circle cx={CX} cy={CY} r="140" />
        {!reduced && (
          <>
            <circle cx={CX} cy={CY} r="76" fill="none" stroke={PURPLE} strokeWidth="0.75" opacity="0.25">
              <animate attributeName="r" values="72;92;72" dur="4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.28;0.04;0.28" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx={CX} cy={CY} r="96" fill="none" stroke={VIOLET} strokeWidth="0.55" opacity="0.14">
              <animate attributeName="r" values="92;116;92" dur="4s" begin="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.2;0.02;0.2" dur="4s" begin="2s" repeatCount="indefinite" />
            </circle>
          </>
        )}
        <circle cx={CX} cy={CY} r="80" fill="none" stroke={PURPLE} strokeWidth="2.0" opacity="0.65" />
        <circle cx={CX} cy={CY} r="68" fill="#FFF" stroke={PURPLE} strokeWidth="2.0" style={{ filter: 'drop-shadow(0 4px 16px rgba(132,61,245,0.22))' }} />
        <text x={CX} y={CY - 2} textAnchor="middle" fill="#05083B"
          fontSize="14.5" fontWeight="900" letterSpacing="4"
          style={{ fontFamily: 'system-ui' }}>CONGENIE</text>
        <text x={CX} y={CY + 18} textAnchor="middle" fill="#5E6175"
          fontSize="8.5" fontWeight="700" letterSpacing="2"
          style={{ fontFamily: 'system-ui' }}>EVENT INTELLIGENCE</text>
      </g>
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════
   DESKTOP SIDE FEATURE — always readable; emphatic when active
   ═══════════════════════════════════════════════════════════════ */
function SideFeature({ feature, isOn, onHover, onLeave }) {
  const left = feature.side === 'left';
  return (
    <div
      className={`relative cursor-default ${left ? 'text-right' : 'text-left'}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Title — always at full opacity */}
      <h4
        className="font-display font-extrabold text-[15px] xl:text-lg leading-snug mb-1.5"
        style={{
          color: isOn ? '#843df5' : 'rgba(5,8,59,0.10)',
          transition: 'color 0.6s ease',
        }}
      >
        {feature.title}
      </h4>

      {/* Description — always visible, slightly dimmed when inactive */}
      <p
        className={`text-[13px] xl:text-sm leading-relaxed font-light max-w-[265px] ${left ? 'ml-auto' : ''}`}
        style={{
          color: isOn ? '#05083B' : 'rgba(94,97,117,0.38)',
          transition: 'color 0.6s ease',
        }}
      >
        {feature.desc}
      </p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MOBILE FEATURE ITEM
   ═══════════════════════════════════════════════════════════════ */
function MobileItem({ feature, index, reduced }) {
  const ref = useRef(null);
  const visible = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      className="relative pb-14 last:pb-0 pl-12"
      initial={{ opacity: 1, y: reduced ? 0 : 16 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 1, y: reduced ? 0 : 16 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      {/* Node */}
      <div className="absolute left-0 top-1 w-7 h-7 rounded-full border-2 flex items-center justify-center"
        style={{ borderColor: 'rgb(132,61,245)', background: '#F7F8FC' }}>
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgb(132,61,245)' }} />
      </div>

      {/* Connector */}
      {index < features.length - 1 && (
        <div className="absolute left-[13px] top-8 w-px"
          style={{ height: 'calc(100% - 8px)', background: 'linear-gradient(180deg, rgba(132,61,245,0.22), transparent)' }} />
      )}

      <h4 className="font-display font-extrabold text-base mb-1" style={{ color: '#05083B' }}>
        {feature.title}
      </h4>
      <p className="text-sm font-light leading-relaxed" style={{ color: '#5E6175' }}>
        {feature.desc}
      </p>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════ */
export default function WhyConGenie() {
  const stickyRef  = useRef(null);
  const reduced    = useReducedMotion();
  const [activeIdx, setActiveIdx] = useState(0);
  const [hoverIdx,  setHoverIdx]  = useState(null);

  /* Scroll progress only drives the highlight — never hides content */
  const { scrollYProgress } = useScroll({
    target: stickyRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.min(5, Math.floor(Math.max(0, Math.min(1, v)) * 6));
    setActiveIdx(idx);
  });

  const highlighted = hoverIdx ?? activeIdx;

  return (
    <>
      {/* ════════════════════════════════════════
          DESKTOP — sticky scroll section
          • 220vh keeps blank scroll minimal
          • sticky content ALWAYS visible
          ════════════════════════════════════════ */}
      <section
        ref={stickyRef}
        className="relative hidden lg:block"
        style={{ minHeight: '220vh' }}
      >

        {/* ── Sticky container — ALWAYS VISIBLE, no opacity tricks ── */}
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">

          {/* Section header */}
          <div className="text-center mb-4 pt-24 px-4 shrink-0">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(132,61,245,0.5))' }} />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em]"
                style={{ color: 'rgb(132,61,245)' }}>Why ConGenie</span>
              <span className="w-8 h-px" style={{ background: 'linear-gradient(270deg, transparent, rgba(132,61,245,0.5))' }} />
            </div>

            <h2 className="font-display font-extrabold text-3xl xl:text-[2.6rem] tracking-tight leading-tight max-w-[850px] mx-auto"
              style={{ color: '#05083B' }}>
              Enterprise Event Tech You Can Rely On
            </h2>
          </div>

          {/* Three-column layout */}
          <div className="flex items-center w-full max-w-[1400px] mx-auto px-6 flex-1 min-h-0">

            {/* Left — 01, 03, 05 */}
            <div className="w-[23%] flex flex-col justify-around h-[68%] py-3 shrink-0">
              {[0, 2, 4].map(i => (
                <SideFeature
                  key={features[i].id}
                  feature={features[i]}
                  isOn={i === highlighted}
                  onHover={() => setHoverIdx(i)}
                  onLeave={() => setHoverIdx(null)}
                />
              ))}
            </div>

            {/* Centre orbital */}
            <div className="w-[54%] flex items-center justify-center px-2">
              <OrbitalSVG
                highlight={highlighted}
                reduced={reduced}
                onNodeHover={setHoverIdx}
                onNodeLeave={() => setHoverIdx(null)}
              />
            </div>

            {/* Right — 02, 04, 06 */}
            <div className="w-[23%] flex flex-col justify-around h-[68%] py-3 shrink-0">
              {[1, 3, 5].map(i => (
                <SideFeature
                  key={features[i].id}
                  feature={features[i]}
                  isOn={i === highlighted}
                  onHover={() => setHoverIdx(i)}
                  onLeave={() => setHoverIdx(null)}
                />
              ))}
            </div>
          </div>

          {/* Progress dots */}
          <div className="flex items-center gap-2.5 pb-6 shrink-0">
            {features.map((_, i) => (
              <div
                key={i}
                className="rounded-full"
                style={{
                  width:  i === highlighted ? '8px' : '5px',
                  height: i === highlighted ? '8px' : '5px',
                  background: i === highlighted ? 'rgb(132,61,245)' : 'rgba(132,61,245,0.18)',
                  transition: 'all 0.45s ease',
                }}
                onMouseEnter={() => setHoverIdx(i)}
                onMouseLeave={() => setHoverIdx(null)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          MOBILE / TABLET — vertical timeline
          ════════════════════════════════════════ */}
      <section
        className="relative block lg:hidden py-20 overflow-hidden"        
      >
        <div className="absolute top-[10%] right-0 w-[240px] h-[240px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(132,61,245,0.045) 0%, transparent 70%)', filter: 'blur(50px)' }} />

        <div className="max-w-[560px] mx-auto px-5">
          <div className="text-center mb-14">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] block mb-3"
              style={{ color: 'rgb(132,61,245)' }}>Why ConGenie</span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight leading-tight"
              style={{ color: '#05083B' }}>
              Enterprise Event Tech You Can Rely On
            </h2>
          </div>

          <div className="relative">
            {!reduced && (
              <motion.div
                className="absolute left-[13px] w-1.5 h-1.5 rounded-full z-10"
                style={{ background: 'rgb(132,61,245)' }}
                animate={{ top: ['0%', '95%'], opacity: [0, 0.6, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              />
            )}
            {features.map((f, i) => (
              <MobileItem key={f.id} feature={f} index={i} reduced={!!reduced} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
