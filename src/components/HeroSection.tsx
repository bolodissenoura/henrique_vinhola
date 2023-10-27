import Image from "next/image";
import Link from "next/link";
import React from "react";

export function HeroSection() {
  return (
    <>
      <div className="w-full flex flex-col md:flex-row gap-8 items-center justify-center md:items-start">
        <Image
          src="/henrique.svg"
          width={364}
          height={364}
          alt="Homem com braços cruzados olhando para você."
          priority
        />
        <div className="flex flex-col gap-4 max-w-md">
          <h1 className="uppercase text-5xl border-l-2">HENRIQUE VINHOLA</h1>
          <p className="text-primary-500 text-2xl">Product designer</p>
          <p className="text-badgeText">
            Formado em Design Gráfico pela universidade de Franca e especialista
            em UX Designer pela Unochapecó. Trabalho como designer há mais de{" "}
            <strong>5 anos</strong> na construção de{" "}
            <strong>novos produtos</strong> e{" "}
            <strong>reconstrução de produtos legado</strong>.
          </p>
        </div>
      </div>
    </>
  );
}
