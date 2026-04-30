"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const cases = [
  {
    title: "FrontEnd IT",
    metric: "+240% Lead Gen",
    desc: "A complete overhaul of their lead generation funnel and brand authority.",
    image: "/projects/it-services.png",
    slug: "frontend-it",
  },
  {
    title: "Smarter Financial",
    metric: "1.5s Load Speed",
    desc: "Optimizing for high-traffic scalability and sub-second performance.",
    image: "/projects/financial-tools.png",
    slug: "smarter-financial",
  },
  {
    title: "WoodMart Furniture",
    metric: "+150% Sales",
    desc: "Building a high-converting WooCommerce powerhouse.",
    image: "/projects/furniture-ecommerce.png",
    slug: "woodmart-furniture",
  },
];

export default function CaseStudyPreview() {
  return (
    <section className="py-24 bg-navy text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Real Results for <span className="text-gold">Real Businesses</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-white/60"
            >
              We don't just show screenshots. We show numbers. These are the growth engines we've built for our clients.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/projects" className="group flex items-center gap-2 text-gold font-bold text-lg hover:underline">
              View All Case Studies
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/case-studies/${item.slug}`} className="group block cursor-pointer">
                <div className={`aspect-[4/5] rounded-2xl mb-6 overflow-hidden relative border-4 border-[#2c2c2e] group-hover:border-gold/50 transition-colors bg-black`}>
                  {/* Real Image Mockup */}
                  <Image src={item.image} alt={item.title} fill className="object-cover object-top group-hover:object-bottom transition-all duration-[8s] ease-in-out cursor-pointer opacity-80 group-hover:opacity-100" />
                  
                  {/* Overlay Metric */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent flex flex-col justify-end p-8 pointer-events-none">
                    <div className="text-3xl font-bold mb-2 text-white">{item.metric}</div>
                    <div className="text-white/60 text-xs font-bold uppercase tracking-widest">Case Study ROI</div>
                  </div>
                  
                  {/* Top Right Action */}
                  <div className="absolute top-4 right-4 bg-navy/80 backdrop-blur-md text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ArrowUpRight className="w-6 h-6 text-gold" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-gold transition-colors">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
