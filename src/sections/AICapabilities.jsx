'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Send, Brain, Bot, CornerDownLeft, RefreshCw } from 'lucide-react';
import aiOrb from '../assets/ai_orb.png';

export default function AICapabilities() {
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
    }, 15); // typing speed

    return () => clearInterval(typingInterval);
  }, [activePromptIdx]);

  return (
    <section id="ai-capabilities" className="py-24 bg-gradient-to-b from-[#0a0f24] to-[#040612] text-white relative overflow-hidden">
      {/* Glow shapes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-purple/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-10 w-96 h-96 rounded-full bg-accent-cyan/5 blur-3xl pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-accent-cyan/40 bg-accent-cyan/10 text-accent-cyan text-xs font-semibold mb-4 shadow-neon-cyan animate-pulse">
            <Bot className="w-4 h-4 text-accent-cyan" />
            <span>Intelligent Automation Engine</span>
          </div>
          <h2 className="font-display text-white">
            Built with AI to Make Event Management Smarter
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Let machine learning handle matchmaking, session suggestions, and routine tasks, saving you hundreds of hours.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: AI Orb & Prompt Selection */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="relative w-72 h-72 mb-10 flex justify-center items-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-cyan/20 to-accent-purple/30 blur-2xl rounded-full animate-pulse-slow pointer-events-none" />
              <img 
                src={aiOrb.src || aiOrb} 
                alt="AI Hub Core Visual" 
                className="w-56 h-56 object-contain relative z-10 animate-pulse-glow"
              />
            </div>
            
            <h3 className="text-xl font-display text-white mb-4 flex items-center space-x-2">
              <Brain className="w-5 h-5 text-accent-cyan" />
              <span>Ask the ConGenie Copilot</span>
            </h3>
            <p className="text-sm text-slate-400 mb-6 max-w-sm">
              Click on a prompt below to see how the system generates data, designs campaigns, and coordinates meetings.
            </p>

            {/* Prompt Buttons */}
            <div className="flex flex-col space-y-3 w-full max-w-sm">
              {prompts.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePromptIdx(idx)}
                  className={`text-left px-4 py-3.5 rounded-xl border text-sm font-medium transition-all duration-300 ${
                    activePromptIdx === idx
                      ? 'border-accent-cyan bg-accent-cyan/10 text-accent-cyan shadow-neon-cyan'
                      : 'border-slate-800 bg-[#0d1430]/40 text-slate-400 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  {p.text}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Chat Interface */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl border border-slate-800/80 bg-[#070b1a]/90 shadow-2xl overflow-hidden backdrop-blur-md">
              {/* Top window bar */}
              <div className="flex items-center justify-between px-6 py-4 bg-[#0a0f24] border-b border-slate-800/80">
                <div className="flex items-center space-x-3">
                  <div className="relative w-8 h-8 rounded-full bg-accent-cyan/10 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-accent-cyan" />
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-[#0a0f24]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">ConGenie Assistant</h4>
                    <p className="text-[10px] text-green-500 font-semibold tracking-wide">COPILOT ACTIVE</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <span className="w-3 h-3 rounded-full bg-slate-800" />
                  <span className="w-3 h-3 rounded-full bg-slate-800" />
                  <span className="w-3 h-3 rounded-full bg-slate-800" />
                </div>
              </div>

              {/* Chat Body */}
              <div className="p-6 min-h-[300px] flex flex-col justify-between space-y-6">
                
                {/* Message Flow */}
                <div className="space-y-4">
                  {/* User Prompt Message */}
                  <div className="flex justify-end">
                    <div className="bg-accent-blue px-4 py-3 rounded-2xl rounded-tr-none max-w-[80%] text-sm font-medium text-white shadow-md">
                      {prompts[activePromptIdx].text}
                    </div>
                  </div>

                  {/* AI Response Message */}
                  <div className="flex justify-start items-start space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-accent-purple/20 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-4 h-4 text-accent-purple" />
                    </div>
                    <div className="bg-[#111936] px-4 py-3.5 rounded-2xl rounded-tl-none max-w-[85%] text-sm text-slate-350 font-mono whitespace-pre-line border border-slate-800/50 shadow-md">
                      {typedResponse}
                      {isTyping && (
                        <span className="inline-block w-1.5 h-4 ml-1 bg-accent-cyan animate-pulse" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer Input Bar */}
                <div className="pt-4 border-t border-slate-800/60 flex items-center space-x-3">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      readOnly
                      placeholder="Ask the AI copilot..."
                      className="w-full bg-[#0d132d] border border-slate-850 rounded-xl py-3.5 px-4 pr-12 text-sm text-slate-400 focus:outline-none cursor-not-allowed"
                    />
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500">
                      <CornerDownLeft className="w-4 h-4" />
                    </div>
                  </div>
                  <button className="bg-accent-cyan hover:brightness-110 text-primary p-3.5 rounded-xl transition-all duration-300 cursor-not-allowed">
                    <Send className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
