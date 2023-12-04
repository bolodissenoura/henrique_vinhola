import { NavBar } from "@/components/NavBar";
import Image from "next/image";

export default function franquias() {
  return(
    <main className="mt-20 h-screen">
      <NavBar />
      <div className="px-8 md:px-60 mt-20">
        <h2 className="flex justify-center font-third text-badgeText text-3xl uppercase font-semibold">
          Unificando a gestão das franquias de escola de idiomas do grupo pearson
        </h2>
        <div className="w-full flex flex-col md:flex-row gap-4 items-center justify-center">
          <div className="flex">
            <Image
              src="/clients/pearson.svg"
              width={195}
              height={195}
              alt="Ícone da empresa wizard."
            />
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
              alt="Ícone da empresa wizard."
            />
          </div>
        </div>
      </div>
      <div className="bg-pallet-blue h-500 w-full">
        <div className="flex items-center justify-center">
          <Image
            width={666}
            height={469}
            src="/portifolio/mockup7.png" alt="pc"
          />
          <Image
            width={659}
            height={465}
            src="/portifolio/mockup4.png" alt="pc"
          />
        </div>
      </div>
      <div className="text-badgeText font-semibold flex justify-center p-8">
        <div className="w-1/6 text-center">
          <p className="uppercase font-third text-3xl">MEU PAPEL</p>
          <p className="mt-2 text-primary-500 text-2xl">Product Designer Principal</p>
        </div>
        <div className="w-1/6 text-center">
          <p className="uppercase font-third  text-3xl">TEMPO DE PROJETO</p>
          <p className="mt-2 text-primary-500 text-2xl">12 meses</p>
        </div>
      </div>
      <div className="text-badgeText font-semibold text-center">
        <p className="uppercase font-third  text-3xl">RESPONSABILIDADES</p>
        <p className="mt-2 text-primary-500 text-2xl">Criação de Personas, Estratégia, Criação do design System</p>
      </div>
      <div className="border-b border-gray w-1/4 mx-auto my-4 pt-6"></div>
      <div className="max-w-4xl mx-auto flex justify-center items-stretch">
        <div className="w-3/5 pr-8 flex flex-col">
          <p className="text-lg flex-1 uppercase">introdução</p>
          <p className="text-lg flex-1">A Pearson é a maior empresa de educação do mundo e uma das maiores do Brasil. Possuem diversas redes de franquias, e neste projeto vamos falar especificamente de duas delas: Wizard by Pearson e Yázigi</p>
          <p className="text-lg flex-1">Sponte é uma empresa que oferece sistemas de gestão dentro dos segmentos de: educação básica, escolas de idioma e cursos técnicos e profissionalizantes.
          Estes produtos agregam funcionalidades de gestão: Gestão pedagógica, financeira e administrativa. Além de uma funcionalidade de captação de alunos.</p>
        </div>
        <div className="w-2/5 flex flex-col justify-start items-center">
          <div className="flex flex-col space-y-4">
            <Image 
              src="/clients/pearson.svg" 
              alt="Imagem 1" 
              width={250}
              height={250}
              className="h-full"/>
            <Image 
              src="/clients/sponte.svg" 
              alt="Imagem 1" 
              width={250}
              height={250}
              className="h-full"/>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto flex justify-center items-stretch">
        <div className="w-2/5 flex flex-col justify-start items-center">
          <div className="flex flex-col space-y-4">
            <Image 
              src="/clients/wizard.svg" 
              alt="Imagem 1" 
              width={250}
              height={250}
              className="h-full"/>
            <Image 
              src="/clients/yazigi.svg" 
              alt="Imagem 1" 
              width={250}
              height={250}
              className="h-full"/>
          </div>
        </div>
        <div className="w-3/5 pr-8 flex flex-col">
          <p className="text-lg flex-1 uppercase text-right">Sobre o projeto</p>
          <p className="text-right">O Projeto em questão nasceu da necessidade de melhorar o controle da Pearson em relação às redes de franquias, para isso, decidiram utilizar apenas um sistema de gestão para as duas redes, situação que até então era livre para que o franqueado decidisse qual sistema contratar. Para padronização das redes foi escolhido o sistema de gestão Sponte idiomas, e após a implantação, críticas sobre o modelo de gestão começaram surgir.</p>
        </div>
      </div>
    </main>
  )
}