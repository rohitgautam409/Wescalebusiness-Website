"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { Sparkles, Bot, GitBranch, CalendarCheck, MessageSquare, TrendingUp, ArrowRight, Check, Phone, Mail, Calendar, Zap, ShieldCheck, Globe, CheckCircle2 } from "lucide-react";

// Mini Animations for the Cards
const SmartRoutingAnim = () => (
  <div className="relative flex items-center justify-between w-full h-full px-8">
    {/* Incoming Lead */}
    <motion.div 
      animate={{ x: [0, 60, 60], opacity: [0, 1, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="w-8 h-8 rounded-full bg-[#c084fc] flex items-center justify-center shadow-[0_0_15px_rgba(192,132,252,0.5)] z-20"
    >
      <Bot className="w-4 h-4 text-white" />
    </motion.div>
    
    {/* Routing Node */}
    <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center z-10">
      <GitBranch className="w-4 h-4 text-white/50" />
    </div>
    
    {/* Active Path Line */}
    <motion.div 
      animate={{ width: ["0%", "100%", "100%"], opacity: [0, 1, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="absolute left-[50%] top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-[#c084fc] to-[#e879f9] shadow-[0_0_8px_rgba(232,121,249,0.8)] origin-left"
      style={{ width: "40%" }}
    />

    {/* Destination Avatars */}
    <div className="flex flex-col gap-4 z-10">
      <motion.div 
        animate={{ scale: [1, 1.2, 1], borderColor: ['rgba(255,255,255,0.1)', 'rgba(232,121,249,0.8)', 'rgba(255,255,255,0.1)'] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", times: [0, 0.5, 1] }}
        className="w-8 h-8 rounded-full border border-white/10 bg-[#0a0a0a] flex items-center justify-center"
      >
        <Sparkles className="w-3 h-3 text-[#e879f9]" />
      </motion.div>
      <div className="w-8 h-8 rounded-full border border-white/10 bg-white/5" />
    </div>
  </div>
);

const MultiTouchAnim = () => (
  <div className="relative flex items-center justify-between w-full h-full px-6">
    {/* Progress Line */}
    <div className="absolute left-10 right-10 h-[1px] bg-white/10 top-1/2 -translate-y-1/2" />
    <motion.div 
      animate={{ width: ["0%", "100%"] }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      className="absolute left-10 h-[1px] bg-[#c084fc] top-1/2 -translate-y-1/2 shadow-[0_0_8px_rgba(192,132,252,0.8)] origin-left" 
    />
    
    {[Phone, MessageSquare, Mail, CalendarCheck].map((Icon, i) => (
      <div key={i} className="relative z-10">
        <motion.div
          animate={{ 
            backgroundColor: ['rgba(255,255,255,0.05)', 'rgba(192,132,252,0.2)', 'rgba(255,255,255,0.05)'],
            borderColor: ['rgba(255,255,255,0.1)', 'rgba(192,132,252,0.6)', 'rgba(255,255,255,0.1)'],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 4, repeat: Infinity, delay: i * 1, ease: "easeInOut" }}
          className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center backdrop-blur-md"
        >
          <Icon className="w-4 h-4 text-white" />
        </motion.div>
        <motion.div
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, delay: i * 1 + 0.2, ease: "easeInOut" }}
          className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-500 flex items-center justify-center"
        >
          <Check className="w-2.5 h-2.5 text-white stroke-[3]" />
        </motion.div>
      </div>
    ))}
  </div>
);

const SpeedToLeadAnim = () => (
  <div className="relative flex items-center justify-center w-full h-full overflow-hidden">
    {/* Speed Streaks */}
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        animate={{ x: [100, -100], opacity: [0, 1, 0] }}
        transition={{ duration: 0.5 + Math.random() * 0.5, repeat: Infinity, delay: Math.random() }}
        className="absolute h-[1px] bg-white/20"
        style={{ top: `${20 + i * 15}%`, width: `${20 + Math.random() * 40}px` }}
      />
    ))}
    
    <motion.div 
      animate={{ scale: [1, 1.1, 1], filter: ["blur(0px)", "blur(2px)", "blur(0px)"] }}
      transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
      className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#c084fc] to-[#e879f9] flex items-center justify-center shadow-[0_0_30px_rgba(192,132,252,0.6)] z-10"
    >
      <Zap className="w-8 h-8 text-white fill-white" />
    </motion.div>
    
    <motion.div
      animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
      transition={{ duration: 1, repeat: Infinity, ease: "easeOut" }}
      className="absolute w-16 h-16 rounded-2xl border-2 border-[#e879f9] z-0"
    />
  </div>
);

const AutoBookingAnim = () => (
  <div className="relative flex items-center justify-center w-full h-full" style={{ perspective: '1000px' }}>
    <motion.div
      animate={{ y: [20, 0, 0, 20], opacity: [0, 1, 1, 0], scale: [0.9, 1, 1, 0.9] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="w-40 h-24 rounded-xl border border-white/10 bg-[#14131b] shadow-2xl flex flex-col p-3 z-20 absolute"
    >
      <div className="flex items-center gap-2 mb-2">
        <Calendar className="w-4 h-4 text-[#e879f9]" />
        <span className="text-[10px] text-white/50">Meeting Request</span>
      </div>
      <div className="h-2 w-3/4 bg-white/10 rounded mb-2" />
      <div className="h-2 w-1/2 bg-white/10 rounded" />
      
      <motion.div
        animate={{ scale: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.4, 0.8, 1], ease: "backOut" }}
        className="absolute bottom-3 right-3 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(34,197,94,0.4)]"
      >
        <Check className="w-3 h-3 text-white stroke-[3]" />
      </motion.div>
    </motion.div>
    
    <div className="w-36 h-20 rounded-xl border border-white/5 bg-[#0a0a0f] absolute -translate-y-4 -translate-x-2 z-10" />
    <div className="w-32 h-16 rounded-xl border border-white/5 bg-[#050505] absolute -translate-y-8 -translate-x-4 z-0" />
  </div>
);

const RevenueAnim = () => (
  <div className="relative flex items-end justify-between w-full h-full px-6 pb-6 pt-12">
    {/* Chart Area */}
    <div className="absolute inset-x-6 top-6 bottom-6 border-l border-b border-white/10" />
    
    {/* Data bars */}
    {[30, 45, 40, 60, 55, 80, 95].map((h, i) => (
      <motion.div
        key={i}
        animate={{ height: ["0%", `${h}%`, `${h}%`, "0%"] }}
        transition={{ duration: 5, repeat: Infinity, times: [0, 0.2 + i * 0.05, 0.8, 1] }}
        className="w-3 rounded-t-sm bg-gradient-to-t from-[#c084fc]/20 to-[#c084fc]/80 z-10 relative"
      >
        {/* Data Point Pulse */}
        <motion.div 
          animate={{ opacity: [0, 1, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, times: [0, 0.2 + i * 0.05, 1] }}
          className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_5px_rgba(255,255,255,1)]" 
        />
      </motion.div>
    ))}
  </div>
);

const LocalDIDAnim = () => (
  <div className="relative flex flex-col items-center justify-center w-full h-full gap-2 overflow-hidden">
    <motion.div
      animate={{ y: [0, -32, -32, -64] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.4, 0.6, 1] }}
      className="flex flex-col gap-2 w-[160px]"
    >
      {/* Number 1 (Fades out as risky) */}
      <motion.div 
        animate={{ opacity: [1, 1, 0, 0], borderColor: ['rgba(255,255,255,0.1)', 'rgba(239,68,68,0.5)', 'rgba(239,68,68,0)', 'rgba(0,0,0,0)'] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.3, 0.5, 1] }}
        className="w-full h-6 rounded border border-white/10 bg-white/5 flex items-center justify-between px-3"
      >
        <span className="text-[10px] text-white/50">+1 (212) 555-0192</span>
        <ShieldCheck className="w-3 h-3 text-red-400" />
      </motion.div>
      
      {/* Number 2 (Active) */}
      <motion.div 
        animate={{ borderColor: ['rgba(255,255,255,0.1)', 'rgba(192,132,252,0.8)', 'rgba(255,255,255,0.1)'] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.5, 1] }}
        className="w-full h-6 rounded border border-[#c084fc]/50 bg-[#c084fc]/10 flex items-center justify-between px-3 shadow-[0_0_10px_rgba(192,132,252,0.2)]"
      >
        <span className="text-[10px] text-white">+1 (415) 555-0184</span>
        <CheckCircle2 className="w-3 h-3 text-[#c084fc]" />
      </motion.div>
      
      {/* Number 3 (Queued) */}
      <div className="w-full h-6 rounded border border-white/10 bg-white/5 flex items-center justify-between px-3">
        <span className="text-[10px] text-white/50">+1 (512) 555-0143</span>
        <Globe className="w-3 h-3 text-white/30" />
      </div>
      
      {/* Number 4 (New entering) */}
      <motion.div 
        animate={{ opacity: [0, 0, 1, 1] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.6, 0.8, 1] }}
        className="w-full h-6 rounded border border-green-500/30 bg-green-500/10 flex items-center justify-between px-3"
      >
        <span className="text-[10px] text-green-400">+1 (305) 555-0199</span>
        <Sparkles className="w-3 h-3 text-green-400" />
      </motion.div>
    </motion.div>
  </div>
);

const STEPS = [
  {
    id: "01",
    title: "Smart Routing",
    icon: GitBranch,
    description: "Qualified prospects route to the right rep in real time with full context — so top closers handle the hottest leads fast.",
    bullets: ["Instant Distribution", "Context Handoff", "Priority Routing", "No Delays"],
    AnimComponent: SmartRoutingAnim
  },
  {
    id: "02",
    title: "Multi-Touch Cadence",
    icon: Bot,
    description: "Route warm leads to live calendars in seconds, confirming time, intent, and details without back-and-forth.",
    bullets: ["Omni-Channel", "Automated Follow-up", "Intent Checks", "Seamless flow"],
    AnimComponent: MultiTouchAnim
  },
  {
    id: "03",
    title: "Speed to Lead",
    icon: Zap,
    description: "Contact new leads within 60 seconds and prioritize inventory automatically — work the pipeline faster than any human team.",
    bullets: ["Under 60s Response", "Lead Scoring", "High Velocity", "Zero Drop-off"],
    AnimComponent: SpeedToLeadAnim
  },
  {
    id: "04",
    title: "Auto Booking",
    icon: CalendarCheck,
    description: "If no rep is available, WeScaleBusiness books directly on your calendar with timezone checks and instant invites — no back-and-forth.",
    bullets: ["Timezone Checks", "Direct to Calendar", "Instant Invites", "Frictionless"],
    AnimComponent: AutoBookingAnim
  },
  {
    id: "05",
    title: "Revenue Analytics",
    icon: TrendingUp,
    description: "Track CPL, pickup rates by segment, convo-to-meeting conversion, and pipeline created so you can see what drives revenue in real time.",
    bullets: ["Pipeline Visibility", "Live Metrics", "Segment Tracking", "CPL Data"],
    AnimComponent: RevenueAnim
  },
  {
    id: "06",
    title: "Local DIDs",
    icon: Globe,
    description: "Auto-buy local numbers, rotate DIDs to avoid spam flags, and retire risky numbers early — protecting reputation and maximizing connect rates.",
    bullets: ["Spam Protection", "Auto Rotation", "Local Presence", "High Connects"],
    AnimComponent: LocalDIDAnim
  }
];

export function FeatureV2() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress through the entire section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 20,
    restDelta: 0.001
  });

  return (
    <section id="features" ref={containerRef} data-surface="dark" className="relative w-full bg-[#0a0a0a] text-white">
      {/* Background Texture Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 mix-blend-screen opacity-[0.4]"
        style={{
          backgroundImage: 'url("/feature-layout2.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Background Ambient Glows */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#c084fc]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#e879f9]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header Area */}
      <div className="relative pt-[80px] flex flex-col items-center text-center px-6 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center rounded-full border border-[#c084fc]/30 bg-[#c084fc]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#e879f9] mb-6"
        >
          Main Features
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display font-[600] text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6 flex flex-col items-center gap-1"
        >
          <div className="text-bone">Power Up</div>
          <div className="bg-gradient-to-br from-[#f8fafc] to-[#d8b4fe] text-transparent bg-clip-text pb-1">
            Your Pipeline.
          </div>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-base md:text-lg max-w-[700px] leading-relaxed"
        >
          Five AI-driven tools that qualify leads, book meetings, and scale revenue—on autopilot.
        </motion.p>
      </div>

      <div className="relative max-w-[1280px] mx-auto px-6 pb-[100px] mt-6 md:mt-8">
        
        {/* MOBILE & TABLET LAYOUT */}
        <div className="flex lg:hidden flex-col gap-16 md:gap-24">
          {STEPS.map((step, idx) => (
            <div key={step.id} className="flex flex-col gap-8 md:gap-12">
              {/* Animated Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className="w-full max-w-[500px] mx-auto aspect-[4/5] bg-[#0F0F13] rounded-[32px] border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex flex-col overflow-hidden relative z-10"
              >
                <div className="h-[55%] w-full bg-gradient-to-b from-white/[0.03] to-transparent relative flex items-center justify-center overflow-hidden">
                  <step.AnimComponent />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F13] via-transparent to-white/[0.05] pointer-events-none" />
                </div>
                <div className="flex-1 p-6 md:p-8 border-t border-white/5 flex flex-col justify-center bg-[#0F0F13]">
                  <div className="w-12 h-12 rounded-xl bg-[#c084fc]/10 border border-[#c084fc]/30 flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-[#e879f9]" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>

              {/* Text Block */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className="flex flex-col max-w-[500px] mx-auto"
              >
                <div className="text-[#c084fc] font-display font-bold text-5xl md:text-6xl mb-4 opacity-80">
                  {step.id}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                  {step.description}
                </p>
                <ul className="grid grid-cols-2 gap-3 md:gap-4">
                  {step.bullets.map((bullet: string, i: number) => (
                    <li key={i} className="flex items-center gap-2 md:gap-3 text-white/80 text-[13px] md:text-base font-medium">
                      <div className="w-2 h-2 shrink-0 rounded-full bg-[#e879f9] shadow-[0_0_8px_rgba(232,121,249,0.8)]" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}

          {/* Mobile Final CTA */}
          <div className="mt-8 md:mt-16 w-full max-w-[500px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/[0.03] border border-[#c084fc]/20 rounded-[32px] p-8 w-full backdrop-blur-md relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#c084fc]/10 to-transparent opacity-100" />
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 tracking-tight relative z-10">
                Ready to automate your pipeline?
              </h3>
              <p className="text-gray-400 text-base md:text-lg mb-6 md:mb-8 relative z-10">
                Stop letting leads fall through the cracks. Put an AI system in place that works while you sleep.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center rounded-full bg-white hover:bg-white text-black font-bold h-[52px] pl-6 pr-[8px] gap-3 shadow-[0_0_40px_rgba(255,255,255,0.1)] group transition-colors duration-300 relative z-10 w-full"
              >
                <span className="text-[15px] tracking-wide group-hover:text-[#9333ea] transition-colors duration-300">Book A Strategy Call</span>
                <span className="w-10 h-10 rounded-full bg-[#a855f7] shrink-0 flex items-center justify-center group-hover:bg-[#9333ea] transition-colors shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                  <ArrowRight className="w-5 h-5 text-white stroke-[2.5px]" />
                </span>
              </motion.button>
            </motion.div>
          </div>
        </div>


        {/* DESKTOP LAYOUT (Sticky Scroll Interactivity) */}
        <div className="hidden lg:flex lg:flex-row w-full">
          
          {/* Left Side: Sticky Card Stack */}
          <div className="w-1/2 h-screen sticky top-[40px] flex items-center justify-center py-10 z-10 perspective-[1200px]">
            <div className="relative w-full max-w-[360px] xl:max-w-[400px] aspect-[1/1.1]">
              {STEPS.map((step, idx) => {
                const totalBlocks = STEPS.length + 1;
                const target = idx / (totalBlocks - 1);
                const window = 1 / totalBlocks;

                const scale = useTransform(smoothProgress, [target - window, target, target + window], [0.85, 1, 1.15]);
                const y = useTransform(smoothProgress, [target - window, target, target + window], [60, 0, -80]);
                const opacity = useTransform(smoothProgress, [target - window, target, target + window/2, target + window], [0, 1, 1, 0]);
                const rotateX = useTransform(smoothProgress, [target - window, target, target + window], [15, 0, -20]);

                return (
                  <motion.div
                    key={step.id}
                    style={{ scale, y, opacity, rotateX, zIndex: STEPS.length - idx, transformStyle: "preserve-3d" }}
                    className="absolute inset-0 bg-[#0F0F13] rounded-[32px] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.6)] flex flex-col overflow-hidden will-change-transform"
                  >
                    <div className="h-[50%] w-full bg-gradient-to-b from-white/[0.03] to-transparent relative flex items-center justify-center overflow-hidden">
                      <step.AnimComponent />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F13] via-transparent to-white/[0.05] pointer-events-none" />
                    </div>
                    <div className="flex-1 p-6 xl:p-8 border-t border-white/5 flex flex-col justify-center bg-[#0F0F13]">
                      <div className="w-12 h-12 rounded-xl bg-[#c084fc]/10 border border-[#c084fc]/30 flex items-center justify-center mb-4">
                        <step.icon className="w-6 h-6 text-[#e879f9]" />
                      </div>
                      <h3 className="text-2xl xl:text-3xl font-bold text-white mb-2 tracking-tight">{step.title}</h3>
                      <p className="text-gray-400 text-sm xl:text-base leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Side: Scrolling Content Blocks */}
          <div className="w-1/2 flex flex-col z-20 pb-[20vh]">
            {STEPS.map((step, idx) => (
              <ContentBlock key={step.id} step={step} idx={idx} progress={smoothProgress} total={STEPS.length + 1} />
            ))}

            {/* Final CTA Block */}
            <div className="h-screen flex flex-col justify-center items-start pl-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                className="bg-white/[0.03] border border-[#c084fc]/20 rounded-[32px] p-12 w-full backdrop-blur-md relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#c084fc]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <h3 className="text-4xl font-bold text-white mb-4 tracking-tight relative z-10">
                  Ready to automate your pipeline?
                </h3>
                <p className="text-gray-400 text-lg mb-8 max-w-[400px] relative z-10">
                  Stop letting leads fall through the cracks. Put an AI system in place that works while you sleep.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center rounded-full bg-white hover:bg-white text-black font-bold h-[48px] pl-6 pr-[6px] gap-3 shadow-[0_0_40px_rgba(255,255,255,0.1)] group transition-colors duration-300 relative z-10 w-fit"
                >
                  <span className="text-[14px] tracking-wide group-hover:text-[#9333ea] transition-colors duration-300">Book A Strategy Call</span>
                  <span className="w-9 h-9 rounded-full bg-[#a855f7] shrink-0 flex items-center justify-center group-hover:bg-[#9333ea] transition-colors shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                    <ArrowRight className="w-4 h-4 text-white stroke-[2.5px]" />
                  </span>
                </motion.button>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function ContentBlock({ step, idx, progress, total }: any) {
  const target = idx / (total - 1);
  const window = 1 / total;
  
  // Highlight text when progress is near the target
  const opacity = useTransform(
    progress,
    [target - window, target, target + window],
    [0.2, 1, 0.2]
  );

  return (
    <motion.div 
      style={{ opacity }}
      className="h-[60vh] lg:h-screen flex flex-col justify-center lg:pl-16"
    >
      <div className="text-[#c084fc] font-display font-bold text-6xl md:text-8xl mb-6 opacity-80">
        {step.id}
      </div>
      <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
        {step.title}
      </h3>
      <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8 max-w-[500px]">
        {step.description}
      </p>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[500px]">
        {step.bullets.map((bullet: string, i: number) => (
          <li key={i} className="flex items-center gap-3 text-white/80 text-base font-medium">
            <div className="w-2 h-2 shrink-0 rounded-full bg-[#e879f9] shadow-[0_0_8px_rgba(232,121,249,0.8)]" />
            {bullet}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
