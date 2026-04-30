"use client";

import { motion } from "framer-motion";
import { Search, Calendar, User, ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    title: "Why Your $2K Website is Costing You $200K in Revenue",
    excerpt: "Most business owners treat their website as an expense. The elite treat it as an investment with a measurable ROI.",
    category: "Business Strategy",
    date: "May 12, 2026",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "The Sub-1 Second Performance Secret",
    excerpt: "How we optimized a global FinTech platform to load in 0.8s and saw an instant 45% boost in mobile conversions.",
    category: "Technical",
    date: "May 8, 2026",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Psychological Triggers That Force Users to Click",
    excerpt: "Beyond pretty colors: Using high-end UX psychology to guide users through the million-dollar funnel.",
    category: "UX/UI Design",
    date: "May 1, 2026",
    image: "https://images.unsplash.com/photo-1541462608141-ad4d45a446a4?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "SEO Architecture: Building a Moat Around Your Brand",
    excerpt: "Why traditional SEO is dead and how to build a technical foundation that search engines can't ignore.",
    category: "SEO",
    date: "April 25, 2026",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="pt-40 pb-20 bg-gray-light border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold text-navy mb-8"
            >
              Insights & <span className="text-gold">Authority.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-charcoal/60 leading-relaxed"
            >
              Expert perspectives on high-conversion design, technical excellence, and the systems that drive business growth.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-navy rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row relative">
            <div className="lg:w-1/2 relative overflow-hidden">
              <img
                src={posts[0].image}
                alt="Featured"
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
              />
              <div className="absolute top-8 left-8 bg-gold text-white px-6 py-2 rounded-full font-bold uppercase tracking-widest text-sm shadow-lg">
                Featured Insight
              </div>
            </div>
            <div className="lg:w-1/2 p-12 md:p-20 flex flex-col justify-center text-white">
              <div className="flex items-center gap-4 text-white/40 font-bold uppercase tracking-widest text-xs mb-8">
                <span>{posts[0].category}</span>
                <span className="w-1 h-1 bg-gold rounded-full" />
                <span>{posts[0].date}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">{posts[0].title}</h2>
              <p className="text-xl text-white/60 mb-12 leading-relaxed">{posts[0].excerpt}</p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-gold font-bold text-lg hover:underline group"
              >
                Read Full Insight
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.slice(1).map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-video rounded-3xl overflow-hidden mb-8 shadow-xl border border-gray-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="flex items-center gap-4 text-charcoal/40 font-bold uppercase tracking-widest text-[10px] mb-4">
                  <span>{post.category}</span>
                  <span className="w-1 h-1 bg-gold rounded-full" />
                  <span>{post.date}</span>
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-gold transition-colors">{post.title}</h3>
                <p className="text-charcoal/60 leading-relaxed mb-8">{post.excerpt}</p>
                <div className="flex items-center gap-2 text-navy font-bold group-hover:text-gold transition-colors">
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-gray-light">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] p-12 md:p-20 shadow-xl border border-gray-100 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-navy/5 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="relative z-10">
              <TrendingUp className="w-12 h-12 text-gold mx-auto mb-8" />
              <h2 className="text-4xl font-bold text-navy mb-6">Join the Growth Circle</h2>
              <p className="text-xl text-charcoal/60 mb-12 max-w-xl mx-auto">
                Subscribe to get exclusive insights on conversion strategy and performance optimization delivered directly to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Enter your professional email"
                  className="flex-grow bg-gray-light border border-gray-200 rounded-xl px-6 py-4 outline-none focus:border-gold transition-all"
                />
                <button className="bg-navy text-white px-8 py-4 rounded-xl font-bold hover:bg-navy/90 transition-all shadow-lg">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
