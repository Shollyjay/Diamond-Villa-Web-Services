"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrainCircuit, CheckCircle2, ChevronRight, ChevronLeft, Loader2, Sparkles, Target, Zap, Layout, Search } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    id: "business",
    title: "Business Type",
    question: "What type of business are you running?",
    options: ["E-commerce", "SaaS / Tech", "Professional Services", "Local Business", "Enterprise"],
  },
  {
    id: "issue",
    title: "Core Issue",
    question: "What is your website's biggest problem?",
    options: ["Low Conversions", "Slow Load Speed", "Poor Search Rankings", "Outdated Design", "Everything is Broken"],
  },
  {
    id: "budget",
    title: "Budget Range",
    question: "What is your estimated investment range?",
    options: ["$2K - $5K", "$5K - $15K", "$15K - $50K", "$50K+"],
  },
  {
    id: "goal",
    title: "Primary Goal",
    question: "What is your primary goal for the next 6 months?",
    options: ["Double Revenue", "Dominate Search", "Build Brand Authority", "Automate Sales Flow"],
  },
];

export default function DecisionMaker() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleOptionSelect = (option: string) => {
    const stepId = steps[currentStep].id;
    setAnswers({ ...answers, [stepId]: option });
    
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      analyzeResults();
    }
  };

  const analyzeResults = () => {
    setIsAnalyzing(true);
    // Simulate AI analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      generateRecommendation();
    }, 3000);
  };

  const generateRecommendation = () => {
    const { issue, business, goal } = answers;
    
    let diagnosis = "Your website is currently a liability rather than an asset.";
    let recommendation = "We recommend a full conversion-first redesign.";
    let roi = "3-5x";
    
    if (issue === "Slow Load Speed") {
      diagnosis = "Your server response times and script bloat are killing your user experience.";
      recommendation = "Speed Optimization & Tech Stack Migration.";
      roi = "2-3x";
    } else if (issue === "Poor Search Rankings") {
      diagnosis = "Your technical SEO foundation is weak, preventing search engines from indexing you correctly.";
      recommendation = "SEO Architecture & Authority Building.";
      roi = "4-6x";
    }

    setResult({
      diagnosis,
      recommendation,
      estimatedROI: roi,
      package: answers.budget === "$50K+" ? "Enterprise Custom" : "Growth Accelerator",
    });
  };

  return (
    <div className="min-h-screen bg-navy pt-32 pb-20 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gold/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-gold/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {!result && !isAnalyzing && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3 mb-8">
                <BrainCircuit className="w-8 h-8 text-gold" />
                <div>
                  <h1 className="text-3xl font-bold text-white">AI Decision Maker</h1>
                  <p className="text-white/40 text-sm">Step {currentStep + 1} of {steps.length}</p>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">{steps[currentStep].question}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {steps[currentStep].options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleOptionSelect(option)}
                      className={`p-6 rounded-xl border text-left transition-all group ${
                        answers[steps[currentStep].id] === option
                          ? "bg-gold border-gold text-white"
                          : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:border-gold/50"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-lg">{option}</span>
                        <ChevronRight className={`w-5 h-5 transition-transform ${answers[steps[currentStep].id] === option ? "translate-x-1" : "group-hover:translate-x-1"}`} />
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center pt-8 border-t border-white/10">
                <button
                  disabled={currentStep === 0}
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className={`flex items-center gap-2 text-white font-bold transition-opacity ${currentStep === 0 ? "opacity-0 pointer-events-none" : "opacity-60 hover:opacity-100"}`}
                >
                  <ChevronLeft className="w-5 h-5" />
                  Back
                </button>
                <div className="flex gap-2">
                  {steps.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 rounded-full transition-all ${i === currentStep ? "w-8 bg-gold" : "w-2 bg-white/20"}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {isAnalyzing && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="relative inline-block mb-12">
                <Loader2 className="w-24 h-24 text-gold animate-spin" />
                <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-gold" />
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">Analyzing Your Business Data...</h2>
              <p className="text-xl text-white/60">Our AI is calculating the optimal ROI strategy based on your inputs.</p>
            </motion.div>
          )}

          {result && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl p-8 md:p-16 shadow-2xl overflow-hidden relative"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gold" />
              <div className="flex flex-col md:flex-row gap-12 items-start">
                <div className="md:w-2/3">
                  <div className="flex items-center gap-2 text-gold font-bold uppercase tracking-widest text-sm mb-6">
                    <CheckCircle2 className="w-5 h-5" />
                    Diagnosis Complete
                  </div>
                  <h2 className="text-4xl font-bold text-navy mb-8">Your Strategic Roadmap</h2>
                  
                  <div className="space-y-8">
                    <div className="p-6 bg-navy/5 rounded-2xl border border-navy/10">
                      <h3 className="flex items-center gap-2 text-navy font-bold text-xl mb-3">
                        <Search className="w-5 h-5 text-gold" />
                        Problem Diagnosis
                      </h3>
                      <p className="text-charcoal/70 leading-relaxed text-lg">{result.diagnosis}</p>
                    </div>

                    <div className="p-6 bg-gold/5 rounded-2xl border border-gold/10">
                      <h3 className="flex items-center gap-2 text-navy font-bold text-xl mb-3">
                        <Layout className="w-5 h-5 text-gold" />
                        Recommended Solution
                      </h3>
                      <p className="text-charcoal/70 leading-relaxed text-lg">{result.recommendation}</p>
                    </div>
                  </div>
                </div>

                <div className="md:w-1/3 w-full space-y-6">
                  <div className="bg-navy rounded-2xl p-8 text-center text-white shadow-xl">
                    <Zap className="w-10 h-10 text-gold mx-auto mb-4" />
                    <div className="text-white/60 text-sm font-bold uppercase tracking-widest mb-2">Estimated ROI</div>
                    <div className="text-5xl font-bold text-gold">{result.estimatedROI}</div>
                  </div>

                  <div className="bg-gray-light rounded-2xl p-8 border border-gray-200">
                    <div className="text-charcoal/40 text-xs font-bold uppercase tracking-widest mb-2">Recommended Service</div>
                    <div className="text-navy font-bold text-xl mb-6">{result.package}</div>
                    <Link
                      href="/contact"
                      className="w-full bg-gold hover:bg-gold/90 text-white py-4 rounded-xl font-bold block transition-all shadow-lg text-center"
                    >
                      Book Strategy Call
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-charcoal/40 text-sm italic">
                  *This analysis is based on industry benchmarks and your specific inputs.
                </p>
                <button
                  onClick={() => {
                    setResult(null);
                    setCurrentStep(0);
                    setAnswers({});
                  }}
                  className="text-navy font-bold hover:text-gold transition-colors underline"
                >
                  Start Over
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
