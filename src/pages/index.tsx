import Image from "next/image";
import { Manrope } from "next/font/google";
import { NavBar } from "@/components/NavBar";
import { HeroSection } from "@/components/HeroSection";

const inter = Manrope({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <NavBar />
      <div className="px-8 md:px-60 mt-20 h-screen bg-red-300">
        <div className="bg-blue-100 w-full">
          <HeroSection />
        </div>
      </div>
    </main>
  );
}
