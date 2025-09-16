import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { LanguageProvider } from './LanguageContext';

export default function Layout() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-gradient-warm">
        <Header />
        <main className="flex-1 relative">
          <Outlet />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
