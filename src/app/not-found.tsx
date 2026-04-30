"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Home, Search, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy flex items-center justify-center pt-20 px-6">
      <div className="max-w-3xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative inline-block mb-12"
        >
          <div className="text-[12rem] md:text-[20rem] font-bold text-white/5 select-none leading-none">404</div>
          <div className="absolute inset-0 flex items-center justify-center">
            <AlertTriangle className="w-24 h-24 text-gold animate-pulse" />
          </div>
        </motion.div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Oops! This page is costing you money.</h1>
        <p className="text-xl text-white/60 mb-12 max-w-xl mx-auto">
          Just like a slow website, a missing page is a lost opportunity. Let's get you back to the high-conversion path.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/"
            className="w-full sm:w-auto bg-gold text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-gold/90 transition-all shadow-xl flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" />
            Back to Homepage
          </Link>
          <Link
            href="/services"
            className="w-full sm:w-auto border border-white/20 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/5 transition-all flex items-center justify-center gap-2"
          >
            <Search className="w-5 h-5" />
            Explore Services
          </Link>
        </div>

        <div className="mt-20 pt-12 border-t border-white/10">
          <p className="text-white/40 text-sm">
            Not sure where to go? <Link href="/contact" className="text-gold font-bold hover:underline">Contact our strategy team →</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
