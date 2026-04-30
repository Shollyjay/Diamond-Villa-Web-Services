"use client";

import { motion } from "framer-motion";
import { AlertCircle, TrendingDown, EyeOff, Timer, MousePointerClick, ShieldAlert } from "lucide-react";

const problems = [
  {
    icon: Timer,
    title: "Slow Load Speed",
    description: "Every second of delay costs you 7% in conversions. We fix the lag and make your site fly.",
  },
  {
    icon: EyeOff,
    title: "Poor SEO Rankings",
    description: "If you're not on page one, you're invisible. Our SEO architecture ensures you dominate search.",
  },
  {
    icon: MousePointerClick,
    title: "Low Conversions",
    description: "Traffic is useless if it doesn't convert. We use CRO psychology to turn visitors into buyers.",
  },
  {
    icon: AlertCircle,
    title: "Outdated Design",
    description: "A cheap-looking site destroys trust instantly. We give you an elite, high-end brand presence.",
  },
  {
    icon: ShieldAlert,
    title: "Broken Systems",
    description: "Manual work is killing your growth. We automate your lead flow and booking systems.",
  },
  {
    icon: TrendingDown,
    title: "Losing Revenue",
    description: "Your website should be an asset, not a liability. We stop the bleeding and start the growth.",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-navy mb-6"
          >
            Your Website Is Costing You More Than You Think
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-charcoal/60"
          >
            Most business owners treat their website as a digital business card. The elite treat it as a high-performance sales engine.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-gray-light border border-gray-200 hover:border-gold/30 hover:shadow-xl transition-all group"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-gold transition-colors">
                <item.icon className="w-6 h-6 text-navy group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">{item.title}</h3>
              <p className="text-charcoal/70 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
