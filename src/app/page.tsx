import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import CaseStudyPreview from "@/components/CaseStudyPreview";
import ProcessSection from "@/components/ProcessSection";
import DecisionMakerTeaser from "@/components/DecisionMakerTeaser";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <CaseStudyPreview />
      <ProcessSection />
      <DecisionMakerTeaser />
      
      {/* Final CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto bg-navy rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full -ml-32 -mb-32 blur-3xl" />
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 relative z-10 leading-tight">
              Let's Build Something That <span className="text-gold">Prints Revenue.</span>
            </h2>
            <p className="text-xl text-white/60 mb-12 relative z-10 max-w-2xl mx-auto">
              Ready to stop losing money and start dominating your market? Book your free strategy call today and see the DiamondVilla difference.
            </p>
            
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-gold text-white px-12 py-5 rounded-xl font-bold text-xl hover:bg-gold/90 transition-all shadow-[0_0_30px_rgba(212,160,23,0.3)] group relative z-10"
            >
              Book Strategy Call
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

