import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { DashboardShowcase } from "@/components/DashboardShowcase";
import { Features } from "@/components/Features";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center w-full">
      <Navbar />
      <Hero />
      <DashboardShowcase />
      <Features />
    </main>
  );
}
