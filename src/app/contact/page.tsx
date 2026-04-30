"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageSquare, ChevronRight, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [formState, setFormState] = useState("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setTimeout(() => {
      setFormState("success");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="pt-40 pb-24 bg-navy text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-8"
          >
            Let's Start Your <br />
            <span className="text-gold">Transformation.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/60 max-w-2xl mx-auto"
          >
            Stop settling for mediocre results. Book your strategy call today and let's build the growth engine your brand deserves.
          </motion.p>
        </div>
      </section>

      <section className="py-24 -mt-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Contact Form */}
            <div className="lg:w-2/3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-2xl border border-gray-100"
              >
                {formState === "success" ? (
                  <div className="text-center py-20">
                    <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                      <MessageSquare className="w-10 h-10" />
                    </div>
                    <h2 className="text-3xl font-bold text-navy mb-4">Message Received.</h2>
                    <p className="text-charcoal/60 text-lg mb-12">Our team will reach out to you within 24 hours to schedule your strategy call.</p>
                    <button
                      onClick={() => setFormState("idle")}
                      className="text-navy font-bold hover:text-gold transition-colors underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-3xl font-bold text-navy mb-8">Send a Direct Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-bold uppercase tracking-widest text-charcoal/40 ml-1">Full Name</label>
                          <input
                            required
                            type="text"
                            placeholder="John Doe"
                            className="w-full bg-gray-light border border-gray-200 rounded-xl px-6 py-4 outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold uppercase tracking-widest text-charcoal/40 ml-1">Email Address</label>
                          <input
                            required
                            type="email"
                            placeholder="john@company.com"
                            className="w-full bg-gray-light border border-gray-200 rounded-xl px-6 py-4 outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-bold uppercase tracking-widest text-charcoal/40 ml-1">Business Type</label>
                          <select className="w-full bg-gray-light border border-gray-200 rounded-xl px-6 py-4 outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all appearance-none">
                            <option>E-commerce</option>
                            <option>SaaS / Tech</option>
                            <option>Professional Services</option>
                            <option>Enterprise</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold uppercase tracking-widest text-charcoal/40 ml-1">Estimated Budget</label>
                          <select className="w-full bg-gray-light border border-gray-200 rounded-xl px-6 py-4 outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all appearance-none">
                            <option>$2K - $10K</option>
                            <option>$10K - $50K</option>
                            <option>$50K - $100K</option>
                            <option>$100K+</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-bold uppercase tracking-widest text-charcoal/40 ml-1">Your Project Details</label>
                        <textarea
                          required
                          rows={6}
                          placeholder="Tell us about your project and goals..."
                          className="w-full bg-gray-light border border-gray-200 rounded-xl px-6 py-4 outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all resize-none"
                        ></textarea>
                      </div>

                      <button
                        disabled={formState === "submitting"}
                        className="w-full bg-navy text-white py-5 rounded-xl font-bold text-xl hover:bg-navy/90 transition-all shadow-xl flex items-center justify-center gap-2"
                      >
                        {formState === "submitting" ? (
                          <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            Send Message
                            <ArrowRight className="w-6 h-6" />
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </motion.div>
            </div>

            {/* Sidebar Details */}
            <div className="lg:w-1/3 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-navy rounded-3xl p-10 text-white shadow-xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full -mr-16 -mt-16 blur-2xl" />
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <Calendar className="text-gold" />
                  Quick Booking
                </h3>
                <p className="text-white/60 mb-8 leading-relaxed">
                  Prefer a direct conversation? Skip the form and book a 15-minute strategy call directly on our calendar.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-gold font-bold text-lg hover:underline group"
                >
                  Schedule on Calendly
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              <div className="space-y-6">
                <div className="flex items-center gap-6 p-6 rounded-2xl bg-gray-light border border-gray-200">
                  <div className="w-12 h-12 bg-navy text-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-charcoal/40 text-xs font-bold uppercase tracking-widest">Email Us</div>
                    <div className="text-navy font-bold text-lg">diamondvilla25@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-6 p-6 rounded-2xl bg-gray-light border border-gray-200">
                  <div className="w-12 h-12 bg-navy text-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-charcoal/40 text-xs font-bold uppercase tracking-widest">Call Us</div>
                    <div className="text-navy font-bold text-lg">+1 (800) 555-0123</div>
                  </div>
                </div>

              </div>

              <div className="pt-8 border-t border-gray-100 text-center lg:text-left">
                <h4 className="text-navy font-bold mb-4">Follow Our Growth</h4>
                <div className="flex justify-center lg:justify-start gap-4">
                  {["LinkedIn", "Twitter", "Instagram", "Clutch"].map((platform) => (
                    <a key={platform} href="#" className="text-charcoal/40 hover:text-gold font-bold transition-colors">{platform}</a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
