import Image from "next/image";
import Link from "next/link";
import React from "react";

export function NavBar() {
  return (
    <>
      <div className="fixed w-full top-2 px-20 bg-white flex items-center">
        <Image
          src="logo.svg"
          width={58}
          height={58}
          alt="Logo com as iniciais H e V escritos"
        />
        <div className="flex justify-around w-full">
          <Link href={"/sobre"}>Sobre mim</Link>
          <Link href={"/sobre"}>Projetos</Link>
          <Link href={"/sobre"}>Contato</Link>
        </div>
      </div>
    </>
  );
}
