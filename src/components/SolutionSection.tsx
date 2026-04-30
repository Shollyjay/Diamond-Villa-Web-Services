"use client";

import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Zap, Target, Award } from "lucide-react";

const solutions = [
  {
    title: "Conversion-First Design",
    text: "We design with the end goal in mind: Revenue. Every pixel is placed to guide the user to the CTA.",
  },
  {
    title: "SEO Architecture",
    text: "We don't just 'do' SEO. We build it into the DNA of your site for long-term organic dominance.",
  },
  {
    title: "Speed Optimization",
    text: "Sub-1 second load speeds. We optimize every script and image for maximum performance.",
  },
  {
    title: "Brand Authority",
    text: "We position you as the undisputed leader in your industry through premium, custom design.",
  },
];

export default function SolutionSection() {
  return (
    <section className="py-24 bg-gray-light overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-navy mb-8 leading-tight"
            >
              We don't just build websites. <br />
              <span className="text-gold">We fix the systems</span> that drive your revenue.
            </motion.h2>
            
            <div className="space-y-6">
              {solutions.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-2">{item.title}</h3>
                    <p className="text-charcoal/60">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12"
            >
              <button className="bg-navy text-white px-8 py-4 rounded-lg font-bold hover:bg-navy/90 transition-all shadow-xl">
                Learn About Our Process
              </button>
            </motion.div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative z-10 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-navy/5 rounded-2xl">
                  <TrendingUp className="w-8 h-8 text-navy mb-4" />
                  <div className="text-3xl font-bold text-navy mb-1">+320%</div>
                  <div className="text-charcoal/40 text-xs font-bold uppercase tracking-widest">Growth</div>
                </div>
                <div className="p-6 bg-gold/5 rounded-2xl">
                  <Zap className="w-8 h-8 text-gold mb-4" />
                  <div className="text-3xl font-bold text-navy mb-1">1.2s</div>
                  <div className="text-charcoal/40 text-xs font-bold uppercase tracking-widest">Speed</div>
                </div>
                <div className="p-6 bg-gold/5 rounded-2xl">
                  <Target className="w-8 h-8 text-gold mb-4" />
                  <div className="text-3xl font-bold text-navy mb-1">99%</div>
                  <div className="text-charcoal/40 text-xs font-bold uppercase tracking-widest">SEO Score</div>
                </div>
                <div className="p-6 bg-navy/5 rounded-2xl">
                  <Award className="w-8 h-8 text-navy mb-4" />
                  <div className="text-3xl font-bold text-navy mb-1">Premium</div>
                  <div className="text-charcoal/40 text-xs font-bold uppercase tracking-widest">Quality</div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-100 text-center">
                <p className="text-charcoal/40 italic font-medium">"The transition from a simple site to a growth engine was night and day."</p>
                <p className="text-navy font-bold mt-2">— CEO, Fortune 500 Client</p>
              </div>
            </div>
            
            {/* Background Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold/10 rounded-full blur-[100px] z-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
