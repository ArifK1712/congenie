'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Calendar, Mail, Phone, MapPin, CheckCircle, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    eventType: 'Conference',
    attendeeCount: '500 - 2,000',
    demoDate: '',
    demoTime: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      eventType: 'Conference',
      attendeeCount: '500 - 2,000',
      demoDate: '',
      demoTime: '',
      message: ''
    });
    setSubmitted(false);
  };

  return (
    <main className="pt-24 min-h-screen bg-slate-50 dark:bg-[#030712] transition-colors duration-300">
      
      {/* Background glow effects */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-accent-purple/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-[1400px] mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact details & positioning */}
          <div className="lg:col-span-5 text-left space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-accent-purple/35 bg-accent-purple/5 text-accent-purple text-xs font-semibold mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Book a Demo Session</span>
              </div>
              <h1 className="font-display text-primary dark:text-white">
                Let’s Discuss Your Upcoming Event Tech Needs
              </h1>
              <p className="mt-4 text-xs sm:text-sm text-slate-550 dark:text-slate-400 leading-relaxed">
                Connect with our systems architects. Fill out your target parameters and we will schedule a live sandbox walkthrough custom-made for your workflow.
              </p>
            </div>

            <hr className="border-slate-200 dark:border-slate-800/80" />

            <div className="space-y-6 text-xs sm:text-sm font-light text-slate-650 dark:text-slate-350">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-accent-purple">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-slate-400 uppercase tracking-widest text-[9px] font-bold">Solutions Email</span>
                  <a href="mailto:solutions@congenie.com" className="font-bold text-primary dark:text-white hover:underline">solutions@congenie.com</a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-accent-purple">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-slate-400 uppercase tracking-widest text-[9px] font-bold">Corporate Hotline</span>
                  <a href="tel:+15550291911" className="font-bold text-primary dark:text-white hover:underline">+1 (555) 029-1911</a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-accent-purple">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-slate-400 uppercase tracking-widest text-[9px] font-bold">New York Headquarters</span>
                  <span className="font-semibold text-primary dark:text-white">75 Wall Street, New York, NY 10005</span>
                </div>
              </div>
            </div>

            <hr className="border-slate-200 dark:border-slate-800/80" />

            <div className="p-5 rounded-2xl bg-[#070a1e]/40 border border-slate-200/50 dark:border-slate-800/40 text-left">
              <span className="text-[9px] font-bold text-accent-cyan uppercase tracking-widest block mb-1">Standard SLAs</span>
              <p className="text-xs text-slate-550 dark:text-slate-400 leading-relaxed">
                Response timeline: Under 4 business hours for enterprise queries. Platform deployment timelines average 2-4 weeks from setup parameters verification.
              </p>
            </div>
          </div>

          {/* Right Column: Demo Form Card */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-white dark:bg-[#070a1e]/40 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-[-2rem] right-[-2rem] w-24 h-24 bg-accent-purple/10 rounded-full blur-xl pointer-events-none" />

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5 text-left"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-450 dark:text-slate-500 uppercase tracking-wider mb-1.5">Contact Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-850 rounded-xl py-3 px-4 text-xs text-primary dark:text-white placeholder-slate-450 focus:outline-none focus:border-accent-purple transition-all"
                          placeholder="e.g. Dr. Sarah Jenkins"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-450 dark:text-slate-500 uppercase tracking-wider mb-1.5">Business Email</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-850 rounded-xl py-3 px-4 text-xs text-primary dark:text-white placeholder-slate-450 focus:outline-none focus:border-accent-purple transition-all"
                          placeholder="name@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-450 dark:text-slate-500 uppercase tracking-wider mb-1.5">Company Name</label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-850 rounded-xl py-3 px-4 text-xs text-primary dark:text-white placeholder-slate-450 focus:outline-none focus:border-accent-purple transition-all"
                          placeholder="e.g. Chevron Corp"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-450 dark:text-slate-500 uppercase tracking-wider mb-1.5">Event Type</label>
                        <select
                          value={formData.eventType}
                          onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                          className="w-full bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-850 rounded-xl py-3 px-4 text-xs text-primary dark:text-white focus:outline-none focus:border-accent-purple transition-all"
                        >
                          <option value="Conference">Scientific / B2B Conference</option>
                          <option value="Exhibition">Trade Expo / Exhibition</option>
                          <option value="Medical Congress">Medical Congress</option>
                          <option value="Corporate AGM">Corporate AGM / Summit</option>
                          <option value="Trade Mission">International Trade Mission</option>
                          <option value="Workshop">Workshops & Seminars</option>
                          <option value="Hybrid Event">Hybrid Event</option>
                          <option value="Association Event">Association Event</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-450 dark:text-slate-500 uppercase tracking-wider mb-1.5">Attendee count</label>
                        <select
                          value={formData.attendeeCount}
                          onChange={(e) => setFormData({ ...formData, attendeeCount: e.target.value })}
                          className="w-full bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-850 rounded-xl py-3 px-4 text-xs text-primary dark:text-white focus:outline-none focus:border-accent-purple transition-all"
                        >
                          <option value="Under 500">Under 500 guests</option>
                          <option value="500 - 2,000">500 - 2,000 guests</option>
                          <option value="2,000 - 10,000">2,000 - 10,000 guests</option>
                          <option value="Over 10,000">Over 10,000 guests</option>
                        </select>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-[10px] font-bold text-slate-450 dark:text-slate-500 uppercase tracking-wider mb-1.5">Preferred Date</label>
                          <input
                            type="date"
                            required
                            value={formData.demoDate}
                            onChange={(e) => setFormData({ ...formData, demoDate: e.target.value })}
                            className="w-full bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-850 rounded-xl py-3 px-2 text-[10px] text-primary dark:text-white focus:outline-none focus:border-accent-purple transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-bold text-slate-450 dark:text-slate-500 uppercase tracking-wider mb-1.5">Preferred Time</label>
                          <input
                            type="time"
                            required
                            value={formData.demoTime}
                            onChange={(e) => setFormData({ ...formData, demoTime: e.target.value })}
                            className="w-full bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-850 rounded-xl py-3 px-2 text-[10px] text-primary dark:text-white focus:outline-none focus:border-accent-purple transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-slate-450 dark:text-slate-500 uppercase tracking-wider mb-1.5">Describe your event parameters</label>
                      <textarea
                        rows="4"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-850 rounded-xl py-3 px-4 text-xs text-primary dark:text-white placeholder-slate-450 focus:outline-none focus:border-accent-purple transition-all"
                        placeholder="Please include details like current ticketing suppliers, onsite badging needs, abstract portals requirements, B2B matchmaking plans..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-accent-purple hover:bg-[#6c28e2] text-white text-xs font-black py-4 rounded-xl shadow-lg shadow-accent-purple/20 transition-all flex items-center justify-center space-x-2"
                    >
                      <span>Request Demo Sandbox Setup</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10 space-y-6"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto animate-pulse" />
                    
                    <div className="space-y-2">
                      <h3 className="font-display text-primary dark:text-white">
                        Demo Request Registered!
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-550 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
                        Thank you, <strong className="text-primary dark:text-white">{formData.name}</strong>. We have scheduled an invitation request for <strong className="text-primary dark:text-white">{formData.demoDate} at {formData.demoTime}</strong>. A systems engineer will send a confirmation calendar invite to <strong className="text-primary dark:text-white">{formData.email}</strong> under 4 business hours.
                      </p>
                    </div>

                    <button
                      onClick={handleReset}
                      className="inline-flex items-center space-x-2 text-xs font-bold text-accent-purple dark:text-accent-cyan hover:underline"
                    >
                      <span>Submit another inquiry</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>

    </main>
  );
}
