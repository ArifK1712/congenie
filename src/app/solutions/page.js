'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Building2, Sparkles, BookOpen, Presentation, Laptop, Award,
  Users2, Globe, Library, ArrowRight, ShieldCheck, HelpCircle 
} from 'lucide-react';

const solutions = [
  {
    icon: Presentation,
    title: 'Conferences & Summits',
    tagline: 'Multi-Track Academic & Professional Events',
    desc: 'Support massive multi-session schedules and complex attendee tracks. Features include custom agenda builders, speaker bio portals, and instant room check-in scan logic.',
    highlights: ['Multi-track agenda builder', 'Speaker slide coordinator portals', 'Live session Q&A + polling', 'Digital attendee surveys']
  },
  {
    icon: Building2,
    title: 'Exhibitions & Trade Shows',
    tagline: 'High-Impact Sponsor Floorplans & Lead Scans',
    desc: 'Empower commercial exhibitors with scanner apps to collect hot leads instantly at their booths. Upload interactive SVG venue floorplans showing real-time bookings.',
    highlights: ['Exhibitor lead retrieval scanner', 'Interactive SVG venue floorplans', 'Exhibitor booth self-setup portals', 'Real-time foot traffic reports']
  },
  {
    icon: Award,
    title: 'Medical Congresses',
    tagline: 'Abstract Portals & Continuing Medical Education (CME)',
    desc: 'Simplify healthcare congress workflows with digital abstract review workflows, blind peer assessments, attendee check-in thresholds, and automated CME certificate routing.',
    highlights: ['Blind peer review abstract manager', 'CME compliance credit monitors', 'Auto-delivery PDF certifications', 'Secure medical credential verification']
  },
  {
    icon: Users2,
    title: 'Corporate Events & AGMs',
    tagline: 'Premium Branding & Secure Document Access',
    desc: 'Coordinate shareholder general meetings, product releases, or internal retreats. Secure document vaults, whitelist registration, and white-label branding elements.',
    highlights: ['White-label registration interfaces', 'Secure document distribution vaults', 'Attendee whitelist verification gate', 'High-definition video feeds']
  },
  {
    icon: Globe,
    title: 'Trade Missions',
    tagline: 'International Buyer-Seller B2B Matchmaking',
    desc: 'Help buyers and sellers connect with our B2B matchmaking assistant. Coordinates profile registration, matching preferences, table assignments, and individual schedules.',
    highlights: ['Intelligent buyer-seller matchmaking', 'Dynamic table routing calendar', 'Multi-currency invoicing gateway', 'Post-meeting feedback forms']
  },
  {
    icon: ShieldCheck,
    title: 'Government Summits',
    tagline: 'Highest Security Standards & VIP Operations',
    desc: 'Deploy secure registration corridors with identity verification, offline-capable scanner nodes, encrypted data channels, and premium VIP check-in checkmarks.',
    highlights: ['SOC2 compliant data policies', 'Offline-first onsite database nodes', 'Encrypted QR code validation', 'Fast VIP access gates']
  },
  {
    icon: BookOpen,
    title: 'Workshops & Training',
    tagline: 'Interactive Learning & Credit Tracker',
    desc: 'Track attendee progress, manage training slots, design tests, and issue official course completion certificates automatically upon passing.',
    highlights: ['Training slot capacity locks', 'Attendee lesson progress dashboard', 'Automated course quiz evaluation', 'Completion certificates PDF dispatch']
  },
  {
    icon: Laptop,
    title: 'Hybrid Events',
    tagline: 'Bridging Onsite and Virtual Attendance',
    desc: 'Connect offsite streams with onsite stages. Virtual check-in paths, live stream hubs, chat integrations, and unified dashboards for onsite and remote statistics.',
    highlights: ['Unified check-in database', 'Live chat & emoji stream overlay', 'Webcast video hosting integration', 'Hybrid engagement reporting dashboards']
  },
  {
    icon: Library,
    title: 'Association Events',
    tagline: 'Member Tier Discounts & Directory Syncs',
    desc: 'Integrate your member database to offer automated discount codes, special access passes, renewal forms, and custom attendee directory permissions.',
    highlights: ['Member API database integration', 'Auto-applied promo discounts', 'Membership renewal notifications', 'Private membership directory lists']
  }
];

export default function SolutionsPage() {
  return (
    <main className="pt-24 min-h-screen bg-slate-50 dark:bg-[#030712] transition-colors duration-300">
      
      {/* Background glowing effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent-purple/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent-cyan/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Hero Header */}
      <div className="max-w-[1400px] mx-auto px-4 py-16 sm:py-24 relative z-10 text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-accent-blue/35 bg-accent-blue/5 text-accent-blue text-xs font-semibold mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Tailored Event Solutions</span>
        </div>
        <h1 className="font-display font-extrabold text-4xl sm:text-6.5xl text-primary dark:text-white tracking-tight leading-tight max-w-4xl mx-auto">
          Built for the Unique Complexities of Your Industry
        </h1>
        <p className="mt-6 text-sm sm:text-base text-slate-550 dark:text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
          Every event format demands its own custom workflows. ConGenie adapts to your security regulations, networking requirements, and attendee numbers out of the box.
        </p>
      </div>

      {/* Grid of 9 Solutions */}
      <div className="max-w-[1400px] mx-auto px-4 pb-32 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {solutions.map((sol, idx) => {
            const Icon = sol.icon;
            return (
              <motion.div
                key={sol.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className="bg-white dark:bg-[#070a1e]/40 border border-slate-200/80 dark:border-slate-800/60 rounded-3xl p-6 sm:p-8 hover:border-accent-purple/35 hover:shadow-xl hover:shadow-slate-100/50 dark:hover:shadow-none transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="p-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 w-max text-accent-purple group-hover:bg-accent-purple/10 group-hover:text-accent-purple transition-all duration-300 mb-6">
                    <Icon className="w-5.5 h-5.5" />
                  </div>
                  
                  <span className="text-[10px] font-bold text-accent-cyan uppercase tracking-wider block">{sol.tagline}</span>
                  <h3 className="font-display font-extrabold text-xl text-primary dark:text-white mt-1.5 mb-3 group-hover:text-accent-purple dark:group-hover:text-accent-cyan transition-colors">
                    {sol.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-550 dark:text-slate-400 font-light leading-relaxed mb-6">
                    {sol.desc}
                  </p>

                  <ul className="space-y-2 border-t border-slate-100 dark:border-slate-800/60 pt-4 mb-6">
                    {sol.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="text-xs text-slate-650 dark:text-slate-350 flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <Link
                    href={`/contact?solution=${encodeURIComponent(sol.title)}`}
                    className="inline-flex items-center space-x-2 text-xs font-bold text-accent-purple dark:text-accent-cyan hover:underline mt-2"
                  >
                    <span>Request Industry Blueprint</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Bottom Contact Panel */}
        <div className="mt-20 border border-slate-200/80 dark:border-slate-850 bg-white dark:bg-[#070a1e]/40 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-xl">
          <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-primary dark:text-white mb-3">
            Running a unique event configuration?
          </h3>
          <p className="text-xs sm:text-sm text-slate-550 dark:text-slate-400 font-light max-w-lg mx-auto mb-8">
            Tell us about your expected attendee count, ticketing tiers, and API database systems. We will build a customized integration demo for your organization.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-accent-purple hover:bg-[#6c28e2] text-white text-xs font-black px-6 py-3.5 rounded-xl shadow-lg shadow-accent-purple/20 transition-all"
          >
            <span>Talk to Event Solutions Engineer</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

    </main>
  );
}
