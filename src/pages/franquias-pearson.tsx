import { NavBar } from "@/components/NavBar";
import Image from "next/image";

export default function franquias() {
  return(
    <main className="mt-20 h-screen">
      <NavBar />
      <div className="px-8 md:px-60 mt-20">
        <h2 className="text-badgeText text-4xl font-tertiary flex items-center justify-center">
          Unificando a gestão das franquias de escola de idiomas do grupo pearson
        </h2>
        <br />
        <div className="w-full flex flex-col md:flex-row gap-5 items-center justify-center">
          <div className="flex">
            <Image
              src="/clients/pearson.svg"
              width={104}
              height={83}
              alt="Ícone da empresa wizard."
            />
            <Image
              src="/clients/wizard.svg"
              width={216}
              height={104}
              alt="Ícone da empresa wizard."
            />
            <Image
              src="/clients/yazigi.svg"
              width={177}
              height={104}
              alt="Ícone da empresa wizard."
            />
          </div>
        </div>
        <br />
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
      <div className="text-badgeText flex justify-center p-8">
        <div className="w-1/6 text-center">
          <p className="text-4xl font-tertiary">MEU PAPEL</p>
          <p className="mt-2 text-primary-500 text-2xl">
            Product Designer Principal
          </p>
        </div>
        <div className="w-1/6 text-center">
          <p className="text-4xl font-tertiary">TEMPO DE PROJETO</p>
          <p className="mt-2 text-primary-500 text-2xl">12 meses</p>
        </div>
      </div>
      <div className="text-badgeText text-center">
        <p className="text-4xl font-tertiary">RESPONSABILIDADES</p>
        <p className="mt-2 text-primary-500 text-2xl">
          Criação de Personas, Estratégia, Criação do design System
        </p>
      </div>
      <div className="border-b border-gray w-1/4 mx-auto my-4 pt-6"></div>
      <div className="max-w-[1200px] mx-auto flex justify-center items-stretch">
        <div className="max-w-[720px] py-8">
          <p className="pb-4 text-4xl font-tertiary uppercase text-badgeText">introdução</p>
          <p className="text-2xl font-fourth leading-loose text-badgeText">A Pearson é a maior empresa de educação do mundo e uma das maiores do Brasil. Possuem diversas redes de franquias, e neste projeto vamos falar especificamente de duas delas: Wizard by Pearson e Yázigi</p>
          <p className="text-2xl font-fourth leading-loose text-badgeText">Sponte é uma empresa que oferece sistemas de gestão dentro dos segmentos de: educação básica, escolas de idioma e cursos técnicos e profissionalizantes.
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
      <div className="max-w-[1200px] mx-auto flex justify-center items-stretch">
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
        <div className="max-w-[720px] py-8">
          <p className="pb-4 text-4xl font-tertiary text-badgeText">Sobre o projeto</p>
          <p className="text-2xl font-fourth leading-loose text-badgeText">O Projeto em questão nasceu da necessidade de melhorar o controle da Pearson em relação às redes de franquias, para isso, decidiram utilizar apenas um sistema de gestão para as duas redes, situação que até então era livre para que o franqueado decidisse qual sistema contratar. Para padronização das redes foi escolhido o sistema de gestão Sponte idiomas, e após a implantação, críticas sobre o modelo de gestão começaram surgir.</p>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto flex flex-col">
        <div className="max-w-[720px] py-8">
          <p className="pb-4 text-4xl font-tertiary uppercase text-badgeText">O time</p>
          <p className="text-2xl font-fourth leading-loose text-badgeText">
          Dentro de um backlog previamente criado, o objetivo do projeto era atualizar/refazer partes do sistema para atender as necessidades pedagógicas das escolas das redes Wizard e Yázigi.
          </p>
          <p className="text-2xl font-fourth leading-loose text-badgeText">
          Ao inicia-lo, o projeto não tinha metodologia e por conta disso este início do foi marcado por euforia, desalinhamento e confusão. Após os primeiros erros, tivemos liberdade para passar nossa perspectiva dos principais pontos a melhorar e iniciar uma nova etapa para o projeto.
          </p>
        </div>
        <div className="max-w-[720px] text-right pb-8 self-end">
          <p className="pb-4 text-4xl font-tertiary uppercase text-badgeText">desafios iniciais</p>
          <p className="text-2xl font-fourth leading-loose text-badgeText">
          &#8226; Falta de contato com os usuários
          </p>
          <p className="text-2xl font-fourth leading-loose text-badgeText">
          &#8226; Centralização das dores no time de tecnologia da Pearson
          </p>
          <p className="text-2xl font-fourth leading-loose text-badgeText">
          &#8226; Falta de validação com os usuários finais
          </p>
          <p className="text-2xl font-fourth leading-loose text-badgeText">
          &#8226; Nenhum dos stakeholders (Devs, Negócio e cliente) nunca haviam tido contato com time de Design
          </p>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto flex justify-center items-stretch">
        <div className="max-w-[720px] py-8">
          <p className="pb-4 text-4xl font-tertiary uppercase text-badgeText">cultura e metodologia</p>
          <p className="text-2xl font-fourth leading-loose text-badgeText">Para promover a cultura, iniciamos com workshop’s entre os envolvidos e apresentamos uma metodologia com base em outras experiências profissionais semelhantes que tivemos.</p>
          <br />
          <br />
          <p className="text-2xl font-fourth leading-loose text-badgeText">Percebemos que num primeiro momento era necessário uma perspectiva um pouco mais ampla sobre como as coisas se relacionavam. Para isso criamos um framework de entendimento e exploração com o objetivo de fazermos uma leitura coerente às verdadeiras necessidades do dia-a-dia dos usuários, e apenas depois organizar e priorizar o backlog.</p>
        </div>
        <div className="w-2/5 flex flex-col justify-start items-center">
          <div className="flex flex-col space-y-4">
            <Image 
              src="/plain.svg" 
              alt="Imagem 1" 
              width={250}
              height={250}
              className="h-full"/>
          </div>
        </div>
      </div>
      <div className="bg-[#5A6273] w-full py-16">
        <div className="text-center text-white max-w-[1200px] mx-auto">
          <p className="pb-8 text-4xl font-tertiary">descoberta</p>
        </div>
        <div className="max-w-[1200px] mx-auto flex justify-center items-stretch">
          <div className="max-w-[720px] py-8">
            <p className="text-2xl font-fourth text-white leading-loose">Mergulhamos de cabeça para saber as principais diferenças entre Wizard e Yázigi. Partimos dos manuais que a própria marca disponibilizava. Mas para entender como funcionavam as escolas na prática, iniciamos uma bateria de pesquisas com franqueados/colaboradores, consultores Pearson e demais envolvidos.</p>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center">
              <Image 
                src="/video-maker.svg" 
                alt="Imagem 1" 
                width={485}
                height={228}
                className="h-full"
              />
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-center py-8">
            <Image
              src="/video-maker2.svg" 
              alt="Imagem 1" 
              width={485}
              height={228}
              className="h-full"
            />
            <Image
              src="/video-maker3.svg" 
              alt="Imagem 1" 
              width={485}
              height={228}
              className="h-full"
            />
        </div>
        <div className="text-center text-white max-w-[1200px] mx-auto">
          <p className="pb-8 text-2xl text-left font-fourth leading-loose">
            Após a série de pesquisa, refinamos as personas existentes, criamos outras que também eram importantes e passamos a abordar 100% o funcionamento das escolas.
          </p>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto pb-16 pt-16">
        <div className="text-center max-w-[1200px] mx-auto">
          <p className="pb-8 text-4xl font-tertiary text-badgeText">personas</p>
        </div>
        <Image
        src="/persona.svg" 
        alt="Imagem 1" 
        width={1200}
        height={719}
        />
      </div>
      <div className="max-w-[1200px] max-h-[705px] mx-auto flex">
        <div className="w-1/2 mr-[58px] text-2xl font-fourth leading-[43px] font-normal">
          <p className="h-[301px]">Queríamos entender como era a jornada do aluno e consequentemente como, quando e porquê nosso usuário iria se relacionar com o sistema. Para isso criamos um calendário, que simulava o comportamento das escolas em relação a um aluno que se matriculou e iria estudar.</p>
          <Image 
            width={500}
            height={385} 
            src="calender.svg" 
            alt="Imagem"
          />
        </div>
        <div className="w-1/2 text-2xl leading-[43px] mb-16 font-normal">
          <h2 className="text-primary-500 font-fifth">Principais Insights</h2>
          <ul className="list-disc font-fourth ">
            <li>Identificação de quais áreas do sistema não estavam sendo claras para o usuário</li>
            <li>Falta de padronização da franquia com alguns protocolos</li>
            <li>Identificação de quais processos da franquia o sistema não se adequava ou não dava apoio;</li>
            <li>Identificação de diversos pontos de dor de maneira detalhada;</li>
            <li>Quais problemas nasciam da falta de comunicação entre franqueado, franqueador e fornecedor;</li>
            <li>Processos desconhecidos por nós como fornecedores da solução, que era comum na rede.</li>
          </ul>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="bg-[#5A6273] w-full py-16">
        <div className="text-center text-white max-w-[1200px] mx-auto justify-between">
          <p className="pb-8 text-4xl font-tertiary">validação</p>
          <p className="pb-8 text-[24px] leading-[43px] font-normal text-left font-fourth">
            Com base em tudo que coletamos na etapa de descoberta validamos um fluxograma simplificado que englobava a jornada do aluno desde sua entrada até conclusão ou desistência do curso.
            Dividimos a jornada do aluno em quatro momentos diferentes.
          </p>
          <ul className="list-disc flex justify-between">
            <li className="marker:text-green-400">Interessado</li>
            <li className="marker:text-pink-400">Pré-matrícula</li>
            <li className="marker:text-blue-200">Estudando</li>
            <li className="marker:text-gray-400">Rematrícula</li>
          </ul>
        </div>
          <Image
            width={1915}
            height={345} 
            src="validation.svg" 
            alt="Imagem"
          />
      </div>


    </main>
  )
}