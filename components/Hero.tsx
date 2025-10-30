"use client";

import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Shield, Microscope } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50 -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold">
                Trusted Healthcare Partner
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Excellence in{' '}
              <span className="text-emerald-600">Pharmaceutical</span>{' '}
              Manufacturing
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              LIFE BIOTECH is committed to producing high-quality pharmaceutical products
              that improve health and save lives. With cutting-edge technology and rigorous
              quality standards, we deliver medicines you can trust.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection('products')}
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg px-8 py-6"
              >
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={() => scrollToSection('about')}
                size="lg"
                variant="outline"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 text-lg px-8 py-6"
              >
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="h-8 w-8 text-emerald-600" />
                </div>
                <p className="text-sm text-gray-600 font-medium">ISO Certified</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Shield className="h-8 w-8 text-emerald-600" />
                </div>
                <p className="text-sm text-gray-600 font-medium">FDA Approved</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Microscope className="h-8 w-8 text-emerald-600" />
                </div>
                <p className="text-sm text-gray-600 font-medium">WHO GMP</p>
              </div>
            </div>
          </div>

          <div className="relative lg:pl-12">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-8 right-4 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

              <div className="relative bg-white rounded-2xl shadow-2xl p-8">
                <div className="aspect-square bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl flex items-center justify-center">
                  <img
                    src="https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Pharmaceutical Manufacturing"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
