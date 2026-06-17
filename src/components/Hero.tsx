"use client";

import { motion } from "motion/react";
import { ArrowRight, ChevronDown, Sparkles, Check, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const containerVariants: any = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const itemVariants: any = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.6,
    },
  },
};

export function Hero() {
  return (
    <section className="relative min-h-[100vh] lg:min-h-[135vh] w-full overflow-hidden flex flex-col lg:block items-center lg:items-start pt-[100px] md:pt-[120px] lg:pt-[140px] pb-24 lg:pb-32">
      {/* Custom Overlay Layer from Public Folder */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-left md:bg-center opacity-80 mix-blend-lighten pointer-events-none"
        style={{ backgroundImage: 'url("/hero-overlay.avif")' }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* 1) Left-to-right dark gradient for text readability */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(10,10,15,1) 0%, rgba(10,10,15,0.85) 35%, rgba(10,10,15,0.1) 65%, transparent 100%)' }}
        />
        {/* 2) Bottom dark fade */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(10,10,15,1) 0%, transparent 20%)' }}
        />
        {/* 3) Faint film grain */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
        />
      </div>

      {/* Video Background (Responsive flow on mobile, absolute overlap on desktop) */}
      <div className="relative lg:absolute lg:inset-0 w-full max-w-[1800px] mx-auto pointer-events-none order-2 lg:order-none mt-4 lg:mt-0">
        <div
          className="relative lg:absolute lg:left-[5%] lg:top-[28%] pointer-events-none opacity-80 mix-blend-screen flex justify-center lg:block w-full lg:w-auto"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/hero-fallback.jpg"
            aria-hidden="true"
          >
            <source src="/hero-bg-nebula.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1800px] mx-auto px-6 lg:px-12 order-1 lg:order-none flex flex-col items-center lg:block">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-2xl flex flex-col items-center lg:items-start text-center lg:text-left gap-4 md:gap-5 lg:pl-16"
        >
          {/* H1 */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-[600] tracking-tight"
            style={{ fontSize: 'clamp(52px, 7vw, 68px)', lineHeight: 1.05 }}
          >
            <div className="text-bone">Stop Chasing</div>
            <div className="text-bone">
              Leads. <span className="bg-gradient-to-br from-[#f8fafc] to-[#d8b4fe] text-transparent bg-clip-text">Start</span>
            </div>
            <div className="bg-gradient-to-br from-[#f8fafc] to-[#d8b4fe] text-transparent bg-clip-text pb-1">
              Closing Them.
            </div>
          </motion.h1>

          {/* Subcopy */}
          <motion.p
            variants={itemVariants}
            className="text-[#a1a1aa] text-[15px] md:text-[16px] max-w-[480px] leading-[1.6] mx-auto lg:mx-0"
          >
            AI-powered outbound calling that works leads at scale, qualifies intent in real-time, and either transfers hot prospects to your closers instantly or books meetings directly on their calendar.
          </motion.p>

          {/* CTA */}
          <motion.div variants={itemVariants} className="pt-3">
            <Button
              className="rounded-full bg-bone hover:bg-white text-obsidian font-semibold h-[56px] lg:h-[46px] pl-6 lg:pl-5 pr-[6px] lg:pr-[5px] gap-3 lg:gap-3 border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.08)] group transition-all"
            >
              <span className="text-[16px] lg:text-[14px] tracking-wide">Try it now</span>
              <span className="w-10 h-10 lg:w-8 lg:h-8 rounded-full bg-[#a855f7] flex items-center justify-center group-hover:bg-[#9333ea] transition-colors shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                <ArrowRight className="w-5 h-5 lg:w-4 lg:h-4 text-white stroke-[2.5px]" />
              </span>
            </Button>
          </motion.div>
        </motion.div>

        {/* Floating Badges (Responsive) */}
        <div className="flex flex-col lg:absolute lg:left-[60%] xl:left-[55%] lg:top-0 lg:w-[450px] lg:h-[300px] pointer-events-none z-20 mt-10 lg:mt-0 gap-3 lg:gap-0 w-full items-center lg:items-start lg:block">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="relative lg:absolute lg:top-[10%] lg:left-0 flex items-center gap-3 rounded-full px-4 py-2 border border-white/10 bg-[#14131b]/60 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#e879f9]" />
            <span className="text-[13px] font-medium text-bone/90 tracking-wide">Your smart scheduling assistant</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="relative lg:absolute lg:top-[35%] lg:left-[15%] flex items-center gap-3 rounded-full px-4 py-2 border border-white/10 bg-[#14131b]/60 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
          >
            <Check className="w-3.5 h-3.5 text-[#c084fc] stroke-[3]" />
            <span className="text-[13px] font-medium text-bone/90 tracking-wide">Qualified appointment only</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="relative lg:absolute lg:top-[60%] lg:left-[-5%] flex items-center gap-3 rounded-full px-4 py-2 border border-white/10 bg-[#14131b]/60 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
          >
            <Rocket className="w-3.5 h-3.5 text-[#a855f7]" />
            <span className="text-[13px] font-medium text-bone/90 tracking-wide">Increases efficiency by 80%</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll Cue */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-bold text-ash tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-ash opacity-70" />
        </motion.div>
      </motion.div>
    </section>
  );
}


