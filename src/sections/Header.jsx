'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sun, Moon, Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header({ darkMode, toggleDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'AI Capabilities', href: '/ai-capabilities' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Modules', href: '/modules' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white dark:bg-[#020314] border-b border-slate-200/50 dark:border-slate-800/50 py-2 shadow-md'
          : 'bg-white py-5'
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
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-normal text-md transition-colors ${
                    isActive 
                      ? 'text-accent-purple dark:text-accent-cyan font-bold' 
                      : 'text-slate-600 hover:text-accent-blue dark:text-slate-300 dark:hover:text-accent-cyan'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA & Toggle Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-650 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5" />}
            </button>

            <Link
              href="/modules"
              className="px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-350 hover:text-accent-blue dark:hover:text-accent-cyan transition-colors"
            >
              Explore Platform
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
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-650 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Hamburger Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-650 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
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
            className={`lg:hidden border-t border-slate-200/50 dark:border-slate-800/50 overflow-hidden ${
              scrolled ? 'bg-white dark:bg-[#020314]' : 'glass-panel'
            }`}
          >
            <div className="px-4 pt-3 pb-6 space-y-3 flex flex-col">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-3 py-2 rounded-lg text-base font-semibold transition-colors ${
                      isActive 
                        ? 'bg-accent-purple/10 text-accent-purple dark:text-accent-cyan' 
                        : 'text-slate-700 dark:text-slate-305 hover:bg-slate-100 dark:hover:bg-slate-900'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <hr className="border-slate-200 dark:border-slate-800 my-2" />
              <Link
                href="/modules"
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 text-base font-semibold text-slate-705 dark:text-slate-305 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors text-center"
              >
                Explore Platform
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-xl text-center text-white font-semibold text-base bg-accent-purple hover:bg-[#6c28e2] transition-all duration-300"
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
