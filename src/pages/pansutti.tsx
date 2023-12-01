import { NavBar } from "@/components/NavBar";

export default function designSystem() {
  return (
    <main className="mt-20 h-screen">
      <NavBar/>
      <h2 className="text-badgeText text-4xl uppercase font-semibold flex items-center justify-center ">
        PADRONIZAÇÃO DE DESIGN SYSTEM PARA WEB E DESKTOP
      </h2>
      <div className="flex justify-center py-8">
      <img src="/clients/questor.svg" alt="Ícone da empresa pearson." />
      </div>
      <div className="bg-orange-400 h-500 w-full">
        <img src="/portifolio/mockup7.svg" alt="" />
      </div>
    </main>
  );
}
