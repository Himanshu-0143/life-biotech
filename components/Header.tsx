"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, Beaker } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <div className="bg-emerald-600 p-2 rounded-lg">
              <Beaker className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-emerald-600">
              Life-Biotech
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              Capabilities
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              Get In Touch
            </Button>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-white border-t">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-emerald-600 transition-colors font-medium text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-emerald-600 transition-colors font-medium text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="text-gray-700 hover:text-emerald-600 transition-colors font-medium text-left"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="text-gray-700 hover:text-emerald-600 transition-colors font-medium text-left"
              >
                Capabilities
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-emerald-600 transition-colors font-medium text-left"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-emerald-600 hover:bg-emerald-700 text-white w-full"
              >
                Get In Touch
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
