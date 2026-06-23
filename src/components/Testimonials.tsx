"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, wrap } from "motion/react";
import Image from "next/image";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

// Import images directly from the local assets folder
import Image1 from "@/assets/Image-1.jpeg";
import Image2 from "@/assets/Image-2.jpg";
import Image3 from "@/assets/Image-3.jpg";
import Image4 from "@/assets/Image-4.jpg";
import Image5 from "@/assets/Image-5.jpg";
import Image6 from "@/assets/Image-6.jpg";
import Image7 from "@/assets/Image-7.jpg";
import Image8 from "@/assets/Image-8.jpg";
import Image9 from "@/assets/Image-9.jpg";
import Image10 from "@/assets/Image-10.jpg";

const TESTIMONIALS = [
  {
    name: "Daniella Grey",
    role: "Owner, Trouve Medspa",
    quote: "WeScaleBusiness completely revolutionized our inbound calls. We haven't missed a lead in months.",
    industry: "Med Spa",
    image: Image1
  },
  {
    name: "Hyrum Barlow",
    role: "Owner, Hy Country Plumbing",
    quote: "The voice quality is indistinguishable from a real human. Our clients love it.",
    industry: "Plumbing",
    image: Image2
  },
  {
    name: "George Johnson",
    role: "Owner, The Katy Plumbing Company",
    quote: "Implementation was seamless. We saw a 32% increase in booked demos in the first 30 days.",
    industry: "Plumbing",
    image: Image3
  },
  {
    name: "Lena Reitz",
    role: "Salon Owner, Hair Boss Salon",
    quote: "WescaleBusiness handles our late-night inquiries and qualifies leads automatically. Game changer.",
    industry: "Salon",
    image: Image9
  },
  {
    name: "Rodney Wright",
    role: "Owner, American Backflow and Plumbing LLC",
    quote: "The way it integrates directly with our CRM saves our team hours of manual data entry.",
    industry: "Plumbing",
    image: Image5
  },
  {
    name: "Christopher Siebenthaler",
    role: "Clinic Admin, Redbud",
    quote: "Our front desk is no longer overwhelmed. WeScaleBusiness books patient appointments flawlessly.",
    industry: "Clinic",
    image: Image6
  },
  {
    name: "Kathy Maasoumi",
    role: "Owner Dentist, Kathy Maasoumi DDS",
    quote: "WescaleBusiness helped us capture and convert every single lead without increasing our team size.",
    industry: "Dental",
    image: Image7
  },
  {
    name: "Dr. Tanya",
    role: "Owner, Manyak Dental Group",
    quote: "The ROI was immediate. The AI agent sounds natural and professional on every call.",
    industry: "Dental",
    image: Image8
  },
  {
    name: "Theron Young",
    role: "Owner, Legacy Plumbing",
    quote: "WeScaleBusiness completely revolutionized our inbound calls. We haven't missed a lead in months.",
    industry: "Plumbing",
    image: Image4
  },
  {
    name: "Blake McCall",
    role: "Owner, Blake Charles Salon",
    quote: "We run high-volume ad campaigns and WeScaleBusiness handles the lead surge effortlessly.",
    industry: "Salon",
    image: Image10
  }
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const paginate = (newDirection: number) => {
    setActiveIndex((prev) => {
      const nextIndex = prev + newDirection;
      if (nextIndex < 0) return TESTIMONIALS.length - 1;
      if (nextIndex >= TESTIMONIALS.length) return 0;
      return nextIndex;
    });
  };

  const handleDragEnd = (e: any, { offset, velocity }: any) => {
    const swipe = offset.x;
    if (swipe < -50) {
      paginate(1);
    } else if (swipe > 50) {
      paginate(-1);
    }
  };

  return (
    <section id="testimonials" data-surface="light" className="w-full bg-white pt-[60px] pb-[20px] relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full border border-[#c084fc]/30 bg-[#c084fc]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#a855f7] mb-4"
          >
            Testimonials
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-[600] text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4 flex flex-col items-center gap-1"
          >
            <span className="text-gray-900">Real Results</span>
            <span className="bg-gradient-to-r from-[#c084fc] to-[#e879f9] text-transparent bg-clip-text pb-2">
              From Real Clients
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-sm md:text-base max-w-[600px] leading-relaxed"
          >
            Hear how businesses are using WeScaleBusiness to automate lead handling, increase conversions, and scale operations.
          </motion.p>
        </div>

        {/* 3D Stacked Carousel */}
        <div 
          className="relative w-full h-[380px] flex flex-col items-center justify-center perspective-[1200px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative w-full max-w-[340px] md:max-w-[380px] h-[280px] flex items-center justify-center">
            <AnimatePresence initial={false}>
              {TESTIMONIALS.map((testimonial, i) => {
                // Calculate physical offset based on infinite array looping
                let offset = i - activeIndex;
                if (offset > TESTIMONIALS.length / 2) offset -= TESTIMONIALS.length;
                if (offset < -TESTIMONIALS.length / 2) offset += TESTIMONIALS.length;

                // Determine variables based on offset
                const isCenter = offset === 0;
                // Only render cards that are somewhat close to avoid massive hidden DOM overload
                if (Math.abs(offset) > 3) return null;

                const x = offset * 140; // Horizontal shift
                const scale = isCenter ? 1 : 1 - Math.abs(offset) * 0.1; // Scale down backgrounds
                const rotateZ = offset * 4; // Slight tilt
                const zIndex = 10 - Math.abs(offset);
                let opacity = 0;
                if (isCenter) opacity = 1;
                else if (Math.abs(offset) === 1) opacity = 0.6;
                else if (Math.abs(offset) === 2) opacity = 0.2;

                return (
                  <motion.div
                    key={testimonial.name}
                    initial={false}
                    animate={{
                      x,
                      scale,
                      rotateZ,
                      opacity,
                      zIndex,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 25,
                      mass: 1
                    }}
                    drag={isCenter ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={handleDragEnd}
                    onClick={() => {
                      if (!isCenter) {
                        setActiveIndex(i);
                      }
                    }}
                    className={`absolute w-full h-full bg-white rounded-[24px] border border-[#ececec] p-6 flex flex-col will-change-transform ${
                      isCenter ? "cursor-grab active:cursor-grabbing shadow-[0_20px_60px_rgba(0,0,0,0.15)]" : "cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
                    }`}
                  >
                    {/* Top Section */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-[48px] h-[48px] rounded-full overflow-hidden shrink-0 border border-gray-100 bg-gray-50">
                        <Image 
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                          draggable={false}
                        />
                      </div>
                      <div className="flex flex-col">
                        <h4 className="text-gray-900 font-bold text-base mb-0.5">{testimonial.name}</h4>
                        <p className="text-gray-500 text-xs font-medium">{testimonial.role}</p>
                      </div>
                    </div>

                    {/* Middle Section */}
                    <div className="flex-1 flex flex-col relative">
                      <Quote className="absolute -top-3 -left-2 w-6 h-6 text-[#c084fc] opacity-20 rotate-180" />
                      <p className="text-gray-800 text-base md:text-lg font-medium leading-snug relative z-10 pt-1">
                        "{testimonial.quote.replace(/"/g, '')}"
                      </p>
                    </div>

                    {/* Bottom Section */}
                    <div className="flex items-center justify-end mt-auto pt-3 border-t border-gray-100">
                      <div className="px-3 py-1 bg-gray-50 rounded-full border border-gray-200">
                        <span className="text-gray-600 font-semibold text-[10px] tracking-wider uppercase">{testimonial.industry}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-3 mt-8 z-20">
            <button 
              onClick={() => paginate(-1)}
              className="w-10 h-10 rounded-full bg-white border border-[#ececec] flex items-center justify-center shadow-sm hover:bg-[#a855f7] hover:border-[#a855f7] hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300 group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
            </button>
            <button 
              onClick={() => paginate(1)}
              className="w-10 h-10 rounded-full bg-white border border-[#ececec] flex items-center justify-center shadow-sm hover:bg-[#a855f7] hover:border-[#a855f7] hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300 group"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
