'use client';

import React, { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 7C10.5 5.5 8.5 6 8 8C7.5 10 12 14 12 14C12 14 16.5 10 16 8C15.5 6 13.5 5.5 12 7Z" fill="currentColor"/>
                </svg>
              </div>
              <span className="font-bold text-xl text-gray-900">Care Steward</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('problem-solution')}
              className="text-gray-700 hover:text-brand transition-colors font-medium"
            >
              Problem Solution
            </button>
            <button
              onClick={() => scrollToSection('interactive-demo')}
              className="text-gray-700 hover:text-brand transition-colors font-medium"
            >
              Interactive Demo
            </button>
            <button
              onClick={() => scrollToSection('data-visualization')}
              className="text-gray-700 hover:text-brand transition-colors font-medium"
            >
              Data Visualization
            </button>
            <button
              onClick={() => scrollToSection('performance-monitor')}
              className="text-gray-700 hover:text-brand transition-colors font-medium"
            >
              Performance Monitor
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-brand transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('problem-solution')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-brand hover:bg-gray-50 rounded-md transition-colors"
              >
                Problem Solution
              </button>
              <button
                onClick={() => scrollToSection('interactive-demo')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-brand hover:bg-gray-50 rounded-md transition-colors"
              >
                Interactive Demo
              </button>
              <button
                onClick={() => scrollToSection('data-visualization')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-brand hover:bg-gray-50 rounded-md transition-colors"
              >
                Data Visualization
              </button>
              <button
                onClick={() => scrollToSection('performance-monitor')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-brand hover:bg-gray-50 rounded-md transition-colors"
              >
                Performance Monitor
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 