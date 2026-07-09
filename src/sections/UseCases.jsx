import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function UseCases() {
  const useCases = [
    {
      title: 'Medical Conferences',
      tagline: 'CME Credits & Abstract Portals',
      desc: 'Simplify healthcare congresses with online paper abstract submissions, blind peer review workflows, multi-track rooms, and automatic Continuing Medical Education (CME) certificates release.'
    },
    {
      title: 'Trade Missions',
      tagline: 'B2B Matchmaking Speedmeetings',
      desc: 'Maximize commercial exchange with our B2B matchmaking wizard. Match buyers with suppliers, auto-schedule private room tables, and let delegates manage their availability profiles.'
    },
    {
      title: 'Government Summits',
      tagline: 'High Security Protocols & VIP Check-ins',
      desc: 'Deploy secure registration gates with whitelist-only VIP clearance checkmarks, onsite barcode scanning, encrypted data policies, and offline-compatible check-in systems.'
    },
    {
      title: 'Exhibitions & Trade Shows',
      tagline: 'Interactive Maps & Lead Retrievals',
      desc: 'Equip exhibitors with scanner apps to gather high-intent leads at their booths. Provide dynamic SVG floor plans showing real-time booth bookings status and schedules.'
    },
    {
      title: 'Corporate Events & AGMs',
      tagline: 'White-Label Branding & Secure Voting',
      desc: 'Host partner summits, product launches, or annual general meetings with clean, branded registration systems, live attendee feedback surveys, and secure document vaults.'
    },
    {
      title: 'Association Conferences',
      tagline: 'Member Tier Discounts & Auto Renewals',
      desc: 'Reward loyal members with promo discounts tied directly to association database systems, custom ticket categories, multi-session signups, and automated attendee badges routing.'
    }
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-[#030712] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-accent-blue/30 bg-accent-blue/5 text-accent-blue text-xs font-semibold mb-4">
            <span>Tailored Solutions</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary dark:text-white">
            Engineered for Diverse Industry Use Cases
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Every event format has its own complexities. EVNT.AI adapts to your specific operational workflows out of the box.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((uc, idx) => (
            <motion.div
              key={uc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="glass-card p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/40 flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:border-accent-purple/30 group"
            >
              <div>
                <span className="text-[10px] text-accent-purple font-bold uppercase tracking-wider">{uc.tagline}</span>
                <h3 className="font-display font-extrabold text-xl text-primary dark:text-white mt-2 mb-4 group-hover:text-accent-blue dark:group-hover:text-accent-cyan transition-colors">
                  {uc.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                  {uc.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/50 flex items-center space-x-2 text-xs font-semibold text-slate-550 dark:text-slate-350">
                <Sparkles className="w-4 h-4 text-accent-cyan" />
                <span>Custom templates preloaded</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
