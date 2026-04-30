import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export const metadata: Metadata = {
  title: "DiamondVilla | High-Conversion Websites for Premium Brands",
  description: "We build million-dollar websites for brands that refuse to look cheap. WordPress, SEO, CRO, and Speed optimization engineered for growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-white text-charcoal font-sans">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>

        <footer className="bg-navy text-white py-12 border-t border-white/10">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-6 inline-block w-max">
                <Image src="/logo.png" alt="DiamondVilla Logo" width={200} height={60} className="object-contain h-12 w-auto" />
              </div>
              <p className="text-white/60 max-w-sm mb-6">
                We don't just build websites. We fix the systems that drive your revenue. Engineered for growth, designed for authority.
              </p>
            </div>
            <div>
              <h4 className="text-gold font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-white/60">
                <li><a href="/services" className="hover:text-gold transition-colors">Services</a></li>
                <li><a href="/projects" className="hover:text-gold transition-colors">Projects</a></li>
                <li><a href="/process" className="hover:text-gold transition-colors">Our Process</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-gold font-bold mb-6">Connect</h4>
              <ul className="space-y-4 text-white/60">
                <li><a href="/contact" className="hover:text-gold transition-colors">Book a Call</a></li>
                <li><a href="mailto:diamondvilla25@gmail.com" className="hover:text-gold transition-colors">Email Us</a></li>
                <li><a href="https://www.facebook.com/share/g/17XSwc5mJh/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Facebook Community</a></li>
              </ul>
            </div>
          </div>
          <div className="container mx-auto px-6 mt-12 pt-8 border-t border-white/5 text-center text-white/40 text-sm">
            <p>&copy; {new Date().getFullYear()} DiamondVilla Web Services. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

