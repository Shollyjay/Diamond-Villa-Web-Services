"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Filter } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    title: "FrontEnd IT",
    category: "Tech",
    metric: "+240% Lead Gen",
    image: "/projects/it-services.png",
    slug: "frontend-it",
  },
  {
    title: "Smarter Financial",
    category: "FinTech",
    metric: "1.5s Load Speed",
    image: "/projects/financial-tools.png",
    slug: "smarter-financial",
  },
  {
    title: "WoodMart Furniture",
    category: "E-commerce",
    metric: "+150% Sales",
    image: "/projects/furniture-ecommerce.png",
    slug: "woodmart-furniture",
  },
  {
    title: "AppDev Agency",
    category: "Enterprise",
    metric: "300% ROI",
    image: "/projects/app-agency.png",
    slug: "appdev-agency",
  },
  {
    title: "Medicare Clinic",
    category: "Healthcare",
    metric: "+180% Bookings",
    image: "/projects/medicare.png",
    slug: "medicare-clinic",
  },
  {
    title: "Dubai Heights",
    category: "Real Estate",
    metric: "+410% Lead Quality",
    image: "/projects/real-estate-1.png",
    slug: "dubai-heights",
  },
  {
    title: "Unikatos Properties",
    category: "Real Estate",
    metric: "1.1s Load Speed",
    image: "/projects/real-estate-2.png",
    slug: "unikatos-properties",
  },
];

const categories = ["All", "Tech", "FinTech", "E-commerce", "Enterprise", "Healthcare", "Real Estate"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

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
              Proven <span className="text-gold">Million-Dollar</span> Case Studies
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-charcoal/60 leading-relaxed"
            >
              We don't build generic websites. We build specific growth engines tailored to your industry. Explore our track record of excellence.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-white sticky top-[80px] z-30 border-b border-gray-100">
        <div className="container mx-auto px-6 overflow-x-auto">
          <div className="flex items-center gap-4 min-w-max">
            <div className="flex items-center gap-2 text-navy font-bold mr-4">
              <Filter className="w-5 h-5" />
              Filter:
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-bold transition-all border ${
                  activeCategory === cat 
                    ? "bg-navy text-white border-navy" 
                    : "bg-transparent text-charcoal/40 border-gray-200 hover:border-gold hover:text-gold"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <Link href={`/case-studies/${project.slug}`}>
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden relative mb-8 shadow-xl border border-gray-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    
                    {/* Badge */}
                    <div className="absolute top-6 left-6 bg-gold text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                      {project.category}
                    </div>

                    {/* Metric */}
                    <div className="absolute bottom-8 left-8 right-8 text-white">
                      <div className="text-3xl font-bold mb-2 text-gold group-hover:translate-x-2 transition-transform">{project.metric}</div>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold">{project.title}</span>
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-gold transition-colors">
                          <ArrowUpRight className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-navy text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Want Results Like These?</h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            Your industry is competitive. Don't settle for a website that just 'looks good'. Build a weapon.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gold text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-gold/90 transition-all shadow-xl"
          >
            Start Your Project
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
