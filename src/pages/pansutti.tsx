import { NavBar } from "@/components/NavBar";


export default function designSystem() {
  return (
    <main className="mt-20 h-screen">
      <NavBar />
      <h2 className="text-badgeText text-4xl uppercase font-semibold flex items-center justify-center">
        PADRONIZAÇÃO DE DESIGN SYSTEM PARA WEB E DESKTOP
      </h2>
      <div className="flex justify-center py-8">
        <img src="/clients/questor.svg" alt="Ícone da empresa pearson." />
      </div>
      <div className="bg-orange-400 w-full">
        <div className="flex items-center justify-center  space-x-[-80px]">
          <img className="w-592 h-auto" src="/portifolio/mockup8.svg" alt="" />
          <img className="w-856 h-auto" src="/portifolio/mockup7.svg" alt="" />
          <img className="w-558 h-auto" src="/portifolio/mockup9.svg" alt="" />
        </div>
      </div>
      <div className="text-badgeText font-semibold flex justify-center p-8">
        <div className="w-1/6 text-center">
          <p className="uppercase text-2xl">MEU PAPEL</p>
          <p className="mt-2 text-primary-500 text-1xl">
            Product Designer Principal
          </p>
        </div>
        <div className="w-1/6 text-center">
          <p className="uppercase text-2xl">TEMPO DE PROJETO</p>
          <p className="mt-2 text-primary-500 text-1xl">12 meses</p>
        </div>
      </div>
      <div className="text-badgeText font-semibold text-center">
        <p className="uppercase text-2xl">RESPONSABILIDADES</p>
        <p className="mt-2 text-primary-500 text-1xl">
          Criação de Personas, Estratégia, Criação do design System
        </p>
      </div>
      <div className="border-b border-gray w-1/4 mx-auto my-4 pt-6"></div>
      <div className="max-w-[1200px] mx-auto flex flex-col">
        <div className="max-w-[720px] py-8">
          <p className="pb-4 text-3xl">OBJETIVO</p>
          <p className="text-2xl">
            Criar um formato padrão de componente de acordo com o novo Brand da
            marca, iniciado no começo de 2019. Visava-se criar um desisn system
            para os sistemas WEB e outro muito parecido para os sistemas
            DESCKTOP. O primeiro projeto foi em relação ao Design System WEB que
            ia dar base para a criação do outro.
          </p>
        </div>
        <div className="max-w-[720px] text-right pb-8 self-end">
          <p className="pb-4 text-3xl">DESAFIO</p>
          <p className="text-2xl">
            Realizar a criação dos Design System fazendo com que sistemas com
            linguagens completamente diferentes e legado pudessem ter a mesma
            base de componentes e identidades semelhantes. Além de utilizar
            componentes previamente prontos como o framework do Metronic e as
            tabelas da DevExpress. E também pensando que os componentes
            utilizados devessem ser compativeis a linguagem DELPHI.
          </p>
        </div>
        <div className="max-w-[720px] pb-16">
          <p className="pb-4 text-3xl">MODELO</p>
          <p className="text-2xl">
            Para este projeto decidimos utilizar o conceito de Atomic Design,
            que é metodologia que divide o design em seus menores componentes ou
            átomos. Esses átomos se combinam para criar moléculas, organismos,
            modelos e páginas. O design atômico cria um sistema mais estruturado
            e escalável, dividindo o design em seus menores componentes
          </p>
        </div>
      </div>
      <div className="bg-[#5A6273] w-full py-16">
        <div className="text-center uppercase font-semibold text-white max-w-[1200px] mx-auto">
          <p className="pb-8 text-3xl">PERSONAS</p>
          <p className="pb-8 text-left">
            A ideia inicial foi primeiro conhecer nosso público, identificar
            personas para gerar produtos que fizessem parte do dia a dia destas
            pessoas, entender o ambiente onde trabalham, o local onde moral, um
            pouco da jornada fora da empresa, cargos, e claro seus dados
            pessoais como idade, objetivos e história. Foi disparado uma
            pesquisa para a base de clientes com o objetivo de coletar estes
            dados. E nesta pesquisa conseguimos identificar três perfis
            distintos de pessoas.
          </p>
        </div>
        <div className="grid grid-cols-2 max-w-[1200px] mx-auto gap-2">
            <img src="/portifolio/photosection1.svg" alt="" />
            <img src="/portifolio/photosection2.svg" alt="" />
            <img src="/portifolio/photosection3.svg" alt="" /> 
            <img src="/portifolio/photosection4.svg" alt="" /> 
            <img src="/portifolio/photosection5.svg" alt="" />
            <img src="/portifolio/photosection6.svg" alt="" />
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto pb-16 pt-16">
        <div className="bg-[#5A6273] h-[64px] text-2xl text-center text-white rounded-md flex items-center justify-center">
        <a href="">ACESSAR DESIGN SYSTEMㅤ</a>
        <img src="/portifolio/buttonpansutti.svg" alt="" />
        </div>
      </div>
      <div className="border-b border-gray max-w-[1200px] mx-auto my-4 pt-6"></div>
      <div className="text-right max-w-[1000px] mx-auto">
        <a href="">Próximo Projeto</a>
      </div>
      <div className="text-3xl text-right max-w-[1100px] mx-auto pt-4">
        <a href="">Aplicativo de gestão de academias e treinos {'>'}</a>
      </div>
      <div className="text-center pt-20 pb-16">
        <p>Henrique Vinhola © 2023. Todos os Direitos Reservados</p>
      </div>
    </main>
  );
}
