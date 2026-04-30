"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, BrainCircuit } from "lucide-react";
import Link from "next/link";

export default function DecisionMakerTeaser() {
  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-16 overflow-hidden relative">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-2 mb-6">
                <BrainCircuit className="w-6 h-6 text-gold" />
                <span className="text-gold font-bold tracking-widest uppercase text-sm">AI-Powered Strategy</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Not sure what your website needs? <br />
                <span className="text-gold">Let AI decide.</span>
              </h2>
              <p className="text-xl text-white/60 mb-10 leading-relaxed">
                Use our unique Decision Maker tool to diagnose your website issues and get a custom recommendation in seconds.
              </p>
              <Link
                href="/decision-maker"
                className="inline-flex items-center gap-3 bg-gold text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-gold/90 transition-all shadow-[0_0_30px_rgba(212,160,23,0.2)] group"
              >
                Try AI Decision Maker
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="lg:w-1/2 relative">
              {/* Decorative AI visual */}
              <div className="relative aspect-square max-w-md mx-auto">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-dashed border-gold/30 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-8 border-2 border-dashed border-white/10 rounded-full"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gold/20 rounded-full flex items-center justify-center backdrop-blur-xl border border-gold/30">
                    <Sparkles className="w-12 h-12 text-gold animate-pulse" />
                  </div>
                </div>
                
                {/* Floating Tags */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 right-0 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white text-xs font-bold"
                >
                  Analyzing Performance...
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-10 left-0 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-white text-xs font-bold"
                >
                  Calculating ROI...
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
