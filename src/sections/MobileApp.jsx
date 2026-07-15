'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  QrCode, 
  UserCheck, 
  Map, 
  Bell, 
  Award, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import mobileAppScreen from '../assets/mobile_app_screen.png';

export default function MobileApp() {
  const appFeatures = [
    { title: 'Personalized Schedule', desc: 'Sync chosen sessions and B2B meetings into a single unified calendar.', icon: Clock },
    { title: 'Digital Entry QR Badge', desc: 'Instant paperless check-ins at entry gates and sponsor booth check-ins.', icon: QrCode },
    { title: 'B2B Meeting Manager', desc: 'Accept, decline, and reschedule matchmaking meetings directly in the app.', icon: UserCheck },
    { title: 'Interactive Floor Maps', desc: 'Pinpoint booth locations, tracks rooms, and local food setups easily.', icon: Map },
    { title: 'Instant Push Alerts', desc: 'Stay updated with agenda changes, speaker notifications, and sponsor offers.', icon: Bell },
    { title: 'In-App Appraisals & Feedback', desc: 'Submit surveys right after sessions to claim course credits/certificates.', icon: MessageSquare }
  ];

  const floatingCardVariants = {
    floatY: {
      y: [0, -10, 0],
      transition: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' }
    },
    floatYDelayed: {
      y: [0, -12, 0],
      transition: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }
    }
  };

  return (
    <section className="py-24 bg-slate-50 dark:bg-[#030712] transition-colors duration-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-accent-cyan/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Information */}
          <div className="lg:col-span-6 text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-accent-cyan/30 bg-accent-cyan/5 text-accent-cyan text-xs font-semibold mb-4">
              <span>Attendee Experience</span>
            </div>
            <h2 className="font-display text-primary dark:text-white mb-6">
              Empower Attendees with a Sleek Native App Experience
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
              Make B2B networking, navigation, schedules, and surveys accessible in one place. White-label app options available for enterprise customers.
            </p>

            {/* Feature List Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {appFeatures.map((feat) => {
                const IconComp = feat.icon;
                return (
                  <div key={feat.title} className="flex space-x-3 items-start">
                    <div className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/40 text-accent-blue dark:text-accent-cyan shadow-sm flex-shrink-0">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 dark:text-white">{feat.title}</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">{feat.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Visual Mockup */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            
            {/* Background Light Glow */}
            <div className="absolute w-72 h-72 rounded-full bg-accent-blue/15 blur-3xl pointer-events-none" />
            
            {/* Phone container */}
            <div className="relative w-64 aspect-[9/19] rounded-[40px] border-[6px] border-slate-800/80 bg-slate-950 shadow-2xl p-2.5 overflow-visible">
              <img 
                src={mobileAppScreen.src || mobileAppScreen} 
                alt="Event Attendee mobile app mockup screen"
                className="w-full h-full object-cover rounded-[30px]"
              />

              {/* Floating Widget 1: Notification */}
              <motion.div
                variants={floatingCardVariants}
                animate="floatY"
                className="absolute top-12 -left-16 glass-card px-3 py-2 rounded-xl shadow-lg border border-slate-200/50 dark:border-slate-850/40 flex items-center space-x-2.5 pointer-events-none"
              >
                <div className="p-1.5 rounded-lg bg-accent-cyan/10 text-accent-cyan">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-[10px] font-bold text-slate-800 dark:text-white">B2B Meeting</h5>
                  <p className="text-[8px] text-slate-500">Approved by CEO at Apex</p>
                </div>
              </motion.div>

              {/* Floating Widget 2: Certificate */}
              <motion.div
                variants={floatingCardVariants}
                animate="floatYDelayed"
                className="absolute bottom-20 -right-16 glass-card px-3 py-2.5 rounded-xl shadow-lg border border-slate-200/50 dark:border-slate-850/40 flex items-center space-x-2.5 pointer-events-none"
              >
                <div className="p-1.5 rounded-lg bg-green-500/10 text-green-500">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h5 className="text-[10px] font-bold text-slate-800 dark:text-white">Certificate Ready</h5>
                  <p className="text-[8px] text-slate-500">Download now in-app</p>
                </div>
              </motion.div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
