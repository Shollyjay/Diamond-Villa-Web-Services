"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Target, Zap, Users, Award, Briefcase } from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: ShieldCheck,
    title: "Absolute Precision",
    desc: "We don't do 'good enough'. We obsess over every pixel and line of code.",
  },
  {
    icon: Target,
    title: "ROI Obsession",
    desc: "A website is a tool. Its success is measured in revenue, not just beauty.",
  },
  {
    icon: Zap,
    title: "Maximum Velocity",
    desc: "Speed is a competitive advantage. We build for performance first.",
  },
];

const team = [
  {
    name: "Alexander Villa",
    role: "Founder & Lead Strategist",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Elena Rossi",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop",
  },
  {
    name: "Marcus Thorne",
    role: "Technical Architect",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-40 pb-24 bg-navy text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] -mr-64 -mt-64" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            >
              Building the Future of <br />
              <span className="text-gold">Digital Authority.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/60 leading-relaxed mb-12"
            >
              DiamondVilla was founded on a single principle: Excellence. Most agencies build websites that look like everyone else's. We build websites that dominate the market.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-light">
                <img
                  src="https://images.unsplash.com/photo-1480413233483-a7146e04199c?q=80&w=1000&auto=format&fit=crop"
                  alt="Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-gold p-8 rounded-2xl shadow-xl hidden md:block">
                <div className="text-4xl font-bold text-white mb-1">10+</div>
                <div className="text-white/80 font-bold uppercase tracking-widest text-xs">Years of Excellence</div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-navy mb-8">Our Mission</h2>
              <div className="space-y-6 text-lg text-charcoal/70 leading-relaxed">
                <p>
                  At DiamondVilla, we don't believe in mediocre digital presences. Your website is the most powerful employee you have. It works 24/7, reaches thousands, and represents your entire brand value in a split second.
                </p>
                <p>
                  We saw a gap in the market: Agencies that could design but couldn't code for performance, and developers who could code but didn't understand sales psychology.
                </p>
                <p className="font-bold text-navy">
                  We bridge that gap. We build Million-Dollar Websites.
                </p>
              </div>
              
              <div className="mt-12 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-navy mb-1">$500M+</div>
                  <div className="text-charcoal/40 text-sm font-bold uppercase tracking-widest">Client Revenue Generated</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-navy mb-1">150+</div>
                  <div className="text-charcoal/40 text-sm font-bold uppercase tracking-widest">Premium Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gray-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-navy mb-4">Our Core Values</h2>
            <p className="text-charcoal/60">The principles that guide every decision we make.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-2xl shadow-xl text-center border border-gray-100"
              >
                <div className="w-16 h-16 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto mb-8">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">{value.title}</h3>
                <p className="text-charcoal/60 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-navy mb-4">The Elite Team</h2>
            <p className="text-charcoal/60">The minds behind the million-dollar sites.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-6 shadow-xl relative border border-gray-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-gold transition-colors">
                        <Users className="w-4 h-4" />
                      </div>
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-gold transition-colors">
                        <Award className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-navy mb-1 group-hover:text-gold transition-colors">{member.name}</h3>
                <p className="text-charcoal/40 font-bold uppercase tracking-widest text-xs">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-navy text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-4">Our Elite Tech Stack</h2>
              <p className="text-white/60">We only use the best tools to build the best results.</p>
            </div>
            <div className="flex flex-wrap gap-12 opacity-40">
              <span className="text-3xl font-bold tracking-tighter">NEXT.JS</span>
              <span className="text-3xl font-bold tracking-tighter">REACT</span>
              <span className="text-3xl font-bold tracking-tighter">TAILWIND</span>
              <span className="text-3xl font-bold tracking-tighter">WORDPRESS</span>
              <span className="text-3xl font-bold tracking-tighter">NODE.JS</span>
              <span className="text-3xl font-bold tracking-tighter">OPENAI</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-navy mb-8">Work with the Best.</h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gold text-white px-12 py-5 rounded-xl font-bold text-xl hover:bg-gold/90 transition-all shadow-2xl"
          >
            Start Your Journey
            <Briefcase className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
