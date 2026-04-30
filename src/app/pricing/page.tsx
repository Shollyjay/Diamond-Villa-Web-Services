"use client";

import { motion } from "framer-motion";
import { Check, ChevronRight, Zap, TrendingUp, ShieldCheck, Rocket } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "$2K–$5K",
    ideal: "Small business",
    icon: Zap,
    features: [
      "Custom Brand Design",
      "5 Core Pages",
      "Mobile Optimization",
      "Sub-2s Load Speed",
      "Basic SEO Setup",
      "WordPress Integration",
    ],
    cta: "Start Scaling",
    featured: false,
  },
  {
    name: "Growth",
    price: "$5K–$15K",
    ideal: "Scaling brands",
    icon: TrendingUp,
    features: [
      "Elite Brand Authority Design",
      "10+ Custom Pages",
      "CRO Psychology Integration",
      "Sub-1.2s Load Speed",
      "Advanced SEO Architecture",
      "Automated Sales Funnel",
      "Advanced Analytics Tracking",
    ],
    cta: "Go for Growth",
    featured: true,
  },
  {
    name: "Pro",
    price: "$15K–$50K",
    ideal: "Established brands",
    icon: Rocket,
    features: [
      "Revenue-First Enterprise UX",
      "Unlimited Custom Pages",
      "Full Funnel Automation",
      "Sub-1s Global Performance",
      "Global Search Dominance",
      "Custom API Integrations",
      "Monthly Growth Consulting",
      "A/B Testing Framework",
    ],
    cta: "Join the Pro Elite",
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-40 pb-20 bg-navy text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            Transparent <span className="text-gold">Value</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/60 max-w-2xl mx-auto mb-12"
          >
            We don't have 'costs'. We have investments. Choose the level of growth your brand deserves.
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 -mt-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-8 md:p-12 rounded-[2.5rem] shadow-2xl transition-all hover:scale-[1.02] duration-500 flex flex-col ${
                  plan.featured 
                    ? "bg-navy text-white border-4 border-gold scale-105 z-10" 
                    : "bg-white text-navy border border-gray-100"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gold text-white px-8 py-2 rounded-full font-bold uppercase tracking-widest text-sm shadow-lg">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <plan.icon className={`w-12 h-12 mb-6 ${plan.featured ? "text-gold" : "text-navy"}`} />
                  <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>
                  <p className={`text-sm font-bold uppercase tracking-widest mb-6 ${plan.featured ? "text-white/60" : "text-charcoal/40"}`}>
                    Ideal for: {plan.ideal}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className={`text-5xl font-bold ${plan.featured ? "text-gold" : "text-navy"}`}>{plan.price}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-12 flex-grow">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${plan.featured ? "bg-gold text-navy" : "bg-navy/10 text-navy"}`}>
                        <Check className="w-3 h-3" strokeWidth={4} />
                      </div>
                      <span className={`text-lg ${plan.featured ? "text-white/80" : "text-charcoal/70"}`}>{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className={`w-full py-5 rounded-xl font-bold text-center text-xl transition-all shadow-xl ${
                    plan.featured 
                      ? "bg-gold text-white hover:bg-gold/90" 
                      : "bg-navy text-white hover:bg-navy/90"
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-24 bg-gray-light">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto bg-white rounded-[3rem] p-12 md:p-20 shadow-2xl border border-gray-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-navy/5 rounded-full -mr-32 -mt-32 blur-3xl" />
            
            <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
              <div className="lg:w-2/3">
                <div className="flex items-center gap-2 text-gold font-bold uppercase tracking-widest text-sm mb-6">
                  <ShieldCheck className="w-5 h-5" />
                  Enterprise Solutions
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-navy mb-8">Custom Engineered for Scale.</h2>
                <p className="text-xl text-charcoal/60 leading-relaxed mb-8">
                  For companies requiring bespoke infrastructure, complex integrations, and high-volume performance. We build enterprise-grade assets that function as the backbone of your business.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-navy font-bold">
                  <div className="flex items-center gap-3"><Check className="text-gold" /> Dedicated Account Manager</div>
                  <div className="flex items-center gap-3"><Check className="text-gold" /> Custom API Development</div>
                  <div className="flex items-center gap-3"><Check className="text-gold" /> 24/7 Priority Support</div>
                  <div className="flex items-center gap-3"><Check className="text-gold" /> Full Source Code Ownership</div>
                </div>
              </div>
              <div className="lg:w-1/3 text-center">
                <div className="text-charcoal/40 text-sm font-bold uppercase tracking-widest mb-2">Custom Pricing</div>
                <div className="text-4xl md:text-5xl font-bold text-navy mb-8">$50K–$500K+</div>
                <Link
                  href="/contact"
                  className="w-full bg-navy text-white py-5 rounded-xl font-bold block hover:bg-navy/90 transition-all shadow-xl text-center text-xl"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy mb-6">Have Questions?</h2>
          <p className="text-charcoal/60 mb-8">Not sure which plan is right for you? Use our AI Decision Maker or book a call.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/decision-maker" className="text-gold font-bold hover:underline">Use AI Decision Maker →</Link>
            <span className="text-charcoal/20 hidden sm:block">|</span>
            <Link href="/contact" className="text-navy font-bold hover:underline">Book a Call →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
