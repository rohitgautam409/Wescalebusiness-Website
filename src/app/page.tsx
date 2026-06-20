import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { DashboardShowcase } from "@/components/DashboardShowcase";
import { FeatureV2 } from "@/components/FeatureV2";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { AdCreatives } from "@/components/AdCreatives";
import { CTAAndFooter } from "@/components/CTAAndFooter";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center w-full">
      <Navbar />
      <Hero />
      <DashboardShowcase />
      <FeatureV2 />
      <FAQ />
      <AdCreatives />
      <Testimonials />
      <CTAAndFooter />
    </main>
  );
}
