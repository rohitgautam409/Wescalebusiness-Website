"use client";

import { motion } from "motion/react";
import { Zap, CalendarCheck, Phone, Mail, MessageSquare, Check } from "lucide-react";

const SmartRoutingAnim = () => (
  <div className="relative flex items-center justify-center w-full h-full">
    {/* Central node */}
    <motion.div 
      animate={{ scale: [1, 1.15, 1], boxShadow: ["0 0 0px rgba(192,132,252,0)", "0 0 20px rgba(192,132,252,0.4)", "0 0 0px rgba(192,132,252,0)"] }} 
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="absolute right-12 w-12 h-12 rounded-full bg-[#c084fc]/10 border border-[#c084fc]/40 flex items-center justify-center z-10"
    >
      <div className="w-4 h-4 rounded-full bg-[#c084fc]" />
    </motion.div>

    {/* Origin nodes and moving packets */}
    {[-35, 0, 35].map((y, i) => (
      <div key={i} className="absolute left-10 w-full flex items-center" style={{ top: `calc(50% + ${y}px)` }}>
        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center z-10">
          <div className="w-2 h-2 rounded-full bg-white/40" />
        </div>
        {/* Path line */}
        <div className="absolute left-8 w-[140px] h-[1px] bg-gradient-to-r from-white/10 to-transparent" />
        {/* Animated packet */}
        <motion.div 
          animate={{ x: [0, 140], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.6, ease: "easeInOut" }}
          className="absolute left-8 w-3 h-3 rounded-full bg-[#e879f9] shadow-[0_0_10px_rgba(232,121,249,0.8)]"
        />
      </div>
    ))}
  </div>
);

const MultiTouchAnim = () => (
  <div className="relative flex items-center justify-center w-full h-full gap-5">
    {[
      { Icon: MessageSquare, delay: 0 },
      { Icon: Phone, delay: 1 },
      { Icon: Mail, delay: 2 }
    ].map(({ Icon, delay }, i) => (
      <motion.div
        key={i}
        animate={{ 
          y: [0, -12, 0], 
          opacity: [0.4, 1, 0.4], 
          borderColor: ['rgba(255,255,255,0.05)', 'rgba(192,132,252,0.5)', 'rgba(255,255,255,0.05)'],
          backgroundColor: ['rgba(255,255,255,0.02)', 'rgba(192,132,252,0.1)', 'rgba(255,255,255,0.02)']
        }}
        transition={{ duration: 3, repeat: Infinity, delay, ease: "easeInOut" }}
        className="relative w-14 h-14 rounded-2xl border border-white/5 bg-white/[0.02] flex items-center justify-center"
      >
        <Icon className="w-6 h-6 text-[#c084fc]" />
        
        {/* Connecting line (not on last item) */}
        {i < 2 && (
          <div className="absolute left-full top-1/2 w-5 h-[1px] bg-white/10" />
        )}
      </motion.div>
    ))}
  </div>
);

const SpeedAnim = () => (
  <div className="relative flex items-center justify-center w-full h-full overflow-hidden">
    {/* Animated speed lines */}
    {[20, 40, 60, 80].map((top, i) => (
      <motion.div
        key={i}
        animate={{ x: [-100, 300] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3, ease: "linear" }}
        className="absolute left-0 h-[1px] bg-gradient-to-r from-transparent via-[#c084fc]/30 to-transparent"
        style={{ top: `${top}%`, width: '150px' }}
      />
    ))}
    
    <motion.div
       animate={{ x: [-5, 5, -5], y: [-5, 5, -5] }}
       transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
       className="relative z-10 w-20 h-20 rounded-full bg-[#c084fc]/10 border border-[#c084fc]/30 flex items-center justify-center backdrop-blur-sm"
    >
      <Zap className="w-10 h-10 text-[#e879f9]" fill="currentColor" fillOpacity={0.2} />
    </motion.div>
  </div>
);

const BookingAnim = () => (
  <div className="relative flex items-center justify-center w-full h-full">
    <motion.div
      animate={{ y: [15, -5, 15], rotateX: [10, 0, 10] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="w-20 h-20 rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-2xl flex items-center justify-center relative z-10"
    >
      <CalendarCheck className="w-10 h-10 text-[#c084fc]" />
      <motion.div
        animate={{ scale: [0, 1.2, 1, 0], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.8, 1] }}
        className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.4)]"
      >
        <Check className="w-5 h-5 text-white" strokeWidth={3} />
      </motion.div>
    </motion.div>
    
    {/* Floating background elements */}
    <motion.div 
      animate={{ opacity: [0.2, 0.5, 0.2], scale: [0.8, 1, 0.8] }}
      transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      className="absolute w-32 h-20 rounded-xl border border-white/5 bg-white/[0.02] -z-10 mt-12"
    />
  </div>
);

const AnalyticsAnim = () => {
  const bars = [35, 60, 45, 80, 55, 100, 70];
  
  return (
    <div className="relative flex items-end justify-center w-full h-full pb-8 gap-3">
      {/* Background grid line */}
      <div className="absolute bottom-8 left-0 w-full h-[1px] bg-white/10" />
      
      {bars.map((targetHeight, i) => (
        <motion.div
          key={i}
          animate={{ 
            height: [targetHeight * 0.3, targetHeight, targetHeight * 0.3],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 4, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
          className="w-6 rounded-t-md bg-gradient-to-t from-[#c084fc]/20 to-[#c084fc]/80 relative group"
        >
          {/* Top dot */}
          <motion.div 
            className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#e879f9]"
          />
        </motion.div>
      ))}
    </div>
  );
};

const PhoneAnim = () => (
  <div className="relative flex items-center justify-center w-full h-full">
    {/* Pulsing rings */}
    {[1, 2, 3].map((i) => (
      <motion.div
        key={i}
        animate={{ scale: [1, 2.5], opacity: [0.4, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.8, ease: "easeOut" }}
        className="absolute w-16 h-16 rounded-full border border-[#c084fc]"
      />
    ))}
    
    <motion.div
      animate={{ rotate: [0, -15, 15, -15, 0], scale: [1, 1.05, 1] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="relative z-10 w-16 h-16 rounded-full border border-white/10 bg-[#0a0a0a] shadow-[0_0_30px_rgba(192,132,252,0.2)] flex items-center justify-center"
    >
      <Phone className="w-7 h-7 text-[#c084fc]" />
    </motion.div>
  </div>
);

const FEATURES = [
  {
    title: "Smart Routing",
    description: "Qualified prospects route to the right rep in real time with full context - so top closers handle the hottest leads fast.",
    Animation: SmartRoutingAnim
  },
  {
    title: "Multi-Touch Cadence",
    description: "Route warm leads to live calendars in seconds, confirming time, intent, and details without back-and-forth.",
    Animation: MultiTouchAnim
  },
  {
    title: "Speed to Lead",
    description: "Contact new leads within 60 seconds and prioritize inventory automatically - work the pipeline faster than any human team.",
    Animation: SpeedAnim
  },
  {
    title: "Auto Booking",
    description: "If no rep is available, Voxr books directly on your calendar with timezone checks and instant invites - no back-and-forth.",
    Animation: BookingAnim
  },
  {
    title: "Revenue Analytics",
    description: "Track CPL, pickup rates by segment, convo-to-meeting conversion, and pipeline created: see what drives revenue in real time.",
    Animation: AnalyticsAnim
  },
  {
    title: "Local DIDs",
    description: "Auto-buy local numbers, rotate DIDs to avoid spam flags, and retire risky numbers early - protect reputation and connect rates.",
    Animation: PhoneAnim
  }
];

export function Features() {
  return (
    <section data-surface="dark" className="relative w-full bg-[#04060F] py-[120px] overflow-hidden">
      {/* Background Texture Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 mix-blend-screen opacity-[0.85] rotate-180"
        style={{
          backgroundImage: 'url("/feature-layout2.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'calc(50% - 200px) center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full border border-[#c084fc]/30 bg-[#c084fc]/10 px-4 py-1.5 text-xs md:text-sm font-semibold uppercase tracking-widest text-[#e879f9] mb-6"
          >
            Main Features
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-[600] text-3xl md:text-4xl lg:text-5xl tracking-tight mb-6 bg-gradient-to-br from-[#f8fafc] to-[#d8b4fe] text-transparent bg-clip-text pb-1"
          >
            Power Up Your Pipeline
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base md:text-lg max-w-[700px]"
          >
            Five AI-driven tools that qualify leads, book meetings, and scale revenue—on autopilot.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
          {FEATURES.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col h-[360px] rounded-[28px] bg-[#0A0A0A] border border-white/5 overflow-hidden transition-colors hover:border-[#c084fc]/50 shadow-lg"
            >
              {/* Top Animation Section (45%) */}
              <div className="h-[45%] w-full relative bg-gradient-to-b from-white/[0.03] to-transparent overflow-hidden">
                <feature.Animation />
                {/* Subtle overlay glow on hover */}
                <div className="absolute inset-0 bg-[#c084fc]/0 transition-colors duration-500 group-hover:bg-[#c084fc]/5" />
              </div>

              {/* Bottom Content Section (55%) */}
              <div className="h-[55%] flex flex-col p-8 border-t border-white/5">
                <h3 className="text-xl font-semibold text-white mb-3 tracking-tight group-hover:text-[#e879f9] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
