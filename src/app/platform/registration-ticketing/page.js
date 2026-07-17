'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Ticket,
  Users,
  ArrowRight,
  CheckCircle2,
  CreditCard,
  Globe,
  Sparkles,
  Layers,
  Lock,
  FileText,
  Plus,
  Sliders,
  TrendingUp,
  ShieldCheck,
  Bell,
  Mail,
  MessageSquare,
  Smartphone,
  Clock,
  UserCheck,
  BarChart3,
  Zap,
  RefreshCw,
  Star,
  QrCode,
  BadgeCheck,
  ChevronRight,
  AlertCircle,
} from 'lucide-react';
import { motion } from 'framer-motion';
import FinalCTA from '../../../sections/FinalCTA';

// ─── SVG Logos for Integrations ──────────────────────────────────────────────
const StripeLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#635BFF]" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.996 10.709c0-1.03-.787-1.47-2.136-1.47-1.745 0-3.328.618-4.484 1.25l-.837-4.148C7.818 5.753 9.773 5 12.35 5c3.844 0 6.136 1.83 6.136 5.166 0 4.146-5.59 4.887-5.59 6.574 0 .978.85 1.455 2.298 1.455 2.056 0 3.75-.787 5.09-1.506l.82 4.167C19.709 21.6 17.518 22.5 15.004 22.5c-4.116 0-6.613-1.89-6.613-5.32 0-4.305 5.605-5.01 5.605-6.47z"/>
  </svg>
);

const PayPalLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#003087]" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.089 7.21c-.347-1.735-1.423-3.094-3.23-4.08C15.053 2.144 12.802 2 10.106 2H5.068a1.05 1.05 0 00-1.036.877l-3.003 19a.526.526 0 00.518.608h5.056c.494 0 .918-.348.995-.838l1.457-9.227a.524.524 0 01.517-.442h2.247c3.968 0 7.073-1.614 7.973-6.28.293-1.518.25-2.883-.703-4.488zm-3.666 4.39c-.588 3.037-2.61 4.082-5.467 4.082h-1.92a.525.525 0 00-.518.442l-1.077 6.81a.262.262 0 01-.259.22H3.774a.263.263 0 01-.259-.304L6.16 6.13c.04-.245.251-.42.5-.42h3.447c1.785 0 3.27.103 4.417.731.854.468 1.472 1.258 1.636 2.45.19 1.385-.015 2.062-.338 2.71z"/>
  </svg>
);

const SalesforceLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#00A1E0]" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.25 10.92c-.37-.84-1-1.5-1.81-1.92-.09-.05-.12-.17-.07-.27.4-.92.35-1.96-.13-2.84-.71-1.28-2.11-2.01-3.57-1.85-.11.01-.2-.06-.23-.17C15.82 2.1 14.12 1 12.24 1c-1.87 0-3.57 1.1-4.2 2.87-.03.1-.12.18-.23.17-1.46-.16-2.86.57-3.57 1.85-.48.88-.53 1.92-.13 2.84.05.1.02.22-.07.27-.81.42-1.44 1.08-1.81 1.92-.72 1.62-.51 3.52.56 4.96.07.1.07.24 0 .34-1.07 1.44-1.28 3.34-.56 4.96.72 1.62 2.22 2.68 3.99 2.84.11.01.19.1.19.21v.1c0 2.2 1.8 4 4 4h7.5c2.2 0 4-1.8 4-4v-.1c0-.11.08-.2.19-.21 1.77-.16 3.27-1.22 3.99-2.84.72-1.62.51-3.52-.56-4.96-.07-.1-.07-.24 0-.34 1.07-1.44 1.28-3.34.56-4.96z"/>
  </svg>
);

const HubSpotLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#FF7A59]" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.2 11.2h-3.3c-.4-1.5-1.6-2.7-3.1-3.1V4.8c1.3-.4 2.2-1.6 2.2-3.1 0-1.8-1.4-3.2-3.2-3.2-1.8 0-3.2 1.4-3.2 3.2 0 1.5.9 2.7 2.2 3.1v3.3c-1.5.4-2.7 1.6-3.1 3.1H6.4c-.4-1.3-1.6-2.2-3.1-2.2-1.8 0-3.2 1.4-3.2 3.2 0 1.8 1.4 3.2 3.2 3.2 1.5 0 2.7-.9 3.1-2.2h3.3c.4 1.5 1.6 2.7 3.1 3.1v3.3c-1.3.4-2.2 1.6-2.2 3.1 0 1.8 1.4 3.2 3.2 3.2 1.8 0 3.2-1.4 3.2-3.2 0-1.5-.9-2.7-2.2-3.1v-3.3c1.5-.4 2.7-1.6 3.1-3.1h3.3c.4 1.3 1.6 2.2 3.1 2.2 1.8 0 3.2-1.4 3.2-3.2 0-1.8-1.4-3.2-3.2-3.2-1.5.1-2.7-.8-3.1-2.2zM13.8 2.2c0-.5.4-.9.9-.9s.9.4.9.9-.4.9-.9.9-.9-.4-.9-.9zm-10.5 11c0-.5.4-.9.9-.9s.9.4.9.9-.4.9-.9.9-.9-.4-.9-.9zm11.4 7.6c0 .5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9zm-1.8-8.6c0-1 1-1.8 1.8-1.8s1.8.8 1.8 1.8-.8 1.8-1.8 1.8-1.8-.8-1.8-1.8zm7.6 2.1c0 .5-.4.9-.9.9s-.9-.4-.9-.9.4-.9.9-.9.9.4.9.9z"/>
  </svg>
);

const ZapierLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#FF4A00]" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.8 11.2l-5.6-5.6c-.4-.4-1.1-.4-1.5 0l-5.6 5.6c-.4.4-.4 1.1 0 1.5l5.6 5.6c.4.4 1.1.4 1.5 0l5.6-5.6c.4-.4.4-1.1 0-1.5zm-6.3-1.9c.7 0 1.2.5 1.2 1.2s-.5 1.2-1.2 1.2-1.2-.5-1.2-1.2.5-1.2 1.2-1.2z"/>
  </svg>
);

const SlackLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#4A154B]" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523 2.528 2.528 0 0 1-2.522-2.523 2.528 2.528 0 0 1 2.522-2.52h2.52v2.52zm1.261 0a2.528 2.528 0 0 1 2.52-2.52h5.043a2.528 2.528 0 0 1 2.522 2.52v5.043a2.528 2.528 0 0 1-2.522 2.52H8.823a2.528 2.528 0 0 1-2.52-2.52v-5.043zm2.52-6.342a2.528 2.528 0 0 1-2.52-2.52 2.528 2.528 0 0 1 2.52-2.522 2.528 2.528 0 0 1 2.52 2.522v2.52h-2.52zm0 1.261a2.528 2.528 0 0 1 2.52 2.52v5.043a2.528 2.528 0 0 1-2.52 2.522H3.78a2.528 2.528 0 0 1-2.52-2.522V10.084a2.528 2.528 0 0 1 2.52-2.52h5.043zm6.342-2.52a2.528 2.528 0 0 1 2.52-2.52 2.528 2.528 0 0 1 2.522 2.52v2.52h-2.522a2.528 2.528 0 0 1-2.52-2.52zm-1.261 0a2.528 2.528 0 0 1 2.52 2.52v5.043a2.528 2.528 0 0 1-2.522 2.52H10.08a2.528 2.528 0 0 1-2.52-2.52V5.043a2.528 2.528 0 0 1 2.52-2.52h5.043zm-2.52 13.9a2.528 2.528 0 0 1 2.52 2.52 2.528 2.528 0 0 1-2.52 2.522 2.528 2.528 0 0 1-2.52-2.522v-2.52h2.52zm0-1.261a2.528 2.528 0 0 1-2.52-2.52v-5.043a2.528 2.528 0 0 1 2.52-2.522h5.043a2.528 2.528 0 0 1 2.52 2.522v5.043a2.528 2.528 0 0 1-2.52 2.52H15.12z"/>
  </svg>
);

const TwilioLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#F22F46]" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-3.5 11c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm0-4c-.83 0-1.5-.67-1.5-1.5S7.67 6 8.5 6s1.5.67 1.5 1.5S9.33 8 8.5 8zm7 7c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm0-4c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
  </svg>
);

const WebhooksLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-accent-purple" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2a3 3 0 00-3 3c0 .8.3 1.6.9 2.1l-2 3.9a3 3 0 00-.9-.1 3 3 0 103 3c0-.8-.3-1.6-.9-2.1l2-3.9c.3 0 .6.1.9.1a3 3 0 003-3 3 3 0 00-3-3zm0 2c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm-6 10c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm12 0c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z"/>
  </svg>
);

const OktaLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-slate-800 dark:fill-white" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/>
  </svg>
);

// ─── Animation helpers ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7 } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const slideRight = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

function InView({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{ hidden: fadeUp.hidden, visible: { ...fadeUp.visible.transition ? fadeUp.visible : fadeUp.visible, transition: { ...fadeUp.visible.transition, delay } } }}
    >
      {children}
    </motion.div>
  );
}

// ─── Small label badge ────────────────────────────────────────────────────────
function Label({ icon: Icon, children, light = false }) {
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border ${light ? 'border-accent-purple/30 bg-accent-purple/8 text-accent-purple' : 'border-accent-purple/30 bg-accent-purple/10 text-accent-purple'}`}>
      {Icon && <Icon className="w-3.5 h-3.5" />}
      <span>{children}</span>
    </div>
  );
}

// ─── Connecting node for journey flow ─────────────────────────────────────────
function FlowNode({ icon: Icon, label, sub, active = false, index }) {
  return (
    <motion.div
      variants={slideRight}
      className="flex flex-col items-center gap-2 flex-1 min-w-0"
    >
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-300 shadow-sm ${active ? 'bg-accent-purple border-accent-purple text-white shadow-accent-purple/30 shadow-lg' : 'bg-white border-slate-200 text-accent-purple'}`}>
        <Icon className="w-5 h-5" />
      </div>
      <div className="text-center">
        <h5 className={`font-semibold ${active ? 'text-accent-purple' : 'text-slate-700 dark:text-slate-300'}`}>{label}</h5>
        {sub && <p className="text-slate-400 mt-0.5 hidden sm:block">{sub}</p>}
      </div>
    </motion.div>
  );
}

// ─── Communication step ────────────────────────────────────────────────────────
function CommStep({ icon: Icon, channel, title, timing, color = 'purple' }) {
  const colors = {
    purple: 'bg-accent-purple/10 border-accent-purple/25 text-accent-purple',
    blue: 'bg-blue-50 border-blue-200/60 text-blue-600',
    green: 'bg-emerald-50 border-emerald-200/60 text-emerald-600',
    amber: 'bg-amber-50 border-amber-200/60 text-amber-600',
  };
  return (
    <motion.div variants={fadeUp} className="flex items-start gap-3 group">
      <div className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 mt-0.5 ${colors[color]}`}>
        <Icon className="w-4 h-4" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-semibold text-slate-800 dark:text-white group-hover:text-accent-purple transition-colors">{title}</div>
        <div className="text-xs text-slate-500 mt-0.5 flex items-center gap-1.5">
          <span className="capitalize font-medium">{channel}</span>
          <span className="text-slate-300">·</span>
          <span>{timing}</span>
        </div>
      </div>
      <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-accent-purple group-hover:translate-x-0.5 transition-all shrink-0 mt-2" />
    </motion.div>
  );
}

// ─── Metric card for analytics section ───────────────────────────────────────
function MetricCard({ label, value, sub, trend, icon: Icon }) {
  return (
    <motion.div
      variants={fadeUp}
      className="bg-white/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 rounded-2xl p-4 backdrop-blur-sm hover:border-accent-purple/30 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="w-8 h-8 rounded-xl bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center">
          <Icon className="w-4 h-4 text-accent-purple" />
        </div>
        {trend && (
          <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-full">
            {trend}
          </span>
        )}
      </div>
      <div className="text-2xl font-bold text-slate-900 dark:text-white font-sans tracking-tight">{value}</div>
      <div className="font-medium text-slate-600 dark:text-slate-400 mt-0.5">{label}</div>
      {sub && <p className="text-slate-400 mt-1">{sub}</p>}
    </motion.div>
  );
}

// ─── Outcome panel ────────────────────────────────────────────────────────────
function OutcomePanel({ number, heading, body, proof }) {
  return (
    <motion.div
      variants={fadeUp}
      className="relative bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 overflow-hidden hover:border-accent-purple/35 hover:shadow-lg transition-all duration-400 group"
    >
      {/* Subtle purple corner glow */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent-purple/6 rounded-full blur-2xl group-hover:bg-accent-purple/10 transition-colors duration-500" />

      <div className="relative z-10">
        <div className="text-[11px] font-bold text-accent-purple/60 tracking-[0.15em] uppercase font-mono mb-4">{number}</div>
        <h5 className="font-display text-primary dark:text-white group-hover:text-accent-purple transition-colors mb-4">
          {heading}
        </h5>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-5">{body}</p>
        <div className="flex items-center gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
          <CheckCircle2 className="w-4 h-4 text-accent-purple shrink-0" />
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{proof}</span>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Integration hub spoke ───────────────────────────────────────────────────
function IntegSpoke({ label, category, delay = 0, angle }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="flex flex-col items-center gap-1.5"
    >
      <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-center text-accent-purple hover:border-accent-purple/40 hover:shadow-md transition-all duration-300 text-xs font-bold">
        {label.slice(0, 2)}
      </div>
      <div className="text-[10px] font-semibold text-slate-600 dark:text-slate-400 text-center leading-tight max-w-[60px]">
        {label}
      </div>
      <div className="text-[9px] text-slate-400 font-medium">{category}</div>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PAGE
// ═══════════════════════════════════════════════════════════════════════════════
export default function RegistrationTicketingPage() {
  const journeySteps = [
    { icon: FileText, label: 'Registration Form', sub: 'Custom fields', active: false },
    { icon: Users, label: 'Attendee Type', sub: 'Category routing', active: false },
    { icon: Sliders, label: 'Conditional Logic', sub: 'Smart branching', active: true },
    { icon: UserCheck, label: 'Approval', sub: 'Auto or manual', active: false },
    { icon: CreditCard, label: 'Payment', sub: 'Global gateways', active: false },
    { icon: BadgeCheck, label: 'Confirmation', sub: 'Instant delivery', active: false },
  ];

  const formCapabilities = [
    'Custom fields & file uploads',
    'Conditional questions & skip logic',
    'Multiple attendee categories',
    'Multilingual form support',
    'Invitation-only access codes',
    'Approval workflow integration',
  ];

  const ticketCapabilities = [
    'Free and paid ticket types',
    'Early-bird automated pricing',
    'Multiple ticket categories',
    'Per-tier capacity limits',
    'Promotional & discount codes',
    'Group booking management',
  ];

  const paymentCapabilities = [
    'Multi-currency support (40+ currencies)',
    'Stripe, PayPal & bank transfers',
    'Automated VAT / tax invoices',
    'Instant PDF receipt delivery',
    'Payment status tracking',
    'Failed payment recovery flows',
  ];

  const approvalStages = [
    { from: 'Submitted', to: 'Under Review', type: 'auto' },
    { from: 'Under Review', to: 'Approved', type: 'manual' },
    { from: 'Approved', to: 'Payment Pending', type: 'auto' },
    { from: 'Payment Pending', to: 'Confirmed', type: 'payment' },
  ];

  const qrFeatures = [
    'Unique QR per attendee & per ticket',
    'Mobile-first access passes',
    'Instant onsite verification',
    'Duplicate-use protection',
    'Badge printing integration',
    'Real-time check-in status',
  ];

  const commSteps = [
    { icon: Mail, channel: 'email', title: 'Registration Confirmation', timing: 'Immediately', color: 'purple' },
    { icon: Bell, channel: 'email + SMS', title: 'Approval or Rejection', timing: 'Within minutes', color: 'blue' },
    { icon: CreditCard, channel: 'email', title: 'Payment Confirmation', timing: 'On payment', color: 'green' },
    { icon: Ticket, channel: 'email + app', title: 'Ticket & QR Delivery', timing: 'Post-payment', color: 'purple' },
    { icon: Clock, channel: 'email + SMS', title: 'Event Reminder', timing: '48h & 1h before', color: 'amber' },
    { icon: Users, channel: 'email', title: 'Waitlist Update', timing: 'On seat release', color: 'blue' },
    { icon: AlertCircle, channel: 'email + SMS', title: 'Cancellation / Refund', timing: 'On request', color: 'amber' },
  ];

  const metrics = [
    { label: 'Registration Conversion', value: '73%', sub: 'Average across events', trend: '+12%', icon: TrendingUp },
    { label: 'Tickets Sold', value: '12,840', sub: 'This month', trend: '+24%', icon: Ticket },
    { label: 'Payment Completion', value: '91%', sub: 'Checkout success rate', trend: '+8%', icon: CreditCard },
    { label: 'Revenue Generated', value: '$284K', sub: '30-day total', trend: '+31%', icon: Sparkles },
    { label: 'Avg. Time to Register', value: '2m 14s', sub: 'From page load', icon: Clock },
    { label: 'Attendee Satisfaction', value: '4.8/5', sub: 'Post-registration score', icon: Star },
  ];

  const integrations = [
    { label: 'Stripe', category: 'Payment', delay: 0.05 },
    { label: 'PayPal', category: 'Payment', delay: 0.1 },
    { label: 'Salesforce', category: 'CRM', delay: 0.15 },
    { label: 'HubSpot', category: 'CRM', delay: 0.2 },
    { label: 'Zapier', category: 'Automation', delay: 0.25 },
    { label: 'Webhooks', category: 'API', delay: 0.3 },
    { label: 'Mailchimp', category: 'Email', delay: 0.35 },
    { label: 'Okta SSO', category: 'Identity', delay: 0.4 },
    { label: 'Twilio', category: 'SMS', delay: 0.45 },
    { label: 'Slack', category: 'Comms', delay: 0.5 },
  ];

  return (
    <main className="min-h-screen pt-20 bg-white dark:bg-[#020314] overflow-x-hidden transition-colors duration-300">

      {/* ══════════════════════════════════════════════════════════════════════
          1. HERO — Bright premium with 3D ecosystem visual
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative flex items-center dark:from-[#020314] dark:via-[#07091e] dark:to-[#0b0d28] overflow-hidden border-b border-slate-100 dark:border-slate-900">
        {/* ambient glows */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-accent-purple/8 dark:bg-accent-purple/12 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-indigo-300/12 dark:bg-indigo-500/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 relative z-10 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: text */}
            <motion.div className="space-y-7 max-w-xl" initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp}>
                <Label icon={Ticket}>Registration & Ticketing Platform</Label>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white leading-[1.05] tracking-tight"
              >
                Seamless Registration &{' '}
                <span className="bg-gradient-to-r from-accent-purple via-violet-500 to-indigo-500 bg-clip-text text-transparent">
                  Intelligent Ticketing
                </span>
              </motion.h1>

              <motion.p variants={fadeUp} className="text-slate-600 dark:text-slate-300 text-lg font-light leading-relaxed">
                Build complete registration journeys, sell tickets, collect payments, automate approvals, and manage attendee access — all from one elegant platform.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href="/contact"
                  id="hero-cta-primary"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-accent-purple hover:bg-[#6c28e2] text-white font-semibold text-sm shadow-lg shadow-accent-purple/25 hover:shadow-accent-purple/35 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Start Building for Free
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="#journey"
                  id="hero-cta-secondary"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-all duration-300"
                >
                  Explore Features
                </a>
              </motion.div>

              {/* Trust signals */}
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-5 pt-2">
                {[
                  { icon: ShieldCheck, text: 'SOC 2 Certified' },
                  { icon: Globe, text: '40+ Currencies' },
                  { icon: Zap, text: 'Setup in minutes' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                    <Icon className="w-3.5 h-3.5 text-accent-purple" />
                    {text}
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: 3D hero visual */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-accent-purple/15 border border-white/60 dark:border-slate-800/60">
                  <Image
                    src="/reg-hero.png"
                    alt="Premium registration ecosystem showing digital tickets, attendee badges, QR codes, payment objects, and confirmation status"
                    width={760}
                    height={480}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          2. REGISTRATION JOURNEY — Connected flow storytelling
      ══════════════════════════════════════════════════════════════════════ */}
      <section id="journey" className="py-16 lg:py-20 bg-gradient-to-b from-[#faf9ff] to-white dark:from-[#030519] dark:to-[#020314]">
        <div className="max-w-[1400px] mx-auto px-4">
          <InView className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <Label icon={Layers}>Registration Journey</Label>
            <h2 className="font-display font-bold text-slate-900 dark:text-white">
              Build Registration Journeys That&nbsp;Adapt
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg font-light leading-relaxed">
              Guide every attendee through a tailored path — from first form visit to confirmed entry badge.
            </p>
          </InView>

          {/* Connected horizontal flow */}
          <div className="relative max-w-[1400px] mx-auto">
            {/* connecting line */}
            <div className="hidden md:block absolute top-6 left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-transparent via-accent-purple/25 to-transparent" />

            <motion.div
              className="grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-2 relative z-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={stagger}
            >
              {journeySteps.map((step, i) => (
                <FlowNode key={step.label} {...step} index={i} />
              ))}
            </motion.div>

            {/* Capability list */}
            <motion.div
              className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              {[
                { icon: FileText, text: 'Custom fields & multilingual forms' },
                { icon: Sliders, text: 'Conditional questions & skip logic' },
                { icon: Users, text: 'Multiple attendee categories' },
                { icon: Lock, text: 'Invitation-only access codes' },
                { icon: UserCheck, text: 'Manual & automated approvals' },
                { icon: Globe, text: 'Per-form capacity limits' },
              ].map(({ icon: Icon, text }) => (
                <motion.div
                  key={text}
                  variants={fadeUp}
                  className="flex items-center gap-3 bg-white dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 rounded-2xl px-4 py-3 shadow-sm hover:border-accent-purple/25 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-xl bg-accent-purple/8 border border-accent-purple/15 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-accent-purple" />
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">{text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          4. TICKET TIERS — Dark section with 3D ticket visual
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-[#070b19] dark:bg-[#040610] text-white relative overflow-hidden">
        {/* purple glow behind visual */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-accent-purple/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-indigo-500/8 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: image */}
            <motion.div
              className="order-2 lg:order-1 relative"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="rounded-3xl overflow-hidden shadow-2xl shadow-accent-purple/20 border border-white/10">
                  <Image
                    src="/ticket-tiers.png"
                    alt="Layered 3D event ticket objects showing VIP, Standard, Student and Early Bird passes with capacity indicators"
                    width={700}
                    height={440}
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Floating capacity badge */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-[#0f1738] border border-slate-700 rounded-2xl px-4 py-2.5 shadow-xl"
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                >
                  <div className="text-[9px] text-slate-400 font-medium">VIP Capacity</div>
                  <div className="text-sm font-bold text-white font-sans">88 / 100</div>
                  <div className="w-full bg-slate-800 h-1 rounded-full mt-1 overflow-hidden">
                    <div className="h-full bg-amber-400 rounded-full" style={{ width: '88%' }} />
                  </div>
                  <div className="text-[9px] text-amber-400 font-bold mt-1">Almost sold out</div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right: text */}
            <InView className="order-1 lg:order-2 space-y-6">
              <Label icon={Layers}>Tier Orchestration</Label>
              <h2 className="font-display font-bold text-white leading-tight">
                Dynamic Ticket Tiers &amp; Capacity Control
              </h2>
              <p className="text-slate-400 font-light leading-relaxed">
                Implement intelligent billing mechanics automatically. Set early-bird price thresholds, password-locked VIP entries, group discounts, and per-tier capacity limits — all configurable without engineering.
              </p>
              <ul className="space-y-3">
                {ticketCapabilities.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle2 className="w-4.5 h-4.5 text-accent-purple shrink-0 mt-0.5" />
                    {c}
                  </li>
                ))}
              </ul>

              {/* tier chips */}
              <div className="flex flex-wrap gap-2 pt-2">
                {['VIP', 'Standard', 'Early Bird', 'Student', 'Group', 'Free'].map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full border border-slate-700 text-slate-300 bg-slate-800/50 hover:border-accent-purple/50 hover:text-accent-purple transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </InView>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          5. PAYMENTS & INVOICING — Light, asymmetric
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20  bg-gradient-to-br from-[#faf9ff] to-white dark:from-[#030519] dark:to-[#020314] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent-purple/5 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

            {/* Left: text (narrower) */}
            <InView className="lg:col-span-5 space-y-6">
              <Label icon={Lock}>Enterprise Security</Label>
              <h2 className="font-display font-bold text-slate-900 dark:text-white leading-tight">
                Global Payments &amp; Automated Invoicing
              </h2>
              <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                Support global events with multi-currency payouts and automatic VAT/GST calculation. Deliver PDF invoices, handle refunds, and recover failed payments — all without manual intervention.
              </p>
              <ul className="space-y-3">
                {paymentCapabilities.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4.5 h-4.5 text-accent-purple shrink-0 mt-0.5" />
                    {c}
                  </li>
                ))}
              </ul>
            </InView>

            {/* Right: 3D payment visual (wider) */}
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
                className="relative"
              >
                <div className="rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 dark:shadow-accent-purple/10 border border-slate-200/70 dark:border-slate-800/60">
                  <Image
                    src="/payment-ecosystem.png"
                    alt="Premium 3D payment ecosystem showing payment cards, invoice documents, digital receipts, and currency indicators"
                    width={760}
                    height={480}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          6. APPROVAL, WAITLIST & QUEUE — Light lavender, timeline flow
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-[#f3efff] to-[#faf9ff] dark:from-[#08051f] dark:to-[#030519] border-y border-slate-100 dark:border-slate-900">
        <div className="max-w-[1400px] mx-auto px-4">
          <InView className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <Label icon={UserCheck}>Access Management</Label>
            <h2 className="font-display font-bold text-slate-900 dark:text-white">
              Control Access Without Losing Demand
            </h2>
            <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">
              Keep registration demand high while enforcing capacity, approval rules, and waitlist priority — all without manual back-and-forth.
            </p>
          </InView>

          {/* Main approval flow */}
          <div className="max-w-[1400px] mx-auto mb-16">
            <div className="text-xs font-bold text-slate-400 tracking-widest uppercase text-center mb-6">Primary Registration Flow</div>
            <motion.div
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              {['Pending', 'Approved', 'Payment Pending', 'Confirmed'].map((stage, i) => (
                <React.Fragment key={stage}>
                  <motion.div
                    variants={fadeUp}
                    className={`flex-1 text-center px-4 py-3 rounded-2xl border font-semibold transition-all ${i === 3 ? 'bg-accent-purple/10 border-accent-purple/40 text-accent-purple dark:text-accent-purple' : 'bg-white dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'}`}
                  >
                    {stage}
                  </motion.div>
                  {i < 3 && <ChevronRight className="w-4 h-4 text-slate-300 dark:text-slate-600 shrink-0 hidden sm:block" />}
                </React.Fragment>
              ))}
            </motion.div>

            {/* Waitlist branch */}
            <div className="mt-6">
              <div className="text-xs font-bold text-slate-400 tracking-widest uppercase text-center mb-4">Waitlist Path</div>
              <motion.div
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
              >
                {['Waitlist', 'Seat Released', 'Payment Link Sent', 'Confirmed'].map((stage, i) => (
                  <React.Fragment key={stage}>
                    <motion.div
                      variants={fadeUp}
                      className={`flex-1 text-center px-4 py-3 rounded-2xl border font-semibold ${i === 3 ? 'bg-emerald-50 border-emerald-300/60 text-emerald-700 dark:bg-emerald-900/15 dark:border-emerald-800/40 dark:text-emerald-400' : 'bg-white/70 dark:bg-slate-900/30 border-dashed border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400'}`}
                    >
                      {stage}
                    </motion.div>
                    {i < 3 && <ChevronRight className="w-4 h-4 text-slate-300 dark:text-slate-600 shrink-0 hidden sm:block" />}
                  </React.Fragment>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Feature detail grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1400px] mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {[
              { icon: UserCheck, title: 'Manual & Auto Approval', desc: 'Define approval rules per attendee type or registration form' },
              { icon: AlertCircle, title: 'Capacity Alerts', desc: 'Automated alerts at 50%, 80%, 90% and 100% capacity filled' },
              { icon: Clock, title: 'Time-Limited Payment Links', desc: 'Expire payment invitations automatically; release seat to waitlist' },
              { icon: RefreshCw, title: 'Automatic Seat Release', desc: 'Release unpaid seats and notify next person in queue instantly' },
            ].map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 hover:border-accent-purple/30 hover:shadow-md transition-all duration-300 space-y-3"
              >
                <div className="w-9 h-9 rounded-xl bg-accent-purple/8 border border-accent-purple/15 flex items-center justify-center">
                  <Icon className="w-4.5 h-4.5 text-accent-purple" />
                </div>
                <h5 className="font-display text-slate-800 dark:text-white">{title}</h5>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          7. QR TICKETS & SECURE ACCESS — Dark cinematic section
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-[#070b19] dark:bg-[#040610] text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-accent-purple/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: text */}
            <InView className="space-y-6">
              <Label icon={QrCode}>Secure Entry</Label>
              <h2 className="font-display font-bold text-white">
                From Registration to Entry in Seconds
              </h2>
              <p className="text-slate-400 leading-relaxed">
                Every attendee receives a unique QR code the moment their registration is confirmed. Onsite scanning is instant, duplicate-use protected, and integrated with badge printing.
              </p>
              <ul className="space-y-3">
                {qrFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle2 className="w-4.5 h-4.5 text-accent-purple shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* scanning speed stat */}
              <div className="flex items-center gap-6 pt-2">
                <div>
                  <div className="text-3xl font-bold text-white font-sans">&lt; 0.5s</div>
                  <div className=" text-slate-500 mt-0.5">Avg. scan time</div>
                </div>
                <div className="w-px h-10 bg-slate-700" />
                <div>
                  <div className="text-3xl font-bold text-white font-sans">99.9%</div>
                  <div className=" text-slate-500 mt-0.5">Check-in accuracy</div>
                </div>
                <div className="w-px h-10 bg-slate-700" />
                <div>
                  <div className="text-3xl font-bold text-white font-sans">0</div>
                  <div className=" text-slate-500 mt-0.5">Duplicate entries</div>
                </div>
              </div>
            </InView>

            {/* Right: cinematic visual */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
              >
                <div className="rounded-3xl overflow-hidden shadow-2xl shadow-accent-purple/25 border border-white/10">
                  <Image
                    src="/qr-checkin.png"
                    alt="Cinematic 3D visual of mobile QR ticket, printed attendee badge, QR scanner with scanning beam, and check-in confirmation"
                    width={700}
                    height={440}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          8. AUTOMATED COMMUNICATION — Light, connected timeline
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#faf9ff] dark:bg-[#030519] border-y border-slate-100 dark:border-slate-900 relative overflow-hidden transition-colors duration-300">
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-accent-purple/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* Left Column - Intro & Channel States */}
            <InView className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              <Label icon={Bell}>Smart Communications</Label>
              <h2 className="font-display font-bold text-slate-900 dark:text-white text-3xl sm:text-4xl leading-tight">
                Keep Every Attendee Informed Automatically
              </h2>
              <p className="text-slate-605 dark:text-slate-355 font-light leading-relaxed">
                Trigger the right message at the right moment — across email, SMS, and mobile push notifications — without any manual effort from your team.
              </p>
              
              {/* Channel Stats / Pills */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Active Delivery Channels</div>
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2.5">
                  {[
                    { icon: Mail, label: 'Email Broadcasts', status: 'Active', desc: 'SLA-backed mail delivery', color: 'text-accent-purple bg-accent-purple/8 border-accent-purple/15' },
                    { icon: MessageSquare, label: 'SMS Notifications', status: 'Active', desc: 'Global carrier routing', color: 'text-cyan-600 bg-cyan-50 dark:bg-cyan-950/15 border-cyan-200/50 dark:border-cyan-800/30' },
                    { icon: Smartphone, label: 'Push Notifications', status: 'Active', desc: 'Direct attendee app push', color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/15 border-emerald-200/50 dark:border-emerald-800/30' }
                  ].map((chan) => {
                    const Icon = chan.icon;
                    return (
                      <div key={chan.label} className="flex items-center gap-3 p-3 bg-white dark:bg-slate-900/60 border border-slate-200/70 dark:border-slate-800/80 rounded-xl shadow-sm hover:border-accent-purple/30 transition-all duration-300">
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border ${chan.color}`}>
                          <Icon className="w-4.5 h-4.5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-slate-800 dark:text-slate-200">{chan.label}</span>
                            <span className="text-xs text-emerald-500 flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> {chan.status}
                            </span>
                          </div>
                          <p className="text-slate-500 dark:text-slate-400 truncate">{chan.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Automation Status Panel */}
              <div className="bg-gradient-to-tr from-accent-purple/5 to-transparent border border-accent-purple/15 rounded-2xl p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-accent-purple animate-pulse" />
                    <span className="font-bold text-accent-purple uppercase tracking-wider">Automation Engine</span>
                  </div>
                  <span className="text-xs bg-accent-purple/15 text-accent-purple px-2 py-0.5 rounded-full">Active</span>
                </div>
                <div className="text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                  Triggers are verified and executed automatically at millisecond precision based on real-time event milestones.
                </div>
              </div>
            </InView>

            {/* Right Column - Timeline Workflow */}
            <motion.div
              className="lg:col-span-8 space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <div className="relative">
                {/* Connecting timeline line */}
                <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-accent-purple via-slate-200 dark:via-slate-850 to-transparent" />

                <div className="space-y-6 pl-14">
                  {[
                    { icon: Mail, channel: 'Email', title: 'Registration Confirmation', timing: 'Immediately', trigger: 'Triggered upon successful checkout completion.', badgeColor: 'bg-accent-purple/10 text-accent-purple' },
                    { icon: Bell, channel: 'Email + SMS', title: 'Approval or Rejection', timing: 'Within minutes', trigger: 'Executed after manual reviewer approval or automation rules pass.', badgeColor: 'bg-blue-50 text-blue-600 dark:bg-blue-955/20 dark:text-blue-400' },
                    { icon: CreditCard, channel: 'Email', title: 'Payment Confirmation', timing: 'On payment', trigger: 'Fires instantly when payment gateway returns a successful webhook.', badgeColor: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-955/20 dark:text-emerald-400' },
                    { icon: Ticket, channel: 'Email + App Push', title: 'Ticket & QR Delivery', timing: 'Post-payment', trigger: 'Generates secure printable ticket PDF & attendee wallet pass.', badgeColor: 'bg-violet-50 text-violet-600 dark:bg-violet-955/20 dark:text-violet-400' },
                    { icon: Clock, channel: 'Email + SMS', title: 'Event Reminder', timing: '48h & 1h before', trigger: 'Scheduled job delivering quick-access check-in codes.', badgeColor: 'bg-amber-50 text-amber-600 dark:bg-amber-955/20 dark:text-amber-400' },
                    { icon: Users, channel: 'Email', title: 'Waitlist Update', timing: 'On seat release', trigger: 'Notifies next attendee when a reserved seat slot is freed.', badgeColor: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-955/20 dark:text-indigo-400' },
                    { icon: AlertCircle, channel: 'Email + SMS', title: 'Cancellation & Refund', timing: 'On request', trigger: 'Sent following registration cancellation or refund request.', badgeColor: 'bg-rose-50 text-rose-600 dark:bg-rose-955/20 dark:text-rose-400' }
                  ].map((step, i) => {
                    const Icon = step.icon;
                    return (
                      <motion.div
                        key={step.title}
                        variants={fadeUp}
                        className="relative group transition-all duration-300"
                      >
                        {/* Timeline node marker */}
                        <div className="absolute -left-[45px] top-3.5 w-6 h-6 rounded-full bg-white dark:bg-slate-950 border-2 border-accent-purple flex items-center justify-center z-15 shadow-sm group-hover:scale-110 transition-transform duration-200">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent-purple" />
                        </div>

                        {/* Card container */}
                        <div className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-accent-purple/35 transition-all duration-300 relative overflow-hidden">
                          {/* Accent left line */}
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent-purple/30 group-hover:bg-accent-purple transition-colors duration-300" />
                          
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <div className="flex items-start gap-3.5">
                              <div className="w-10 h-10 rounded-xl bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center shrink-0 mt-0.5 text-accent-purple">
                                <Icon className="w-5 h-5" />
                              </div>
                              <div className="space-y-1">
                                <h5 className="font-display text-slate-900 dark:text-white group-hover:text-accent-purple transition-colors duration-300">
                                  {step.title}
                                </h5>
                                <p className=" text-slate-500 dark:text-slate-400 font-light leading-relaxed max-w-lg">
                                  {step.trigger}
                                </p>
                              </div>
                            </div>
                            
                            {/* Metadata Badges */}
                            <div className="flex sm:flex-col items-start sm:items-end gap-2 shrink-0 pt-2 sm:pt-0 border-t border-slate-100 dark:border-slate-850 sm:border-none">
                              <span className={`text-xs px-2 py-0.5 rounded-full ${step.badgeColor}`}>
                                {step.channel}
                              </span>
                              <p className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                                <Clock className="w-3 h-3 text-slate-400" />
                                <span>{step.timing}</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          9. REGISTRATION PERFORMANCE INSIGHTS — Bright floating data
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-[#faf9ff] to-[#f3efff] dark:from-[#030519] dark:to-[#08051f] relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-accent-purple/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-4 relative z-10">
          <InView className="text-center max-w-2xl mx-auto mb-14 space-y-4">
            <Label icon={BarChart3}>Live Intelligence</Label>
            <h2 className="font-display font-bold text-slate-900 dark:text-white">
              Understand Registration Performance in Real Time
            </h2>
            <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">
              Dimensional analytics that surface registration funnels, ticket distribution, conversion rates, and revenue trends — all without leaving the platform.
            </p>
          </InView>

          {/* Floating metric cards */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {metrics.map((m) => (
              <MetricCard key={m.label} {...m} />
            ))}
          </motion.div>

          {/* Central funnel visual (coded) */}
          <motion.div
            className="mt-12 max-w-full mx-auto"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-3xl p-6">
              <div className="text-xs font-bold text-slate-400 tracking-widest uppercase text-center mb-6">Registration Funnel</div>
              <div className="space-y-2">
                {[
                  { label: 'Page Views', value: '18,400', pct: 100, color: 'bg-slate-200 dark:bg-slate-700' },
                  { label: 'Form Started', value: '9,200', pct: 50, color: 'bg-accent-purple/30' },
                  { label: 'Form Submitted', value: '6,100', pct: 33, color: 'bg-accent-purple/50' },
                  { label: 'Payment Completed', value: '4,460', pct: 24, color: 'bg-accent-purple/70' },
                  { label: 'Ticket Confirmed', value: '4,350', pct: 23.6, color: 'bg-accent-purple' },
                ].map(({ label, value, pct, color }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-32 shrink-0 text-right text-xs text-slate-500 dark:text-slate-400 font-medium">{label}</div>
                    <div className="flex-1 bg-slate-100 dark:bg-slate-800 h-7 rounded-lg overflow-hidden relative">
                      <motion.div
                        className={`absolute left-0 top-0 h-full ${color} rounded-lg flex items-center pl-2`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pct}%` }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true }}
                      >
                        <span className="text-[9px] font-bold text-white opacity-90 whitespace-nowrap">{value}</span>
                      </motion.div>
                    </div>
                    <div className="w-10 shrink-0 text-xs font-bold text-slate-600 dark:text-slate-400">{pct}%</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          10. INTEGRATIONS — Hub-and-spoke layout
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-20 bg-[#fbfbfe] dark:bg-[#030514] border-y border-slate-100 dark:border-slate-900 relative overflow-hidden transition-colors duration-300">
        <style>{`
          @keyframes dash {
            to {
              stroke-dashoffset: -20;
            }
          }
          .animate-dash-line {
            stroke-dasharray: 6 4;
            animation: dash 1.2s linear infinite;
          }
        `}</style>
        
        {/* Soft glows in background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-accent-purple/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 relative z-10">
          <InView className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <Label icon={Zap}>Integrations</Label>
            <h2 className="font-display font-bold text-slate-900 dark:text-white">
              Connect Registration with Your Existing Stack
            </h2>
            <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">
              ConGenie sits at the centre of your event data ecosystem — syncing registrations, payments, and attendee records with the tools you already use.
            </p>
          </InView>

          <div className="relative max-w-5xl mx-auto">
            {/* SVG connection lines for desktop */}
            <svg className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
              {/* Payments (Top Left) -> Center (50%, 50%) */}
              <path d="M 33% 25% C 42% 25%, 40% 50%, 50% 50%" stroke="#843DF5" strokeWidth="1.5" fill="none" className="animate-dash-line stroke-accent-purple/35" />
              
              {/* CRM (Bottom Left) -> Center */}
              <path d="M 33% 75% C 42% 75%, 40% 50%, 50% 50%" stroke="#843DF5" strokeWidth="1.5" fill="none" className="animate-dash-line stroke-accent-purple/35" />
              
              {/* Automation (Top Right) -> Center */}
              <path d="M 67% 18% C 58% 18%, 60% 50%, 50% 50%" stroke="#843DF5" strokeWidth="1.5" fill="none" className="animate-dash-line stroke-accent-purple/35" />
              
              {/* Communication (Middle Right) -> Center */}
              <path d="M 67% 50% L 50% 50%" stroke="#843DF5" strokeWidth="1.5" fill="none" className="animate-dash-line stroke-accent-purple/35" />
              
              {/* Identity (Bottom Right) -> Center */}
              <path d="M 67% 82% C 58% 82%, 60% 50%, 50% 50%" stroke="#843DF5" strokeWidth="1.5" fill="none" className="animate-dash-line stroke-accent-purple/35" />
            </svg>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
              
              {/* Left Column (Payments & CRM) */}
              <div className="lg:col-span-4 space-y-6 flex flex-col justify-center z-10">
                {/* Payments Card */}
                <div className="bg-white/95 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/70 dark:border-slate-800/80 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:border-accent-purple/45 hover:-translate-y-0.5 transition-all duration-300 group relative">
                  <div className="space-y-1 mb-4">
                    <h5 className="font-bold text-slate-950 dark:text-white group-hover:text-accent-purple transition-colors">Payments</h5>
                    <p className=" text-slate-500 dark:text-slate-400 font-light">Process global ticketing payments securely.</p>
                  </div>
                  <div className="space-y-2">
                    {[
                      { name: 'Stripe', logo: StripeLogo, desc: 'Credit Card, Apple Pay, Google Pay' },
                      { name: 'PayPal', logo: PayPalLogo, desc: 'Express Checkout, Local Payments' }
                    ].map((integ) => {
                      const Logo = integ.logo;
                      return (
                        <div key={integ.name} className="flex items-center gap-3 p-2 bg-slate-50/50 dark:bg-slate-950/40 border border-slate-150/80 dark:border-slate-800/50 rounded-xl hover:border-accent-purple/30 transition-colors">
                          <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center shrink-0 shadow-sm">
                            <Logo />
                          </div>
                          <div className="min-w-0">
                            <div className="text-[11px] font-bold text-slate-800 dark:text-slate-200">{integ.name}</div>
                            <div className="text-[9px] text-slate-500 dark:text-slate-400 truncate">{integ.desc}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* CRM Card */}
                <div className="bg-white/95 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/70 dark:border-slate-800/80 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:border-accent-purple/45 hover:-translate-y-0.5 transition-all duration-300 group relative">
                  <div className="space-y-1 mb-4">
                    <h5 className="font-bold text-slate-950 dark:text-white group-hover:text-accent-purple transition-colors">CRM & Marketing</h5>
                    <p className="text-slate-500 dark:text-slate-400 font-light">Sync attendee profiles and track lead pipelines.</p>
                  </div>
                  <div className="space-y-2">
                    {[
                      { name: 'Salesforce', logo: SalesforceLogo, desc: 'Enterprise data & lifecycle sync' },
                      { name: 'HubSpot', logo: HubSpotLogo, desc: 'Contact tracking & event workflows' }
                    ].map((integ) => {
                      const Logo = integ.logo;
                      return (
                        <div key={integ.name} className="flex items-center gap-3 p-2 bg-slate-50/50 dark:bg-slate-950/40 border border-slate-150/80 dark:border-slate-800/50 rounded-xl hover:border-accent-purple/30 transition-colors">
                          <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center shrink-0 shadow-sm">
                            <Logo />
                          </div>
                          <div className="min-w-0">
                            <div className="text-[11px] font-bold text-slate-800 dark:text-slate-200">{integ.name}</div>
                            <div className="text-[9px] text-slate-500 dark:text-slate-400 truncate">{integ.desc}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              
              {/* Center Column (ConGenie Hub) */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center relative py-10 lg:py-0 z-10">
                <div className="relative w-48 h-48 flex items-center justify-center">
                  {/* Outer pulsing ring */}
                  <div className="absolute inset-0 bg-accent-purple/5 dark:bg-accent-purple/10 rounded-full blur-2xl animate-pulse-slow" />
                  
                  {/* Spinning borders */}
                  <div className="absolute inset-4 rounded-full border border-dashed border-accent-purple/30 animate-[spin_40s_linear_infinite]" />
                  <div className="absolute inset-8 rounded-full border border-accent-purple/10" />
                  
                  {/* Central Hub Plate */}
                  <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-white to-[#fbf9ff] dark:from-[#090d26] dark:to-[#040615] border-2 border-accent-purple/35 dark:border-accent-purple/25 flex flex-col items-center justify-center shadow-xl shadow-accent-purple/15 dark:shadow-accent-purple/5 hover:scale-105 transition-transform duration-300 z-10">
                    <Sparkles className="w-7 h-7 text-accent-purple mb-1 animate-pulse" />
                    <span className="text-[10px] font-extrabold text-slate-900 dark:text-white uppercase tracking-widest">ConGenie</span>
                    <span className="text-[8px] text-accent-purple font-bold tracking-wide">CORE HUB</span>
                  </div>
                </div>
              </div>
              
              {/* Right Column (Automation, Comms, Identity) */}
              <div className="lg:col-span-4 space-y-6 flex flex-col justify-center z-10">
                {/* Automation */}
                <div className="bg-white/95 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/70 dark:border-slate-800/80 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:border-accent-purple/45 hover:-translate-y-0.5 transition-all duration-300 group relative">
                  <div className="space-y-1 mb-4">
                    <h5 className="font-bold text-slate-950 dark:text-white group-hover:text-accent-purple transition-colors">Automation</h5>
                    <p className=" text-slate-500 dark:text-slate-400 font-light">Trigger multi-app workflow automations.</p>
                  </div>
                  <div className="space-y-2">
                    {[
                      { name: 'Zapier', logo: ZapierLogo, desc: 'Connect to 5,000+ business tools' },
                      { name: 'Webhooks', logo: WebhooksLogo, desc: 'Custom HTTP callback notifications' }
                    ].map((integ) => {
                      const Logo = integ.logo;
                      return (
                        <div key={integ.name} className="flex items-center gap-3 p-2 bg-slate-50/50 dark:bg-slate-950/40 border border-slate-150/80 dark:border-slate-800/50 rounded-xl hover:border-accent-purple/30 transition-colors">
                          <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center shrink-0 shadow-sm">
                            <Logo />
                          </div>
                          <div className="min-w-0">
                            <div className="text-[11px] font-bold text-slate-800 dark:text-slate-200">{integ.name}</div>
                            <div className="text-[9px] text-slate-550 dark:text-slate-400 truncate">{integ.desc}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Communication */}
                <div className="bg-white/95 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200/70 dark:border-slate-800/80 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:border-accent-purple/45 hover:-translate-y-0.5 transition-all duration-300 group relative">
                  <div className="space-y-1 mb-4">
                    <h5 className="font-bold text-slate-950 dark:text-white group-hover:text-accent-purple transition-colors">Communication</h5>
                    <p className="text-slate-500 dark:text-slate-400 font-light">Automate notification updates instantly.</p>
                  </div>
                  <div className="space-y-2">
                    {[
                      { name: 'Slack', logo: SlackLogo, desc: 'Real-time internal channels alerts' },
                      { name: 'Twilio', logo: TwilioLogo, desc: 'On-demand SMS ticket deliveries' }
                    ].map((integ) => {
                      const Logo = integ.logo;
                      return (
                        <div key={integ.name} className="flex items-center gap-3 p-2 bg-slate-50/50 dark:bg-slate-950/40 border border-slate-150/80 dark:border-slate-800/50 rounded-xl hover:border-accent-purple/30 transition-colors">
                          <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center shrink-0 shadow-sm">
                            <Logo />
                          </div>
                          <div className="min-w-0">
                            <div className="text-slate-800 dark:text-slate-200">{integ.name}</div>
                            <div className="text-[9px] text-slate-550 dark:text-slate-400 truncate">{integ.desc}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          11. BUSINESS OUTCOMES — Premium editorial panels
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="pt-16 lg:pt-20 bg-gradient-to-b from-[#faf9ff] to-white dark:from-[#030519] dark:to-[#020314]">
        <div className="max-w-[1400px] mx-auto px-4">
          <InView className="text-center mb-14 space-y-4">
            <Label icon={Star}>Business Outcomes</Label>
            <h2 className="font-display font-bold text-slate-900 dark:text-white">
              Measurable Impact from Day One
            </h2>
          </InView>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <OutcomePanel
              number="01"
              heading="Faster Registration"
              body="Reduce form friction and manual processing overhead. Attendees complete registration in under 3 minutes — approval workflows run automatically."
              proof="Avg. 60% reduction in registration processing time"
            />
            <OutcomePanel
              number="02"
              heading="Higher Ticket Conversion"
              body="Simplify checkout, offer flexible payment options, and automatically recover failed payments — turning more interest into confirmed tickets."
              proof="73% average registration-to-ticket conversion rate"
            />
            <OutcomePanel
              number="03"
              heading="Complete Attendee Control"
              body="Manage approval, payment, ticketing, waitlists, and event entry from one platform — with real-time visibility into every attendee's status."
              proof="1 platform replaces 4+ disconnected tools"
            />
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          12. FINAL CTA — Global component
      ══════════════════════════════════════════════════════════════════════ */}
      <FinalCTA />

    </main>
  );
}
