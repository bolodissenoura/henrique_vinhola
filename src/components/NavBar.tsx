import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

export function NavBar() {
  const router = useRouter();
  return (
    <div className={`fixed w-full top-6 px-20 flex items-center gap-24 ${router.pathname === "/" ? "" : "bg-white top-0 mt-[-24px] py-3"}`}>
      <Image
        src="logo.svg"
        width={58}
        height={58}
        alt="Logo com as iniciais H e V escritos"
      />
      {router.pathname === "/" ? (
        <>
          <div className="bg-white flex justify-around w-full font-fourth text-center shadow-[0_2px_4px_0px_rgba(224,224,224,0.25)] ">
            <Link className="w-1/3 hover:border-b-2 hover:border-primary-500 py-4" href={"/sobre"}>Sobre mim</Link>
            <Link className="w-1/3 hover:border-b-2 hover:border-primary-500 py-4" href={"#projetos"}>Projetos</Link>
            <Link className="w-1/3 hover:border-b-2 hover:border-primary-500 py-4" href={"#contato"}>Contato</Link>
          </div>
          <div className="flex justify-center border-2 rounded-md">
            <div className="flex justify-center items-center bg-white hover:bg-[#5F6369] hover:text-white gap-2 rounded-l-md w-[80px] h-[40px]">
              <Image
                src="brazil.svg"
                width={24}
                height={24}
                alt="icone do brasil"
              />
              <p className="text-2xl">PT</p>
            </div>
            <div className="flex justify-center items-center bg-white  hover:bg-[#5F6369] hover:text-white gap-2 rounded-r-md w-[80px] h-[40px]">
              <Image src="eua.svg" width={24} height={24} alt="icone do eua" />
              <p className="text-2xl">EN</p>
            </div>
          </div>
        </>
      ) : (
        <div className="flex justify-around font-fourth w-full border-b pb-2 border-primary-500 max-w-[200px]">
          <Link href={"/"} className="flex flex-row gap-2">
            <Image src="seta.svg" width={18} height={12} alt="Seta" />
            <Image
              src="house.svg"
              width={19}
              height={20}
              alt="Icon do botão Home"
            />
            voltar para o inicio
          </Link>
        </div>
      )}
    </div>
  );
}

