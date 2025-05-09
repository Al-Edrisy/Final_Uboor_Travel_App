// apps/web/src/features/home/homePage.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { FiCalendar, FiGlobe, FiUsers, FiCheckCircle, FiStar, FiClock } from 'react-icons/fi';

export function HomePage() {
  return (
    <div className="space-y-16 bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Welcome to <span className="text-primary">Uboor</span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
            Streamline your travel management with our all-in-one platform.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/sign-up"
              className="px-8 py-3 text-lg font-medium text-white bg-primary rounded-md hover:bg-primary/90 transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/features"
              className="px-8 py-3 text-lg font-medium text-primary bg-background border border-primary rounded-md hover:bg-accent transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Uboor?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm">
              <FiCalendar className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Smart Itinerary Planning</h3>
              <p className="text-muted-foreground">
                Create and manage detailed travel itineraries with ease and precision.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm">
              <FiGlobe className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Booking Network</h3>
              <p className="text-muted-foreground">
                Access millions of accommodations and activities worldwide with one-click bookings.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm">
              <FiUsers className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
              <p className="text-muted-foreground">
                Invite team members and collaborate on travel plans in real-time with shared itineraries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="flex flex-col md:flex-row items-center justify-around gap-8">
            <div className="flex flex-col items-center text-center max-w-xs">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-lg mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
              <p className="text-muted-foreground">Create your account in minutes and start planning your trip.</p>
            </div>
            <div className="flex flex-col items-center text-center max-w-xs">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-lg mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Plan Your Trip</h3>
              <p className="text-muted-foreground">Use our intuitive tools to build itineraries and book accommodations.</p>
            </div>
            <div className="flex flex-col items-center text-center max-w-xs">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-lg mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Travel Confidently</h3>
              <p className="text-muted-foreground">Access your plans on the go and enjoy a seamless travel experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-card rounded-lg shadow-sm">
              <p className="text-muted-foreground italic">"Uboor transformed how our team manages travel. Everything is so organized now!"</p>
              <div className="mt-4 flex items-center">
                <div className="w-10 h-10 rounded-full bg-muted"></div>
                <div className="ml-3">
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-sm text-muted-foreground">Operations Manager</p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-sm">
              <p className="text-muted-foreground italic">"The booking system is intuitive and saves us hours every week."</p>
              <div className="mt-4 flex items-center">
                <div className="w-10 h-10 rounded-full bg-muted"></div>
                <div className="ml-3">
                  <h4 className="font-semibold">David Smith</h4>
                  <p className="text-sm text-muted-foreground">Travel Coordinator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Pricing Plans</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <div className="bg-card p-6 rounded-lg shadow-md w-full md:w-1/3">
              <h3 className="text-2xl font-semibold mb-2">Basic</h3>
              <p className="text-muted-foreground mb-4">Perfect for solo travelers</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$9</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <FiCheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>1 User</span>
                </li>
                <li className="flex items-center">
                  <FiCheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Up to 5 Trips</span>
                </li>
                <li className="flex items-center">
                  <FiCheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Basic Support</span>
                </li>
              </ul>
              <Link
                href="/sign-up"
                className="w-full px-4 py-2 text-white bg-primary rounded-md hover:bg-primary/90 transition-colors"
              >
                Start Free Trial
              </Link>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-md w-full md:w-1/3 border-2 border-primary">
              <h3 className="text-2xl font-semibold mb-2">Pro</h3>
              <p className="text-muted-foreground mb-4">Ideal for frequent travelers</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">$29</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <FiCheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Up to 5 Users</span>
                </li>
                <li className="flex items-center">
                  <FiCheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Unlimited Trips</span>
                </li>
                <li className="flex items-center">
                  <FiCheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Premium Support</span>
                </li>
              </ul>
              <Link
                href="/sign-up"
                className="w-full px-4 py-2 text-white bg-primary rounded-md hover:bg-primary/90 transition-colors"
              >
                Start Free Trial
              </Link>
            </div>

            <div className="bg-card p-6 rounded-lg shadow-md w-full md:w-1/3">
              <h3 className="text-2xl font-semibold mb-2">Enterprise</h3>
              <p className="text-muted-foreground mb-4">For large organizations</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">Custom</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <FiCheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Unlimited Users</span>
                </li>
                <li className="flex items-center">
                  <FiCheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Advanced Analytics</span>
                </li>
                <li className="flex items-center">
                  <FiCheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span>Dedicated Account Manager</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="w-full px-4 py-2 text-white bg-primary rounded-md hover:bg-primary/90 transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Simplify Your Travel Management?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Join thousands of businesses streamlining their travel processes with Uboor.
          </p>
          <Link
            href="/sign-up"
            className="px-8 py-3 text-lg font-medium bg-white text-primary rounded-md hover:bg-white/90 transition-colors inline-flex items-center gap-2"
          >
            Get Started Today <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}