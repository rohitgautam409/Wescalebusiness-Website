"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "How quickly can we launch?",
    a: "Most clients are live within 3–7 days. We handle setup, integrations, AI training, testing, and deployment so you can start generating leads and automating conversations without lengthy implementation cycles."
  },
  {
    q: "How does the AI receptionist work?",
    a: "Our AI receptionist answers calls instantly, qualifies prospects, answers common questions, books appointments, and transfers hot leads directly to your team when needed."
  },
  {
    q: "Can the AI book appointments automatically?",
    a: "Yes. The AI connects with your calendar, checks availability, and books appointments in real time while sending confirmations and reminders automatically."
  },
  {
    q: "Will the AI sound robotic?",
    a: "No. We use advanced conversational AI voices designed to sound natural, human-like, and engaging while maintaining your brand's tone and personality."
  },
  {
    q: "Can it integrate with our CRM?",
    a: "Absolutely. We can connect with GoHighLevel, HubSpot, Salesforce, Zoho, and many other CRM systems to keep all lead information synchronized."
  },
  {
    q: "Do you also create AI video ads?",
    a: "Yes. We create AI-generated video ads, UGC-style creatives, and short-form content optimized for Meta Ads, Instagram Reels, TikTok, and YouTube Shorts."
  },
  {
    q: "Can the system handle high call volumes?",
    a: "Yes. AI agents can handle multiple conversations simultaneously, ensuring no lead is missed during peak traffic periods."
  },
  {
    q: "What industries do you work with?",
    a: "We primarily work with service businesses such as HVAC, roofing, plumbing, dental clinics, med spas, real estate agencies, and local service providers."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" data-surface="light" className="w-full bg-white pt-[60px] pb-[60px]">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full border border-[#c084fc]/20 bg-[#c084fc]/10 px-3 py-1 text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#a855f7] mb-4"
          >
            FAQ
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-[600] text-3xl md:text-4xl lg:text-5xl tracking-tight mb-[24px] flex flex-col items-center gap-1 md:gap-2"
          >
            <span className="text-gray-900">Questions Before</span>
            <span className="bg-gradient-to-r from-[#c084fc] to-[#e879f9] text-transparent bg-clip-text pb-2">
              You Scale?
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-sm md:text-base max-w-[600px] leading-relaxed"
          >
            Everything you need to know about AI automation, AI receptionists, implementation, pricing, and campaign management.
          </motion.p>
        </div>

        {/* Accordions */}
        <div className="w-full max-w-[760px] mx-auto flex flex-col gap-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`w-full bg-white rounded-[20px] border transition-all duration-300 ${
                  isOpen 
                    ? 'border-[#c084fc]/30 shadow-[0_8px_30px_rgba(0,0,0,0.04)]' 
                    : 'border-gray-100 shadow-sm hover:border-gray-200'
                }`}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-4 md:p-5 text-left focus:outline-none group"
                >
                  <h3 className="text-sm md:text-base font-semibold text-gray-900 pr-8 transition-colors group-hover:text-[#c084fc]">
                    {faq.q}
                  </h3>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-400 ${
                      isOpen ? 'bg-[#c084fc]' : 'bg-gray-50 group-hover:bg-gray-100'
                    }`}
                  >
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-white" />
                      ) : (
                        <Plus className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                      )}
                    </motion.div>
                  </motion.div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: "auto" },
                        collapsed: { opacity: 0, height: 0 }
                      }}
                      transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-4 md:px-5 pb-4 md:pb-5 pt-0">
                        <motion.div
                          variants={{
                            open: { opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.1 } },
                            collapsed: { opacity: 0, y: 10, transition: { duration: 0.2 } }
                          }}
                        >
                          <p className="text-gray-500 leading-relaxed text-sm md:text-[15px]">
                            {faq.a}
                          </p>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
