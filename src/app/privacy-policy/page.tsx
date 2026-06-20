import { Navbar } from "@/components/Navbar";
import { CTAAndFooter } from "@/components/CTAAndFooter";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center w-full selection:bg-[#c084fc]/30">
      <Navbar />
      
      {/* Spacer for fixed Navbar if necessary. Navbar might be fixed. Adding pt-32 to be safe. */}
      <article className="w-full max-w-[800px] px-6 pt-32 pb-24 md:pt-40 md:pb-32 relative z-10 flex flex-col gap-10">
        
        <div className="flex flex-col gap-4">
          <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-[#e879f9] transition-colors w-fit mb-4">
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium text-sm">Back to Home</span>
          </Link>
          <h1 className="font-display font-[800] text-4xl md:text-5xl lg:text-6xl tracking-tight text-white">
            Privacy Policy
          </h1>
          <p className="text-white/40 text-sm md:text-base font-medium">
            Effective Date: February 1st, 2025
          </p>
        </div>

        <div className="prose prose-invert prose-p:text-white/70 prose-p:leading-relaxed prose-li:text-white/70 prose-li:leading-relaxed max-w-none">
          <p>
            At WeScaleBusiness, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and disclose your personal information when you visit our website, make a purchase, or engage with our services.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          
          <Section number="1" title="Information We Collect">
            <p className="text-white/70 leading-relaxed mb-4">
              We collect personal information that you provide to us directly, including but not limited to:
            </p>
            <ul className="flex flex-col gap-3 list-none pl-0">
              {["Name", "Email Address", "Phone Number", "Billing Address", "Payment Information (e.g., credit/debit card details)", "Shipping Address (if applicable)"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#c084fc]" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-white/70 leading-relaxed mt-6 mb-4">
              Additionally, we may automatically collect information about your interactions with our website, including:
            </p>
            <ul className="flex flex-col gap-3 list-none pl-0">
              {["IP Address", "Browser Type", "Device Information", "Pages Visited on Our Site", "Cookies and Tracking Technologies"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#c084fc]" />
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          <Section number="2" title="How We Use Your Information">
            <p className="text-white/70 leading-relaxed mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="flex flex-col gap-3 list-none pl-0">
              {[
                "To process transactions and provide the requested products or services",
                "To communicate with you regarding your account, orders, and inquiries",
                "To send promotional emails or newsletters if you have opted-in",
                "To improve the functionality and performance of our website",
                "To comply with legal obligations and protect against fraudulent activities"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#c084fc] mt-2 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section number="3" title="Sharing Your Information">
            <p className="text-white/70 leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. However, we may share your information with trusted third-party service providers such as:
            </p>
            <ul className="flex flex-col gap-3 list-none pl-0 mb-6">
              {[
                "Payment processors (e.g., Stripe, PayPal) to process transactions securely",
                "Shipping companies to deliver products",
                "Marketing and analytics services to improve performance and targeting"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#c084fc] mt-2 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-white/70 leading-relaxed">
              We may also disclose your information if required by law or in response to legal requests, such as a subpoena or court order.
            </p>
          </Section>

          <Section number="4" title="Data Security">
            <p className="text-white/70 leading-relaxed">
              We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
            </p>
          </Section>

          <Section number="5" title="Your Rights">
            <p className="text-white/70 leading-relaxed mb-4">
              Depending on your location and applicable laws, you may have the right to:
            </p>
            <ul className="flex flex-col gap-3 list-none pl-0 mb-6">
              {[
                "Access the personal information we hold about you",
                "Correct or update inaccurate information",
                "Request deletion of your personal information (subject to exceptions)",
                "Object to or restrict processing of your data",
                "Withdraw consent for marketing communications at any time"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#c084fc] mt-2 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-white/70 leading-relaxed">
              To exercise any of these rights, please contact us.
            </p>
          </Section>

          <Section number="6" title="Cookies and Tracking Technologies">
            <p className="text-white/70 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to enhance your experience. Cookies help us remember preferences, analyze traffic, and personalize content.
            </p>
            <p className="text-white/70 leading-relaxed">
              You can control cookie settings through your browser, but disabling cookies may limit certain features.
            </p>
          </Section>

          <Section number="7" title="Third-Party Links">
            <p className="text-white/70 leading-relaxed">
              Our website may contain links to third-party websites not operated by us. We are not responsible for their privacy practices. Please review their policies before sharing personal information.
            </p>
          </Section>

          <Section number="8" title="Changes to This Privacy Policy">
            <p className="text-white/70 leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Effective Date." Please review periodically.
            </p>
          </Section>

          <Section number="9" title="Contact Us">
            <p className="text-white/70 leading-relaxed mb-4">
              If you have any questions or concerns about this Privacy Policy, or wish to exercise your rights, contact us:
            </p>
            <p className="text-white font-medium mb-2">WeScaleBusiness</p>
            <p className="text-white/70 leading-relaxed">
              Email: <a href="mailto:hello@wescalebusiness.com" className="text-[#e879f9] hover:underline">hello@wescalebusiness.com</a>
            </p>
          </Section>
          
        </div>
      </article>

      <div className="w-full border-t border-white/10" />

      {/* Put a minimized footer or full footer here */}
      <CTAAndFooter />
    </main>
  );
}

function Section({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 rounded-full bg-[#1c1a24] flex items-center justify-center border border-white/10 shadow-[0_0_10px_rgba(192,132,252,0.1)]">
          <span className="text-[#c084fc] font-bold text-sm">{number}</span>
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide">
          {title}
        </h2>
      </div>
      <div className="pl-0 md:pl-12">
        {children}
      </div>
    </section>
  );
}
