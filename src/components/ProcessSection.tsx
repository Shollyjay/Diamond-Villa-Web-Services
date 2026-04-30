"use client";

import { motion } from "framer-motion";
import { Search, Layout, Palette, Code, Zap, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery & Strategy",
    desc: "We analyze your market, competitors, and goals to build a winning roadmap.",
  },
  {
    icon: Layout,
    title: "UX Architecture",
    desc: "Mapping the conversion funnel and user journey for maximum ROI.",
  },
  {
    icon: Palette,
    title: "Visual Design",
    desc: "Creating an elite brand presence that commands authority and trust.",
  },
  {
    icon: Code,
    title: "Development",
    desc: "Clean, scalable code built for speed, SEO, and ultimate performance.",
  },
  {
    icon: Zap,
    title: "Optimization",
    desc: "Fine-tuning every script and image for sub-second load speeds.",
  },
  {
    icon: Rocket,
    title: "Launch & Growth",
    desc: "Going live and scaling your presence through continuous improvement.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-navy mb-6"
          >
            The Million-Dollar Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-charcoal/60"
          >
            Our proven framework for building high-performance digital assets that scale businesses.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 hidden lg:block z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative z-10 bg-white p-6 rounded-2xl border border-gray-100 hover:border-gold/30 hover:shadow-xl transition-all group text-center"
              >
                <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:bg-gold transition-colors">
                  <step.icon className="w-8 h-8 text-gold group-hover:text-white" />
                </div>
                <div className="absolute top-4 left-1/2 -translate-x-1/2 text-gold font-bold opacity-10 text-4xl">0{index + 1}</div>
                <h3 className="text-lg font-bold text-navy mb-3">{step.title}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
