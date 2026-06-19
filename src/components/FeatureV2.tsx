"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { Sparkles, Bot, GitBranch, CalendarCheck, MessageSquare, TrendingUp, ArrowRight, Check } from "lucide-react";

// Mini Animations for the Cards
const LeadAnim = () => (
  <div className="relative flex items-center justify-center w-full h-full">
    <motion.div 
      animate={{ scale: [1, 1.3, 1], opacity: [0.3, 1, 0.3] }} 
      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }} 
      className="absolute w-24 h-24 bg-[#c084fc]/20 rounded-full blur-xl"
    />
    <motion.div 
      animate={{ y: [-5, 5, -5] }} 
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="relative z-10 w-16 h-16 rounded-2xl bg-[#0a0a0a] border border-[#c084fc]/40 flex items-center justify-center shadow-[0_0_20px_rgba(232,121,249,0.3)]"
    >
      <Sparkles className="w-8 h-8 text-[#e879f9]" />
    </motion.div>
  </div>
);

const QualifyAnim = () => (
  <div className="relative flex flex-col gap-3 w-full px-10">
    <motion.div 
      animate={{ opacity: [0.5, 1, 0.5], y: [-2, 0, -2] }} 
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} 
      className="self-start px-4 py-2.5 bg-white/5 rounded-2xl rounded-tl-sm border border-white/10 text-[13px] text-gray-300 shadow-sm"
    >
      I need a quote.
    </motion.div>
    <motion.div 
      animate={{ opacity: [0.5, 1, 0.5], y: [2, 0, 2] }} 
      transition={{ duration: 3, repeat: Infinity, delay: 0.5, ease: "easeInOut" }} 
      className="self-end px-4 py-2.5 bg-[#c084fc]/10 rounded-2xl rounded-tr-sm border border-[#c084fc]/30 text-[13px] text-[#e879f9] shadow-sm"
    >
      Happy to help! Zip code?
    </motion.div>
  </div>
);

const RoutingAnim = () => (
  <div className="relative flex items-center justify-center w-full h-full">
    {/* Central Node */}
    <motion.div className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center z-10">
      <div className="w-3 h-3 rounded-full bg-white/40" />
    </motion.div>
    
    {/* Branches */}
    {[-30, 0, 30].map((y, i) => (
      <div key={i} className="absolute w-[80px] h-[1px] bg-gradient-to-r from-transparent to-white/20" style={{ right: '50%', transform: `translateY(${y}px) rotate(${y/2}deg)`, transformOrigin: 'right center' }}>
        <motion.div
          animate={{ x: [-80, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
          className="absolute right-0 w-2 h-2 rounded-full bg-[#e879f9] -translate-y-1/2 shadow-[0_0_8px_rgba(232,121,249,0.8)]"
        />
      </div>
    ))}
  </div>
);

const BookingAnim = () => (
  <div className="relative flex items-center justify-center w-full h-full">
    <motion.div
      animate={{ y: [10, -5, 10], rotateX: [10, 0, 10] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="w-16 h-16 rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-2xl flex items-center justify-center relative z-10"
    >
      <CalendarCheck className="w-7 h-7 text-[#c084fc]" />
      <motion.div
        animate={{ scale: [0, 1.2, 1, 0], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", times: [0, 0.2, 0.8, 1] }}
        className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center shadow-[0_0_10px_rgba(34,197,94,0.4)]"
      >
        <Check className="w-3 h-3 text-white" strokeWidth={3} />
      </motion.div>
    </motion.div>
  </div>
);

const FollowUpAnim = () => (
  <div className="relative flex items-center justify-center w-full h-full gap-4">
    {[
      { Icon: MessageSquare, delay: 0 },
      { Icon: TrendingUp, delay: 0.8 }
    ].map(({ Icon, delay }, i) => (
      <motion.div
        key={i}
        animate={{ y: [0, -10, 0], borderColor: ['rgba(255,255,255,0.05)', 'rgba(192,132,252,0.4)', 'rgba(255,255,255,0.05)'] }}
        transition={{ duration: 3, repeat: Infinity, delay, ease: "easeInOut" }}
        className="w-12 h-12 rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-center relative z-10"
      >
        <Icon className="w-5 h-5 text-[#c084fc]" />
      </motion.div>
    ))}
    {/* connecting line */}
    <div className="absolute w-[60px] h-[1px] bg-gradient-to-r from-transparent via-[#c084fc]/30 to-transparent" />
  </div>
);

const RevenueAnim = () => (
  <div className="relative flex items-end justify-center w-full h-full pb-10 gap-2.5">
    {[30, 50, 40, 70, 55, 90].map((h, i) => (
      <motion.div
        key={i}
        animate={{ height: [h * 0.4, h, h * 0.4] }}
        transition={{ duration: 3, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
        className="w-4 rounded-t-sm bg-gradient-to-t from-[#c084fc]/20 to-[#c084fc]/70 relative"
      >
        <motion.div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_5px_rgba(255,255,255,0.8)]" />
      </motion.div>
    ))}
  </div>
);

const STEPS = [
  {
    id: "01",
    title: "Lead Captured",
    icon: Sparkles,
    description: "Never lose another inquiry. Every lead enters the system automatically and receives an immediate response.",
    bullets: ["Meta Ads", "Google Ads", "Website Forms", "Incoming Calls"],
    AnimComponent: LeadAnim
  },
  {
    id: "02",
    title: "AI Qualification",
    icon: Bot,
    description: "AI asks qualifying questions, verifies intent, budget, service requirements, and urgency.",
    bullets: ["Intent Scoring", "Budget Checks", "Service Verification", "Instant Responses"],
    AnimComponent: QualifyAnim
  },
  {
    id: "03",
    title: "Smart Routing",
    icon: GitBranch,
    description: "Qualified leads are automatically assigned to the correct salesperson or department.",
    bullets: ["Location Based", "Service Specific", "Round Robin", "Live Handoff"],
    AnimComponent: RoutingAnim
  },
  {
    id: "04",
    title: "Appointment Booking",
    icon: CalendarCheck,
    description: "AI books meetings directly into calendars and sends reminders automatically.",
    bullets: ["Timezone Detection", "Instant Invites", "SMS Reminders", "Rescheduling"],
    AnimComponent: BookingAnim
  },
  {
    id: "05",
    title: "Follow-Up Automation",
    icon: MessageSquare,
    description: "SMS, email, and WhatsApp sequences continue nurturing prospects automatically.",
    bullets: ["Multi-Channel", "Long-Term Nurture", "Review Requests", "Win-Backs"],
    AnimComponent: FollowUpAnim
  },
  {
    id: "06",
    title: "Revenue Analytics",
    icon: TrendingUp,
    description: "Track every call, booking, conversion, and campaign result in real time.",
    bullets: ["ROI Tracking", "Call Recordings", "Conversion Rates", "Pipeline Value"],
    AnimComponent: RevenueAnim
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
    <section ref={containerRef} data-surface="dark" className="relative w-full bg-[#0a0a0a] text-white">
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
      <div className="relative pt-[140px] flex flex-col items-center text-center px-6 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center rounded-full border border-[#c084fc]/30 bg-[#c084fc]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#e879f9] mb-6"
        >
          AI Automation Flow
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display font-[600] text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6 flex flex-col items-center gap-1"
        >
          <span>How Our AI System Works</span>
          <span className="bg-gradient-to-r from-[#c084fc] to-[#e879f9] text-transparent bg-clip-text pb-1">
            From Lead To Revenue
          </span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-base md:text-lg max-w-[700px] leading-relaxed"
        >
          Every inquiry is instantly qualified, nurtured, booked, and tracked through an AI-powered workflow that operates 24/7.
        </motion.p>
      </div>

      <div className="relative max-w-[1280px] mx-auto px-6 pb-[100px] mt-10 md:mt-16">
        
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
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  {step.bullets.map((bullet: string, i: number) => (
                    <li key={i} className="flex items-center gap-3 text-white/80 text-sm md:text-base font-medium">
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
              <button className="flex w-full items-center justify-center gap-3 bg-white text-black px-6 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors relative z-10">
                Book A Strategy Call
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </div>


        {/* DESKTOP LAYOUT (Sticky Scroll Interactivity) */}
        <div className="hidden lg:flex lg:flex-row w-full">
          
          {/* Left Side: Sticky Card Stack */}
          <div className="w-1/2 h-screen sticky top-0 flex items-center justify-center py-10 z-10 perspective-[1200px]">
            <div className="relative w-full max-w-[380px] xl:max-w-[420px] aspect-[4/5]">
              {STEPS.map((step, idx) => {
                const totalBlocks = STEPS.length + 1;
                const target = idx / (totalBlocks - 1);
                const window = 1 / totalBlocks;

                const scale = useTransform(smoothProgress, [target - window, target, target + window], [0.85, 1, 1.15]);
                const y = useTransform(smoothProgress, [target - window, target, target + window], [80, 0, -120]);
                const opacity = useTransform(smoothProgress, [target - window, target, target + window/2, target + window], [0, 1, 1, 0]);
                const rotateX = useTransform(smoothProgress, [target - window, target, target + window], [15, 0, -20]);

                return (
                  <motion.div
                    key={step.id}
                    style={{ scale, y, opacity, rotateX, zIndex: STEPS.length - idx, transformStyle: "preserve-3d" }}
                    className="absolute inset-0 bg-[#0F0F13] rounded-[32px] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.6)] flex flex-col overflow-hidden will-change-transform"
                  >
                    <div className="h-[55%] w-full bg-gradient-to-b from-white/[0.03] to-transparent relative flex items-center justify-center overflow-hidden">
                      <step.AnimComponent />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F13] via-transparent to-white/[0.05] pointer-events-none" />
                    </div>
                    <div className="flex-1 p-8 xl:p-10 border-t border-white/5 flex flex-col justify-center bg-[#0F0F13]">
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
                <button className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors group/btn relative z-10">
                  Book A Strategy Call
                  <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
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
