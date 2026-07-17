'use client';

import React from 'react';
import { Sparkles, ChevronRight } from 'lucide-react';

import dashboardMockup from '../assets/dashboard-mockup.webp';
import aiOrb from '../assets/badge-module.webp';
import mobileAppScreen from '../assets/app-attendee.webp';
import heroCardAttendee from '../assets/support.webp';
import attendeePortrait from '../assets/ai-congenie.webp';
import lightDashboardMockup from '../assets/light-dashboard.webp';
import onsiteKioskMockup from '../assets/event-app.webp';

export default function Hero() {
  const cards = [
    {
      src: aiOrb,
      alt: 'AI Orb Tech',
      className:
        'w-[50px] sm:w-[9vw] aspect-[3/4] translate-y-10 z-10 border border-white/5 bg-slate-950/40 p-1 sm:p-2 backdrop-blur-md rounded-2xl flex-shrink-0 shadow-lg shadow-black/30',
    },
    {
      src: mobileAppScreen,
      alt: 'Attendee App Layout',
      className:
        'w-[60px] sm:w-[11vw] aspect-[3/4] translate-y-5 z-20 border border-white/8 bg-slate-950/45 p-1 sm:p-2 backdrop-blur-md rounded-2xl flex-shrink-0 shadow-xl shadow-black/40',
    },
    {
      src: attendeePortrait,
      alt: 'Event Attendee Portrait',
      className:
        'w-[75px] sm:w-[13vw] aspect-[3/4] translate-y-1 z-30 border border-white/10 bg-slate-950/50 p-1 sm:p-2 backdrop-blur-md rounded-2xl flex-shrink-0 shadow-2xl shadow-black/50',
    },
    {
      src: dashboardMockup,
      alt: 'ConGenie Event Dashboard Console',
      highlight: true,
      className:
        'w-[100px] sm:w-[18vw] aspect-[3/4] -translate-y-4 z-40 border-2 border-accent-purple ring-4 ring-accent-purple/20 bg-slate-950/75 p-1.5 sm:p-3 rounded-3xl flex-shrink-0 shadow-[0_0_40px_rgba(132,61,245,0.25)]',
    },
    {
      src: lightDashboardMockup,
      alt: 'AI Core Processor Hub',
      className:
        'w-[75px] sm:w-[13vw] aspect-[3/4] translate-y-1 z-30 border border-white/10 bg-slate-950/50 p-1 sm:p-2 backdrop-blur-md rounded-2xl flex-shrink-0 shadow-2xl shadow-black/50',
    },
    {
      src: onsiteKioskMockup,
      alt: 'Attendee Ticket QR',
      className:
        'w-[60px] sm:w-[11vw] aspect-[3/4] translate-y-5 z-20 border border-white/8 bg-slate-950/45 p-1 sm:p-2 backdrop-blur-md rounded-2xl flex-shrink-0 shadow-xl shadow-black/40',
    },
    {
      src: heroCardAttendee,
      alt: 'Event Attendee Portrait Copy',
      className:
        'w-[50px] sm:w-[9vw] aspect-[3/4] translate-y-10 z-10 border border-white/5 bg-slate-950/40 p-1 sm:p-2 backdrop-blur-md rounded-2xl flex-shrink-0 shadow-lg shadow-black/30',
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-36 pb-10 overflow-hidden flex flex-col justify-center items-center bg-gradient-to-b from-[#060b24] via-[#091136] to-[#020412] w-full"
    >
      {/* Cinematic Glow Blobs & Center Radial Lights */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-accent-blue/12 to-accent-purple/12 rounded-full blur-[140px] pointer-events-none" />

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-accent-cyan/10 to-accent-blue/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] rounded-full bg-accent-purple/12 blur-[130px] animate-pulse-slow pointer-events-none" />

      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] rounded-full bg-accent-cyan/10 blur-[120px] pointer-events-none" />

      <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-accent-blue/8 blur-[140px] pointer-events-none" />

      {/* 3D Perspective Grid Floor */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[350px] overflow-hidden pointer-events-none z-0"
        style={{ perspective: '800px' }}
      >
        <div
          className="absolute inset-0 w-full h-[500px]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(0, 240, 255, 0.15) 2px, transparent 2px), linear-gradient(to bottom, rgba(132, 61, 245, 0.15) 2px, transparent 2px)',
            backgroundSize: '60px 60px',
            transform: 'rotateX(75deg) translateZ(0)',
            transformOrigin: 'top center',
            maskImage:
              'linear-gradient(to bottom, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 80%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, rgba(0,0,0,1) 10%, rgba(0,0,0,0) 80%)',
          }}
        />
      </div>

      {/* Grid Lines Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Static Hero Content */}
      <div className="max-w-[1400px] mx-auto px-4 relative z-10 w-full text-center flex flex-col items-center">
        {/* Hero Badge */}
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-slate-300 text-sm font-semibold mb-6 shadow-sm shadow-accent-purple/10 backdrop-blur-md cursor-default">
          <Sparkles className="w-4 h-4 text-accent-cyan animate-pulse" />

          <span>AI-Powered Event Management Software</span>
        </div>

        {/* Static Main Heading */}
        <h1 className="font-display text-white max-w-5xl">
          Manage Your Entire Event Lifecycle with One Intelligent Platform
        </h1>

        {/* Static Subheading */}
        <p className="mt-6 text-lg sm:text-xl text-slate-400 leading-relaxed max-w-3xl">
          From registration and agenda planning to onsite check-in,
          matchmaking, payments, accommodation, analytics, and post-event
          reporting — our AI-powered event software helps organizers deliver
          smarter, faster, and more engaging events.
        </p>

        {/* Static CTA Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="/contact"
            className="px-8 py-4 rounded-2xl text-white font-medium text-base bg-accent-purple hover:bg-[#6c28e2] transition-colors duration-300 shadow-lg shadow-accent-purple/25 flex items-center space-x-2"
          >
            <span>Book a Demo</span>

            <ChevronRight className="w-5 h-5" />
          </a>

          <a
            href="#platform-explorer"
            className="px-8 py-4 rounded-2xl font-medium text-base text-white border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-colors duration-300 hover:border-white/20"
          >
            Explore ConGenie
          </a>
        </div>
      </div>

      {/* Cinematic Collage */}
      <div className="mt-24 w-full relative flex justify-center items-center z-10 overflow-visible px-0">
        <div className="flex items-center justify-center gap-2 sm:gap-[1.5vw] md:gap-[2vw] w-full max-w-none overflow-visible px-4 sm:px-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`overflow-hidden transition-transform duration-300 cursor-pointer hover:-translate-y-2 ${card.className}`}
            >
              <img
                src={card.src.src || card.src}
                alt={card.alt}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}