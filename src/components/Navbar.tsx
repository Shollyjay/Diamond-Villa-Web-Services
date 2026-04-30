"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Process", href: "/process" },
  { name: "Pricing", href: "/pricing" },
  { name: "Decision Maker", href: "/decision-maker" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Pages where the hero section has a light background (white or gray-light)
  const isLightPage = ["/projects", "/process", "/blog", "/terms", "/privacy"].includes(pathname);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center bg-white p-1 rounded">
          <Image src="/logo.jpg" alt="DiamondVilla Logo" width={180} height={50} className="object-contain h-10 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-gold ${
                scrolled || isLightPage ? "text-navy" : "text-white/90"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-gold hover:bg-gold/90 text-white px-6 py-2.5 rounded-md font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center space-x-2"
          >
            <span>Book Call</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-navy p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className={scrolled || isLightPage ? "text-navy" : "text-white"} /> : <Menu className={scrolled || isLightPage ? "text-navy" : "text-white"} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-navy text-lg font-medium hover:text-gold"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-gold text-white px-6 py-3 rounded-md font-semibold text-center"
                onClick={() => setIsOpen(false)}
              >
                Book Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
