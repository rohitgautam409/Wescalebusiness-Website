"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Dashboard", href: "#dashboard" },
  { name: "Features", href: "#features" },
  { name: "Creatives", href: "#creatives" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 pointer-events-auto"
      style={{
        backgroundColor: "rgba(10, 10, 15, 0.6)",
        backdropFilter: "blur(20px) saturate(140%)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12">
        <nav className="relative flex items-center justify-between h-[64px] md:h-[84px]">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-2 md:gap-3 group shrink-0">
            <img src="/Company-Logo.png" alt="WeScaleBusiness Logo" className="w-8 h-8 md:w-12 md:h-12 object-contain" />
            <div className="font-display font-[800] text-[16px] sm:text-lg md:text-2xl tracking-tight flex items-center">
              <span className="text-bone">WeScale</span>
              <span className="text-[#e879f9]">Business</span>
            </div>
          </Link>

          {/* Center: Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-ash hover:text-bone transition-colors text-sm font-medium tracking-wide"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <motion.button
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="flex items-center justify-center rounded-full bg-gradient-to-r from-[#c084fc] to-[#e879f9] text-obsidian font-bold h-9 px-3 sm:px-4 md:h-11 md:px-6 gap-1.5 md:gap-2 border-0 shadow-[0_0_15px_rgba(192,132,252,0.3)] hover:shadow-[0_0_30px_rgba(192,132,252,0.6)] transition-all duration-150 group shrink-0"
            >
              <span className="text-xs sm:text-sm md:text-base group-hover:text-white transition-colors duration-150">Book a call</span>
              <span className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-obsidian/10 flex items-center justify-center group-hover:bg-white/30 group-hover:translate-x-1 transition-all duration-150">
                <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-obsidian group-hover:text-white transition-colors duration-150" />
              </span>
            </motion.button>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden flex items-center justify-center w-10 h-10 text-ash hover:text-bone transition-colors shrink-0"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-white/10 bg-[rgba(10,10,15,0.95)] backdrop-blur-xl w-full overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 pb-8 gap-2">
              {navLinks.map((link, i) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block"
                >
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.02, x: 10, color: "#e879f9", backgroundColor: "rgba(255,255,255,0.05)" }}
                    whileTap={{ scale: 0.98, backgroundColor: "rgba(192,132,252,0.1)" }}
                    className="text-white/70 rounded-lg px-4 py-3 text-lg font-medium"
                  >
                    {link.name}
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
