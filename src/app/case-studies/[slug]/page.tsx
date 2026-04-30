"use client";

import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, BarChart3, Quote, ChevronRight, Smartphone, Monitor, Tablet } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Image from "next/image";

const caseStudies = {
  "frontend-it": {
    title: "FrontEnd IT",
    client: "FrontEnd IT Solutions",
    industry: "Tech",
    problem: "Their website was outdated and failed to communicate their premium IT services. Load times were poor, and they were losing leads to competitors because their site didn't inspire trust.",
    solution: "We built a custom WordPress theme optimized for speed and conversion. We structured the content to clearly highlight their Managed IT, Consulting, and Cyber Security services.",
    result: "The new WordPress site established them as an authority. With a structured approach and fast load times, they saw a massive increase in lead generation and organic visibility.",
    execution: ["Custom WordPress Theme", "Elementor Pro Integration", "Performance Optimization", "SEO Silo Structure"],
    results: {
      conversions: "+240%",
      traffic: "+120%",
      speed: "1.2s",
      roi: "3.5x"
    },
    testimonial: {
      quote: "The new WordPress site completely transformed how clients perceive us. Our lead volume has more than doubled.",
      author: "David Chen",
      role: "CEO, FrontEnd IT"
    },
    image: "/projects/it-services.png",
  },
  "smarter-financial": {
    title: "Smarter Financial",
    client: "Smarter Financial Tools",
    industry: "FinTech",
    problem: "Users were abandoning the sign-up process because the old site felt untrustworthy and confusing. The mobile experience was broken, costing them thousands in lost revenue.",
    solution: "We developed a high-performance WordPress site with a streamlined user journey. We integrated secure payment solution landing pages and optimized the mobile layout.",
    result: "By leveraging a lightweight WordPress architecture and clear call-to-actions, the platform achieved blazing fast load speeds and significantly higher user retention.",
    execution: ["WordPress Headless Setup", "Conversion Rate Optimization", "Mobile-First Redesign", "Advanced Caching"],
    results: {
      conversions: "+180%",
      traffic: "+95%",
      speed: "1.5s",
      roi: "4.8x"
    },
    testimonial: {
      quote: "Speed and trust are everything in FinTech. This new site delivers both flawlessly.",
      author: "Sarah Jenkins",
      role: "CMO, Smarter Financial"
    },
    image: "/projects/financial-tools.png",
  },
  "woodmart-furniture": {
    title: "WoodMart Furniture",
    client: "WoodMart",
    industry: "E-commerce",
    problem: "Their WooCommerce store was sluggish, and the product pages lacked the visual appeal needed to sell premium furniture. The checkout process was causing high cart abandonment.",
    solution: "We overhauled their WooCommerce setup, creating a bespoke, high-converting storefront. We implemented advanced product filtering, optimized image delivery, and simplified checkout.",
    result: "The revamped WooCommerce store provided a seamless shopping experience, leading to a dramatic increase in sales and average order value.",
    execution: ["WooCommerce Optimization", "Custom Product Filtering", "Frictionless Checkout", "Core Web Vitals Tuning"],
    results: {
      conversions: "+150%",
      traffic: "+210%",
      speed: "1.8s",
      roi: "5.2x"
    },
    testimonial: {
      quote: "Our sales skyrocketed after the redesign. The site is beautiful and incredibly fast.",
      author: "Marcus Thorne",
      role: "Director, WoodMart"
    },
    image: "/projects/furniture-ecommerce.png",
  },
  "appdev-agency": {
    title: "AppDev Agency",
    client: "AppDev Solutions",
    industry: "Enterprise",
    problem: "As an agency for funded companies, their own website didn't reflect their high-end capabilities. They needed a platform that screamed 'enterprise quality'.",
    solution: "We crafted a bespoke WordPress experience with dynamic animations and a premium dark-mode aesthetic. The site was built to highlight their case studies effectively.",
    result: "The new digital presence immediately elevated their brand. They are now closing larger enterprise deals thanks to the authority their new website projects.",
    execution: ["Custom WordPress Development", "Advanced GSAP Animations", "Enterprise Architecture", "Lead Gen Funnel"],
    results: {
      conversions: "+190%",
      traffic: "+140%",
      speed: "1.4s",
      roi: "300%"
    },
    testimonial: {
      quote: "We now have a website that matches the caliber of the mobile apps we build. Phenomenal work.",
      author: "Elena Rodriguez",
      role: "Founder, AppDev Agency"
    },
    image: "/projects/app-agency.png",
  },
  "medicare-clinic": {
    title: "Medicare Clinic",
    client: "Medicare Health",
    industry: "Healthcare",
    problem: "Patients were struggling to find information and book appointments online. The site was not accessible and failed to convey the professionalism of the clinic.",
    solution: "We built an accessible, easy-to-navigate WordPress website. We integrated a seamless online booking system and structured the services for easy discovery.",
    result: "The new platform significantly reduced front-desk calls and increased online bookings. The professional design built immediate trust with new patients.",
    execution: ["WordPress Healthcare Theme", "Booking System Integration", "WCAG Accessibility", "Local SEO Optimization"],
    results: {
      conversions: "+180%",
      traffic: "+160%",
      speed: "1.3s",
      roi: "4.1x"
    },
    testimonial: {
      quote: "Our patients love the new site. Booking appointments has never been easier for them.",
      author: "Dr. James Wilson",
      role: "Head Physician, Medicare"
    },
    image: "/projects/medicare.png",
  },
  "dubai-heights": {
    title: "Dubai Heights",
    client: "Dubai Heights Luxury Real Estate",
    industry: "Real Estate",
    problem: "They had high-end property listings but a cheap-looking template site. It loaded slowly, and international High-Net-Worth buyers were bouncing before seeing the properties.",
    solution: "We engineered a premium WordPress real estate platform. We integrated custom post types for properties, an advanced filtering system, and optimized media delivery for rapid loading across the globe.",
    result: "The luxurious new design immediately established trust. With sub-second load times and an intuitive property search, they saw a massive influx of qualified international leads.",
    execution: ["Custom WordPress Theme", "Advanced Property Filtering", "Global CDN Optimization", "High-End UX/UI Design"],
    results: {
      conversions: "+410%",
      traffic: "+185%",
      speed: "1.2s",
      roi: "8.5x"
    },
    testimonial: {
      quote: "DiamondVilla transformed our digital presence. We are now closing multi-million dollar deals directly through leads from the new website.",
      author: "Tariq Al-Maktoum",
      role: "Managing Director, Dubai Heights"
    },
    image: "/projects/real-estate-1.png",
  },
  "unikatos-properties": {
    title: "Unikatos Properties",
    client: "Unikatos Real Estate Developers",
    industry: "Real Estate",
    problem: "Their flagship off-plan developments needed a digital showcase that matched their architectural ambition. The old site couldn't handle high-resolution renders without crashing mobile browsers.",
    solution: "We built a specialized WordPress landing page ecosystem designed to handle heavy interactive media. We implemented lazy loading, WebP image conversion, and a seamless inquiry funnel.",
    result: "The platform now effortlessly showcases their high-resolution properties. The seamless user experience has led to a record-breaking number of off-plan inquiries.",
    execution: ["WordPress Landing Ecosystem", "Interactive Media Optimization", "Conversion Funnel Design", "Mobile Performance Tuning"],
    results: {
      conversions: "+320%",
      traffic: "+210%",
      speed: "1.1s",
      roi: "6.2x"
    },
    testimonial: {
      quote: "The visual quality and speed of this site is unmatched. It perfectly represents the luxury of our developments.",
      author: "Elena Rostov",
      role: "VP of Marketing, Unikatos Properties"
    },
    image: "/projects/real-estate-2.png",
  }
};

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params.slug as string;
  const data = caseStudies[slug as keyof typeof caseStudies] || caseStudies["frontend-it"];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="pt-40 pb-24 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src={data.image} alt="" fill className="object-cover blur-sm" />
          <div className="absolute inset-0 bg-navy/80" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <Link href="/projects" className="inline-flex items-center gap-2 text-gold font-bold mb-12 hover:translate-x-[-4px] transition-transform">
            <ArrowLeft className="w-5 h-5" />
            Back to All Projects
          </Link>
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 text-gold font-bold uppercase tracking-widest text-sm mb-6">
              <span>{data.industry}</span>
              <span className="text-white/20">|</span>
              <span>Case Study</span>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-bold mb-8 leading-tight"
            >
              {data.title}
            </motion.h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-12 border-t border-white/10 pt-12">
              <div>
                <div className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Conversions</div>
                <div className="text-3xl font-bold text-gold">{data.results.conversions}</div>
              </div>
              <div>
                <div className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Traffic</div>
                <div className="text-3xl font-bold text-gold">{data.results.traffic}</div>
              </div>
              <div>
                <div className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Load Speed</div>
                <div className="text-3xl font-bold text-gold">{data.results.speed}</div>
              </div>
              <div>
                <div className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">ROI</div>
                <div className="text-3xl font-bold text-gold">{data.results.roi}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-2/3 space-y-16">
              
              {/* Problem, Solution, Result */}
              <div className="space-y-12">
                <div>
                  <h2 className="text-4xl font-bold text-navy mb-6">The Problem</h2>
                  <p className="text-xl text-charcoal/70 leading-relaxed">{data.problem}</p>
                </div>
                
                <div>
                  <h2 className="text-4xl font-bold text-navy mb-6">The Solution</h2>
                  <p className="text-xl text-charcoal/70 leading-relaxed mb-8">{data.solution}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {data.execution.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-gray-light rounded-xl border border-gray-200">
                        <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                        <span className="font-bold text-navy">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-4xl font-bold text-navy mb-6">The Result</h2>
                  <p className="text-xl text-charcoal/70 leading-relaxed">{data.result}</p>
                </div>
              </div>

              {/* Device Mockups */}
              <div className="space-y-12 pt-8 border-t border-gray-100">
                <h3 className="text-3xl font-bold text-navy text-center mb-12">Responsive Design</h3>
                
                {/* Laptop Mockup */}
                <div className="mx-auto max-w-[800px]">
                  <div className="flex items-center justify-center gap-2 mb-4 text-charcoal/40 font-bold uppercase tracking-widest text-sm">
                    <Monitor className="w-4 h-4" /> Desktop View
                  </div>
                  <div className="bg-[#1c1c1e] p-3 rounded-t-2xl shadow-2xl border-x-4 border-t-4 border-[#2c2c2e] relative">
                    <div className="bg-black rounded-lg overflow-hidden aspect-[16/10] relative group">
                      <Image src={data.image} alt="Laptop View" fill className="object-cover object-top group-hover:object-bottom transition-all duration-[10s] ease-in-out cursor-pointer" />
                    </div>
                  </div>
                  <div className="bg-[#2c2c2e] h-6 rounded-b-3xl relative shadow-xl border-t border-[#1c1c1e]">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-1.5 bg-[#1c1c1e] rounded-b-sm"></div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row justify-center gap-12 items-end pt-12">
                  {/* Tablet Mockup */}
                  <div className="w-full max-w-[400px] mx-auto md:mx-0">
                    <div className="flex items-center justify-center gap-2 mb-4 text-charcoal/40 font-bold uppercase tracking-widest text-sm">
                      <Tablet className="w-4 h-4" /> Tablet View
                    </div>
                    <div className="bg-[#1c1c1e] p-4 rounded-[2rem] shadow-2xl border-4 border-[#2c2c2e] relative">
                      <div className="bg-black rounded-xl overflow-hidden aspect-[3/4] relative group">
                        <Image src={data.image} alt="Tablet View" fill className="object-cover object-top group-hover:object-bottom transition-all duration-[10s] ease-in-out cursor-pointer" />
                      </div>
                    </div>
                  </div>

                  {/* Mobile Mockup */}
                  <div className="w-full max-w-[250px] mx-auto md:mx-0">
                    <div className="flex items-center justify-center gap-2 mb-4 text-charcoal/40 font-bold uppercase tracking-widest text-sm">
                      <Smartphone className="w-4 h-4" /> Mobile View
                    </div>
                    <div className="bg-[#1c1c1e] p-3 rounded-[2.5rem] shadow-2xl border-4 border-[#2c2c2e] relative">
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-1/3 h-4 bg-[#1c1c1e] rounded-b-xl z-10"></div>
                      <div className="bg-black rounded-[2rem] overflow-hidden aspect-[9/19] relative group">
                        <Image src={data.image} alt="Mobile View" fill className="object-cover object-top group-hover:object-bottom transition-all duration-[10s] ease-in-out cursor-pointer" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3 space-y-8">
              {/* Testimonial */}
              <div className="bg-navy rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden">
                <Quote className="absolute top-8 right-8 w-16 h-16 text-gold/10" />
                <div className="flex gap-1 text-gold mb-6">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xl italic leading-relaxed mb-8 relative z-10">"{data.testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold rounded-full" />
                  <div>
                    <div className="font-bold text-lg">{data.testimonial.author}</div>
                    <div className="text-white/40 text-sm">{data.testimonial.role}</div>
                  </div>
                </div>
              </div>

              {/* Sidebar Stats */}
              <div className="bg-gray-light rounded-[2.5rem] p-10 border border-gray-200">
                <h4 className="text-navy font-bold text-xl mb-8 flex items-center gap-3">
                  <BarChart3 className="text-gold" />
                  Key Metrics
                </h4>
                <div className="space-y-8">
                  <div>
                    <div className="text-charcoal/40 text-xs font-bold uppercase tracking-widest mb-2">Conversions Lift</div>
                    <div className="text-3xl font-bold text-navy">{data.results.conversions}</div>
                    <div className="w-full h-2 bg-gray-200 rounded-full mt-3">
                      <div className="w-[85%] h-full bg-gold rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="text-charcoal/40 text-xs font-bold uppercase tracking-widest mb-2">Traffic Increase</div>
                    <div className="text-3xl font-bold text-navy">{data.results.traffic}</div>
                    <div className="w-full h-2 bg-gray-200 rounded-full mt-3">
                      <div className="w-full h-full bg-navy rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="text-charcoal/40 text-xs font-bold uppercase tracking-widest mb-2">ROI Achieved</div>
                    <div className="text-3xl font-bold text-navy">{data.results.roi}</div>
                    <div className="w-full h-2 bg-gray-200 rounded-full mt-3">
                      <div className="w-[90%] h-full bg-green-500 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-navy text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready for Results Like These?</h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-gold text-white px-12 py-5 rounded-xl font-bold text-xl hover:bg-gold/90 transition-all shadow-2xl group"
          >
            Start Your Case Study
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
