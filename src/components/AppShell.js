'use client';

import React from 'react';
import Header from '../sections/Header';
import Footer from '../sections/Footer';

export default function AppShell({ children }) {
  return (
    <div className="min-h-screen text-slate-900 bg-white">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
