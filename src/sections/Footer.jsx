'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, Mail, Send } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => {
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="bg-[#0a0f24] text-slate-400 border-t border-slate-900 pt-16 pb-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-slate-900">
          
          {/* Logo & Description Column */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <Link href="/" className="flex items-center">
              <img 
                src="https://congenie.com/assets/images/logo-next.png" 
                alt="ConGenie Logo" 
                className="h-8 w-auto object-contain"
              />
            </Link>
            
            <p className="text-xs text-slate-400 leading-relaxed font-light max-w-sm">
              The complete enterprise-grade event technology platform. Manage tickets, custom badge designs, B2B matchmaking schedulers, onsite check-in, and feedback analysis in one dashboard.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="#" className="p-2.5 rounded-lg border border-slate-900 bg-[#0d1430]/40 text-slate-455 hover:text-white hover:border-slate-800 transition-all duration-300" aria-label="Twitter">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="p-2.5 rounded-lg border border-slate-900 bg-[#0d1430]/40 text-slate-455 hover:text-white hover:border-slate-800 transition-all duration-300" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" className="p-2.5 rounded-lg border border-slate-900 bg-[#0d1430]/40 text-slate-455 hover:text-white hover:border-slate-800 transition-all duration-300" aria-label="GitHub">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Sitemaps */}
          {/* Solutions Column */}
          <div className="lg:col-span-2 text-left space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Solutions</h4>
            <ul className="space-y-2.5 text-xs">
              {['Medical Congresses', 'Trade Missions', 'Exhibitions & Shows', 'Corporate AGMs', 'Summit Conferences'].map((link) => (
                <li key={link}>
                  <Link href="/solutions" className="hover:text-accent-cyan transition-colors font-light">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Feature Modules Column */}
          <div className="lg:col-span-2 text-left space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Modules</h4>
            <ul className="space-y-2.5 text-xs">
              {['Smart Matchmaking', 'Badge & QR Designer', 'Onsite Check-in App', 'Invoice Gateways', 'Travel & Hotel Block'].map((link) => (
                <li key={link}>
                  <Link href="/modules" className="hover:text-accent-cyan transition-colors font-light">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-2 text-left space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Contact</h4>
            <ul className="space-y-2.5 text-xs font-light">
              <li className="text-slate-400">ConGenie Technology Inc</li>
              <li className="text-slate-450">75 Wall Street, New York</li>
              <li className="hover:text-white transition-colors">
                <a href="mailto:solutions@congenie.com">solutions@congenie.com</a>
              </li>
              <li className="hover:text-white transition-colors">
                <a href="tel:+15550291911">+1 (555) 029-1911</a>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-2 text-left space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Newsletter</h4>
            <p className="text-[10px] text-slate-450 leading-relaxed font-light">
              Get bi-weekly enterprise updates on B2B matchmaking strategies and check-in hardware.
            </p>

            <form onSubmit={handleSubscribe} className="relative flex items-center">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#0d132d] border border-slate-900 rounded-xl py-3 pl-3 pr-10 text-[10px] text-white placeholder-slate-550 focus:outline-none focus:border-slate-800 transition-colors"
                placeholder="Email address"
              />
              <button
                type="submit"
                className="absolute right-1 p-2 rounded-lg bg-accent-blue hover:bg-accent-purple text-white transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
            
            {subscribed && (
              <p className="text-[9px] text-green-500 font-semibold animate-pulse">
                Successfully subscribed!
              </p>
            )}
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[10px] text-slate-500 space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} ConGenie Technology Inc. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-slate-350 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-350 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-350 transition-colors">Compliance SLAs</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
