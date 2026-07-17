'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { 
  UserPlus, 
  Ticket, 
  CalendarRange, 
  Mic, 
  Award, 
  Users, 
  Sparkles, 
  QrCode, 
  Mail, 
  Hotel, 
  FileBadge, 
  BarChart3,
  Check,
  ArrowRight
} from 'lucide-react';

export default function Modules() {
  const [activeIdx, setActiveIdx] = useState(0);
  const consoleRef = useRef(null);

  const modules = [
    {
      number: '01',
      title: 'Registration Management',
      icon: UserPlus,
      shortDesc: 'Custom drag-and-drop forms & attendee approval workflows.',
      bullets: [
        'Custom drag-and-drop fields',
        'Multiple attendee categories',
        'Advanced approval routing'
      ],
      preview: (
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
            <span className="text-xs font-bold text-slate-550 uppercase tracking-widest font-display">Form Builder Sandbox</span>
            <span className="text-[10px] text-green-600 bg-green-55 px-2 py-0.5 rounded border border-green-200">Live Preview</span>
          </div>
          <div className="space-y-3">
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-2">
              <span className="block text-[10px] text-slate-500">Drag Field: VIP Registration Form</span>
              <div className="h-9 border border-dashed border-slate-300 rounded-lg flex items-center justify-between px-3 text-xs text-slate-655 bg-white">
                <span>[+] Add Full Name Field</span>
                <span className="text-[10px] text-slate-400">Required</span>
              </div>
              <div className="h-9 border border-slate-200 rounded-lg flex items-center justify-between px-3 text-xs text-slate-800 bg-white font-medium shadow-sm">
                <span>Ticket Category: Executive VIP</span>
                <span className="text-[10px] text-accent-purple font-bold">Auto-Routed</span>
              </div>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-2">
              <span className="block text-[10px] text-slate-500">Approval Queue</span>
              <div className="flex items-center justify-between text-xs border-b border-slate-200/60 pb-2">
                <span className="text-slate-800 font-medium">David Miller (Google)</span>
                <span className="text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded text-[9px] font-semibold">Pending approval</span>
              </div>
              <div className="flex items-center justify-between text-xs pt-1">
                <span className="text-slate-800 font-medium">Elena Rostova (Meta)</span>
                <span className="text-green-700 bg-green-55 border border-green-200 px-2 py-0.5 rounded text-[9px] font-semibold">Approved</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      number: '02',
      title: 'Ticketing & Payments',
      icon: Ticket,
      shortDesc: 'Process payment tiers and discounts globally.',
      bullets: [
        'Multi-currency processing',
        'Dynamic promo codes ledger',
        'Automatic VAT invoicing'
      ],
      preview: (
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
            <span className="text-xs font-bold text-slate-555 uppercase tracking-widest font-display">Ticketing Ledger</span>
            <span className="text-[10px] text-accent-purple bg-accent-purple/5 px-2 py-0.5 rounded border border-accent-purple/15 font-semibold">Stripe Active</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              <span className="block text-[9px] text-slate-550 uppercase mb-1">Gross Sales</span>
              <span className="text-lg font-black text-slate-900 font-mono">$142,500.00</span>
              <span className="block text-[9px] text-green-600 mt-1 font-semibold">↑ 12% vs last week</span>
            </div>
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              <span className="block text-[9px] text-slate-550 uppercase mb-1">Redemptions</span>
              <span className="text-lg font-black text-slate-900 font-mono">412 Coupons</span>
              <span className="block text-[9px] text-slate-500 mt-1 font-sans">Code: SUMMER26</span>
            </div>
          </div>
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 flex justify-between items-center text-xs">
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-slate-600">Transaction: #TXN-9011</span>
            </div>
            <span className="font-bold text-slate-900 font-mono">$1,250.00 Paid</span>
          </div>
        </div>
      )
    },
    {
      number: '03',
      title: 'Agenda Management',
      icon: CalendarRange,
      shortDesc: 'Multi-day agenda timelines with AI track suggestions.',
      bullets: [
        'Drag-and-drop track builder',
        'Interactive session scheduling',
        'Role maps (moderator, panel)'
      ],
      preview: (
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
            <span className="text-xs font-bold text-slate-555 uppercase tracking-widest font-display">Multi-Track Calendar</span>
            <span className="text-[10px] text-accent-cyan bg-accent-cyan/10 px-2 py-0.5 rounded border border-accent-cyan/20 font-semibold">AI Scheduled</span>
          </div>
          <div className="space-y-2">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-555 font-mono">09:00 AM - 10:30 AM</span>
                <span className="text-accent-purple font-semibold">Track Alpha</span>
              </div>
              <span className="block text-xs font-bold text-slate-900">Keynote: Future of Artificial Intelligence</span>
              <span className="text-[10px] text-slate-450 block mt-1">Moderator: Dr. Aris Thorne</span>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-555 font-mono">11:00 AM - 12:00 PM</span>
                <span className="text-accent-cyan font-semibold">Track Beta</span>
              </div>
              <span className="block text-xs font-bold text-slate-900">SaaS Scaling Strategies in Web3</span>
              <span className="text-[10px] text-slate-450 block mt-1">Moderator: Sarah Jenkins</span>
            </div>
          </div>
        </div>
      )
    },
    {
      number: '04',
      title: 'Speaker Management',
      icon: Mic,
      shortDesc: 'Collect bios, headshots, and slide approvals automatically.',
      bullets: [
        'Automated reminder loops',
        'File collection validation',
        'Speaker profiles directory'
      ],
      preview: (
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
            <span className="text-xs font-bold text-slate-555 uppercase tracking-widest font-display">Speaker Profiles</span>
            <span className="text-[10px] text-slate-600 bg-slate-105 border border-slate-200 px-2 py-0.5 rounded">65% Uploaded</span>
          </div>
          <div className="space-y-2.5">
            <div className="bg-slate-55 p-3 rounded-xl border border-slate-200 flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-xs font-bold text-slate-900 block">Dr. Sarah Jenkins</span>
                <span className="text-[10px] text-slate-500 block">Bio, Photo, & Presentation slides</span>
              </div>
              <span className="text-green-700 bg-green-55 border border-green-200 px-2.5 py-0.5 rounded text-[10px] font-bold">Verified</span>
            </div>
            <div className="bg-slate-55 p-3 rounded-xl border border-slate-200 flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-xs font-bold text-slate-900 block">Marcus Aurel (OpenAI)</span>
                <span className="text-[10px] text-slate-500 block">Presentation file missing</span>
              </div>
              <button className="text-xs font-bold text-accent-purple bg-[#843df5]/5 border border-accent-purple/20 px-2.5 py-1 rounded hover:bg-accent-purple hover:text-white transition-all">Send Alert</button>
            </div>
          </div>
        </div>
      )
    },
    {
      number: '05',
      title: 'Sponsor & Exhibitor',
      icon: Award,
      shortDesc: 'Map 2D booth floors and track sponsor lead returns.',
      bullets: [
        'Interactive booth allocator',
        'Logo placement coordinates',
        'Lead scanning logins'
      ],
      preview: (
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
            <span className="text-xs font-bold text-slate-555 uppercase tracking-widest font-display">Sponsorship Floor Plan</span>
            <span className="text-[10px] text-accent-cyan bg-accent-cyan/15 px-2 py-0.5 rounded border border-accent-cyan/25 font-semibold">2D Grid Live</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-[#843df5]/5 border border-accent-purple/25 p-3 rounded-xl text-center">
              <span className="block text-[10px] text-accent-purple font-bold">Booth A1</span>
              <span className="text-[9px] text-slate-500 block mt-1">Google</span>
            </div>
            <div className="bg-[#843df5]/5 border border-accent-purple/25 p-3 rounded-xl text-center">
              <span className="block text-[10px] text-accent-purple font-bold">Booth A2</span>
              <span className="text-[9px] text-slate-500 block mt-1">Meta</span>
            </div>
            <div className="bg-white border border-dashed border-slate-300 p-3 rounded-xl text-center flex flex-col justify-center items-center shadow-sm">
              <span className="block text-[9px] text-slate-400 font-bold">Booth A3</span>
              <span className="text-[8px] text-accent-cyan font-bold block mt-1 hover:underline cursor-pointer">+ Allocate</span>
            </div>
          </div>
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 flex justify-between items-center text-xs">
            <span className="text-slate-550">Total Booth Sales</span>
            <span className="font-bold text-slate-900 font-mono">18 / 20 Allocated</span>
          </div>
        </div>
      )
    },
    {
      number: '06',
      title: 'Delegate Management',
      icon: Users,
      shortDesc: 'Provide profiles for transport tracking and custom preferences.',
      bullets: [
        'Attendee custom portals',
        'Dietary preference checklist',
        'Travel visas validation docs'
      ],
      preview: (
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
            <span className="text-xs font-bold text-slate-555 uppercase tracking-widest font-display">Delegate Files</span>
            <span className="text-[10px] text-slate-655 bg-slate-105 border border-slate-200 px-2 py-0.5 rounded">Action Required</span>
          </div>
          <div className="space-y-3">
            <div className="bg-slate-55 p-3.5 rounded-xl border border-slate-200 space-y-2">
              <span className="text-xs font-bold text-slate-900 block">Travel Verification: David Thorne</span>
              <div className="flex items-center justify-between text-xs bg-white p-2 rounded border border-slate-200 shadow-sm">
                <span className="text-slate-600">Visa_Document.pdf</span>
                <span className="text-accent-cyan font-bold cursor-pointer hover:underline">View File</span>
              </div>
              <div className="flex space-x-2 pt-1">
                <button className="text-[10px] font-bold text-white bg-green-600 hover:bg-green-700 px-3 py-1 rounded transition-colors shadow-sm">Approve</button>
                <button className="text-[10px] font-bold text-white bg-red-600 hover:bg-red-700 px-3 py-1 rounded transition-colors shadow-sm">Reject</button>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      number: '07',
      title: 'AI Matchmaking',
      icon: Sparkles,
      shortDesc: 'Drive validated B2B connections based on custom interests.',
      bullets: [
        'Interest pairing algorithm',
        'Auto calendar synchronizer',
        'Meeting pipeline trackers'
      ],
      preview: (
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
            <span className="text-xs font-bold text-slate-555 uppercase tracking-widest font-display">AI Connection Graph</span>
            <span className="text-[10px] text-accent-purple bg-[#843df5]/5 px-2 py-0.5 rounded border border-accent-purple/15 font-semibold">98% Match Score</span>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="text-xs font-bold text-slate-900 block">Dr. Sarah Jenkins</span>
                <span className="text-[9px] text-slate-500 uppercase">Interests: Machine Learning, SaaS</span>
              </div>
              <div className="w-6 h-[1px] bg-slate-300" />
              <div className="space-y-0.5 text-right">
                <span className="text-xs font-bold text-slate-900 block">Marcus Chen</span>
                <span className="text-[9px] text-slate-500 uppercase">Interests: AI Models, Scaling</span>
              </div>
            </div>
            <div className="bg-white p-2.5 rounded border border-slate-200 flex items-center justify-between text-xs shadow-sm">
              <span className="text-slate-600">Meeting slot scheduled</span>
              <span className="font-bold text-accent-purple">July 10, 11:30 AM</span>
            </div>
          </div>
        </div>
      )
    },
    {
      number: '08',
      title: 'Onsite Event Operations',
      icon: QrCode,
      shortDesc: 'Sub-2-second QR badge printing and entry gate scanning.',
      bullets: [
        'QR kiosk dashboard prints',
        'Wireless thermal print drivers',
        'Live session entry scanner'
      ],
      preview: (
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
            <span className="text-xs font-bold text-slate-555 uppercase tracking-widest font-display">Check-in Kiosk Node</span>
            <span className="text-[10px] text-green-700 bg-green-55 px-2 py-0.5 rounded border border-green-200">Online</span>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center justify-between">
            <div className="space-y-1">
              <span className="block text-[9px] text-slate-550">Last Checked-In</span>
              <span className="text-xs font-bold text-slate-900 block">Elena Rostova</span>
              <span className="text-[8px] text-slate-600 bg-white px-1.5 py-0.5 rounded border border-slate-200 shadow-sm">Check-in: 1.6s</span>
            </div>
            <QrCode className="w-12 h-12 text-slate-700" />
          </div>
          <div className="grid grid-cols-2 gap-3 text-center text-xs">
            <div className="bg-[#f8fafc] p-3 rounded-xl border border-slate-200">
              <span className="block text-[9px] text-slate-550 uppercase mb-1">Badge Count</span>
              <span className="text-sm font-bold text-slate-900">2,150 PDFs</span>
            </div>
            <div className="bg-[#f8fafc] p-3 rounded-xl border border-slate-200">
              <span className="block text-[9px] text-slate-550 uppercase mb-1">Print Queue</span>
              <span className="text-sm font-bold text-green-600 font-semibold">0 Pending</span>
            </div>
          </div>
        </div>
      )
    },
    {
      number: '09',
      title: 'Email & Communications',
      icon: Mail,
      shortDesc: 'Design template emails and schedule SMS/WhatsApp updates.',
      bullets: [
        'Visual drag-drop editor',
        'Dynamic merge tags codes',
        'Click, open, bounce metrics'
      ],
      preview: (
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
            <span className="text-xs font-bold text-slate-555 uppercase tracking-widest font-display">Campaign Delivery Logs</span>
            <span className="text-[10px] text-accent-cyan bg-accent-cyan/10 px-2 py-0.5 rounded border border-accent-cyan/20">Sent</span>
          </div>
          <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-800 font-semibold">Campaign: Registration Confirmation</span>
              <span className="text-slate-500 font-mono">14:02 PM</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-xs pt-1.5 border-t border-slate-200/80">
              <div>
                <span className="block text-[8px] text-slate-555 uppercase">Delivered</span>
                <span className="text-xs font-bold text-slate-900 font-mono">99.8%</span>
              </div>
              <div>
                <span className="block text-[8px] text-slate-555 uppercase">Open Rate</span>
                <span className="text-xs font-bold text-[#843df5] font-mono">76.4%</span>
              </div>
              <div>
                <span className="block text-[8px] text-slate-555 uppercase">Click Rate</span>
                <span className="text-xs font-bold text-accent-cyan font-mono">34.2%</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      number: '10',
      title: 'Accommodation & Travel',
      icon: Hotel,
      shortDesc: 'Manage rooming allocations and flight landing records.',
      bullets: [
        'Hotel block reservation log',
        'Airport transfer sheet maps',
        'Rooming list auto generator'
      ],
      preview: (
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
            <span className="text-xs font-bold text-slate-555 uppercase tracking-widest font-display">Travel & Hotel Matrix</span>
            <span className="text-[10px] text-accent-cyan bg-accent-cyan/15 px-2 py-0.5 rounded border border-accent-cyan/25 font-semibold">Active</span>
          </div>
          <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-800 font-semibold">Hotel block: Hilton Grand</span>
              <span className="text-accent-purple font-bold">112 Rooms Reserved</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-800 font-semibold">Hotel block: Hyatt Regency</span>
              <span className="text-accent-cyan font-bold">90 Rooms Reserved</span>
            </div>
            <div className="bg-white p-2.5 rounded border border-slate-200 flex items-center justify-between text-xs text-slate-600 shadow-sm">
              <span>Airport Shuttles Scheduled</span>
              <span className="font-bold text-slate-900 font-mono">14 Dispatches</span>
            </div>
          </div>
        </div>
      )
    },
    {
      number: '11',
      title: 'Certificates Management',
      icon: FileBadge,
      shortDesc: 'Vector canvas certificate builder with attendance dispatch tags.',
      bullets: [
        'Automated completion check',
        'Vector coordinates placements',
        'QR verification validation'
      ],
      preview: (
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
            <span className="text-xs font-bold text-slate-555 uppercase tracking-widest font-display">Certificate Canvas</span>
            <span className="text-[10px] text-slate-500 bg-slate-105 border border-slate-200 px-2 py-0.5 rounded">PDF Vector Canvas</span>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center relative overflow-hidden">
            <div className="absolute top-2 right-2">
              <QrCode className="w-8 h-8 text-slate-400" />
            </div>
            <span className="text-[8px] text-slate-555 block uppercase tracking-widest">Certificate of Completion</span>
            <h4 className="text-sm font-serif text-accent-purple my-2">Dr. Sarah Jenkins</h4>
            <p className="text-[8px] text-slate-500 max-w-xs mx-auto leading-relaxed">
              For active participation and completion of agenda courses at ConGenie Future AI Summit 2026.
            </p>
          </div>
        </div>
      )
    },
    {
      number: '12',
      title: 'Reports & Analytics',
      icon: BarChart3,
      shortDesc: 'Executive financial tables, ROI counters, and data sheets.',
      bullets: [
        'Modular dashboard charts',
        'Sponsor lead ledger graphs',
        'One-click PDF/Excel outputs'
      ],
      preview: (
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200/85 pb-3">
            <span className="text-xs font-bold text-slate-555 uppercase tracking-widest font-display">Analytics Console</span>
            <span className="text-[10px] text-[#843df5] bg-[#843df5]/5 px-2 py-0.5 rounded border border-[#843df5]/15 font-semibold">Financials</span>
          </div>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
              <span className="block text-[9px] text-slate-500 uppercase mb-1">Average Attendee Sentiment</span>
              <span className="text-sm font-bold text-slate-900 font-mono">4.8 / 5.0</span>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
              <span className="block text-[9px] text-slate-500 uppercase mb-1">Sponsor Leads Logged</span>
              <span className="text-sm font-bold text-green-600 font-mono">14,250 Scans</span>
            </div>
          </div>
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 flex justify-between items-center text-xs">
            <span className="text-slate-555">Final ROI Factor</span>
            <span className="font-bold text-slate-900 font-mono">5.8x Average Return</span>
          </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    // Re-bind coordinate animations when active tab shifts
    gsap.fromTo(consoleRef.current, 
      { opacity: 0, scale: 0.98, y: 10 },
      { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: 'power2.out' }
    );
  }, [activeIdx]);

  const leftModules = modules.slice(0, 6);
  const rightModules = modules.slice(6, 12);

  return (
    <section id="features" className="py-28 bg-slate-50 transition-colors duration-300 w-full overflow-hidden relative">
      {/* Background glowing effects */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-accent-purple/5 rounded-full blur-[150px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Grid lines floor overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.035)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-accent-purple/35 bg-accent-purple/5 text-accent-purple text-xs font-semibold mb-4 shadow-sm shadow-accent-purple/5">
            <Sparkles className="w-3.5 h-3.5 text-accent-purple" />
            <span>Platform Modules</span>
          </div>
          <h2 className="font-display text-primary">
            Feature-Rich Modules for Seamless Coordination
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-555 leading-relaxed max-w-2xl mx-auto">
            A complete event technology stack under one roof. Hover or click a module to activate its live simulated dashboard preview in the central Command Center.
          </p>
        </div>

        {/* Mobile/Tablet Tab Selector (Horizontal Scroll) */}
        <div className="lg:hidden flex space-x-3 overflow-x-auto pb-4 mb-8 no-scrollbar px-4 -mx-4">
          {modules.map((mod, idx) => {
            const IconComp = mod.icon;
            const isActive = activeIdx === idx;
            return (
              <button
                key={`mob-${mod.title}`}
                onClick={() => setActiveIdx(idx)}
                className={`flex-shrink-0 flex items-center space-x-2 px-4 py-2.5 rounded-full border text-xs font-bold transition-all ${
                  isActive 
                    ? 'bg-accent-purple text-white border-accent-purple shadow-md' 
                    : 'bg-white border-slate-200 text-slate-655'
                }`}
              >
                <IconComp className="w-3.5 h-3.5" />
                <span>{mod.title}</span>
              </button>
            );
          })}
        </div>

        {/* 3-Column AI Command Center Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Modules 01 to 06 */}
          <div className="hidden lg:flex flex-col space-y-4 lg:col-span-3">
            {leftModules.map((mod, idx) => {
              const IconComp = mod.icon;
              const isActive = activeIdx === idx;
              return (
                <button
                  key={mod.title}
                  onClick={() => setActiveIdx(idx)}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center space-x-3.5 relative group ${
                    isActive 
                      ? 'bg-white border-accent-purple shadow-lg shadow-accent-purple/5' 
                      : 'bg-white/60 border-slate-200/80 text-slate-655 hover:bg-white hover:border-slate-300 shadow-sm'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl border transition-all duration-300 ${
                    isActive 
                      ? 'border-accent-purple/20 bg-accent-purple/10 text-accent-purple' 
                      : 'border-slate-200 bg-slate-50 text-slate-500 group-hover:text-slate-700'
                  }`}>
                    <IconComp className="w-4.5 h-4.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block text-xs font-bold text-slate-450 font-mono tracking-wider">
                      MODULE {mod.number}
                    </span>
                    <span className="block text-sm font-extrabold tracking-tight text-primary mt-0.5">
                      {mod.title}
                    </span>
                  </div>
                  <div className="absolute right-[-3rem] top-1/2 -translate-y-1/2 w-12 h-[2px] pointer-events-none hidden lg:block overflow-visible">
                    <div className={`h-[1px] w-full transition-all duration-500 ${
                      isActive ? 'bg-gradient-to-r from-accent-purple to-accent-blue shadow-neon-purple' : 'bg-slate-200/50'
                    }`} />
                    {isActive && (
                      <div className="absolute w-1.5 h-1.5 rounded-full bg-accent-purple -translate-y-[3px] animate-[flow-right_1.5s_linear_infinite]" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Center Column: High-Fidelity Command Center Sandbox Console */}
          <div className="col-span-1 lg:col-span-6 flex flex-col justify-center relative">
            {/* Ambient glow behind console */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-purple/10 to-accent-cyan/10 blur-3xl -z-10 rounded-[32px] pointer-events-none" />

            <div 
              ref={consoleRef}
              className="bg-white/80 border border-slate-200/80 rounded-[32px] p-6 sm:p-8 shadow-2xl relative overflow-hidden backdrop-blur-md hover:border-accent-purple/35 transition-all duration-500"
            >
              {/* Top Browser URL Bar Mock */}
              <div className="flex items-center justify-between border-b border-slate-200/60 pb-4 mb-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                  <div className="w-3 h-3 rounded-full bg-green-400/60" />
                </div>
                <div className="h-6 px-4 bg-slate-100 rounded-full border border-slate-200 flex items-center justify-center text-[10px] text-slate-500 font-mono w-[220px] sm:w-[280px]">
                  https://congenie.com/console/module_{modules[activeIdx].number}
                </div>
                <div className="w-14" />
              </div>

              {/* Dynamic Console Content Sandbox Pane */}
              <div className="bg-slate-50/50 border border-slate-200/80 rounded-2xl p-5 sm:p-6 shadow-inner relative z-10">
                {modules[activeIdx].preview}
              </div>

              {/* Console Details Section */}
              <div className="mt-6 pt-5 border-t border-slate-200/85 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                <div className="sm:col-span-8 space-y-1">
                  <span className="block text-[10px] text-slate-450 uppercase tracking-widest font-bold font-display">Key Module Features</span>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {modules[activeIdx].bullets.map((bullet, idx) => (
                      <span key={idx} className="text-[10px] font-semibold text-slate-700 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-lg flex items-center space-x-1.5 shadow-sm">
                        <Check className="w-3 h-3 text-accent-purple animate-pulse" />
                        <span>{bullet}</span>
                      </span>
                    ))}
                  </div>
                </div>
                <div className="sm:col-span-4 flex sm:justify-end mt-4 sm:mt-0">
                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-1.5 text-xs font-black text-white bg-accent-purple hover:bg-[#6c28e2] px-4 py-2.5 rounded-xl shadow-lg shadow-accent-purple/20 transition-all w-max"
                  >
                    <span>Request Demo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Modules 07 to 12 */}
          <div className="hidden lg:flex flex-col space-y-4 lg:col-span-3">
            {rightModules.map((mod, idx) => {
              const IconComp = mod.icon;
              const globalIdx = idx + 6;
              const isActive = activeIdx === globalIdx;
              return (
                <button
                  key={mod.title}
                  onClick={() => setActiveIdx(globalIdx)}
                  onMouseEnter={() => setActiveIdx(globalIdx)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center space-x-3.5 relative group ${
                    isActive 
                      ? 'bg-white border-accent-cyan shadow-lg shadow-accent-cyan/5' 
                      : 'bg-white/60 border-slate-200/80 text-slate-655 hover:bg-white hover:border-slate-300 shadow-sm'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl border transition-all duration-300 ${
                    isActive 
                      ? 'border-accent-cyan/20 bg-accent-cyan/10 text-accent-cyan' 
                      : 'border-slate-200 bg-slate-50 text-slate-500 group-hover:text-slate-700'
                  }`}>
                    <IconComp className="w-4.5 h-4.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block text-xs font-bold text-slate-450 font-mono tracking-wider">
                      MODULE {mod.number}
                    </span>
                    <span className="block text-sm font-extrabold tracking-tight text-primary mt-0.5">
                      {mod.title}
                    </span>
                  </div>
                  <div className="absolute left-[-3rem] top-1/2 -translate-y-1/2 w-12 h-[2px] pointer-events-none hidden lg:block overflow-visible">
                    <div className={`h-[1px] w-full transition-all duration-500 ${
                      isActive ? 'bg-gradient-to-l from-accent-cyan to-accent-blue shadow-neon-cyan' : 'bg-slate-200/50'
                    }`} />
                    {isActive && (
                      <div className="absolute w-1.5 h-1.5 rounded-full bg-accent-cyan -translate-y-[3px] animate-[flow-left_1.5s_linear_infinite]" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
