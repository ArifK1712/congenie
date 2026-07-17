'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sparkles, ChevronDown, Ticket, Smartphone, MapPin, Users, BarChart3 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigationItems = [
    {
      name: 'Platform',
      href: '#',
      dropdown: [
        { name: 'Registration & Ticketing', href: '/platform/registration-ticketing', icon: Ticket },
        { name: 'Event App', href: '/platform/event-app', icon: Smartphone },
        { name: 'On-Site Check-in', href: '/platform/onsite-checkin', icon: MapPin },
        { name: 'Speaker & Sponsor', href: '/platform/speaker-sponsor', icon: Users },
        { name: 'Analytics & Reporting', href: '/platform/analytics-reporting', icon: BarChart3 }
      ]
    },
    {
      name: 'Solutions',
      href: '#',
      dropdown: [
        { name: 'By Event Type', href: '/solutions/event-type' },
        { name: 'By Industry', href: '/solutions/industry' }
      ]
    },
    {
      name: 'Resources',
      href: '#',
      dropdown: [
        { name: 'Case Studies', href: '/resources/case-studies' },
        { name: 'Blog', href: '/resources/blog' },
        { name: 'Help Center', href: '/resources/help-center' },
        { name: 'Webinars', href: '/resources/webinars' }
      ]
    },
    {
      name: 'Pricing',
      href: '/pricing'
    },
    {
      name: 'Company',
      href: '#',
      dropdown: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Contact Us', href: '/contact' }
      ]
    }
  ];

  return (
    <header
      className={`fixed left-0 right-0 z-50 mx-auto origin-top transform-gpu transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        scrolled
          ? `
            top-0
            max-w-full
            rounded-none
            border-b border-slate-200/50
            bg-white/95
            py-2
            shadow-[0_10px_30px_rgba(15,23,42,0.08)]
            backdrop-blur-xl
            translate-y-0
            scale-100
          `
          : `
            top-4
            max-w-[1400px]
            rounded-3xl
            border border-slate-200/60
            bg-white/90
            py-2
            shadow-sm
            backdrop-blur-xl
            translate-y-0
            scale-[0.985]
          `
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <img 
              src="https://congenie.com/assets/images/logo-next.png" 
              alt="ConGenie Logo" 
              className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item) => {
              if (item.dropdown) {
                return (
                  <div key={item.name} className="relative group py-2">
                    <button className="flex items-center space-x-1 text-slate-650 hover:text-accent-purple font-medium transition-colors cursor-pointer">
                      <span>{item.name}</span>
                      <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                    {/* Dropdown Menu Panel */}
                    <div className="absolute top-full left-0 mt-2 w-64 rounded-2xl border border-slate-200/60 bg-white/95 shadow-xl p-3 invisible group-hover:visible opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-200 ease-out backdrop-blur-xl z-50">
                      <div className="space-y-1">
                        {item.dropdown.map((subItem) => {
                          const Icon = subItem.icon;
                          return (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="flex items-center space-x-3 px-3 py-2 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-accent-purple transition-all"
                            >
                              {Icon && <Icon className="w-4 h-4 text-accent-purple shrink-0" />}
                              <span className="text-xs font-semibold">{subItem.name}</span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-colors py-2 font-medium ${
                    isActive 
                      ? 'text-accent-purple' 
                      : 'text-slate-650 hover:text-accent-purple'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA & Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="javascript:void(0)"
              className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-accent-blue transition-colors"
            >
              Explore ConGenie
            </Link>
            
            <Link
              href="/contact"
              className="relative group px-5 py-2.5 rounded-xl text-white font-medium text-sm bg-accent-purple hover:bg-[#6c28e2] hover:scale-102 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Book a Demo</span>
              <Sparkles className="w-4 h-4 text-white group-hover:animate-spin" />
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center lg:hidden space-x-4">
            {/* Hamburger Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl border border-slate-200 text-slate-650 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden overflow-hidden ${
              scrolled ? 'bg-white' : ''
            }`}
          >
            <div className="px-4 pt-3 pb-6 space-y-4 flex flex-col max-h-[80vh] overflow-y-auto">
              {navigationItems.map((item) => (
                <div key={item.name} className="space-y-2">
                  <div className="text-xs font-bold font-mono tracking-widest text-slate-400 uppercase px-3">
                    {item.name}
                  </div>
                  {item.dropdown ? (
                    <div className="pl-3 space-y-1">
                      {item.dropdown.map((subItem) => {
                        const Icon = subItem.icon;
                        return (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center space-x-3 px-3 py-2 rounded-lg text-base font-semibold text-slate-705 hover:bg-slate-100 transition-colors"
                          >
                            {Icon && <Icon className="w-4 h-4 text-accent-purple shrink-0" />}
                            <span>{subItem.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="pl-3">
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-base font-semibold text-slate-707 hover:bg-slate-100 transition-colors block py-2"
                      >
                        {item.name}
                      </Link>
                    </div>
                  )}
                </div>
              ))}
              
              <hr className="border-slate-200 my-2" />
              
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 text-base font-semibold text-slate-750 hover:bg-slate-100 transition-colors text-center block"
              >
                Log In
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-xl text-center text-white font-semibold text-base bg-accent-purple hover:bg-[#6c28e2] transition-all duration-300 block"
              >
                Book a Demo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
