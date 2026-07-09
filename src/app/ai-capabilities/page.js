'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Send, Brain, Bot, HelpCircle, Calendar, Users, 
  BarChart3, Mail, FileText, BarChart4, Compass, ShieldAlert,
  ArrowRight, CheckCircle 
} from 'lucide-react';
import aiOrb from '../../assets/ai_orb.png';

const aiCapabilitiesList = [
  {
    icon: Bot,
    title: 'AI Event Assistant Chatbot',
    desc: 'An automated 24/7 attendee concierge. Resolves 85% of registration, session-location, and logistics questions instantly via web and mobile apps.',
    metric: 'Instant response times'
  },
  {
    icon: Calendar,
    title: 'AI Agenda Planner',
    desc: 'Automates scheduling conflicts and room optimization. Upload your list of talks and speakers; our models suggest the most logical tracks and schedules.',
    metric: 'Reduces planning time by 80%'
  },
  {
    icon: Users,
    title: 'AI Matchmaking Engine',
    desc: 'B2B matchmaking that works. Analyzes buyer needs and supplier products to schedule high-value networking slots and private board meetings.',
    metric: '98% matchmaking satisfaction'
  },
  {
    icon: BarChart3,
    title: 'AI Reporting & Insights',
    desc: 'Sifts through thousands of feedback surveys and ticket reports to extract actionable insights, NPS sentiment drivers, and revenue forecasts.',
    metric: 'NPS drivers auto-flagged'
  },
  {
    icon: Mail,
    title: 'AI Email & Content Generator',
    desc: 'Generate marketing campaigns, VIP invitation drafts, and session announcements matching your event tone. Seamless personalization at scale.',
    metric: '3.5x higher open rates'
  },
  {
    icon: FileText,
    title: 'AI Delegate Summary',
    desc: 'Pulls profile highlights from LinkedIn, session sign-ups, and preferences to present event coordinators and sponsors with summary digests.',
    metric: 'Personalized VIP dossiers'
  },
  {
    icon: BarChart4,
    title: 'AI Sponsor Insights',
    desc: 'Calculates logo visibility logs, booth foot traffic, and digital interaction scores to construct automated ROI reports for corporate sponsors.',
    metric: 'Detailed brand impact audits'
  },
  {
    icon: Compass,
    title: 'AI Recommendation Engine',
    desc: 'Suggests specific workshops, booths, and roundtable discussions to attendees based on their profile interest matrix.',
    metric: '+40% higher session attendance'
  },
  {
    icon: ShieldAlert,
    title: 'AI Support Assistant',
    desc: 'Supercharges your support desk. Scans incoming tickets, queries the event FAQ base, and drafts accurate responses for admins to approve.',
    metric: 'Avg response time < 2 mins'
  }
];

export default function AICapabilitiesPage() {
  const prompts = [
    { text: 'Draft email campaign for VIP attendees', response: 'Generating custom email draft...\n\nSubject: Exclusive VIP Briefing: Summit 2026\n\nDear [Name],\nWe are thrilled to invite you to...' },
    { text: 'Analyze sponsor ROI for Biotech sector', response: 'Sponsor ROI Report: Biotech Industry\n- Average Booth Traffic: 432 attendees (+15% YoY)\n- Matchmaking meetings scheduled: 89 B2B meetings\n- High-intent leads collected: 52 per sponsor' },
    { text: 'Create matchmaking pairings for Fintech track', response: 'Matchmaking Matrix Complete:\n- Identified 124 Buyer-Seller matches.\n- Top Match: Apex Capital & InsurTech Corp (98% match rate)\n- Auto-scheduling confirmations sent.' },
    { text: 'Draft a speaker bio summary for Dr. Sarah', response: 'Generating bio summary...\n\nDr. Sarah Jenkins is a leading researcher in quantum computing with 15+ years experience. She will chair session...' }
  ];

  const [activePromptIdx, setActivePromptIdx] = useState(0);
  const [typedResponse, setTypedResponse] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setIsTyping(true);
    setTypedResponse('');
    
    const responseText = prompts[activePromptIdx].response;
    let idx = 0;
    
    const typingInterval = setInterval(() => {
      setTypedResponse((prev) => prev + responseText[idx]);
      idx++;
      if (idx >= responseText.length) {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 12);

    return () => clearInterval(typingInterval);
  }, [activePromptIdx]);

  return (
    <main className="pt-24 min-h-screen bg-[#030712] text-white transition-colors duration-300 relative overflow-hidden">
      
      {/* Background glow effects */}
      <div className="absolute top-10 left-1/3 w-[600px] h-[600px] bg-accent-purple/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-cyan/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Hero section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 text-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-accent-cyan/35 bg-accent-cyan/5 text-accent-cyan text-xs font-semibold mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Intelligent Event Orchestration</span>
        </div>
        <h1 className="font-display font-extrabold text-4xl sm:text-6.5xl text-white tracking-tight leading-tight max-w-4xl mx-auto">
          Futuristic Event Tech Powered by Machine Learning
        </h1>
        <p className="mt-6 text-sm sm:text-base text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
          Let AI handle your complex agenda planning, guest matchmaking, automated sponsor reporting, and 24/7 support ticketing. Focus on strategy, not manual work.
        </p>
      </div>

      {/* Copilot Chat Sandbox Simulation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center bg-[#070a1e]/40 border border-slate-800/80 rounded-[36px] p-8 sm:p-12 backdrop-blur-xl">
          
          {/* Left Column: AI Orb & Prompt selection */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="relative w-64 h-64 mb-8 flex justify-center items-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-cyan/20 to-accent-purple/35 blur-2xl rounded-full animate-pulse-slow pointer-events-none" />
              <img 
                src={aiOrb.src || aiOrb} 
                alt="AI Hub Core Visual" 
                className="w-48 h-48 object-contain relative z-10 animate-pulse-glow"
              />
            </div>
            
            <h3 className="font-display font-extrabold text-2xl text-white mb-3 flex items-center space-x-2">
              <Brain className="w-6 h-6 text-accent-cyan" />
              <span>Ask the ConGenie Copilot</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6 max-w-sm">
              Click on a prompt below to see how our engine drafts copy, calculates ROI records, and sets B2B matches dynamically.
            </p>

            {/* Prompt Buttons */}
            <div className="flex flex-col space-y-3 w-full max-w-sm">
              {prompts.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePromptIdx(idx)}
                  className={`text-left px-4 py-3.5 rounded-xl border text-xs font-semibold transition-all duration-300 ${
                    activePromptIdx === idx
                      ? 'border-accent-cyan bg-accent-cyan/15 text-accent-cyan shadow-neon-cyan'
                      : 'border-slate-800 bg-[#0d1430]/30 text-slate-400 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  {p.text}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Dynamic Terminal / Browser console */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-[#040615] border border-slate-800/80 rounded-2xl overflow-hidden shadow-2xl relative">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between border-b border-slate-900 px-4 py-3 bg-[#070b22]">
                <div className="flex space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                </div>
                <span className="text-[10px] text-slate-500 font-mono">CONGENIE_AI_AGENT v1.4</span>
                <span className="w-10" />
              </div>

              {/* Console Space */}
              <div className="p-6 font-mono text-[11px] min-h-[220px] text-slate-350 space-y-4">
                <div className="flex items-start space-x-2">
                  <span className="text-accent-cyan font-bold">&gt;</span>
                  <span className="text-white font-semibold">{prompts[activePromptIdx].text}</span>
                </div>
                
                <div className="flex items-start space-x-2 pt-2 border-t border-slate-900/60">
                  <span className="text-accent-purple font-bold">congenie_bot:</span>
                  <pre className="text-emerald-450 dark:text-emerald-400 font-mono whitespace-pre-wrap flex-1 leading-relaxed">
                    {typedResponse}
                    {isTyping && <span className="inline-block w-1.5 h-4 bg-emerald-450 dark:bg-emerald-400 animate-pulse ml-0.5" />}
                  </pre>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Grid of 9 AI capabilities */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display font-extrabold text-3xl sm:text-4.5xl text-white tracking-tight">
            Complete Suite of Intelligent Capabilities
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-slate-400 font-light">
            An ecosystem of models designed specifically for security, attendee engagement, and corporate coordination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiCapabilitiesList.map((ai, idx) => {
            const Icon = ai.icon;
            return (
              <motion.div
                key={ai.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-[#090b20]/60 border border-slate-800/80 rounded-2xl p-6 sm:p-8 hover:border-accent-cyan/35 hover:shadow-2xl hover:shadow-accent-cyan/5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="p-3 rounded-xl border border-slate-850 bg-slate-950 w-max text-accent-cyan mb-6 group-hover:bg-accent-cyan/10 transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  <h3 className="font-display font-extrabold text-lg text-white mb-3">
                    {ai.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed mb-6">
                    {ai.desc}
                  </p>
                </div>

                <div className="flex items-center space-x-2 text-[10px] font-bold text-accent-purple font-mono uppercase border-t border-slate-900 pt-4">
                  <CheckCircle className="w-3.5 h-3.5 text-accent-cyan animate-pulse" />
                  <span>{ai.metric}</span>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Card */}
        <div className="mt-20 border border-accent-purple/30 bg-gradient-to-r from-accent-purple/10 to-accent-blue/10 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto backdrop-blur-md">
          <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-4">
            Want to see how it works in real-time?
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 font-light max-w-lg mx-auto mb-8">
            Schedule a session with our event architecture experts. We will build a sandbox template tailored specifically to your upcoming event parameters.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-accent-purple hover:bg-[#6c28e2] text-white text-xs font-black px-6 py-3.5 rounded-xl shadow-lg shadow-accent-purple/20 transition-all"
          >
            <span>Book live AI Demo</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

    </main>
  );
}
