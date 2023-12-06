import Image from "next/image";
import Link from "next/link";
import React from "react";

export function ContactSection() {
  return (
    <>
      <div className="w-full flex items-center justify-center my-20">
      <div className="border-b border-gray w-full "></div>
        <h2 className="text-badgeText text-6xl mx-24 font-tertiary" id="contato">
          CONTATO
        </h2>
        <div className="border-b border-gray w-full "></div>
      </div>
      <div className="flex flex-col gap-8 mb-20">
        <p className="text-primary-500 text-2xl font-fourth">vamos conversar?</p>
        <div className="flex justify-between flex-col md:flex-row">
          <div className="flex gap-4">
            <Image
              src="/zap.svg"
              width={24}
              height={24}
              alt="Icone do zap zap."
            />
            <Link
              href={"https://api.whatsapp.com/send?phone=5546999314568"}
              target="_blank">
              <p className="text-2xl text-badgeText font-fourth">(46) 9 9931-4568</p>
            </Link>
          </div>
          <div className="flex gap-4">
            <Image
              src="/email.svg"
              width={24}
              height={24}
              alt="Icone do email."
            />
            <Link href={"mailto:ux.henrique.vinhola@gmail.com"} target="_blank">
              <p className="text-2xl text-badgeText font-fourth">
                ux.henrique.vinhola@gmail.com
              </p>
            </Link>
          </div>
          <div className="flex gap-4">
            <Image
              src="/linkedin.svg"
              width={24}
              height={24}
              alt="Icone do linkedin."
            />
            <Link
              href={"https://www.linkedin.com/in/henrique-vinhola/"}
              target="_blank">
              <p className="text-2xl text-badgeText font-fourth">
                linkedin.com/in/henrique-vinhola
              </p>
            </Link>
          </div>
        </div>
        <button className="w-full bg-badgeText text-white flex justify-center align-middle gap-4 py-4 rounded-md hover:shadow-none shadow-lg transition-all">
          <Image
            src="/download.svg"
            width={30}
            height={30}
            alt="Icone de download ( seta para baixo )."
          />
          <p className="text-3xl font-tertiary ">BAIXE MEU CURRÍCULO</p>
        </button>
      </div>
      <p className="text text-badgeText mb-20">Henrique Vinhola © 2023. Todos os Direitos Reservados</p>
      <br />
    </>
  );
}
