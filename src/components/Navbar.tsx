"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { Menu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "How it works", href: "#how-it-works" },
  { name: "Industries", href: "#industries" },
  { name: "Results", href: "#results" },
  { name: "Pricing", href: "#pricing" },
];

export function Navbar() {
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
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12">
        <nav className="relative flex items-center justify-between h-[72px] md:h-[84px]">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img src="/Company-Logo.png" alt="WeScaleBusiness Logo" className="w-12 h-12 object-contain" />
            <div className="font-display font-[800] text-xl md:text-2xl tracking-tight flex items-center">
              <span className="text-bone">WeScale</span>
              <span className="text-[#e879f9]">Business</span>
            </div>
          </Link>

          {/* Center: Links (Desktop) */}
          <div className="hidden md:flex items-center gap-8">
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
          <div className="flex items-center gap-3">
            <Link
              href="#login"
              className="hidden md:block text-ash hover:text-bone px-4 py-2 text-sm font-medium transition-colors"
            >
              Log in
            </Link>
            
            <Button
              className="rounded-full bg-gradient-to-r from-[#c084fc] to-[#e879f9] hover:opacity-90 text-obsidian font-semibold h-10 px-5 gap-2 border-0 shadow-[0_0_20px_rgba(192,132,252,0.2)]"
            >
              Book a call
              <span className="w-5 h-5 rounded-full bg-obsidian/10 flex items-center justify-center ml-1">
                <ArrowRight className="w-3 h-3 text-obsidian" />
              </span>
            </Button>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden flex items-center justify-center w-10 h-10 text-ash hover:text-bone transition-colors">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
