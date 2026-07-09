'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Sarah Jenkins',
      role: 'Executive Director',
      event: 'Global Health Congress 2026',
      rating: 5,
      text: 'EVNT.AI completely revolutionized how we run our annual congress. Abstract submissions, reviewer assignments, and attendee badge printing worked flawlessly. Our onsite check-in queues went down to zero.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120'
    },
    {
      name: 'Marcus Sterling',
      role: 'Head of B2B summits',
      event: 'Apex FinTech Forum',
      rating: 5,
      text: 'The AI matchmaking module was a massive success. Delegates scheduled over 2,400 buyer-seller meetings in three days. We received outstanding feedback from our sponsors on lead collection ROI.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=120&h=120'
    },
    {
      name: 'Amelia Chen',
      role: 'Government Events Manager',
      event: 'National Trade Delegation Summit',
      rating: 5,
      text: 'Our summit required strict security protocols and complex airport pickups tracking. The custom modules in EVNT.AI accommodated every VIP requirement. The automated badge verification system is top tier.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120&h=120'
    }
  ];

  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000); // auto-rotate review
    return () => clearInterval(timer);
  }, [currentIdx]);

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-24 bg-slate-50 dark:bg-[#030712] border-t border-slate-100 dark:border-slate-900 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Quote Icon decorative */}
        <div className="flex justify-center mb-8 text-accent-blue/20 dark:text-accent-cyan/15">
          <Quote className="w-16 h-16 transform rotate-180" />
        </div>

        {/* Carousel Container */}
        <div className="relative min-h-[250px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIdx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              {/* Star Rating */}
              <div className="flex justify-center space-x-1.5 text-amber-400">
                {[...Array(reviews[currentIdx].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-200 font-light italic leading-relaxed">
                "{reviews[currentIdx].text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center justify-center space-x-4 pt-4">
                <img
                  src={reviews[currentIdx].image}
                  alt={reviews[currentIdx].name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-accent-blue/30 shadow-md"
                />
                <div className="text-left">
                  <h4 className="text-sm font-bold text-slate-850 dark:text-slate-100">
                    {reviews[currentIdx].name}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-light">
                    {reviews[currentIdx].role} • {reviews[currentIdx].event}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center space-x-6 mt-10">
          <button
            onClick={handlePrev}
            className="p-2.5 rounded-full border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-900 transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          {/* Dots indicators */}
          <div className="flex space-x-2">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIdx(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIdx === idx ? 'w-6 bg-accent-blue dark:bg-accent-cyan' : 'bg-slate-300 dark:bg-slate-800'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-2.5 rounded-full border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-900 transition-colors"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
