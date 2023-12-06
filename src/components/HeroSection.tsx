import Image from "next/image";
import Link from "next/link";
import React from "react";

export function HeroSection() {
  return (
    <div className="w-full flex flex-col md:flex-row gap-8 items-center justify-around pb-16 md:items-start mt-32">
        <Image
        className="mr-12"
          src="/henrique.svg"
          width={364}
          height={364}
          alt="Homem com braços cruzados olhando para você."
          priority
        />
        <div>
          <div className="text-center pt-8">
          <h1 className="text-6xl text-badgeText flex items-center justify-start font-tertiary mb-4">HENRIQUE VINHOLA ㅤ<img src="/iconbrain.svg" alt="" /></h1>
          <p className="text-primary-500 text-2xl flex justify-start my-3 font-fourth">Product designer brasileiro</p>
          </div>
          <div>
          <p className="text-badgeText max-w-[750px] font-fourth text-2xl leading-loose">
            Formado em Design Gráfico pela universidade de Franca e especialista
            em UX Designer pela Unochapecó. Trabalho como designer há mais de{" "}
            <strong>5 anos</strong> na construção de{" "}
            <strong>novos produtos</strong> e{" "}
            <strong>reconstrução de produtos legado</strong>.
          </p>
          </div>
        </div>
      </div>
  );
}
