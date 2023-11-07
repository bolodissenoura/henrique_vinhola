import Image from "next/image";
import { Manrope } from "next/font/google";
import { NavBar } from "@/components/NavBar";
import { HeroSection } from "@/components/HeroSection";
import { ClientsSection } from "@/components/ClientsSection";

const inter = Manrope({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <NavBar />
      <div className="px-8 md:px-60 mt-20 h-screen">
        <div className="w-full">
          <HeroSection />
          <ClientsSection />
        </div>
      </div>
    </main>
  );
}
