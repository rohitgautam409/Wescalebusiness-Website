"use client";

import { motion, useAnimationFrame, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useState } from "react";

const SHOTS = [
  "/5oyBfQxUoaSNnLDT5FPYm282m4.png",
  "/fHgWvPcLrfgv1IjwyOs3vbqblxc.jpg",
  "/oKotSfjwyD3glPouvbJCNxPb0cU.jpg",
  "/qQfvBdVvST7kBpAm3jkPaJFGVrU.jpg",
  "/zzxTyDmmIVZcKQtd4zaqtJ5zfhM.png",
];

export function DashboardShowcase() {
  const [isHovered, setIsHovered] = useState(false);

  // Track the current percentage translation
  const baseX = useMotionValue(0);

  // Target speed: 0.08 is normal, 0.002 is crawling (for hover)
  const speed = useMotionValue(0.05);

  // useSpring interpolates the speed value so it slows down/speeds up smoothly without jumping
  const smoothSpeed = useSpring(speed, {
    stiffness: 10,
    damping: 30,
    mass: 2,
  });

  useEffect(() => {
    speed.set(isHovered ? 0.002 : 0.05);
  }, [isHovered, speed]);

  useAnimationFrame((time, delta) => {
    // delta / 16.66 ensures smooth movement regardless of monitor refresh rate (60hz vs 120hz)
    const moveBy = smoothSpeed.get() * (delta / 16.66);
    let newX = baseX.get() - moveBy;

    // Once we shift exactly 100% of the group's width, loop back to 0
    if (newX <= -100) {
      newX += 100;
    }
    baseX.set(newX);
  });

  // Convert the raw number into a percentage string for CSS transform
  const x = useTransform(baseX, (v) => `${v}%`);

  // Render one complete set of images
  const MarqueeGroup = () => (
    <motion.div className="flex w-max items-center shrink-0" style={{ x }}>
      {SHOTS.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt="Client dashboard"
          className="h-[320px] md:h-[520px] w-auto shrink-0 rounded-[18px] drop-shadow-md object-cover mr-[20px] md:mr-[34px]"
        />
      ))}
    </motion.div>
  );

  return (
    <section id="dashboard" data-surface="light" className="bg-white relative w-full overflow-hidden py-[96px]">
      {/* Left Gradient Frosted Edge (Full Section Height) */}
      <div
        className="pointer-events-none absolute left-0 top-0 bottom-0 z-20 h-full w-[80px] md:w-[140px] bg-white"
        style={{
          maskImage: "linear-gradient(to right, #000 0%, #000 22%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, #000 0%, #000 22%, transparent 100%)"
        }}
      />

      {/* Right Gradient Frosted Edge (Full Section Height) */}
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 z-20 h-full w-[80px] md:w-[140px] bg-white"
        style={{
          maskImage: "linear-gradient(to left, #000 0%, #000 22%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to left, #000 0%, #000 22%, transparent 100%)"
        }}
      />

      {/* Section Header */}
      <div className="relative z-10 flex flex-col items-center text-center mb-12 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center rounded-full border border-[#c084fc]/20 bg-[#c084fc]/10 px-3 py-1 text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#a855f7] mb-4"
        >
          Our Portfolio
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display font-[600] text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4 flex flex-col items-center gap-1 md:gap-2"
        >
          <span className="text-gray-900">Dashboards & Websites</span>
          <span className="bg-gradient-to-r from-[#c084fc] to-[#e879f9] text-transparent bg-clip-text pb-2">
            We've Shipped
          </span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-500 text-sm md:text-base max-w-[600px] leading-relaxed"
        >
          Explore the custom interfaces and conversion-optimized web applications we've built for our clients.
        </motion.p>
      </div>

      {/* Marquee Area */}
      <div className="relative w-full h-[380px] md:h-[580px] flex items-center overflow-hidden marquee-mask group">

        {/* Track - We place 4 identical groups here to guarantee ultra-wide screen coverage */}
        <div
          className="flex w-max items-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
          <MarqueeGroup />
          <MarqueeGroup />
          <MarqueeGroup />
          <MarqueeGroup />
        </div>

      </div>
    </section>
  );
}
