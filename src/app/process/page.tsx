"use client";

import { motion } from "framer-motion";
import { Search, Layout, Palette, Code, Zap, Rocket, ChevronRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const detailedSteps = [
  {
    icon: Search,
    title: "Discovery & Strategy",
    headline: "We don't start with code. We start with business intelligence.",
    desc: "Before we draw a single line of design, we deep-dive into your market. We analyze your competitors' weaknesses, your customers' pain points, and your unique value proposition. This is where the 'million-dollar' roadmap is built.",
    bullets: ["Market Gap Analysis", "Competitor Reverse Engineering", "Conversion Funnel Mapping", "KPI Definition"],
  },
  {
    icon: Layout,
    title: "UX Architecture",
    headline: "Engineering the path of least resistance.",
    desc: "We map out the user journey with mathematical precision. Every scroll, every click, and every interaction is designed to lead the user towards the desired action. We eliminate friction before it even occurs.",
    bullets: ["Wireframing conversion paths", "Information Architecture", "Interactive Prototypes", "Psychological Trigger Placement"],
  },
  {
    icon: Palette,
    title: "Visual Design",
    headline: "Aesthetics that command high-ticket prices.",
    desc: "We create a visual identity that positions you as the undisputed premium choice in your industry. This isn't just about 'looking pretty'; it's about building instant authority and trust through elite design.",
    bullets: ["Luxury UI Design", "Brand Authority Elevation", "Responsive Design Systems", "High-End Visual Assets"],
  },
  {
    icon: Code,
    title: "Technical Development",
    headline: "Clean, scalable, and blazingly fast.",
    desc: "Our developers build with the future in mind. We use a high-performance tech stack (Next.js, Tailwind, Node.js) to ensure your site is not just a pretty face, but a robust piece of software built for scale.",
    bullets: ["Next.js Performance Stack", "Clean Code Architecture", "Secure CMS Integration", "API & Third-Party Automation"],
  },
  {
    icon: Zap,
    title: "Hyper-Optimization",
    headline: "The difference between 'fast' and 'instant'.",
    desc: "We optimize every asset, script, and database query. We target sub-1.2 second load times across all devices. We don't settle for 'good' Core Web Vitals; we aim for absolute perfection.",
    bullets: ["Sub-1s Load Times", "Core Web Vitals Optimization", "Advanced Caching Strategies", "Conversion Rate Optimization (CRO)"],
  },
  {
    icon: Rocket,
    title: "Launch & Growth",
    headline: "Going live is just the beginning.",
    desc: "We ensure a seamless transition to your new growth engine. Post-launch, we monitor every metric and provide the data-driven insights needed to scale your new asset into a revenue-generating powerhouse.",
    bullets: ["Seamless Go-Live Process", "Live Performance Monitoring", "Data-Driven Growth Strategies", "Continuous Improvement Cycle"],
  },
];

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-40 pb-24 bg-gray-light overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold text-navy mb-8 leading-tight"
            >
              The <span className="text-gold">Million-Dollar</span> Process.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-charcoal/60 leading-relaxed max-w-2xl"
            >
              Building an elite digital presence requires more than just design. It requires a structured, intentional framework engineered for results.
            </motion.p>
          </div>
        </div>
        
        {/* Decorative background number */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 text-navy opacity-[0.02] text-[40rem] font-bold select-none pointer-events-none leading-none">
          DV
        </div>
      </section>

      {/* Steps List */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="space-y-40">
            {detailedSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col lg:flex-row gap-20 items-start ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className="lg:w-1/2">
                  <div className="flex items-center gap-6 mb-12">
                    <div className="w-20 h-20 bg-navy text-gold rounded-3xl flex items-center justify-center shadow-2xl flex-shrink-0">
                      <step.icon className="w-10 h-10" />
                    </div>
                    <div className="text-6xl font-bold text-gray-100">0{index + 1}</div>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gold uppercase tracking-widest mb-4">{step.title}</h2>
                  <h3 className="text-4xl font-bold text-navy mb-8 leading-tight">{step.headline}</h3>
                  <p className="text-lg text-charcoal/70 leading-relaxed mb-12">{step.desc}</p>
                </div>

                <div className="lg:w-1/2 w-full">
                  <div className="bg-navy rounded-[2.5rem] p-12 text-white shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-gold/20 transition-colors" />
                    <h4 className="text-xl font-bold mb-10 flex items-center gap-3">
                      <CheckCircle2 className="text-gold" />
                      Key Deliverables
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {step.bullets.map((bullet, i) => (
                        <div key={i} className="flex items-start gap-4">
                          <div className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <div className="w-2 h-2 bg-gold rounded-full" />
                          </div>
                          <span className="text-lg font-medium text-white/80">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Start Step 1?</h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            The road to a million-dollar website starts with a single strategy call. Let's map out your future.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gold text-white px-12 py-5 rounded-xl font-bold text-xl hover:bg-gold/90 transition-all shadow-2xl"
          >
            Book Strategy Call
            <ChevronRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
