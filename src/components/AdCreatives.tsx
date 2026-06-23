"use client";

import { motion, useAnimationFrame, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useState } from "react";

const VIDEOS = [
  "/Video-457.mp4",
  "/Video-542.mp4",
  "/Video-599.mp4",
  "/Video-627.mp4",
  "/Video-943.mp4",
  "/video-12.mp4",
  "/video-13.mp4",
];

export function AdCreatives() {
  const [isHovered, setIsHovered] = useState(false);

  // Track the current percentage translation
  const baseX = useMotionValue(0);

  // Target speed: 0.05 is normal, 0 is fully paused
  const speed = useMotionValue(0.04);

  // useSpring interpolates the speed value so it slows down/speeds up smoothly without jumping
  const smoothSpeed = useSpring(speed, {
    stiffness: 10,
    damping: 30,
    mass: 2,
  });

  useEffect(() => {
    // When hovered, slow down to 0 for pause. When unhovered, accelerate back to 0.04.
    speed.set(isHovered ? 0 : 0.04);
  }, [isHovered, speed]);

  useAnimationFrame((time, delta) => {
    const moveBy = smoothSpeed.get() * (delta / 16.66);
    let newX = baseX.get() - moveBy;

    // Once we shift exactly 100% of the group's width, loop back to 0
    if (newX <= -100) {
      newX += 100;
    }
    baseX.set(newX);
  });

  const x = useTransform(baseX, (v) => `${v}%`);



  return (
    <section id="creatives" data-surface="dark" className="relative w-full bg-[#0a0a0a] py-[120px] overflow-hidden">
      {/* Background Layout Image */}
      <div 
        className="absolute top-0 left-0 right-0 h-[600px] md:h-auto w-full z-0 pointer-events-none flex justify-center overflow-hidden"
        style={{
          maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)"
        }}
      >
        <img
          src="/AdsCreative-Layout.png"
          alt="Ad Creatives Background Glow"
          className="w-full h-full md:h-auto object-cover md:object-contain object-top opacity-80 max-w-[1440px] mix-blend-screen"
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-[60px]">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/60 text-[13px] font-semibold uppercase tracking-[0.2em] mb-4"
          >
            AI Generated Ad Creatives
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-[600] text-4xl md:text-5xl lg:text-6xl text-white tracking-tight mb-6"
          >
            Ads That Stop The Scroll
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-base md:text-lg max-w-[700px] leading-relaxed"
          >
            AI-generated video ads engineered to capture attention, increase engagement, and drive qualified leads across every major platform.
          </motion.p>
        </div>
      </div>

      {/* Marquee Area */}
      <div className="relative w-full h-[360px] md:h-[460px] flex items-center overflow-hidden">
        
        {/* Left Fade Mask */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-20 w-[60px] md:w-[160px] bg-gradient-to-r from-[#0a0a0a] to-transparent" />
        
        {/* Right Fade Mask */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-20 w-[60px] md:w-[160px] bg-gradient-to-l from-[#0a0a0a] to-transparent" />

        <div 
          className="flex w-max items-center h-full px-[32px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
          {Array.from({ length: 4 }).map((_, groupIdx) => (
            <motion.div key={groupIdx} className="flex w-max items-center shrink-0" style={{ x }}>
              {VIDEOS.map((src, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative w-[200px] md:w-[260px] h-[320px] md:h-[420px] shrink-0 rounded-[24px] overflow-hidden mr-[24px] md:mr-[32px] border border-white/10 bg-[#111] shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(232,121,249,0.25)] hover:border-[#e879f9]/50 transition-all duration-500 cursor-pointer group"
                >
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                  >
                    <source src={src} type="video/mp4" />
                  </video>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
