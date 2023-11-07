import Image from "next/image";
import React from "react";

export function ClientsSection() {
  return (
    <>
      <div className="w-full flex gap-4 items-center justify-center md:mt-32 mt-20">
        <div className="w-full h-1 rounded-full bg-gray-200"></div>
        <h2 className="text-primary-500 text-2xl uppercase font-semibold">Clientes</h2>
        <div className="w-full h-1 rounded-full bg-gray-200"></div>
      </div>
    </>
  );
}
