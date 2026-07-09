'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  UserPlus, Ticket, Calendar, Mic, Award, Users, 
  Brain, ShieldCheck, Mail, Plane, Shield, BarChart3, 
  Sparkles, ArrowRight, CheckCircle2 
} from 'lucide-react';

const features = [
  {
    icon: UserPlus,
    title: 'Registration Management',
    tagline: 'Frictionless Attendee Onboarding',
    desc: 'Deploy custom registration paths for delegates, sponsors, media, and speakers. Form logic adapts to ticket tiers, member databases, and geographic regulations.',
    capabilities: ['Conditional logic forms', 'Automated tax and local invoicing', 'Multi-lingual registration flows', 'Real-time capacity capping'],
    useCase: 'Conferences with complex ticket tiers (e.g., student discounts, VIP, and general admission).',
    color: 'accent-purple',
    mockup: (
      <div className="border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-950 p-4 font-mono text-[10px] space-y-3">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-900 pb-2">
          <span className="font-bold text-slate-800 dark:text-slate-200">Registration Portal</span>
          <span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-500 font-sans font-bold">Active</span>
        </div>
        <div className="space-y-2">
          <div>
            <label className="block text-slate-450 mb-1">Ticket Type</label>
            <div className="p-2 rounded bg-slate-50 dark:bg-slate-900 border border-slate-150 dark:border-slate-800 text-slate-700 dark:text-slate-300">VIP Access Pass ($499)</div>
          </div>
          <div>
            <label className="block text-slate-450 mb-1">Dietary Requirements</label>
            <div className="p-2 rounded bg-slate-50 dark:bg-slate-900 border border-slate-150 dark:border-slate-800 text-slate-700 dark:text-slate-300">Vegan / Gluten Free</div>
          </div>
        </div>
      </div>
    )
  },
  {
    icon: Ticket,
    title: 'Ticketing & Payments',
    tagline: 'Secure Revenue Capture Platform',
    desc: 'Power your ticketing infrastructure with secure, multi-currency processing. Integrate seamlessly with Stripe, PayPal, and regional gateways with automated invoicing and tax reporting.',
    capabilities: ['Stripe & local payment gateways', 'Group booking discounts', 'Installment payment schedules', 'Automated corporate tax invoicing'],
    useCase: 'International summits managing commercial exhibitors and premium B2B buyers.',
    color: 'accent-cyan',
    mockup: (
      <div className="border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-950 p-4 space-y-3">
        <div className="text-[10px] text-slate-450 font-mono">NET REVENUE REPORT</div>
        <div className="flex items-baseline space-x-2">
          <span className="text-2xl font-bold font-mono">$184,240</span>
          <span className="text-xs text-green-500 font-semibold">+18.5%</span>
        </div>
        <div className="h-10 flex items-end space-x-1">
          <div className="w-1/4 bg-accent-cyan/20 h-4 rounded" />
          <div className="w-1/4 bg-accent-cyan/40 h-8 rounded" />
          <div className="w-1/4 bg-accent-cyan/60 h-6 rounded" />
          <div className="w-1/4 bg-accent-cyan h-10 rounded" />
        </div>
      </div>
    )
  },
  {
    icon: Calendar,
    title: 'Agenda Management',
    tagline: 'Multi-Track Dynamic Schedulers',
    desc: 'Design and manage complex, multi-day, multi-room event schedules. Sync and push live updates directly to event websites, digital signage, and attendee mobile apps.',
    capabilities: ['Drag-and-drop builder', 'Conflicts & capacity warning', 'Calendar exports (iCal, Google)', 'Virtual/hybrid streaming links'],
    useCase: 'Scientific and medical congresses running 15+ concurrent session tracks.',
    color: 'accent-blue',
    mockup: (
      <div className="border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-950 p-4 text-[10px] space-y-2">
        <div className="font-bold text-slate-800 dark:text-slate-200">Track 01: Artificial Intelligence</div>
        <div className="p-2 rounded-lg border-l-4 border-accent-blue bg-accent-blue/5">
          <div className="font-semibold text-slate-700 dark:text-slate-300">Opening Keynote: Next-Gen AI</div>
          <div className="text-slate-450 mt-1">09:00 AM - 10:15 AM | Hall A</div>
        </div>
        <div className="p-2 rounded-lg border-l-4 border-slate-400 bg-slate-500/5 opacity-70">
          <div className="font-semibold text-slate-605 dark:text-slate-400">Networking Coffee Break</div>
          <div className="text-slate-450 mt-1">10:15 AM - 10:45 AM | Lobby</div>
        </div>
      </div>
    )
  },
  {
    icon: Mic,
    title: 'Speaker Management',
    tagline: 'Centralized Host & Content Portals',
    desc: 'Empower presenters with dedicated portals to submit abstracts, fill out profiles, upload slides, specify technical requirements, and accept policy agreements.',
    capabilities: ['Self-service speaker portals', 'Automated slide upload & validation', 'Q&A and polling coordinators', 'Abstract review workflows'],
    useCase: 'Academic symposia requiring submission and review of hundreds of speaker presentations.',
    color: 'accent-purple',
    mockup: (
      <div className="border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-950 p-4 space-y-3 text-[10px]">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-accent-purple/20 border border-accent-purple/30 flex items-center justify-center font-bold text-accent-purple">SJ</div>
          <div>
            <div className="font-bold text-slate-800 dark:text-slate-200">Dr. Sarah Jenkins</div>
            <div className="text-slate-450">Stanford University</div>
          </div>
        </div>
        <div className="flex items-center justify-between p-2 rounded bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
          <span className="text-slate-600 dark:text-slate-400">Slide Deck Upload</span>
          <span className="text-green-500 font-semibold flex items-center"><CheckCircle2 className="w-3 h-3 mr-1" /> Approved</span>
        </div>
      </div>
    )
  },
  {
    icon: Award,
    title: 'Sponsor & Exhibitor Management',
    tagline: 'High-ROI Commercial Integration',
    desc: 'Boost sponsor and exhibitor value with self-service booth coordinators, digital lead collectors, interactive venue maps, and sponsor banner space placement.',
    capabilities: ['Exhibitor lead scanning apps', 'Interactive SVG floorplans', 'Virtual booth profile builders', 'Sponsor tier logo placers'],
    useCase: 'Trade exhibitions and expos aiming to prove concrete ROI and traffic data to sponsors.',
    color: 'accent-cyan',
    mockup: (
      <div className="border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-950 p-4 text-[10px] space-y-2">
        <div className="font-bold text-slate-800 dark:text-slate-200">Exhibitor Lead Hub</div>
        <div className="grid grid-cols-2 gap-2 text-center">
          <div className="p-2 rounded bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
            <span className="block text-slate-450">Total Scans</span>
            <span className="text-base font-bold text-accent-cyan font-mono">342</span>
          </div>
          <div className="p-2 rounded bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
            <span className="block text-slate-450">Hot Leads</span>
            <span className="text-base font-bold text-green-500 font-mono">87</span>
          </div>
        </div>
      </div>
    )
  },
  {
    icon: Users,
    title: 'Delegate Management',
    tagline: 'VIP Care & Custom Communications',
    desc: 'Scale and track your list of delegates. Push customized itineraries, track individual agenda sign-ups, and manage VIP protocols and special invitations seamlessly.',
    capabilities: ['Personalized agenda packages', 'Real-time alert messages', 'Check-in state status monitors', 'Custom attendee directory'],
    useCase: 'VIP forums, summits, and invite-only executive roundtable events.',
    color: 'accent-blue',
    mockup: (
      <div className="border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-950 p-4 text-[10px] space-y-2">
        <div className="font-bold text-slate-850 dark:text-slate-150">Delegate Directory</div>
        <div className="space-y-1.5">
          <div className="flex justify-between items-center py-1 border-b border-slate-100 dark:border-slate-900">
            <span className="text-slate-700 dark:text-slate-300">Marcus Vance</span>
            <span className="text-slate-450">Chevron Corp</span>
          </div>
          <div className="flex justify-between items-center py-1 border-b border-slate-100 dark:border-slate-900">
            <span className="text-slate-700 dark:text-slate-300">Elena Rostova</span>
            <span className="text-slate-450">Biotech Lab</span>
          </div>
        </div>
      </div>
    )
  },
  {
    icon: Brain,
    title: 'AI Matchmaking',
    tagline: 'Hyper-Targeted B2B Networking',
    desc: 'Transform event networking with our AI matchmaking wizard. Analyzing profile interests, roles, and intents, our models generate optimal B2B matching and meeting coordinates.',
    capabilities: ['Interactive B2B scheduler', 'Intelligent pairing algorithms', 'Meeting spot table auto-assigners', 'Post-meeting feedback forms'],
    useCase: 'B2B Trade Matchmaking events, speed-dating investor rounds, and recruitment hubs.',
    color: 'accent-purple',
    mockup: (
      <div className="border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-950 p-4 text-[10px] space-y-3">
        <div className="flex items-center justify-between">
          <span className="font-bold text-accent-purple font-mono flex items-center"><Brain className="w-3.5 h-3.5 mr-1" /> AI Match</span>
          <span className="text-slate-450 font-bold">98% Score</span>
        </div>
        <div className="flex items-center justify-center space-x-2 my-1">
          <div className="w-6 h-6 rounded-full bg-accent-purple/20" />
          <div className="w-4 h-[1px] bg-slate-300 dark:bg-slate-800 border-dashed border-t" />
          <div className="w-6 h-6 rounded-full bg-accent-cyan/20" />
        </div>
        <div className="text-center text-slate-650 dark:text-slate-405 font-mono text-[9px]">Table 12 | 11:30 AM</div>
      </div>
    )
  },
  {
    icon: ShieldCheck,
    title: 'Onsite Event Operations',
    tagline: 'Instant QR & Badge Printing Gates',
    desc: 'Keep entrance check-in lines moving. Our onsite operations module supports self-service check-in kiosks, mobile scan applications, and instant thermal badge printing.',
    capabilities: ['Ultra-fast QR scanner integration', 'Local offline-first mode databases', 'Self-service kiosk configurations', 'Live badge designer overlays'],
    useCase: 'High-volume conferences requiring quick processing of thousands of guests.',
    color: 'accent-cyan',
    mockup: (
      <div className="border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-950 p-4 space-y-3">
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded flex items-center justify-center text-slate-700 dark:text-slate-300">
            {/* Mock QR */}
            <div className="grid grid-cols-4 gap-1 w-10 h-10">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className={`rounded-sm ${i % 3 === 0 || i % 7 === 0 ? 'bg-slate-800 dark:bg-white' : 'bg-transparent'}`} />
              ))}
            </div>
          </div>
        </div>
        <div className="text-center text-[10px] font-bold text-green-500 font-mono">SCANNED - PRINTING...</div>
      </div>
    )
  },
  {
    icon: Mail,
    title: 'Email & Communications',
    tagline: 'Personalized Campaigns & Alerts',
    desc: 'Send timely, personalized email campaigns and push alerts to segmented invite lists, registered delegates, or distinct sponsor cohorts.',
    capabilities: ['Rich template builders', 'Auto-triggered confirmation receipts', 'Segmented broadcast lists', 'Open & click tracking charts'],
    useCase: 'Pre-event drip marketing campaigns and critical schedule updates on-the-go.',
    color: 'accent-blue',
    mockup: (
      <div className="border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-950 p-4 space-y-2 text-[10px]">
        <div className="font-bold text-slate-800 dark:text-slate-200">Email Campaign</div>
        <div className="space-y-1">
          <div className="bg-slate-50 dark:bg-slate-900 p-1.5 rounded border border-slate-100 dark:border-slate-800">
            <span className="text-slate-450 block">Subject</span>
            <span className="text-slate-750 dark:text-slate-250 font-semibold">Your Badge Details Inside</span>
          </div>
          <div className="text-right text-[9px] text-slate-450 font-mono">Sent: 1,432 | Opens: 84%</div>
        </div>
      </div>
    )
  },
  {
    icon: Plane,
    title: 'Accommodation & Travel',
    tagline: 'Integrated Lodging Coordinators',
    desc: 'Manage hotel blocks, room allotments, and arrival schedules directly inside the platform. Attendees can select pre-negotiated packages during registration.',
    capabilities: ['Hotel block inventory manager', 'Flight arrival data coordinate loggers', 'Room sharing configurations', 'Shuttle bus route planners'],
    useCase: 'Global corporate retreats or trade missions requiring high coordination of guest lodging.',
    color: 'accent-purple',
    mockup: (
      <div className="border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-950 p-4 text-[10px] space-y-2">
        <div className="font-bold text-slate-800 dark:text-slate-200">Hotel Blocks</div>
        <div className="space-y-1">
          <div className="flex justify-between items-center py-1">
            <span className="text-slate-600 dark:text-slate-400">Grand Hyatt</span>
            <span className="font-mono text-slate-800 dark:text-slate-200 font-bold">42/100 Rooms</span>
          </div>
          <div className="w-full bg-slate-100 dark:bg-slate-900 rounded-full h-1.5">
            <div className="bg-accent-purple h-1.5 rounded-full" style={{ width: '42%' }} />
          </div>
        </div>
      </div>
    )
  },
  {
    icon: Shield,
    title: 'Certificates Management',
    tagline: 'Automatic Credential Generators',
    desc: 'Design and automatically issue customized completion certificates, CME credit logs, or partner thank-you graphics upon session completion or survey responses.',
    capabilities: ['Visual certificate designer', 'CME credit compliance managers', 'Auto-delivery PDF email links', 'LinkedIn credential share widgets'],
    useCase: 'Medical seminars and accredited technical workshops requiring certified verification.',
    color: 'accent-cyan',
    mockup: (
      <div className="border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-950 p-4 space-y-2 text-center">
        <Award className="w-8 h-8 text-accent-cyan mx-auto animate-pulse" />
        <span className="block text-[10px] font-bold text-slate-800 dark:text-slate-200 font-display">CME Accreditation</span>
        <span className="block text-[8px] text-slate-450 uppercase font-mono">Verified PDF Issued</span>
      </div>
    )
  },
  {
    icon: BarChart3,
    title: 'Reports & Analytics',
    tagline: 'Deep Audience Engagement Insights',
    desc: 'Gather feedback, audit ticket revenues, track session attendance, and measure sponsor booth ROI. Generate visual post-event summaries to prove event success.',
    capabilities: ['Real-time dashboard metrics', 'Custom report spreadsheet exports', 'Audience engagement graphs', 'NPS and survey score logs'],
    useCase: 'Enterprise clients needing to present hard metrics, registration growth, and ROI to the board.',
    color: 'accent-blue',
    mockup: (
      <div className="border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-950 p-4 space-y-2 text-[10px]">
        <div className="font-bold text-slate-800 dark:text-slate-200">Event NPS</div>
        <div className="flex items-center space-x-3">
          <span className="text-2xl font-bold font-mono text-accent-blue">74</span>
          <div className="flex-1">
            <div className="flex justify-between text-[8px] text-slate-450">
              <span>Promoters</span>
              <span>82%</span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-900 rounded-full h-1">
              <div className="bg-green-500 h-1 rounded-full" style={{ width: '82%' }} />
            </div>
          </div>
        </div>
      </div>
    )
  }
];

export default function FeaturesPage() {
  return (
    <main className="pt-24 min-h-screen bg-slate-50 dark:bg-[#030712] transition-colors duration-300">
      
      {/* Background glow effects */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-[600px] h-[600px] bg-accent-purple/5 rounded-full blur-[150px] pointer-events-none" />
      
      {/* Hero section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10 text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-accent-purple/35 bg-accent-purple/5 text-accent-purple text-xs font-semibold mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Detailed Capabilities</span>
        </div>
        <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-primary dark:text-white tracking-tight max-w-4xl mx-auto">
          A Complete Event Technology Stack Designed for Enterprise Scale
        </h1>
        <p className="mt-6 text-sm sm:text-base text-slate-550 dark:text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
          From advanced registration flows to onsite check-in kiosks and post-event analytics. Explore the capabilities built to automate every stage of your event lifecycle.
        </p>
      </div>

      {/* Grid listing features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            
            // Map colors to actual Tailwind hover/active border styling
            const colorStyles = 
              feat.color === 'accent-purple' 
                ? 'hover:border-accent-purple/40 group-hover:bg-accent-purple/10 border-accent-purple/10 text-accent-purple'
                : feat.color === 'accent-cyan' 
                  ? 'hover:border-accent-cyan/40 group-hover:bg-accent-cyan/10 border-accent-cyan/10 text-accent-cyan'
                  : 'hover:border-accent-blue/40 group-hover:bg-accent-blue/10 border-accent-blue/10 text-accent-blue';
            
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`group flex flex-col justify-between bg-white dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/60 rounded-[28px] p-6 sm:p-8 hover:shadow-xl hover:shadow-slate-100/50 dark:hover:shadow-none transition-all duration-300 ${colorStyles.split(' ')[0]}`}
              >
                <div>
                  {/* Card Header Icon */}
                  <div className={`p-3 rounded-2xl w-max border mb-6 transition-colors duration-300 ${colorStyles.split(' ').slice(1).join(' ')}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  {/* Tag & Title */}
                  <span className="text-[10px] font-bold text-slate-450 dark:text-slate-500 uppercase tracking-widest">{feat.tagline}</span>
                  <h3 className="font-display font-extrabold text-xl text-primary dark:text-white mt-1 mb-3">
                    {feat.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-550 dark:text-slate-400 font-light leading-relaxed mb-6">
                    {feat.desc}
                  </p>

                  {/* Capabilities List */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Key Capabilities</span>
                    {feat.capabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-center space-x-2 text-xs text-slate-650 dark:text-slate-350">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>

                  {/* Use Case Box */}
                  <div className="bg-slate-50/60 dark:bg-slate-900/60 rounded-xl p-3.5 border border-slate-150 dark:border-slate-800/50 mb-6">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Common Use Case</span>
                    <p className="text-xs text-slate-600 dark:text-slate-400 font-light">
                      {feat.useCase}
                    </p>
                  </div>
                </div>

                <div>
                  {/* Mockup Preview Area */}
                  <div className="my-6">
                    {feat.mockup}
                  </div>

                  {/* Action Link to Contact */}
                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-2 text-xs font-bold text-accent-purple dark:text-accent-cyan hover:underline mt-2"
                  >
                    <span>Request Demo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
      
    </main>
  );
}
