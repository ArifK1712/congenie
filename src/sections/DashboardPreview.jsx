'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Layers, 
  UserCheck, 
  DollarSign, 
  Calendar, 
  BarChart3, 
  Smartphone, 
  Activity, 
  Sparkles, 
  TrendingUp, 
  Users, 
  ArrowUpRight, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  ChevronRight,
  MapPin,
  QrCode
} from 'lucide-react';

const rolesData = [
  {
    id: 'admin',
    label: 'Admin Dashboard',
    sublabel: 'Platform Control',
    icon: Shield,
    accent: '#7C3AED',
    url: 'console://congenie.com/workspace/admin',
    colorClass: 'text-violet-500 border-violet-500/20 bg-violet-500/5 hover:border-violet-500/30',
    activeColorClass: 'border-violet-500 bg-violet-500/10 text-violet-600 shadow-violet-500/10',
    kpis: [
      { label: 'Total Registrations', value: '12,450', change: '94% of target', icon: Users },
      { label: 'Checked-in Attendees', value: '9,820', change: 'Live synced', icon: Activity },
      { label: 'Ticket Revenue', value: '$284,000', change: '+18% vs last event', icon: TrendingUp },
      { label: 'Upcoming Sessions', value: '48', change: 'Starting today', icon: Calendar }
    ],
    chartTitle: 'Registration Trends (Daily Signups)',
    chartType: 'bars',
    chartData: [80, 120, 160, 210, 190, 250, 290, 340, 380],
    activities: [
      { text: "New registration: Dr. Fatima Al-Rashid (VIP Delegate)", time: '1m ago', status: 'success' },
      { text: "Accommodation booking confirmed — 42 rooms, Hilton Block", time: '15m ago', status: 'success' },
      { text: "Pending approval: 8 group registrations from TechCorp", time: '40m ago', status: 'warning' }
    ],
    aiInsight: "Registration pace is 18% above target. AI predicts full capacity by Day 2 morning — consider opening a waitlist."
  },
  {
    id: 'organizer',
    label: 'Organizer',
    sublabel: 'Event Operations',
    icon: Layers,
    accent: '#7C3AED', // Violet
    url: 'console://congenie.com/workspace/organizer',
    colorClass: 'text-violet-500 border-violet-500/20 bg-violet-500/5 hover:border-violet-500/30',
    activeColorClass: 'border-violet-500 bg-violet-500/10 text-violet-600 shadow-violet-500/10',
    kpis: [
      { label: 'Total Registrations', value: '3,420', change: '85% of target', icon: Users },
      { label: 'Confirmed Speakers', value: '48 / 50', change: '2 pending verification', icon: Sparkles },
      { label: 'Active Sponsor Booths', value: '24', change: 'Tier 1 & 2 filled', icon: Layers },
      { label: 'Event Readiness Score', value: '92%', change: 'Highly Optimized', icon: CheckCircle2 }
    ],
    chartTitle: 'Registration Funnel Trend (Daily Signups)',
    chartType: 'bars',
    chartData: [110, 140, 180, 220, 190, 240, 270, 310, 340],
    activities: [
      { text: "Speaker bio collected: 'Dr. Sarah Jenkins'", time: '5m ago', status: 'success' },
      { text: "Exhibitor floor allocation approved for Hall A", time: '1h ago', status: 'success' },
      { text: "Pending speaker conflict identified on Day 2", time: '2h ago', status: 'warning' }
    ],
    aiInsight: "Speaker conflicts on Day 2 detected. AI suggests swapping 'Future Tech' and 'AI Governance' rooms."
  },
  {
    id: 'registration',
    label: 'Registration',
    sublabel: 'Attendee Management',
    icon: UserCheck,
    accent: '#7C3AED', // Violet
    url: 'console://congenie.com/workspace/registration',
    colorClass: 'text-violet-500 border-violet-500/20 bg-violet-500/5 hover:border-violet-500/30',
    activeColorClass: 'border-violet-500 bg-violet-500/10 text-violet-600 shadow-violet-500/10',
    kpis: [
      { label: 'Total Attendees', value: '1,250', change: '+14% from last week', icon: Users },
      { label: 'Approved Tickets', value: '1,180', change: 'Instant sync', icon: CheckCircle2 },
      { label: 'Pending Verification', value: '70', change: 'Needs organizer approval', icon: Clock },
      { label: 'Duplicate Records', value: '4 flagged', change: 'Flagged by AI', icon: AlertCircle }
    ],
    chartTitle: 'Ticket Sales Distribution by Tier',
    chartType: 'lines',
    chartData: [15, 30, 28, 45, 60, 58, 80, 92, 118],
    activities: [
      { text: "Marcus Sterling registered (Apex Fintech, Delegate)", time: '1m ago', status: 'success' },
      { text: "Dr. Evelyn Harris approved automatically (Speaker)", time: '10m ago', status: 'success' },
      { text: "Duplicate profile detected for 'Evelyn Harris'", time: '12m ago', status: 'warning' }
    ],
    aiInsight: "AI duplicate detector successfully merged 3 identical registration profiles from same organization."
  },
  {
    id: 'finance',
    label: 'Finance',
    sublabel: 'Revenue & Payments',
    icon: DollarSign,
    accent: '#7C3AED', // Violet
    url: 'console://congenie.com/workspace/finance',
    colorClass: 'text-violet-500 border-violet-500/20 bg-violet-500/5 hover:border-violet-500/30',
    activeColorClass: 'border-violet-500 bg-violet-500/10 text-violet-600 shadow-violet-500/10',
    kpis: [
      { label: 'Revenue Collected', value: '$342,500', change: '108% of target', icon: DollarSign },
      { label: 'Outstanding Payments', value: '$12,400', change: 'Invoice reminders sent', icon: Clock },
      { label: 'Sponsorship Billings', value: '$85,000', change: 'Fully collected', icon: TrendingUp },
      { label: 'Refund Rate', value: '0.24%', change: 'Optimal threshold', icon: CheckCircle2 }
    ],
    chartTitle: 'Billing Revenue Growth Trends (Daily USD)',
    chartType: 'bars',
    chartData: [45, 90, 120, 160, 140, 210, 250, 310, 342],
    activities: [
      { text: "Sponsorship tier payment cleared (BioLabs, $25,000)", time: '3m ago', status: 'success' },
      { text: "Direct wire transfer verified for Apex Fintech", time: '25m ago', status: 'success' },
      { text: "Automated dunning warning sent to 12 overdue accounts", time: '2h ago', status: 'info' }
    ],
    aiInsight: "Predictive revenue suggests ticket sales will cross target by 14% prior to early-bird expiration."
  },
  {
    id: 'agenda',
    label: 'Agenda',
    sublabel: 'Program Planning',
    icon: Calendar,
    accent: '#7C3AED', // Violet
    url: 'console://congenie.com/workspace/agenda',
    colorClass: 'text-violet-500 border-violet-500/20 bg-violet-500/5 hover:border-violet-500/30',
    activeColorClass: 'border-violet-500 bg-violet-500/10 text-violet-600 shadow-violet-500/10',
    kpis: [
      { label: 'Total Sessions', value: '72', change: 'Multi-track timeline', icon: Calendar },
      { label: 'Confirmed Slots', value: '68', change: '4 open slots left', icon: CheckCircle2 },
      { label: 'Conflict Alerts', value: '0', change: 'Checked by scheduler', icon: Activity },
      { label: 'Available Rooms', value: '8', change: 'Capacity mapping verified', icon: Layers }
    ],
    chartTitle: 'Session Booking & Occupancy Metrics by Room',
    chartType: 'lines',
    chartData: [20, 42, 35, 50, 48, 65, 58, 62, 68],
    activities: [
      { text: "Session 'Future of B2B Matchmaking' allocated to Hall 2", time: '1m ago', status: 'success' },
      { text: "Speaker bio updated: 'Alice Fletcher'", time: '14m ago', status: 'success' },
      { text: "Room capacity alert resolved for Room 102", time: '1h ago', status: 'success' }
    ],
    aiInsight: "Session 'Quantum Computing Opening Keynote' is over-subscribed. AI suggests switching to Plenary Hall."
  },
  {
    id: 'analytics',
    label: 'Analytics',
    sublabel: 'Performance Insights',
    icon: BarChart3,
    accent: '#7C3AED', // Indigo
    url: 'console://congenie.com/workspace/analytics',
    colorClass: 'text-violet-500 border-violet-500/20 bg-violet-500/5 hover:border-violet-500/30',
    activeColorClass: 'border-violet-500 bg-violet-500/10 text-violet-600 shadow-violet-500/10',
    kpis: [
      { label: 'Engagement Rate', value: '78%', change: '+8% vs benchmark', icon: TrendingUp },
      { label: 'Session Attendance', value: '84%', change: 'Avg 340 attendees/session', icon: Users },
      { label: 'Avg Meeting Rating', value: '4.8 / 5', change: 'NPS Score: 72', icon: Sparkles },
      { label: 'Matchmaking Matches', value: '3,120', change: '+24% YoY growth', icon: Activity }
    ],
    chartTitle: 'Real-time Matchmaking Success & Pairing Curve',
    chartType: 'lines',
    chartData: [30, 48, 42, 65, 58, 80, 72, 85, 92],
    activities: [
      { text: "B2B meeting accepted: Amelia Chen & Marcus Sterling", time: '4s ago', status: 'success' },
      { text: "Audience sentiment analysis verified: 'Very Positive' (91%)", time: '10m ago', status: 'success' },
      { text: "Sponsor lead metrics exported successfully for Apex", time: '20m ago', status: 'success' }
    ],
    aiInsight: "Matchmaking satisfaction rating increased 14% after interest-based auto-weighting algorithm was applied."
  },
  {
    id: 'attendee',
    label: 'Attendee App',
    sublabel: 'Personal Event Journey',
    icon: Smartphone,
    accent: '#7C3AED', // Violet
    url: 'console://congenie.com/workspace/attendee',
    colorClass: 'text-violet-500 border-violet-500/20 bg-violet-500/5 hover:border-violet-500/30',
    activeColorClass: 'border-violet-500 bg-violet-500/10 text-violet-600 shadow-violet-500/10',
    kpis: [
      { label: 'Personal Schedule', value: '6 sessions', change: 'Synchronized to calendar', icon: Calendar },
      { label: 'Confirmed Meetings', value: '4 active', change: 'Table assignments set', icon: Users },
      { label: 'Matchmaking Partners', value: '28 found', change: 'Based on your profile interests', icon: Sparkles },
      { label: 'Unread Alerts', value: '2 new', change: 'Tap to view announcements', icon: Activity }
    ],
    chartTitle: 'Your Digital Entrance Badge & Next Actions',
    chartType: 'badge',
    chartData: [],
    activities: [
      { text: "Matchmaking meeting accepted: Marcus Sterling (Apex Fintech)", time: 'Just now', status: 'success' },
      { text: "Session starting in 10 mins: 'Quantum Keynote'", time: '10m ago', status: 'info' },
      { text: "Welcome alert: Setup your matchmaking preferences", time: '1h ago', status: 'info' }
    ],
    aiInsight: "Personal Concierge: AI found 3 new sponsors matching your interest in 'Fintech Scaling' in Hall B."
  }
];

export default function DashboardPreview() {
  const [activeTab, setActiveTab] = useState('admin');
  const activeRole = rolesData.find(r => r.id === activeTab) || rolesData[0];

  return (
    <section id="platform-explorer" className="py-20 lg:py-24 bg-gradient-to-b from-[#F7F9FD] via-[#F2F5FB] to-white transition-colors duration-300 relative overflow-hidden">
      
      {/* Background Decorative Glow Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/10 w-[500px] h-[500px] rounded-full bg-blue-400/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/10 w-[500px] h-[500px] rounded-full bg-purple-400/5 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(rgba(148,163,184,0.03)_1px,transparent_1px)] [background-size:2rem_2rem]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-accent-blue/30 bg-accent-blue/5 text-accent-blue text-xs font-semibold mb-4 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Role-Based Experience</span>
          </div>
          <h2 className="font-display text-primary">
            Explore ConGenie Through Every User's Workspace
          </h2>
          <p className="mt-4 text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Each role receives a tailored workspace based on their responsibilities — from registration management to financial reporting, agenda planning, and attendee engagement.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#platform-explorer"
              className="px-6 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 text-sm font-medium hover:border-accent-purple/40 hover:text-accent-purple transition-all duration-300 shadow-sm"
            >
              Explore Live Demo
            </a>
            <a
              href="/contact"
              className="px-6 py-3 rounded-xl bg-accent-purple text-white text-sm font-medium hover:bg-[#6c28e2] transition-all duration-300 shadow-lg shadow-accent-purple/25"
            >
              Book a Guided Demo
            </a>
          </div>
        </div>

        {/* Studio Workspace container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Role Navigator (Horizontal on mobile/tablet, vertical on desktop) */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 gap-3.5 no-scrollbar scroll-smooth w-full z-20">
            {rolesData.map((role) => {
              const RoleIcon = role.icon;
              const isActive = activeTab === role.id;
              
              return (
                <button
                  key={role.id}
                  onClick={() => setActiveTab(role.id)}
                  className={`flex items-center space-x-4 px-5 py-4 rounded-2xl border text-left transition-all duration-300 flex-shrink-0 lg:flex-shrink-1 group relative cursor-pointer ${
                    isActive
                      ? role.activeColorClass + ' bg-white border-l-4 shadow-xl translate-x-1 lg:translate-x-3'
                      : 'border-slate-200/60 bg-white/50 text-slate-500 hover:bg-white hover:border-slate-350'
                  }`}
                  style={{
                    borderColor: isActive ? role.accent : '',
                    borderLeftColor: isActive ? role.accent : ''
                  }}
                >
                  {/* Left Active Glow Accent */}
                  {isActive && (
                    <div 
                      className="absolute inset-y-3 left-0 w-1 rounded-full opacity-70"
                      style={{ backgroundColor: role.accent }}
                    />
                  )}

                  {/* Icon Wrapper */}
                  <div 
                    className="p-2.5 rounded-xl border transition-all duration-300"
                    style={{ 
                      backgroundColor: isActive ? `${role.accent}15` : 'rgba(148, 163, 184, 0.05)',
                      borderColor: isActive ? `${role.accent}30` : 'rgba(148, 163, 184, 0.15)',
                    }}
                  >
                    <RoleIcon 
                      className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" 
                      style={{ color: isActive ? role.accent : 'currentColor' }} 
                    />
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 min-w-[120px]">
                    <h6 className="font-display text-slate-800">
                      {role.label}
                    </h6>
                    <p className="text-xs text-slate-400 mt-0.5 uppercase tracking-wider">
                      {role.sublabel}
                    </p>
                  </div>

                  {/* Arrow Indicator */}
                  <div className="hidden lg:flex items-center text-slate-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                    <ChevronRight className="w-4 h-4" style={{ color: isActive ? role.accent : '' }} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT: Live Dashboard Showroom Workspace */}
          <div className="lg:col-span-8 relative w-full overflow-visible mt-2 lg:mt-0">
            
            {/* Dynamic Ambient Spotlight behind the workspace */}
            <div 
              className="absolute -top-16 -left-16 w-80 h-80 rounded-full blur-[100px] pointer-events-none opacity-20 transition-all duration-500"
              style={{ backgroundColor: activeRole.accent }}
            />
            
            {/* 1. Main Dashboard Window */}
            <div className="bg-white/80 border border-slate-200/60 rounded-3xl relative min-h-[580px] backdrop-blur-xl p-6 overflow-hidden">
              
              {/* Browser control bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-slate-200/50 gap-3">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-red-450" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="h-4 w-px bg-slate-200 mx-2" />
                  <span className="text-[10px] sm:text-xs text-slate-400 font-mono tracking-wide select-all bg-slate-100 px-3 py-1 rounded-md max-w-[280px] sm:max-w-none overflow-hidden text-ellipsis whitespace-nowrap">
                    {activeRole.url}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] text-slate-455 font-mono uppercase tracking-widest font-bold">LIVE CONSOLE</span>
                </div>
              </div>

              {/* Dynamic Interactive Showroom Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="space-y-6"
                >
                  {/* KPI Metric Cards Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {activeRole.kpis.map((kpi, idx) => {
                      const KpiIcon = kpi.icon;
                      return (
                        <div 
                          key={idx} 
                          className="bg-slate-100/60 border border-slate-200/40 p-4 rounded-2xl flex flex-col justify-between hover:scale-[1.01] transition-transform duration-300"
                        >
                          <div className="flex justify-between items-start">
                            <span className="text-xs text-slate-500 leading-tight">
                              {kpi.label}
                            </span>
                            <div 
                              className="p-1.5 rounded-lg border text-slate-600"
                              style={{ 
                                backgroundColor: `${activeRole.accent}12`,
                                borderColor: `${activeRole.accent}25`
                              }}
                            >
                              <KpiIcon className="w-3.5 h-3.5" style={{ color: activeRole.accent }} />
                            </div>
                          </div>
                          <div className="mt-3">
                            <h4 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight leading-none">
                              {kpi.value}
                            </h4>
                            <p className="text-[9px] text-slate-450 font-light mt-1 flex items-center gap-0.5">
                              <span style={{ color: activeRole.accent }}>{kpi.change}</span>
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Large Data Visualization & Sidebar Row */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
                    
                    {/* Main Chart Visualization */}
                    <div className="md:col-span-8 bg-slate-100/40 p-5 rounded-2xl border border-slate-200/40 flex flex-col justify-between min-h-[320px]">
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="text-xs sm:text-sm text-slate-800">
                          {activeRole.chartTitle}
                        </h4>
                        <span 
                          className="text-[9px] font-bold px-2 py-0.5 rounded-full border flex items-center gap-1 uppercase tracking-wider"
                          style={{ 
                            color: activeRole.accent,
                            borderColor: `${activeRole.accent}30`,
                            backgroundColor: `${activeRole.accent}08`
                          }}
                        >
                          <Activity className="w-2.5 h-2.5 animate-pulse" />
                          Optimal
                        </span>
                      </div>

                      {/* Attendee App Layout Mockup (Custom visual design instead of standard chart) */}
                      {activeRole.chartType === 'badge' ? (
                        <div className="flex flex-col sm:flex-row items-center gap-6 justify-center py-4">
                          
                          {/* Simulated Digital Entrance Badge */}
                          <div className="w-[180px] bg-gradient-to-br from-[#0c122e] to-[#040615] border border-slate-800 p-4 rounded-3xl shadow-xl text-center relative overflow-hidden flex-shrink-0">
                            {/* Accent lighting spot */}
                            <div className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-pink-500/10 blur-xl pointer-events-none" />
                            
                            <span className="text-[8px] font-bold text-pink-500 uppercase tracking-widest block mb-3">YOUR ENTRY PASS</span>
                            <div className="w-20 h-20 bg-white p-2.5 rounded-xl mx-auto mb-3 flex items-center justify-center border border-slate-800">
                              <QrCode className="w-full h-full text-slate-900" />
                            </div>
                            <h6 className="text-[11px] font-bold text-white tracking-wide">Marcus Sterling</h6>
                            <p className="text-[9px] text-slate-400 font-light mt-0.5">Fintech Innovator Session</p>
                            
                            <div className="mt-3.5 bg-slate-900/60 border border-slate-800 rounded-lg py-1 px-2 text-[8px] text-pink-400 font-medium inline-block uppercase tracking-wider">
                              Plenary Hall A
                            </div>
                          </div>

                          {/* App Interactive Notifications List */}
                          <div className="flex-1 w-full space-y-3">
                            <div className="bg-slate-100/80 border border-slate-200/50 p-3 rounded-xl">
                              <span className="text-[8px] text-pink-500 font-extrabold uppercase tracking-widest block mb-0.5">UPCOMING MEETING</span>
                              <h6 className="text-xs font-bold text-slate-800 leading-snug">Meet Marcus Sterling (Apex)</h6>
                              <p className="text-[9px] text-slate-400 mt-1 font-light flex items-center gap-1">
                                <MapPin className="w-3 h-3 text-slate-400" /> Table B3 • 03:15 PM
                              </p>
                            </div>
                            <div className="bg-slate-100/80 border border-slate-200/50 p-3 rounded-xl">
                              <span className="text-[8px] text-slate-455 font-semibold uppercase tracking-widest block mb-0.5">LIVE ANNOUNCEMENT</span>
                              <h6 className="text-xs font-bold text-slate-800 leading-snug">Opening keynote starting in Plenary</h6>
                              <p className="text-[9px] text-slate-400 mt-1 font-light">Seats allocation will close in 5 mins.</p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        /* SVG Chart Builder */
                        <div className="relative w-full h-[230px] overflow-hidden mt-2 flex items-end justify-center pb-6">
                          <svg className="absolute inset-0 w-full h-full overflow-hidden" preserveAspectRatio="none" viewBox="0 0 400 120">
                            <defs>
                              <linearGradient id={`chart-grad-${activeRole.id}`} x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor={activeRole.accent} stopOpacity="0.8" />
                                <stop offset="100%" stopColor={`${activeRole.accent}33`} stopOpacity="0.2" />
                              </linearGradient>
                              <linearGradient id={`area-grad-${activeRole.id}`} x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor={activeRole.accent} stopOpacity="0.25" />
                                <stop offset="100%" stopColor="transparent" />
                              </linearGradient>
                            </defs>
                            
                            {/* Baseline — rendered first so bars always paint on top */}
                            <line x1="0" y1="107" x2="400" y2="107" stroke="currentColor" className="text-slate-200" strokeWidth="1" />

                            {activeRole.chartType === 'lines' ? (() => {
                              const maxVal = Math.max(...activeRole.chartData, 1);
                              const points = activeRole.chartData.map((val, idx) => {
                                const x = (idx / (activeRole.chartData.length - 1)) * 400;
                                const y = 107 - (val / maxVal) * 88;
                                return { x, y };
                              });
                              const pathD = points.map((p, idx) => (idx === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`)).join(' ');
                              const areaD = `${pathD} L 400 120 L 0 120 Z`;
                              
                              return (
                                <>
                                  {/* Stroke Path */}
                                  <motion.path
                                    d={pathD}
                                    fill="none"
                                    stroke={activeRole.accent}
                                    strokeWidth="3.5"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1.2, ease: 'easeOut' }}
                                  />
                                  {/* Area Fill */}
                                  <path
                                    d={areaD}
                                    fill={`url(#area-grad-${activeRole.id})`}
                                  />
                                </>
                              );
                            })() : (() => {
                              const CHART_BOTTOM = 105; // bars sit above the baseline with a clear gap
                              const MAX_BAR_H  = 88;    // maximum usable height within viewBox
                              const MIN_BAR_H  = 4;     // smallest bar stays visible
                              const maxVal = Math.max(...activeRole.chartData, 1);
                              return activeRole.chartData.map((val, idx) => {
                                const barWidth = 24;
                                const spacing = 16;
                                const xPos = idx * (barWidth + spacing) + 20;
                                const barHeight = Math.max(MIN_BAR_H, (val / maxVal) * MAX_BAR_H);
                                return (
                                  <motion.rect
                                    key={idx}
                                    x={xPos}
                                    y={CHART_BOTTOM - barHeight}
                                    width={barWidth}
                                    height={barHeight}
                                    rx="5"
                                    fill={`url(#chart-grad-${activeRole.id})`}
                                    initial={{ height: 0, y: CHART_BOTTOM }}
                                    animate={{ height: barHeight, y: CHART_BOTTOM - barHeight }}
                                    transition={{ duration: 0.8, delay: idx * 0.05, ease: 'easeOut' }}
                                  />
                                );
                              });
                            })()}
                          </svg>
                          
                          {/* Grid value guides */}
                          <div className="absolute inset-y-0 left-0 flex flex-col justify-between text-[8px] text-slate-400 font-mono pointer-events-none select-none">
                            <span>Peak</span>
                            <span>Mid</span>
                            <span>Base</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Secondary Insights & Activities List Panel */}
                    <div className="md:col-span-4 bg-slate-100/40 p-5 rounded-2xl border border-slate-200/40 flex flex-col justify-between min-h-[220px]">
                      <div>
                        <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3.5 flex items-center gap-1.5">
                          <Activity className="w-3.5 h-3.5 text-slate-455" />
                          Recent Activities
                        </h5>
                        <div className="space-y-3.5">
                          {activeRole.activities.map((act, index) => (
                            <div key={index} className="flex items-start gap-2.5">
                              <div 
                                className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                                style={{ 
                                  backgroundColor: act.status === 'warning' ? '#F59E0B' : activeRole.accent 
                                }}
                              />
                              <div className="flex-1 min-w-0">
                                <p className="text-[11px] text-slate-700 font-light leading-snug break-words">
                                  {act.text}
                                </p>
                                <span className="text-[9px] text-slate-400 font-light mt-0.5 block">
                                  {act.time}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-3.5 border-t border-slate-200/50">
                        <button className="text-[10px] font-bold text-slate-500 hover:text-slate-800 flex items-center gap-1 group transition-colors">
                          View Activity Log
                          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </button>
                      </div>
                    </div>

                  </div>

                  {/* Bottom AI System Insight Banner */}
                  <div 
                    className="p-4 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
                    style={{ 
                      backgroundColor: `${activeRole.accent}06`,
                      borderColor: `${activeRole.accent}20`
                    }}
                  >
                    <div className="flex items-center gap-2.5">
                      <div 
                        className="p-2 rounded-xl border flex items-center justify-center flex-shrink-0"
                        style={{ 
                          backgroundColor: `${activeRole.accent}12`,
                          borderColor: `${activeRole.accent}25`
                        }}
                      >
                        <Sparkles className="w-4 h-4" style={{ color: activeRole.accent }} />
                      </div>
                      <div>
                        <span className="font-mono font-bold tracking-widest uppercase block" style={{ color: activeRole.accent }}>
                          CONGENIE ENGINE • AUTOMATION METRICS
                        </span>
                        <p className="text-sm text-slate-650 font-light mt-0.5 leading-snug">
                          {activeRole.aiInsight}
                        </p>
                      </div>
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
