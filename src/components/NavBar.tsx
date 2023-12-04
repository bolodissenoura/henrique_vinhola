import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from 'next/router';

export function NavBar() {
  const router = useRouter();
  return (
    <div className="fixed w-full top-0 px-20 bg-white flex items-center gap-24">
        <Image
          src="logo.svg"
          width={58}
          height={58}
          alt="Logo com as iniciais H e V escritos"
        />
        {router.pathname === '/' ? (
          <div className="flex justify-around w-full">
            <Link href={"/sobre"}>Sobre mim</Link>
            <Link href={"#projetos"}>Projetos</Link>
            <Link href={"#contato"}>Contato</Link>
          </div>
        ) : (
          <div className="flex justify-around font-fourth w-full border-b border-primary-500 max-w-[200px]" >
            <Link href={"/"} className="flex flex-row gap-2">
            <Image
                src="seta.svg"
                width={18}
                height={12}
                alt="Seta"
              />
              <Image
                src="house.svg"
                width={19}
                height={20}
                alt="Icon do botão Home"
              />
              voltar para o inicio
            </Link>
            <div/>
            <div/>
            <div/>
          </div>

        )}
        
      </div>
  );
}
