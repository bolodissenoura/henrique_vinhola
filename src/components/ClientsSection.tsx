import Image from "next/image";
import React from "react";

export function ClientsSection() {
  return (
    <>
      <div className="w-full flex gap-4 items-center justify-center md:mt-32 mt-20">
        <div className="w-full h-1 rounded-full bg-gray-200"></div>
        <h2 className="text-primary-500 text-2xl uppercase font-semibold">
          Clientes
        </h2>
        <div className="w-full h-1 rounded-full bg-gray-200"></div>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-4 items-center justify-center">
        <div className="flex">
          <Image
            src="/clients/cyrela.svg"
            width={195}
            height={195}
            alt="Ícone da empresa cyrela."
          />
          <Image
            src="/clients/move.svg"
            width={195}
            height={195}
            alt="Ícone da empresa move."
          />
        </div>
        <div className="flex">
          <Image
            src="/clients/pearson.svg"
            width={195}
            height={195}
            alt="Ícone da empresa pearson."
          />
          <Image
            src="/clients/questor.svg"
            width={195}
            height={195}
            alt="Ícone da empresa questor."
          />
        </div>
        <div className="flex">
          <Image
            src="/clients/wizard.svg"
            width={195}
            height={195}
            alt="Ícone da empresa wizard."
          />
          <Image
            src="/clients/yazigi.svg"
            width={195}
            height={195}
            alt="Ícone da empresa yazigi."
          />
        </div>
      </div>
    </>
  );
}
