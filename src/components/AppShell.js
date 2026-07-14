'use client';

import React, { useState, useEffect } from 'react';
import Header from '../sections/Header';
import Footer from '../sections/Footer';

export default function AppShell({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) {
      setDarkMode(saved === 'true');
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className="min-h-screen text-slate-900 dark:bg-[#030712] dark:text-slate-100 transition-colors duration-300">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      {children}
      <Footer />
    </div>
  );
}
