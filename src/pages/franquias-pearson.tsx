import { NavBar } from "@/components/NavBar";
import Image from "next/image";

const columnOneItems = [
  "Cadastro de pessoa",
  "Contrato",
  "Alocação de alunos",
  "Planejamento de aulas",
  "Reposição de aulas",
];

const columnTwoItems = ["Pós vendas", "Acompanhamento", "Desempenho/Boletim", "Plano de ação", "Rematrícula"];

export default function franquias() {
  return (
    <main className="mt-20 h-screen">
      <NavBar />
      <div className="px-8 md:px-60 mt-20">
        <h2 className="text-badgeText text-4xl font-tertiary flex items-center justify-center">
          Unificando a gestão das franquias de escola de idiomas do grupo pearson
        </h2>
        <br />
        <div className="w-full flex flex-col md:flex-row gap-5 items-center justify-center">
          <div className="flex">
            <Image src="/clients/pearson.svg" width={104} height={83} alt="Ícone da empresa wizard." />
            <Image src="/clients/wizard.svg" width={216} height={104} alt="Ícone da empresa wizard." />
            <Image src="/clients/yazigi.svg" width={177} height={104} alt="Ícone da empresa wizard." />
          </div>
        </div>
        <br />
      </div>
      <div className="bg-pallet-blue h-500 w-full">
        <div className="flex items-center justify-center">
          <Image width={666} height={469} src="/portifolio/mockup7.png" alt="pc" />
          <Image width={659} height={465} src="/portifolio/mockup4.png" alt="pc" />
        </div>
      </div>
      <div className="text-badgeText flex justify-center p-8">
        <div className="w-1/6 text-center">
          <p className="text-4xl font-tertiary">MEU PAPEL</p>
          <p className="mt-2 text-primary-500 text-2xl">Product Designer Principal</p>
        </div>
        <div className="w-1/6 text-center">
          <p className="text-4xl font-tertiary">TEMPO DE PROJETO</p>
          <p className="mt-2 text-primary-500 text-2xl">12 meses</p>
        </div>
      </div>
      <div className="text-badgeText text-center">
        <p className="text-4xl font-tertiary">RESPONSABILIDADES</p>
        <p className="mt-2 text-primary-500 text-2xl">Criação de Personas, Estratégia, Criação do design System</p>
      </div>
      <div className="border-b border-gray w-1/4 mx-auto my-4 pt-6"></div>
      <div className="max-w-[1200px] mx-auto flex justify-center items-stretch">
        <div className="max-w-[720px] py-8">
          <p className="pb-4 text-4xl font-tertiary uppercase text-badgeText">introdução</p>
          <p className="text-2xl font-fourth leading-loose text-badgeText">
            A Pearson é a maior empresa de educação do mundo e uma das maiores do Brasil. Possuem diversas redes de
            franquias, e neste projeto vamos falar especificamente de duas delas: Wizard by Pearson e Yázigi
          </p>
          <p className="text-2xl font-fourth leading-loose text-badgeText">
            Sponte é uma empresa que oferece sistemas de gestão dentro dos segmentos de: educação básica, escolas de
            idioma e cursos técnicos e profissionalizantes. Estes produtos agregam funcionalidades de gestão: Gestão
            pedagógica, financeira e administrativa. Além de uma funcionalidade de captação de alunos.
          </p>
        </div>
        <div className="w-2/5 flex flex-col justify-start items-center">
          <div className="flex flex-col space-y-4">
            <Image src="/clients/pearson.svg" alt="Imagem 1" width={250} height={250} className="h-full" />
            <Image src="/clients/sponte.svg" alt="Imagem 1" width={250} height={250} className="h-full" />
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] text-right mx-auto flex justify-center items-stretch">
        <div className="w-2/5 flex flex-col justify-start items-center">
          <div className="flex flex-col space-y-4">
            <Image src="/clients/wizard.svg" alt="Imagem 1" width={250} height={250} className="h-full" />
            <Image src="/clients/yazigi.svg" alt="Imagem 1" width={250} height={250} className="h-full" />
          </div>
        </div>
        <div className="max-w-[720px] py-8">
          <p className="pb-4 text-4xl font-tertiary text-badgeText">Sobre o projeto</p>
          <p className="text-2xl font-fourth leading-loose text-badgeText">
            O Projeto em questão nasceu da necessidade de melhorar o controle da Pearson em relação às redes de
            franquias, para isso, decidiram utilizar apenas um sistema de gestão para as duas redes, situação que até
            então era livre para que o franqueado decidisse qual sistema contratar. Para padronização das redes foi
            escolhido o sistema de gestão Sponte idiomas, e após a implantação, críticas sobre o modelo de gestão
            começaram surgir.
          </p>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto flex flex-col">
        <div className="max-w-[720px] py-8">
          <p className="pb-4 text-4xl font-tertiary uppercase text-badgeText">O time</p>
          <p className="text-2xl font-fourth leading-loose text-badgeText">
            Dentro de um backlog previamente criado, o objetivo do projeto era atualizar/refazer partes do sistema para
            atender as necessidades pedagógicas das escolas das redes Wizard e Yázigi.
          </p>
          <p className="text-2xl font-fourth leading-loose text-badgeText">
            Ao inicia-lo, o projeto não tinha metodologia e por conta disso este início do foi marcado por euforia,
            desalinhamento e confusão. Após os primeiros erros, tivemos liberdade para passar nossa perspectiva dos
            principais pontos a melhorar e iniciar uma nova etapa para o projeto.
          </p>
        </div>
        <div className="max-w-[720px] text-right pb-8 self-end">
          <p className="pb-4 text-4xl font-tertiary uppercase text-badgeText">desafios iniciais</p>
          <p className="text-2xl font-fourth leading-loose text-badgeText">&#8226; Falta de contato com os usuários</p>
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
          <p className="text-2xl font-fourth leading-loose text-badgeText">
            Para promover a cultura, iniciamos com workshop’s entre os envolvidos e apresentamos uma metodologia com
            base em outras experiências profissionais semelhantes que tivemos.
          </p>
          <br />
          <br />
          <p className="text-2xl font-fourth leading-loose text-badgeText">
            Percebemos que num primeiro momento era necessário uma perspectiva um pouco mais ampla sobre como as coisas
            se relacionavam. Para isso criamos um framework de entendimento e exploração com o objetivo de fazermos uma
            leitura coerente às verdadeiras necessidades do dia-a-dia dos usuários, e apenas depois organizar e
            priorizar o backlog.
          </p>
        </div>
        <div className="w-2/5 flex flex-col justify-start items-center">
          <div className="flex flex-col space-y-4">
            <Image src="/plain.svg" alt="Imagem 1" width={250} height={250} className="h-full" />
          </div>
        </div>
      </div>
      <div className="bg-[#5A6273] w-full py-16">
        <div className="text-center text-white max-w-[1200px] mx-auto">
          <p className="pb-8 text-4xl font-tertiary">descoberta</p>
        </div>
        <div className="max-w-[1200px] mx-auto flex justify-center items-stretch">
          <div className="max-w-[720px] py-8">
            <p className="text-2xl font-fourth text-white leading-loose">
              Mergulhamos de cabeça para saber as principais diferenças entre Wizard e Yázigi. Partimos dos manuais que
              a própria marca disponibilizava. Mas para entender como funcionavam as escolas na prática, iniciamos uma
              bateria de pesquisas com franqueados/colaboradores, consultores Pearson e demais envolvidos.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center">
              <Image src="/video-maker.svg" alt="Imagem 1" width={485} height={228} className="h-full" />
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-center py-8">
          <Image src="/video-maker2.svg" alt="Imagem 1" width={485} height={228} className="h-full" />
          <Image src="/video-maker3.svg" alt="Imagem 1" width={485} height={228} className="h-full" />
        </div>
        <div className="text-center text-white max-w-[1200px] mx-auto">
          <p className="pb-8 text-2xl text-left font-fourth leading-loose">
            Após a série de pesquisa, refinamos as personas existentes, criamos outras que também eram importantes e
            passamos a abordar 100% o funcionamento das escolas.
          </p>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto pb-16 pt-16">
        <div className="text-center max-w-[1200px] mx-auto">
          <p className="pb-8 text-4xl font-tertiary text-badgeText">personas</p>
        </div>
        <Image src="/persona.svg" alt="Imagem 1" width={1200} height={719} />
      </div>
      <div className="max-w-[1200px] max-h-[705px] mx-auto flex">
        <div className="w-1/2 mr-[58px] text-2xl font-fourth leading-[43px] font-normal">
          <p className="h-[301px]">
            Queríamos entender como era a jornada do aluno e consequentemente como, quando e porquê nosso usuário iria
            se relacionar com o sistema. Para isso criamos um calendário, que simulava o comportamento das escolas em
            relação a um aluno que se matriculou e iria estudar.
          </p>
          <Image width={500} height={385} src="calender.svg" alt="Imagem" />
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
            Com base em tudo que coletamos na etapa de descoberta validamos um fluxograma simplificado que englobava a
            jornada do aluno desde sua entrada até conclusão ou desistência do curso. Dividimos a jornada do aluno em
            quatro momentos diferentes.
          </p>
          <ul className="list-disc flex justify-between">
            <li className="marker:text-green-400">Interessado</li>
            <li className="marker:text-pink-400">Pré-matrícula</li>
            <li className="marker:text-blue-200">Estudando</li>
            <li className="marker:text-gray-400">Rematrícula</li>
          </ul>
        </div>
        <Image width={1915} height={345} src="validation.svg" alt="Imagem" />
      </div>
      <div className="max-w-[1200px] mx-auto pb-16 pt-16 text-badgeText">
        <div className="text-center max-w-[1200px] mx-auto">
          <p className="pb-8 text-4xl font-tertiary">arquitetura de informação do projeto</p>
        </div>
        <p className="pb-8 text-[24px] leading-[43px] font-normal text-left font-fourth">
          Com base em tudo que coletamos na etapa de descoberta validamos um fluxograma simplificado que englobava a
          jornada do aluno desde sua entrada até conclusão ou desistência do curso. Dividimos a jornada do aluno em
          quatro momentos diferentes.
        </p>
        <Image src="/information-arch.svg" alt="Imagem 1" width={1200} height={719} />
        <br />
        <p className="pb-8 text-[24px] leading-[43px] font-normal text-left font-fourth">
          Neste momento ficou claro quais mudanças estruturais eram necessárias. Então para termos um visão um pouco
          mais sofisticada e poder sugerir ações concretas, partimos para a próxima etapa.
        </p>
        <p className="text-primary-500 pb-8 text-[24px] leading-[43px] font-normal text-left font-fourth">
          Priorização
        </p>
        <p className="pb-8 text-[24px] leading-[43px] font-normal text-left font-fourth">
          Olhamos para nosso backlog, nossas limitações com relação a tecnologia, as exigências do cliente e começamos a
          pensar em um sistema atendendo tudo. E após encontrarmos uma estrutura que atendesse às exigências definimos
          um cronograma de desenvolvimento.
        </p>
        <div className="flex justify-center items-center">
          {/* Coluna 1 */}
          <div className="w-1/2 p-2">
            <ol className="list-none">
              {columnOneItems.map((word, index) => {
                const number = (index + 1).toString().padStart(2, "0");
                return (
                  <li key={index} className="flex items-center p-2 my-2" style={{ border: "1px solid #1AC6D9" }}>
                    <span className="flex bg-primary-500 p-1 mr-2 text-white w-8 h-8 justify-center">{number}</span>
                    <div className="flex items-center justify-center flex-1">{word}</div>
                  </li>
                );
              })}
            </ol>
          </div>
          {/* Coluna 2 */}
          <div className="w-1/2 p-2">
            <ol className="list-none pl-0">
              {columnTwoItems.map((word, index) => {
                const number = (index + 7).toString().padStart(2, "0");
                return (
                  <li key={index} className="flex items-center p-2 my-2" style={{ border: "1px solid #1AC6D9" }}>
                    <span className="flex bg-primary-500 p-1 mr-2 text-white w-8 h-8 justify-center">{number}</span>
                    <div className="flex items-center justify-center flex-1">{word}</div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
      <div className="relative bg-[#5A6273] w-full py-16">
        <div className="text-start text-white max-w-[1200px] mx-auto">
          <p className="pb-8 text-4xl font-tertiary">Funcionalidade de cadastro de pessoa</p>
          <p className="pb-8 max-w-[822px] text-[24px] leading-[43px] font-normal text-left font-fourth">
            Unificar todos os cadastros do sistema que envolvem pessoas em um único cadastro, facilitando a
            identificação destas pessoas e minimizando a quantidade de dados replicados.
          </p>
          {/* <Image
          width={300}
          height={300}
          src="/portifolio/mockup4.png" alt="pc"
          className=""
        /> */}
        </div>
      </div>
      <div className="grid max-w-[1200px] gap-16 mx-auto pb-16 pt-16 text-badgeText">
        <div className="max-w-[1200px] text-right mx-auto flex justify-center items-stretch">
          <div className="flex">
            <div className="flex mr-[30px] items-center justify-center">
              <Image src="/imagem-franquias.svg" alt="Imagem 1" width={520} height={407} className="align-middle" />
            </div>
          </div>
          <div className="max-w-[650px]">
            <p className="pb-4 text-4xl font-tertiary">arquitetura de informação</p>
            <p className="text-2xl font-fourth leading-loose">
              O cadastro de pessoas é o processo que liga o que processo de captação de leads até o fechamento de
              matrículas e o processo Pedagógico, onde teremos os alunos, responsáveis e ex-alunos. Ou seja o cadastro
              de pessoa será utilizado frequentemente por todos os usuários da rede para que sirva de pilar para a
              manutenção dos dados das pessoas vinculadas as escolas.
            </p>
            <br />
            <p className="text-2xl font-fourth leading-loose">
              Sendo assim o cadastro também será “único”, onde herdará prioritariamente as informações do novo workflow
              comercial.
            </p>
          </div>
        </div>
        <div className="max-w-[1200px] text-left mx-auto flex justify-center items-stretch">
          <div className="max-w-[500px]">
            <p className="pb-4 text-4xl font-tertiary">ideação</p>
            <p className="text-2xl font-fourth leading-loose">
              Unificando os cadastros de interessado, aluno e responsável, montando como se fosse uma ficha da pessoa.
              Um painel onde pode-se encontrar todas as informações analíticas desta pessoa de forma rápida.
            </p>
            <br />
            <p className="text-2xl font-fourth leading-loose">
              Nosso objetivo era trabalhar com os principais dados, priorizando os mais importantes e frequentemente
              requisitados. Queríamos algo minimalista mas gerenciável.
            </p>
            <br />
            <p className="text-2xl font-fourth leading-loose">
              Realizamos o processo de benchmark onde utilizamos referências de produtos internos, e de produtos do
              mercado, além de experiências passadas.
            </p>
          </div>
          <div className="flex">
            <div className="flex ml-[50px] items-center justify-center">
              <Image src="/imagem-franquias2.svg" alt="Imagem 1" width={649} height={426} className="align-middle" />
            </div>
          </div>
        </div>
        <div className="max-w-[1200px] text-right mx-auto flex justify-center items-stretch">
          <div className="flex">
            <div className="flex mr-[30px] items-center justify-center">
              <Image src="/imagem-franquias3.svg" alt="Imagem 1" width={520} height={407} className="align-middle" />
            </div>
          </div>
          <div className="max-w-[650px]">
            <p className="pb-4 text-4xl font-tertiary">testes</p>
            <p className="text-2xl font-fourth leading-loose">
              Por conta de um alinhamento próximo do usuário, tinhamos conhecimento que a solução estava muito próxima
              do que realmente fazia sentido para o dia-a-dia das escolas. Por conta disso, foram ignorados testes de
              guerrilhas, testes A/B e outros.
            </p>
            <br />
            <p className="text-2xl font-fourth leading-loose">
              Foram criadas 5 tarefas principais com jornadas distintas.
            </p>
          </div>
        </div>
        <div className="max-w-[1200px] text-left mx-auto flex justify-center items-stretch">
          <div className="max-w-[565px]">
            <p className="text-2xl font-fourth leading-loose">
              Primeiramente o teste foi aplicado aos consultores internos, e após ajustes, aplicamos com 6 usuários
              chave (Usuários com perfis bem distintos, algumas com grande massa de alunos e outras menores).
            </p>
            <br />
            <p className="text-2xl font-fourth leading-loose">
              Com um feedback de poucos ajustes, selecionamos, priorizamos e executamos os principais, apresentamos aos
              usuários novamente dentro do comitê de franqueados e após concordância geral o protótipo passou para etapa
              de entrega.
            </p>
          </div>
          <div className="flex">
            <div className="flex ml-[50px] items-center justify-center">
              <Image src="/imagem-franquias4.svg" alt="Imagem 1" width={649} height={426} className="align-middle" />
            </div>
          </div>
        </div>
        <div className="text-left">
          <p className="pb-4 text-4xl font-tertiary">Resultado dos testes</p>
          <p className="pb-8 text-[24px] leading-[43px] font-normal text-left font-fourth">
            Com um feedback de poucos ajustes, selecionamos, prioriz amos e executamos os principais, apresentamos aos
            usuários novamente dentro do comitê de franqueados e após concordância geral o protótipo passou para etapa
            de entrega.
          </p>
          <Image src="/imagem-franquias5.svg" alt="Imagem 1" width={1200} height={719} />
          <Image src="/imagem-franquias6.svg" alt="Imagem 1" width={1200} height={719} />
          <p className="pb-8 text-[24px] leading-[43px] font-normal text-left font-fourth">
            Após isso o projeto foi refinado junto a equipe de desenvolvimento e encaixado na esteira de
            desenvolvimento.
          </p>
        </div>
        <div>
          <div className="border-b border-gray max-w-[1200px] mx-auto my-4 pt-6"></div>
          <div className="text-right font-fourth max-w-[1000px] mx-auto">
            <a href="">Próximo Projeto</a>
          </div>
          <div className="text-4xl text-right font-fourth max-w-[1100px] mx-auto pt-4">
            <a href="">Padronização de Design System para WEB e Desktop{">"}</a>
          </div>
          <div className="text-center font-fourth pt-20 pb-16">
            <p>Henrique Vinhola © 2023. Todos os Direitos Reservados</p>
          </div>
        </div>
      </div>
    </main>
  );
}
