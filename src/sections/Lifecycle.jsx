'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ClipboardList, 
  UserPlus, 
  Plane, 
  Printer, 
  BarChart3, 
  Check, 
  Sparkles, 
} from 'lucide-react';
import planningAgendaImage from '../assets/planning-agenda.webp';
import registrationSalesImage from '../assets/registration-sales.webp';
import logisticsTravelImage from '../assets/logistics-travel.webp';
import onsiteBadgingImage from '../assets/onsite-badging.webp';
import reportsInsightsImage from '../assets/reports-insights.webp';

export default function Lifecycle() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);  

  const phases = [
    {
      number: '01',
      phaseName: 'Phase 01 / Pre-Event',
      title: 'Planning & Agenda Setup',
      desc: 'Construct your event foundation with smart venue mappings, automated speaker portals, and AI-assisted track drafting.',
      bullets: [
        'AI-assisted track session drafting',
        'Speaker collection and approval portals',
        'Collaborative planning checklists'
      ],
      icon: ClipboardList,
      gradient: 'from-[#7C3AED]/15 via-[#050826]/5 to-transparent',
      borderColor: 'border-[#9333EA]/45',
      badgeBg: 'bg-[#9333EA]/10 text-accent-lavender border-[#9333EA]/20',
      rightVisual: (
        <img
          src={planningAgendaImage.src || planningAgendaImage}
          alt="Planning and agenda stage visual"
          className="h-full w-full object-contain"
        />
      )
    },
    {
      number: '02',
      phaseName: 'Phase 02 / Setup',
      title: 'Registrations & Sales',
      desc: 'Open ticket tiers and allocate sponsorship booths with automated multi-gateway payment pipelines and custom forms.',
      bullets: [
        'Logic-based ticketing forms',
        'Interactive booth floor allocations',
        'Automated VAT invoicing templates'
      ],
      icon: UserPlus,
      gradient: 'from-accent-purple/15 via-[#050826]/5 to-transparent',
      borderColor: 'border-[#9333EA]/45',
      badgeBg: 'bg-accent-purple/10 text-accent-lavender border-accent-purple/20',
      rightVisual: (
        <img
          src={registrationSalesImage.src || registrationSalesImage}
          alt="Registration and sales stage visual"
          className="h-full w-full object-contain"
        />
      )
    },
    {
      number: '03',
      phaseName: 'Phase 03 / Operations',
      title: 'Logistics & Travel',
      desc: 'Coordinate delegate accommodations, flight tracking approvals, and custom profile preferences in one unified portal.',
      bullets: [
        'Automated flight booking approvals',
        'Hotel room block inventory trackers',
        'Custom dietary profile parsing'
      ],
      icon: Plane,
      gradient: 'from-accent-purple/15 via-[#050826]/5 to-transparent',
      borderColor: 'border-[#9333EA]/45',
      badgeBg: 'bg-accent-purple/10 text-accent-lavender border-accent-purple/20',
      rightVisual: (
        <img
          src={logisticsTravelImage.src || logisticsTravelImage}
          alt="Logistics and travel stage visual"
          className="h-full w-full object-contain"
        />
      )
    },
    {
      number: '04',
      phaseName: 'Phase 04 / Live Event',
      title: 'Onsite Ops & Badging',
      desc: 'Deliver seamless check-in experiences with sub-2-second QR scan badging and live attendee engagement trackers.',
      bullets: [
        'Sub-2-second QR thermal badge printing',
        'Self-service check-in kiosk tracking',
        'Real-time session attendance mapping'
      ],
      icon: Printer,
      gradient: 'from-accent-purple/15 via-[#050826]/5 to-transparent',
      borderColor: 'border-[#9333EA]/45',
      badgeBg: 'bg-accent-purple/10 text-accent-lavender border-accent-purple/20',
      rightVisual: (
        <img
          src={onsiteBadgingImage.src || onsiteBadgingImage}
          alt="Onsite badging stage visual"
          className="h-full w-full object-contain"
        />
      )
    },
    {
      number: '05',
      phaseName: 'Phase 05 / Post-Event',
      title: 'Reports & AI Insights',
      desc: 'Compile comprehensive reports, trigger automated certification dispatches, and review feedback analytics.',
      bullets: [
        'Automated feedback survey loops',
        'PDF certificate generation keys',
        'Detailed sponsor ROI analytics report'
      ],
      icon: BarChart3,
      gradient: 'from-accent-purple/15 via-[#050826]/5 to-transparent',
      borderColor: 'border-[#9333EA]/45',
      badgeBg: 'bg-accent-purple/10 text-accent-lavender border-accent-purple/20',
      rightVisual: (
        <img
          src={reportsInsightsImage.src || reportsInsightsImage}
          alt="Reports and insights stage visual"
          className="h-full w-full object-contain"
        />
      )
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const cards = cardsRef.current.filter(Boolean); // Filter out empty elements
    if (!cards || cards.length === 0) return;

    const ctx = gsap.context(() => {
      // 1. Create a single master timeline tied to the pinned container scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: () => `+=${cards.length * 150}%`, // Increased scroll distance for smooth holds
          pin: true,
          pinSpacing: true,
          scrub: 1, // Smooth scrolling transition response
        }
      });

      // Set initial states for cards in GSAP to ensure correct starting points
      cards.forEach((card, idx) => {
        if (idx > 0) {
          gsap.set(card, { y: '120%', opacity: 0, scale: 0.95 });
        } else {
          gsap.set(card, { y: 0, opacity: 1, scale: 1 });
        }
      });

      const transitionDuration = 1;
      const holdDuration = 1;

      // 2. Add transition & hold steps sequentially
      cards.forEach((card, idx) => {
        if (idx === 0) {
          // Pause/Hold on the first card at the start
          tl.to({}, { duration: holdDuration });
          return;
        }

        const prevCard = cards[idx - 1];
        const startTime = tl.duration();

        // Slide the previous card up and fade it out
        tl.to(prevCard, {
          y: '-120%',
          opacity: 0,
          scale: 0.9,
          duration: transitionDuration,
          ease: 'power2.inOut'
        }, startTime);

        // Slide the current card up and fade it in
        tl.fromTo(card,
          { 
            y: '120%', 
            opacity: 0,
            scale: 0.95
          },
          { 
            y: 0, 
            opacity: 1,
            scale: 1,
            duration: transitionDuration,
            ease: 'power2.out' 
          },
          startTime
        );

        // Pause/Hold on the current card
        tl.to({}, { duration: holdDuration });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      id="solutions" 
      className="relative min-h-screen overflow-hidden flex flex-col justify-center items-center bg-gradient-to-b from-[#020314] via-[#09062d] to-[#020314] transition-colors duration-300 w-full"
    >
      {/* Background ambient glowing gradient overlays */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent-purple/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-blue/12 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent-cyan/8 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle Animated Dotted grid Lines Floor */}
      <div className="absolute bottom-0 left-0 right-0 h-[350px] overflow-hidden pointer-events-none z-0" style={{ perspective: '800px' }}>
        <div 
          className="absolute inset-0 w-full h-[500px]"
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(132, 61, 245, 0.08) 2px, transparent 2px), linear-gradient(to bottom, rgba(132, 61, 245, 0.08) 2px, transparent 2px)',
            backgroundSize: '50px 50px',
            transform: 'rotateX(70deg) translateZ(0)',
            transformOrigin: 'top center',
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 5%, rgba(0,0,0,0) 90%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 5%, rgba(0,0,0,0) 90%)'
          }}
        />
      </div>

      {/* Title Header */}
      <div className="w-full max-w-[1400px] mx-auto px-4 pt-16 pb-8 text-center relative z-10 flex flex-col items-center">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-accent-purple/40 bg-accent-purple/15 text-accent-lavender text-xs font-semibold mb-4 shadow-sm shadow-accent-purple/10">
          <Sparkles className="w-3.5 h-3.5 text-accent-lavender animate-pulse" />
          <span>Platform Roadmap</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
          One Platform for Every Stage of Your Event
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed font-light max-w-2xl">
          Scroll down to see the event lifecycle stack seamlessly compile from pre-event setups to post-event automation.
        </p>
      </div>

      {/* Pinned Card Stack viewport Wrapper */}
      <div className="w-full max-w-6xl h-[620px] sm:h-[500px] relative px-4 sm:px-6 lg:px-8 mt-6 mb-16 overflow-visible flex items-center justify-center">
        
        {phases.map((phase, idx) => {
          return (
            <div
              key={idx}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="absolute inset-x-4 sm:inset-x-6 lg:inset-x-8 h-full bg-[#14143A] rounded-[32px] p-6 sm:p-10 shadow-2xl backdrop-blur-md flex flex-col lg:flex-row items-center gap-8 overflow-hidden transition-all duration-300 shadow-[#9333EA]/5 group"
              style={{ 
                zIndex: 10 + idx,
                transformOrigin: 'bottom center',
                transform: idx > 0 ? 'translateY(120%)' : 'none', // GPU optimized initial off-screen offset
                opacity: idx > 0 ? 0 : 1,
              }}
            >
              {/* Premium 2px Gradient Border Overlay */}
              <div 
                className="absolute inset-0 rounded-[32px] p-[2px] bg-gradient-to-br from-[#7C3AED]/85 via-[#9333EA]/70 to-[#A855F7]/60 group-hover:from-[#7C3AED] group-hover:via-[#9333EA] group-hover:to-[#A855F7] transition-all duration-500 pointer-events-none z-20" 
                style={{
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude'
                }}
              />

              {/* Background gradient mask within the card */}
              <div className={`absolute inset-0 bg-gradient-to-br ${phase.gradient} opacity-35 pointer-events-none rounded-[32px]`} />

              {/* Card Left: Content details */}
              <div className="w-full lg:w-3/5 text-left relative z-10 space-y-4 sm:space-y-6">
                
                {/* Stage Indicator Badge */}
                <div className="flex items-center space-x-3">
                  <div className={`px-3 py-1 rounded-full border text-xs font-bold font-mono tracking-wider ${phase.badgeBg}`}>
                    {phase.phaseName}
                  </div>
                  <div className="w-8 h-[1px] bg-slate-800" />
                  <span className="font-mono text-sm font-extrabold text-slate-500">
                    STAGE {phase.number}
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-white tracking-tight leading-tight">
                  {phase.title}
                </h3>

                <p className="text-slate-300 font-light leading-relaxed">
                  {phase.desc}
                </p>

                {/* Bullet Points */}
                <ul className="space-y-2.5 pt-2">
                  {phase.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start space-x-3 text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-slate-800/85 text-slate-300 flex items-center justify-center flex-shrink-0 mt-0.5 border border-slate-700/60">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

              </div>

              {/* Card Right: Sleek Interactive Panel UI */}
              <div className="w-full lg:w-2/3 relative z-10 h-max lg:h-full flex flex-col justify-center">
                <div className={`rounded-4xl overflow-hidden ${phase.borderColor} bg-[#14143A] shadow-2xl shadow-[#9333EA]/5`}>
                  {phase.rightVisual}
                </div>
              </div>

            </div>
          );
        })}

      </div>
    </section>
  );
}
