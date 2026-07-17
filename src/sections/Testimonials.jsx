'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah Jenkins',
    role: 'Executive Director',
    event: 'Global Health Congress 2026',
    rating: 5,
    text: 'ConGenie completely revolutionized how we run our annual congress. Abstract submissions, reviewer assignments, and attendee badge printing worked flawlessly. Our onsite check-in queues went down to zero.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120'
  },
  {
    name: 'Marcus Sterling',
    role: 'Head of B2B Summits',
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
    text: 'Our summit required strict security protocols and complex airport pickup tracking. The custom modules in ConGenie accommodated every VIP requirement. The automated badge verification system is top tier.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120&h=120'
  }
];

export default function Testimonials() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [currentIdx]);

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="testimonials" className="py-16 lg:py-20 bg-slate-50 border-t border-slate-100 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Section Heading */}
        <div className="mb-8">
          <h2 className="font-display text-primary">
            What Our Clients Say
          </h2>
          <p className="mt-3 text-slate-500">
            Trusted by event professionals across industries worldwide.
          </p>
        </div>

        {/* Quote Icon decorative */}
        <div className="flex justify-center mb-4 text-accent-blue/20">
          <Quote className="w-16 h-16 transform rotate-180" />
        </div>

        {/* Carousel Container */}
        <div className="relative min-h-[200px] flex items-center justify-center">
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
              <p className="text-lg sm:text-xl text-slate-700 font-light italic leading-relaxed">
                &quot;{reviews[currentIdx].text}&quot;
              </p>

              {/* Client Info */}
              <div className="flex items-center justify-center space-x-4 pt-4">
                <img
                  src={reviews[currentIdx].image}
                  alt={reviews[currentIdx].name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-accent-blue/30 shadow-md"
                />
                <div className="text-left">
                  <h4 className="text-sm text-slate-855">
                    {reviews[currentIdx].name}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-slate-500">
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
            className="p-2.5 rounded-full border border-slate-200 text-slate-660 hover:bg-white transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          {/* Dots indicators */}
          <div className="flex space-x-2">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIdx(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIdx === idx ? 'w-6 bg-accent-blue' : 'w-2.5 bg-slate-300'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-2.5 rounded-full border border-slate-200 text-slate-660 hover:bg-white transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
