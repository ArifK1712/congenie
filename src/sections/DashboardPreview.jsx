'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Layers, 
  UserCheck, 
  DollarSign, 
  Calendar, 
  BarChart, 
  Smartphone, 
  CheckCircle,
  Plus,
  ArrowUpRight
} from 'lucide-react';

export default function DashboardPreview() {
  const tabs = [
    { id: 'admin', label: 'Admin Dashboard', icon: Shield },
    { id: 'organizer', label: 'Organizer', icon: Layers },
    { id: 'registration', label: 'Registration', icon: UserCheck },
    { id: 'finance', label: 'Finance', icon: DollarSign },
    { id: 'agenda', label: 'Agenda', icon: Calendar },
    { id: 'analytics', label: 'Analytics', icon: BarChart },
    { id: 'attendee', label: 'Attendee App', icon: Smartphone }
  ];

  const [activeTab, setActiveTab] = useState('admin');

  // Dummy Dashboard Content Data
  const renderDashboardContent = () => {
    switch (activeTab) {
      case 'admin':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-xl">
                <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">Global Platform Uptime</p>
                <h4 className="text-xl font-bold text-slate-800 dark:text-white mt-1">99.99%</h4>
              </div>
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-xl">
                <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">Active Tenant Orgs</p>
                <h4 className="text-xl font-bold text-slate-800 dark:text-white mt-1">124</h4>
              </div>
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-xl">
                <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">API Requests (24h)</p>
                <h4 className="text-xl font-bold text-slate-800 dark:text-white mt-1">1.8M</h4>
              </div>
            </div>
            
            {/* SVG line chart */}
            <div className="bg-slate-100 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200/50 dark:border-slate-800/40">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-sm font-bold text-slate-800 dark:text-white">API Performance (Gateway latency)</h4>
                <span className="text-[10px] text-green-500 font-semibold bg-green-500/10 px-2 py-0.5 rounded-full">Optimal</span>
              </div>
              <svg viewBox="0 0 400 120" className="w-full h-32 overflow-visible">
                <path d="M 0 100 Q 80 50 160 80 T 320 20 T 400 60" fill="none" stroke="url(#accent-gradient)" strokeWidth="3" />
                <path d="M 0 100 Q 80 50 160 80 T 320 20 T 400 60 L 400 120 L 0 120 Z" fill="url(#area-gradient)" opacity="0.1" />
                <line x1="0" y1="120" x2="400" y2="120" stroke="currentColor" className="text-slate-300 dark:text-slate-800" strokeWidth="1" />
                {/* Gradients definitions */}
                <defs>
                  <linearGradient id="accent-gradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#00f0ff" />
                    <stop offset="50%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                  <linearGradient id="area-gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        );
      case 'organizer':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h4 className="text-sm font-bold text-slate-800 dark:text-white">Summit 2026 Checklists</h4>
              <span className="text-xs text-accent-blue font-semibold">82% Complete</span>
            </div>
            
            <div className="space-y-3">
              {[
                { label: 'Collect Speaker bios & papers', done: true },
                { label: 'Generate registration badge layouts', done: true },
                { label: 'Allocate sponsor booths in hall 3', done: false },
                { label: 'Send automated email reminder to attendees', done: false }
              ].map((todo, idx) => (
                <div key={idx} className="flex items-center space-x-3 bg-slate-100 dark:bg-slate-900 p-3 rounded-xl">
                  <CheckCircle className={`w-5 h-5 flex-shrink-0 ${todo.done ? 'text-green-500' : 'text-slate-300 dark:text-slate-700'}`} />
                  <span className={`text-xs ${todo.done ? 'line-through text-slate-400' : 'text-slate-700 dark:text-slate-350'}`}>{todo.label}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case 'registration':
        return (
          <div className="space-y-5">
            <div className="flex justify-between items-center">
              <h4 className="text-sm font-bold text-slate-800 dark:text-white">Recent Registrations Queue</h4>
              <span className="text-xs text-slate-500 dark:text-slate-400">Total: 1,402</span>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800 text-[10px] text-slate-450 uppercase font-bold">
                    <th className="py-2">Name</th>
                    <th className="py-2">Company</th>
                    <th className="py-2">Category</th>
                    <th className="py-2">Status</th>
                  </tr>
                </thead>
                <tbody className="text-xs divide-y divide-slate-150 dark:divide-slate-850">
                  {[
                    { name: 'Dr. Evelyn Harris', company: 'Global Healthcare Inc', cat: 'Speaker', status: 'Approved' },
                    { name: 'Marcus Sterling', company: 'Apex Fintech', cat: 'Delegate', status: 'Approved' },
                    { name: 'Amelia Chen', company: 'BioLabs Global', cat: 'Sponsor', status: 'Pending' }
                  ].map((row, idx) => (
                    <tr key={idx} className="text-slate-700 dark:text-slate-300">
                      <td className="py-2.5 font-semibold">{row.name}</td>
                      <td className="py-2.5 text-slate-550 dark:text-slate-400">{row.company}</td>
                      <td className="py-2.5"><span className="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-850 text-slate-800 dark:text-slate-200 font-mono text-[9px]">{row.cat}</span></td>
                      <td className="py-2.5">
                        <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold ${row.status === 'Approved' ? 'bg-green-500/10 text-green-500' : 'bg-amber-500/10 text-amber-550'}`}>
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'finance':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-xl">
                <p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold">Gross Revenue</p>
                <h4 className="text-2xl font-black text-slate-800 dark:text-white mt-1">$245,800</h4>
              </div>
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-xl">
                <p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-bold">Refunds Rate</p>
                <h4 className="text-2xl font-black text-red-500 mt-1">0.45%</h4>
              </div>
            </div>

            <div className="bg-slate-100 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-200/50 dark:border-slate-800/40">
              <div className="flex justify-between items-center mb-2">
                <h5 className="text-xs font-bold text-slate-800 dark:text-white">Income by Gateways</h5>
                <span className="text-[10px] text-slate-400">USD</span>
              </div>
              
              <div className="space-y-2">
                {[
                  { gateway: 'Stripe Pay', percent: 65, value: '$159,770' },
                  { gateway: 'Apple Pay / PayPal', percent: 25, value: '$61,450' },
                  { gateway: 'Direct Wire', percent: 10, value: '$24,580' }
                ].map((g, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-slate-600 dark:text-slate-400">{g.gateway}</span>
                      <span className="text-slate-800 dark:text-white">{g.value}</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-accent-cyan h-full rounded-full" style={{ width: `${g.percent}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'agenda':
        return (
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-800 dark:text-white">Active Room Timelines</h4>
            
            <div className="space-y-3">
              {[
                { time: '09:00 - 10:00 AM', title: 'Quantum Computing Opening Keynote', room: 'Plenary Hall', speaker: 'Dr. Sarah Jenkins' },
                { time: '10:15 - 11:30 AM', title: 'Smart Cities & AI Infrastructure panel', room: 'Room 202', speaker: 'Panel Discussion' },
                { time: '11:45 - 12:45 PM', title: 'Future of B2B Matchmaking algorithms', room: 'Hall B', speaker: 'Alice Fletcher' }
              ].map((session, idx) => (
                <div key={idx} className="border-l-4 border-accent-blue bg-slate-100 dark:bg-slate-900 p-3 rounded-r-xl">
                  <div className="flex justify-between text-[10px] text-slate-550 dark:text-slate-400 font-semibold mb-1">
                    <span>{session.time}</span>
                    <span>{session.room}</span>
                  </div>
                  <h5 className="text-xs font-bold text-slate-800 dark:text-white">{session.title}</h5>
                  <p className="text-[10px] text-slate-500 dark:text-slate-450 mt-0.5">Speaker: {session.speaker}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 'analytics':
        return (
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-800 dark:text-white">B2B Matchmaking & Engagement</h4>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-xl flex flex-col items-center justify-center text-center">
                <h5 className="text-2xl font-black text-accent-purple">2,890</h5>
                <p className="text-[9px] text-slate-500 dark:text-slate-450 uppercase font-bold mt-1">Meetings Confirmed</p>
              </div>
              <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-xl flex flex-col items-center justify-center text-center">
                <h5 className="text-2xl font-black text-accent-cyan">87%</h5>
                <p className="text-[9px] text-slate-500 dark:text-slate-450 uppercase font-bold mt-1">Acceptance Rate</p>
              </div>
            </div>

            <div className="bg-slate-100 dark:bg-slate-900 p-4 rounded-xl">
              <h5 className="text-xs font-bold text-slate-800 dark:text-white mb-2">Participant Interest breakdown</h5>
              <div className="flex flex-wrap gap-2">
                {['Artificial Intelligence', 'Green Energy', 'Fintech Infrastructure', 'Biotech Science', 'Smart Logistics'].map((tag, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-[10px] text-slate-700 dark:text-slate-300 font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      case 'attendee':
        return (
          <div className="space-y-4 flex flex-col items-center">
            {/* Screen layout mockup */}
            <div className="w-full max-w-[280px] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-4 rounded-3xl shadow-inner">
              <div className="w-16 h-3 bg-slate-200 dark:bg-slate-800 rounded-full mx-auto mb-4" />
              
              <div className="space-y-3">
                {/* Ticket badge */}
                <div className="bg-gradient-to-tr from-accent-blue/15 to-accent-purple/15 p-3 rounded-2xl border border-slate-200/50 dark:border-slate-800/30 text-center">
                  <span className="text-[9px] font-bold text-accent-purple uppercase tracking-wider">YOUR ENTRY BADGE</span>
                  <div className="w-14 h-14 bg-slate-350 dark:bg-slate-800 rounded mx-auto my-2 flex items-center justify-center">
                    <span className="text-[8px] text-slate-500">QR Code</span>
                  </div>
                  <h6 className="text-[10px] font-bold text-slate-800 dark:text-white">Marcus Sterling</h6>
                  <p className="text-[8px] text-slate-500">Standard Delegate</p>
                </div>

                {/* Next Session notification */}
                <div className="bg-slate-50 dark:bg-slate-900/80 p-2.5 rounded-xl border border-slate-100 dark:border-slate-850">
                  <p className="text-[8px] text-accent-cyan font-bold">UPCOMING IN 10 MINS</p>
                  <h6 className="text-[10px] font-bold text-slate-850 dark:text-slate-100">Quantum Computing Session</h6>
                  <p className="text-[8px] text-slate-500">Main Room • Seat A12</p>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-24 bg-slate-50 dark:bg-[#030712] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-accent-blue/30 bg-accent-blue/5 text-accent-blue text-xs font-semibold mb-4">
            <span>Explore Interfaces</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-primary dark:text-white">
            Designed for Every User Role & Dashboard View
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            A look inside the software dashboards. Experience how admins, sponsors, speakers, and delegates view their workspace.
          </p>
        </div>

        {/* Tab Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Tabs Menu List */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 gap-3 no-scrollbar scroll-smooth">
            {tabs.map((tab) => {
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-3 px-5 py-4 rounded-2xl border text-sm font-bold transition-all duration-300 flex-shrink-0 lg:flex-shrink-1 text-left ${
                    activeTab === tab.id
                      ? 'border-accent-blue bg-white dark:bg-slate-900 text-accent-blue dark:text-accent-cyan shadow-lg lg:translate-x-2'
                      : 'border-slate-200/50 dark:border-slate-800/40 bg-white/40 dark:bg-[#0d1430]/20 text-slate-500 dark:text-slate-400 hover:border-slate-350 hover:bg-white dark:hover:bg-slate-900/50'
                  }`}
                >
                  <TabIcon className="w-5 h-5 flex-shrink-0" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Interactive Screen Preview */}
          <div className="lg:col-span-8">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-200/60 dark:border-slate-800/50 shadow-2xl relative min-h-[350px] flex flex-col justify-center">
              
              {/* Fake Window Controls */}
              <div className="flex items-center space-x-2 mb-6 border-b border-slate-200/50 dark:border-slate-800/40 pb-4">
                <span className="w-3.5 h-3.5 rounded-full bg-red-400" />
                <span className="w-3.5 h-3.5 rounded-full bg-yellow-400" />
                <span className="w-3.5 h-3.5 rounded-full bg-green-400" />
                <span className="text-xs text-slate-400 font-semibold font-mono pl-4">
                  console://congenie.com/dashboards/{activeTab}
                </span>
              </div>

              {/* Tab Display Panel with Motion */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {renderDashboardContent()}
                </motion.div>
              </AnimatePresence>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
