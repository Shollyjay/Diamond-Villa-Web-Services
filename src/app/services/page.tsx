"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, Globe, TrendingUp, Zap, Target, Palette, BarChart3, Database } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Globe,
    title: "WordPress Development",
    problem: "Your current site is slow, hard to manage, and fails to convert visitors into customers.",
    solution: "We build custom, scalable WordPress ecosystems optimized for speed, security, and administrative ease.",
    outcome: "A high-performance digital asset that functions as a 24/7 sales engine.",
    metrics: ["Sub-1s Load Time", "Mobile-First Design", "Enterprise-Grade Security"],
  },
  {
    icon: Target,
    title: "SEO Optimization",
    problem: "You're invisible on Google, losing thousands in potential revenue to competitors who are easier to find.",
    solution: "Technical SEO audits, authority building, and content strategy that forces you to the top of search results.",
    outcome: "Consistent organic traffic that actually converts into high-ticket leads.",
    metrics: ["+210% Organic Traffic", "Keyword Dominance", "Technical Excellence"],
  },
  {
    icon: TrendingUp,
    title: "CRO Optimization",
    problem: "You're getting traffic, but your bank account isn't feeling it. Your funnel is leaking money.",
    solution: "Psychological design, A/B testing, and heat-map analysis to eliminate friction and maximize conversions.",
    outcome: "A massive boost in ROI without spending an extra dollar on ads.",
    metrics: ["+320% Conversions", "Lower Bounce Rates", "Higher Lifetime Value"],
  },
  {
    icon: Palette,
    title: "Branding & UI/UX",
    problem: "Your brand looks 'cheap' or outdated, destroying trust before you even get a chance to speak.",
    solution: "Elite visual identity and user experience design that commands authority and professional respect.",
    outcome: "An instant elevation in brand perception and market positioning.",
    metrics: ["Luxury Aesthetic", "Intuitive UX", "Strong Brand Recall"],
  },
  {
    icon: Zap,
    title: "Speed Optimization",
    problem: "Slow websites kill sales. Every second of delay is a customer lost to a faster competitor.",
    solution: "Deep technical optimization, CDN integration, and script pruning for maximum velocity.",
    outcome: "A blazing-fast experience that keeps users engaged and search engines happy.",
    metrics: ["Sub-1.2s LCP", "99/100 PageSpeed", "Optimized Core Web Vitals"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Growth",
    problem: "You're flying blind, making decisions based on 'gut feeling' rather than hard data.",
    solution: "Advanced tracking setup and data visualization that reveals exactly where your money is being made.",
    outcome: "Clarity on every marketing dollar spent and every user action taken.",
    metrics: ["Full Attribution", "Live Dashboards", "Data-Driven Strategy"],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-navy text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            We Sell <span className="text-gold">Outcomes</span>, Not Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/60 max-w-3xl mx-auto mb-12"
          >
            We don't just deliver files. We deliver business growth. Our services are engineered to solve specific pain points and drive measurable revenue.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className="lg:w-1/2">
                  <div className="w-16 h-16 bg-navy text-gold rounded-2xl flex items-center justify-center mb-8 shadow-xl">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-4xl font-bold text-navy mb-8">{service.title}</h2>
                  
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-gold mb-3">The Problem</h3>
                      <p className="text-charcoal/70 text-lg leading-relaxed">{service.problem}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-widest text-navy mb-3">The Solution</h3>
                      <p className="text-charcoal/70 text-lg leading-relaxed">{service.solution}</p>
                    </div>
                    <div className="p-6 bg-gray-light rounded-xl border border-gray-100">
                      <h3 className="text-sm font-bold uppercase tracking-widest text-navy mb-3">The Outcome</h3>
                      <p className="text-navy font-bold text-xl">{service.outcome}</p>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2 w-full">
                  <div className="bg-navy rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-gold/20 transition-colors" />
                    
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                      <BarChart3 className="text-gold" />
                      Key Metrics
                    </h3>
                    
                    <div className="space-y-6">
                      {service.metrics.map((metric, i) => (
                        <div key={i} className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                            <CheckCircle2 className="w-5 h-5 text-gold" />
                          </div>
                          <span className="text-xl font-medium">{metric}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-12">
                      <Link
                        href="/contact"
                        className="w-full bg-gold hover:bg-gold/90 text-white py-4 rounded-xl font-bold block transition-all shadow-lg text-center"
                      >
                        Request Strategy Call
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-light">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-navy mb-8">Ready for a Revenue-Driven Transformation?</h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-navy text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-navy/90 transition-all shadow-xl"
          >
            Book Your Strategy Call
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
