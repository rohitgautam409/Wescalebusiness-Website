"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Grip } from "lucide-react";

// Custom SVGs for Social Icons
const LinkedinIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const InstagramIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const TwitterIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FacebookIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
  </svg>
);

export function CTAAndFooter() {
  return (
    <section className="w-full bg-[#0a0a0a] relative overflow-hidden flex flex-col items-center pt-[60px] pb-[40px] z-20">

      {/* Background Ambient Glow */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#c084fc]/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Part 1: CTA Section */}
      <div className="flex flex-col items-center text-center px-6 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center rounded-full border border-[#c084fc]/30 bg-white/[0.03] backdrop-blur-md px-5 py-2 text-xs font-bold uppercase tracking-widest text-[#e879f9] mb-8 shadow-[0_0_20px_rgba(192,132,252,0.15)]"
        >
          Get Started
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-[800] text-4xl md:text-5xl lg:text-[72px] tracking-tight mb-8 flex flex-col items-center gap-2 leading-[0.95]"
        >
          <span className="text-white">Ready To Scale</span>
          <span className="bg-gradient-to-r from-[#c084fc] to-[#e879f9] text-transparent bg-clip-text pb-4">
            With AI?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-white/75 text-base md:text-lg max-w-[600px] leading-relaxed mb-12"
        >
          We build AI receptionists, AI automations, and AI marketing systems that help businesses capture more leads, book more appointments, and grow faster.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center gap-4 md:gap-6"
        >
          {/* Primary Button */}
          <button className="flex items-center justify-center gap-3 bg-white text-black px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-base md:text-lg hover:bg-gray-100 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 group shadow-[0_0_0_rgba(192,132,252,0)] hover:shadow-[0_15px_30px_rgba(192,132,252,0.3)]">
            Book A Strategy Call
            <ArrowRight className="w-5 h-5 text-[#c084fc] group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Secondary Button */}
          <button className="flex items-center justify-center bg-white/[0.05] border border-white/10 text-white px-8 py-4 md:px-10 md:py-5 rounded-full font-bold text-base md:text-lg hover:border-[#c084fc]/50 hover:bg-white/[0.08] hover:shadow-[0_0_20px_rgba(192,132,252,0.2)] transition-all duration-300">
            Contact Us
          </button>
        </motion.div>
      </div>

      {/* Part 2: Large Brand Wordmark */}
      <div className="relative w-full mt-10 md:mt-20 flex justify-center overflow-hidden pointer-events-none select-none z-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -20% 0px" }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full text-center"
        >
          <h1
            className="font-display font-[900] tracking-[-0.06em] text-center text-[clamp(2.5rem,12.2vw,14rem)] origin-bottom"
            style={{
              color: "rgba(255,255,255,0.08)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 100%)",
              maskImage: "linear-gradient(to bottom, transparent 0%, black 100%)",
              lineHeight: 0.8,
              whiteSpace: "nowrap"
            }}
          >
            WeScaleBusiness
          </h1>
        </motion.div>
      </div>

      {/* Part 3: Minimal Footer Panel */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 w-[90%] max-w-[1200px] bg-white/[0.03] border border-white/[0.08] rounded-[32px] p-8 md:p-10  backdrop-blur-md flex flex-col"
      >

        {/* Top Section: Brand, Socials, Email */}
        <div className="flex flex-col md:grid md:grid-cols-3 items-center gap-8 md:gap-0 w-full">

          {/* Brand */}
          <div className="flex items-center justify-center md:justify-start gap-3 w-full">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-[#c084fc] to-[#e879f9] flex items-center justify-center shadow-[0_0_15px_rgba(192,132,252,0.3)]">
              <span className="text-black font-display font-bold text-xl leading-none">W</span>
            </div>
            <span className="font-display font-bold text-xl md:text-2xl text-[#e879f9] tracking-tight">WeScaleBusiness</span>
          </div>

          {/* Socials */}
          <div className="flex items-center justify-center gap-4 w-full">
            {[
              { icon: LinkedinIcon, href: "#" },
              { icon: InstagramIcon, href: "#" },
              { icon: TwitterIcon, href: "#" },
              { icon: FacebookIcon, href: "#" },
            ].map((social, i) => (
              <Link key={i} href={social.href} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#c084fc]/20 hover:border-[#c084fc]/50 hover:text-[#e879f9] hover:scale-105 hover:shadow-[0_0_15px_rgba(192,132,252,0.3)] transition-all duration-300">
                <social.icon className="w-4 h-4" />
              </Link>
            ))}
          </div>

          {/* Email */}
          <div className="flex items-center justify-center md:justify-end w-full">
            <a href="mailto:hello@wescalebusiness.com" className="text-white/80 hover:text-[#e879f9] transition-colors text-base font-medium">
              hello@wescalebusiness.com
            </a>
          </div>
        </div>

        <div className="w-full h-px bg-white/10 my-8" />

        {/* Middle Section: Image 2 Layout */}
        <div className="flex flex-row items-center justify-between w-full">

          <Link href="#privacy-policy" className="flex items-center gap-2 md:gap-3 lg:gap-4 group">
            <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-full bg-black flex items-center justify-center border border-white/10 group-hover:border-[#c084fc]/50 group-hover:bg-[#c084fc]/10 transition-colors">
              <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-white" />
            </div>
            <span className="text-[#a3a3a3] font-medium text-xs md:text-sm lg:text-base group-hover:text-white transition-colors">Privacy Policy</span>
          </Link>

          <Link href="#book-a-call" className="flex items-center gap-2 md:gap-3 group">
            <span className="text-[#a3a3a3] font-medium text-xs md:text-sm lg:text-base group-hover:text-[#e879f9] transition-colors">Book a Call</span>
            <Grip className="w-4 h-4 lg:w-5 lg:h-5 text-[#a3a3a3] group-hover:text-[#e879f9] transition-colors" />
          </Link>

        </div>

        <div className="w-full h-px bg-white/10 my-8" />

        {/* Bottom Section: Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
          <p className="text-white/40 text-sm font-medium text-center md:text-left">
            © 2026 WeScaleBusiness. All rights reserved.
          </p>
          <p className="text-white/40 text-sm font-medium text-center md:text-right">
            Built for businesses that want to scale with AI.
          </p>
        </div>

      </motion.div>

    </section>
  );
}
