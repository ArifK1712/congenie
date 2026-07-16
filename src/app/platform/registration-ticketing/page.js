'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Ticket, 
  Smartphone, 
  MapPin, 
  Users, 
  BarChart3, 
  ArrowRight, 
  CheckCircle2, 
  CreditCard, 
  Database, 
  Globe, 
  Sparkles, 
  Settings, 
  Layers, 
  Lock, 
  FileText, 
  Layout,
  Plus,
  Eye,
  Sliders,
  DollarSign,
  TrendingUp,
  ShieldCheck,
  Building,
  ChevronDown
} from 'lucide-react';
import { motion } from 'framer-motion';
import FinalCTA from '../../../sections/FinalCTA';

// Custom card wrapper matching the main layout's ProductFrame structure
function MockupFrame({ children, className = "" }) {
  return (
    <div className={`relative rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-[#070b22]/70 backdrop-blur-md shadow-2xl p-1.5 transition-all duration-500 hover:border-accent-purple/35 ${className}`}>
      {/* Browser style header (clean neutral bar) */}
      <div className="h-6 border-b border-slate-100 dark:border-slate-900 bg-slate-50/50 dark:bg-slate-950/50 rounded-t-xl mb-1.5" />
      <div className="relative rounded-lg overflow-hidden bg-slate-100/50 dark:bg-slate-950/50">
        {children}
      </div>
    </div>
  );
}

export default function RegistrationTicketingPage() {
  
  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  return (
    <main className="min-h-screen pt-24 bg-[#faf9fe] dark:bg-[#020314] overflow-hidden transition-colors duration-300">
      
      {/* 1. HERO SECTION (Light Theme / Styled for inner pages) */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-[#faf9fe] to-white dark:from-[#020314] dark:to-[#070b19] border-b border-slate-100 dark:border-slate-900">
        {/* Soft Decorative Ambient Background Glows */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-purple/5 dark:bg-accent-purple/10 rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-accent-cyan/5 dark:bg-accent-cyan/10 rounded-full blur-[120px] pointer-events-none z-0" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Hero Text Content */}
            <motion.div 
              className="lg:col-span-5 text-left space-y-6"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-accent-purple/30 bg-accent-purple/5 text-accent-purple text-xs font-semibold">
                <Ticket className="w-3.5 h-3.5" />
                <span>Advanced Ticketing Modules</span>
              </div>
              
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-primary dark:text-white leading-[1.1] tracking-tight">
                Seamless Registration <br />
                <span className="bg-gradient-to-r from-accent-purple via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                  & Intelligent Ticketing
                </span>
              </h1>
              
              <p className="text-slate-600 dark:text-slate-350 text-base sm:text-lg font-light leading-relaxed max-w-xl">
                Maximize attendance and capture critical attendee data with fully customizable, conversion-optimized registration workflows. Built for high-performance scale.
              </p>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <Link
                  href="/contact"
                  className="px-6 py-3.5 rounded-xl text-white font-medium text-sm bg-accent-purple hover:bg-[#6c28e2] shadow-lg shadow-accent-purple/20 hover:shadow-accent-purple/30 hover:-translate-y-0.5 transition-all duration-300 text-center flex items-center justify-center space-x-2"
                >
                  <span>Start Building for Free</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#features"
                  className="px-6 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900/60 font-semibold text-sm transition-all duration-300 text-center"
                >
                  Explore Features
                </Link>
              </div>
            </motion.div>
            
            {/* Hero Floating Visual: Complex Drag-and-Drop Mockup */}
            <motion.div 
              className="lg:col-span-7"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <MockupFrame className="max-w-[620px] mx-auto">
                  <div className="bg-[#0b0f24] text-white p-4 font-sans select-none min-h-[380px]">
                    {/* Mockup Title bar */}
                    <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                      <div className="flex items-center space-x-2">
                        <Layout className="w-4 h-4 text-accent-purple" />
                        <span className="text-xs font-bold text-slate-300">Registration Form Builder</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-semibold">Active Mode</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-12 gap-3">
                      {/* Left: Draggable field panels */}
                      <div className="col-span-4 bg-[#070b1e]/80 border border-slate-800/80 rounded-xl p-2.5 space-y-2">
                        <div className="text-[9px] font-bold text-slate-500 tracking-wider uppercase mb-1">Form Elements</div>
                        <div className="p-2 bg-[#0c122b] border border-slate-700/50 rounded-lg text-[10px] text-slate-300 flex items-center space-x-2 cursor-grab">
                          <Plus className="w-3 h-3 text-accent-purple" />
                          <span>Standard Text</span>
                        </div>
                        <div className="p-2 bg-[#0c122b] border border-slate-700/50 rounded-lg text-[10px] text-slate-300 flex items-center space-x-2 cursor-grab">
                          <Plus className="w-3 h-3 text-accent-purple" />
                          <span>Email Address</span>
                        </div>
                        <div className="p-2 bg-[#0c122b] border border-slate-700/50 rounded-lg text-[10px] text-slate-300 flex items-center space-x-2 cursor-grab">
                          <Plus className="w-3 h-3 text-accent-purple" />
                          <span>File Upload</span>
                        </div>
                        <div className="p-2 bg-[#0c122b] border border-slate-700/50 rounded-lg text-[10px] text-slate-300 flex items-center space-x-2 cursor-grab">
                          <Plus className="w-3 h-3 text-accent-purple" />
                          <span>Dropdown Menu</span>
                        </div>
                      </div>

                      {/* Center: Live preview layout canvas */}
                      <div className="col-span-8 bg-[#090d26] border border-slate-800/80 rounded-xl p-3 space-y-3">
                        <div className="text-[9px] font-bold text-slate-400 mb-2 border-b border-slate-800/60 pb-1">Live Form Canvas</div>
                        
                        {/* Field 1 */}
                        <div className="p-2.5 bg-slate-950/40 border border-accent-purple/30 rounded-lg space-y-1.5 relative group">
                          <div className="flex justify-between items-center">
                            <span className="text-[9px] text-slate-400 font-bold uppercase">Field: Full Name</span>
                            <span className="text-[8px] text-accent-purple font-semibold bg-accent-purple/10 px-1.5 py-0.5 rounded">Required</span>
                          </div>
                          <div className="h-6 bg-slate-900 border border-slate-800 rounded px-2 text-[9px] flex items-center text-slate-500">Enter your full name...</div>
                        </div>

                        {/* Field 2 */}
                        <div className="p-2.5 bg-slate-950/40 border border-slate-800/80 rounded-lg space-y-1.5">
                          <div className="flex justify-between items-center">
                            <span className="text-[9px] text-slate-400 font-bold uppercase">Field: Ticket Tier Selection</span>
                          </div>
                          <div className="h-6 bg-slate-900 border border-slate-800 rounded px-2 text-[9px] flex items-center text-slate-500 justify-between">
                            <span>Select Ticket Option...</span>
                            <ChevronDown className="w-3 h-3 text-slate-500" />
                          </div>
                        </div>

                        {/* Conditional Logic Indicator */}
                        <div className="p-2 bg-accent-purple/10 border border-accent-purple/35 rounded-lg flex items-center justify-between text-[9px]">
                          <div className="flex items-center space-x-2 text-accent-lavender">
                            <Sliders className="w-3 h-3 text-accent-cyan" />
                            <span>If ticket selection = VIP Show dietary selection</span>
                          </div>
                          <span className="text-[8px] bg-accent-cyan/15 text-accent-cyan font-bold px-1.5 py-0.5 rounded">Logic Active</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </MockupFrame>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. CORE FEATURES (Alternating Zig-Zag Layout) */}
      <div id="features" className="relative">
        
        {/* Feature A (Custom Forms) - Light/Transparent Theme */}
        <section className="py-24 relative bg-white dark:bg-[#020314] transition-colors duration-300">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Text Left */}
              <div className="lg:col-span-5 space-y-6 lg:pr-8">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-accent-purple/20 bg-accent-purple/5 text-accent-purple text-xs font-semibold">
                  <Sliders className="w-3.5 h-3.5" />
                  <span>Interactive Editor</span>
                </div>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary dark:text-white tracking-tight">
                  Drag-and-Drop Form Builder with Advanced Logic
                </h2>
                <p className="text-slate-600 dark:text-slate-350 font-light leading-relaxed">
                  Design bespoke registration surveys to match your unique brand requirements. Set up conditional routing logic, add multi-step pages, and capture custom files without writing any custom scripts.
                </p>
                <ul className="space-y-3.5 pt-2">
                  {[
                    "Skip logic and branch flows based on attendee answers",
                    "Custom branding styling with corporate design assets",
                    "Integrated file uploads for speaker slides and documents"
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-start space-x-3 text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-accent-purple shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mockup Right */}
              <div className="lg:col-span-7">
                <MockupFrame>
                  <div className="bg-[#0b0f24] text-white p-4 font-sans select-none min-h-[340px] flex flex-col justify-between">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
                      <span className="text-[10px] font-bold text-slate-400">Settings: Field Logic</span>
                      <Settings className="w-3.5 h-3.5 text-slate-500" />
                    </div>

                    {/* Editor Panel UI */}
                    <div className="space-y-3 flex-1">
                      <div className="bg-slate-950/40 border border-slate-800 rounded-xl p-3 space-y-2">
                        <div className="text-[9px] text-slate-400 font-bold uppercase">Condition Trigger</div>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="bg-slate-900 border border-slate-800 rounded p-1 text-[8px] text-slate-300 text-center">If Field: 'Attending'</div>
                          <div className="bg-slate-900 border border-slate-800 rounded p-1 text-[8px] text-slate-300 text-center">Equals</div>
                          <div className="bg-slate-900 border border-slate-800 rounded p-1 text-[8px] text-slate-300 text-center">'In Person'</div>
                        </div>
                      </div>

                      <div className="bg-slate-950/40 border border-slate-800 rounded-xl p-3 space-y-2">
                        <div className="text-[9px] text-slate-400 font-bold uppercase">Result Action</div>
                        <div className="flex items-center space-x-2 text-[8px] bg-accent-purple/10 border border-accent-purple/35 text-accent-lavender p-2 rounded-lg">
                          <Eye className="w-3.5 h-3.5 text-accent-cyan" />
                          <span>Show Block: 'Hotel & Travel Details'</span>
                        </div>
                      </div>
                    </div>

                    <div className="h-8 bg-slate-950 border-t border-slate-800 flex items-center justify-end px-1 pt-2">
                      <button className="bg-accent-purple hover:bg-[#6c28e2] px-3.5 py-1.5 rounded-lg text-[9px] font-semibold text-white transition-all">Save Condition</button>
                    </div>
                  </div>
                </MockupFrame>
              </div>

            </div>
          </div>
        </section>

        {/* Feature B (Dynamic Pricing Tiers) - Dark Theme */}
        <section className="py-24 relative bg-[#070b19] dark:bg-[#020314] text-white border-y border-slate-900 transition-colors duration-300">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-accent-purple/5 rounded-full blur-[120px] pointer-events-none z-0" />
          
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Mockup Left */}
              <div className="lg:col-span-7 order-2 lg:order-1">
                <MockupFrame>
                  <div className="bg-[#0b0f24] text-white p-4 font-sans select-none min-h-[340px] flex flex-col justify-between">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-4 h-4 text-emerald-400" />
                        <span className="text-[10px] font-bold text-slate-350">Pricing & Capacity Tracking</span>
                      </div>
                      <span className="text-[9px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded font-mono">3 Tiers Active</span>
                    </div>

                    {/* Chart & Stats row */}
                    <div className="grid grid-cols-12 gap-3 flex-1">
                      {/* Ticket stats */}
                      <div className="col-span-7 space-y-2">
                        <div className="p-2.5 bg-slate-950/40 border border-slate-800 rounded-lg">
                          <div className="flex justify-between text-[8px] text-slate-400 font-bold mb-1">
                            <span>VIP PACKAGE</span>
                            <span className="text-emerald-400 font-mono">88% sold</span>
                          </div>
                          <div className="w-full bg-slate-850 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-emerald-400 h-full rounded-full" style={{ width: '88%' }} />
                          </div>
                        </div>

                        <div className="p-2.5 bg-slate-950/40 border border-slate-800 rounded-lg">
                          <div className="flex justify-between text-[8px] text-slate-400 font-bold mb-1">
                            <span>REGULAR REGISTRATION</span>
                            <span className="text-accent-purple font-mono">45% sold</span>
                          </div>
                          <div className="w-full bg-slate-850 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-accent-purple h-full rounded-full" style={{ width: '45%' }} />
                          </div>
                        </div>
                      </div>

                      {/* Revenue card */}
                      <div className="col-span-5 bg-slate-950/40 border border-slate-800 rounded-lg p-2.5 flex flex-col justify-between">
                        <div>
                          <span className="text-[8px] font-bold text-slate-500 uppercase block">Total Revenue</span>
                          <span className="text-lg font-extrabold text-white font-sans">$128,450.00</span>
                        </div>
                        <div className="flex items-center space-x-1 text-emerald-400 text-[8px] font-bold">
                          <TrendingUp className="w-3.5 h-3.5" />
                          <span>+24.5% from yesterday</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </MockupFrame>
              </div>

              {/* Text Right */}
              <div className="lg:col-span-5 lg:pl-8 space-y-6 order-1 lg:order-2">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-accent-purple/20 bg-accent-purple/5 text-accent-lavender text-xs font-semibold">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Tier Orchestration</span>
                </div>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                  Dynamic Ticket Tiers & Capacity Control
                </h2>
                <p className="text-slate-300 font-light leading-relaxed">
                  Implement custom billing mechanics automatically. Setup early-bird price scaling thresholds, password-locked VIP entries, member-only incentives, or bulk group discounts.
                </p>
                <ul className="space-y-3.5 pt-2">
                  {[
                    "Password-restricted entry for VIP and partner tickets",
                    "Automated early-bird tier transition based on dates or quantities",
                    "Robust capacity limit tracking with automated waitlists"
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-start space-x-3 text-sm text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-accent-cyan shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* Feature C (Secure Payments & Invoicing) - Light/Transparent Theme */}
        <section className="py-24 relative bg-white dark:bg-[#020314] transition-colors duration-300">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Text Left */}
              <div className="lg:col-span-5 space-y-6 lg:pr-8">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-accent-purple/20 bg-accent-purple/5 text-accent-purple text-xs font-semibold">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Enterprise Security</span>
                </div>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary dark:text-white tracking-tight">
                  Global Payments & Instant Automated Invoicing
                </h2>
                <p className="text-slate-600 dark:text-slate-350 font-light leading-relaxed">
                  Support global events with multi-currency payouts and local VAT/GST tax calculators. Integrate directly with corporate invoicing protocols to deliver PDF receipts instantly.
                </p>
                <ul className="space-y-3.5 pt-2">
                  {[
                    "Native payment gateways support with global currencies",
                    "Automated tax compliance with country-specific billing setups",
                    "Instant printable PDF receipts and customized invoices"
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-start space-x-3 text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-accent-purple shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mockup Right */}
              <div className="lg:col-span-7">
                <MockupFrame>
                  <div className="bg-[#0b0f24] text-white p-4 font-sans select-none min-h-[340px] flex flex-col justify-between">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
                      <span className="text-[10px] font-bold text-slate-400">Payment Gateway Terminal</span>
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    </div>

                    {/* Receipt UI */}
                    <div className="space-y-2 flex-1">
                      <div className="p-3 bg-slate-950/40 border border-slate-800 rounded-xl space-y-1">
                        <div className="flex justify-between text-[8px] text-slate-500 font-bold uppercase">
                          <span>Invoice Item</span>
                          <span>Price</span>
                        </div>
                        <div className="flex justify-between text-[10px] text-slate-200">
                          <span>ConGenie Tech Summit - VIP Pass</span>
                          <span>$895.00</span>
                        </div>
                        <div className="flex justify-between text-[10px] text-slate-200">
                          <span>Tax / Local VAT (20%)</span>
                          <span>$179.00</span>
                        </div>
                        <hr className="border-slate-850 my-1.5" />
                        <div className="flex justify-between text-[11px] font-extrabold text-white">
                          <span>Total Amount Paid</span>
                          <span className="text-emerald-400">$1,074.00</span>
                        </div>
                      </div>

                      <div className="p-2 bg-emerald-500/10 border border-emerald-500/25 rounded-lg flex items-center space-x-2 text-[9px] text-emerald-400">
                        <FileText className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>PDF Invoice Generated successfully (#INV-2026-904)</span>
                      </div>
                    </div>

                    <div className="h-8 bg-slate-950 border-t border-slate-800 flex items-center justify-between px-1 pt-2">
                      <span className="text-[8px] text-slate-550">Gateway Sync: Stripe API v4</span>
                      <button className="bg-emerald-500 hover:bg-emerald-600 px-3.5 py-1.5 rounded-lg text-[9px] font-semibold text-white transition-all">Download Receipt</button>
                    </div>
                  </div>
                </MockupFrame>
              </div>

            </div>
          </div>
        </section>

      </div>

      {/* 3. INTEGRATION GRID (Glassmorphism Bento Box) */}
      <section className="py-24 bg-[#faf9fe] dark:bg-[#020314] relative overflow-hidden border-t border-slate-100 dark:border-slate-900 transition-colors duration-300">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-accent-purple/5 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-accent-purple/30 bg-accent-purple/5 text-accent-purple text-xs font-semibold">
              <span>Ecosystem Hub</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary dark:text-white">
              Connects with Your Existing Stack
            </h2>
            <p className="text-slate-500 dark:text-slate-400 font-light leading-relaxed max-w-xl mx-auto">
              Sync attendee registries, pipeline leads, and payment records to standard business applications.
            </p>
          </div>

          {/* Bento box Grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 max-w-5xl mx-auto">
            
            {/* Box 1 - Payments */}
            <div className="md:col-span-3 p-6 rounded-3xl bg-white/70 dark:bg-[#090d26]/75 border border-slate-200/80 dark:border-slate-800/80 hover:border-accent-purple/40 shadow-lg backdrop-blur-md transition-all duration-300 group flex flex-col justify-between min-h-[220px]">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center text-accent-purple">
                  <CreditCard className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">Secure</span>
              </div>
              <div className="space-y-2 mt-4">
                <h3 className="text-lg font-bold text-primary dark:text-white">Stripe & Payment Gateways</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                  Process global credit cards, Apple Pay, Google Pay, and localized bank transfers natively.
                </p>
              </div>
            </div>

            {/* Box 2 - CRMs */}
            <div className="md:col-span-3 p-6 rounded-3xl bg-white/70 dark:bg-[#090d26]/75 border border-slate-200/80 dark:border-slate-800/80 hover:border-accent-purple/40 shadow-lg backdrop-blur-md transition-all duration-300 group flex flex-col justify-between min-h-[220px]">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center text-accent-purple">
                  <Database className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-accent-purple bg-accent-purple/10 px-2 py-0.5 rounded-full font-mono">Real-time</span>
              </div>
              <div className="space-y-2 mt-4">
                <h3 className="text-lg font-bold text-primary dark:text-white">Salesforce & HubSpot Hub</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                  Instantly push new registration data points straight to customer pipelines and active mailing directories.
                </p>
              </div>
            </div>

            {/* Box 3 - Webhooks */}
            <div className="md:col-span-2 p-6 rounded-3xl bg-white/70 dark:bg-[#090d26]/75 border border-slate-200/80 dark:border-slate-800/80 hover:border-accent-purple/40 shadow-lg backdrop-blur-md transition-all duration-300 group flex flex-col justify-between min-h-[200px]">
              <div className="w-10 h-10 rounded-xl bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center text-accent-purple">
                <Globe className="w-5 h-5" />
              </div>
              <div className="space-y-2 mt-4">
                <h3 className="text-base font-bold text-primary dark:text-white">Open REST Webhooks</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                  Stream data packets out via customized triggers.
                </p>
              </div>
            </div>

            {/* Box 4 - Automations */}
            <div className="md:col-span-2 p-6 rounded-3xl bg-white/70 dark:bg-[#090d26]/75 border border-slate-200/80 dark:border-slate-800/80 hover:border-accent-purple/40 shadow-lg backdrop-blur-md transition-all duration-300 group flex flex-col justify-between min-h-[200px]">
              <div className="w-10 h-10 rounded-xl bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center text-accent-purple">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="space-y-2 mt-4">
                <h3 className="text-base font-bold text-primary dark:text-white">Zapier Flows</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                  Build multi-app automation pathways with 5,000+ connectors.
                </p>
              </div>
            </div>

            {/* Box 5 - Workspace */}
            <div className="md:col-span-2 p-6 rounded-3xl bg-white/70 dark:bg-[#090d26]/75 border border-slate-200/80 dark:border-slate-800/80 hover:border-accent-purple/40 shadow-lg backdrop-blur-md transition-all duration-300 group flex flex-col justify-between min-h-[200px]">
              <div className="w-10 h-10 rounded-xl bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center text-accent-purple">
                <Building className="w-5 h-5" />
              </div>
              <div className="space-y-2 mt-4">
                <h3 className="text-base font-bold text-primary dark:text-white">Enterprise SSO</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                  Authenticate login via corporate Active Directory tools.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. FINAL CTA (Same as homepage) */}
      <FinalCTA />

    </main>
  );
}
