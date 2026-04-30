"use client";

import { motion } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-navy">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] -mr-64 -mt-64" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] -ml-64 -mb-64" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-3/5 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-4 rounded-full bg-gold/10 text-gold text-sm font-bold tracking-wider uppercase mb-6 border border-gold/20">
                Premium Web Agency
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
                We Build <span className="text-gold">Million-Dollar</span> Websites for Brands That Refuse to Look Cheap.
              </h1>
              <p className="text-xl text-white/70 mb-10 max-w-2xl leading-relaxed">
                WordPress • SEO • CRO • Speed • Branding — Engineered for Growth. We don't just build websites; we fix businesses.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto bg-gold hover:bg-gold/90 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all shadow-[0_0_20px_rgba(212,160,23,0.3)] flex items-center justify-center gap-2"
                >
                  Book Strategy Call
                  <ChevronRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/projects"
                  className="w-full sm:w-auto border border-white/20 hover:bg-white/5 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2"
                >
                  View Case Studies
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="mt-12 pt-12 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-8 opacity-60">
                <div className="flex items-center gap-2">
                  <div className="flex text-gold">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-medium text-white">5-Star Agency</span>
                </div>
                <div className="text-sm font-medium text-white">Google Partner</div>
                <div className="text-sm font-medium text-white">Clutch Top Developer</div>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-2/5 relative">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10"
            >
              {/* Mockup Preview */}
              <div className="transform rotate-3 hover:rotate-0 transition-transform duration-500 relative z-10 w-full max-w-[600px] mx-auto">
                {/* Laptop Top/Screen */}
                <div className="bg-[#1c1c1e] p-2 rounded-t-2xl shadow-2xl border-x-4 border-t-4 border-[#2c2c2e] relative">
                  {/* Screen Frame */}
                  <div className="bg-black rounded-lg overflow-hidden aspect-[16/10] relative group">
                    <Image 
                      src="/mockup.png" 
                      alt="Website Mockup" 
                      fill
                      className="object-cover object-top group-hover:object-bottom transition-all duration-[8s] ease-in-out cursor-pointer"
                    />
                  </div>
                </div>
                {/* Laptop Base */}
                <div className="bg-[#2c2c2e] h-4 rounded-b-2xl relative shadow-xl border-t border-[#1c1c1e]">
                  {/* Trackpad indentation */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-1 bg-[#1c1c1e] rounded-b-sm"></div>
                </div>
              </div>
              
              {/* Floating Element */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 bg-white p-6 rounded-xl shadow-2xl z-20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center text-green-500">
                    <ArrowRight className="w-6 h-6 rotate-[-45deg]" />
                  </div>
                  <div>
                    <div className="text-navy font-bold text-2xl">+320%</div>
                    <div className="text-charcoal/60 text-xs font-semibold uppercase tracking-wider">ROI Boost</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
