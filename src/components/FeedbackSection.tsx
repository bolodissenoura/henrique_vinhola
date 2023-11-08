import Image from "next/image";
import React from "react";

export function FeedbackSection() {
  return (
    <>
      <div className="w-full flex gap-16 items-center justify-center my-20">
        <div className="w-full h-1 rounded-full bg-gray-200"></div>
        <h2 className="text-primary-500 text-2xl uppercase font-semibold">
          Recomendações
        </h2>
        <div className="w-full h-1 rounded-full bg-gray-200"></div>
      </div>
      <div className="w-full flex flex-col gap-8">
        <div className="flex">
          <div className="flex flex-col">
            <h3 className="uppercase text-4xl text-badgeText">José otávio</h3>
            <p className="text-2xl text-primary-500"> Product designer</p>
            <p className="text-badgeText text-xl">
              Henrique é definitivamente um mestre Jedi. Ele tem esse talento
              incrível de pegar o que os usuários precisam e transformar em
              experiências que fazem realmente sentido. Trabalhando com ele, vi
              de perto sua dedicação em cada detalhe e como ele sempre busca
              soluções criativas que se encaixam perfeitamente com as
              necessidades do projeto. O cara é carismático e tem um jeito
              especial de fazer a equipe se sentir mais unida e motivada. Tive a
              sorte de trabalhar ao lado de alguém tão talentoso e, sem dúvidas,
              recomendo o Henrique para qualquer desafio em UX.
            </p>
          </div>
          <Image
            src="/feedbacks/otavio.png"
            width={300}
            height={300}
            alt="Rapaz sorrindo."
          />
        </div>
        <div className="flex text-right justify-between">
          <Image
            src="/feedbacks/rafa.png"
            width={300}
            height={300}
            alt="Moça sorrindo."
          />
          <div className="flex flex-col">
            <div className="w-full flex justify-between">
              <div></div>
              <div>
                <h3 className="uppercase text-4xl text-badgeText">
                  Rafaela carvalho
                </h3>
                <p className="text-2xl text-primary-500">
                  Desenvolvedora back-end
                </p>
              </div>
            </div>
            <p className="text-badgeText text-right text-xl">
              O Henrique é um profissional incrível, mas mais do que isso, ele
              também é um ser humano extraordinário. Durante todo o nosso
              período de trabalho, ele sempre foi extremamente preocupado com a
              vida do projeto, tentando sempre entregar o melhor resultado
              final. Sempre olhando com uma visão técnica para determinar qual é
              a melhor estratégia a ser seguida. Ele cria protótipos coerentes
              com os requisitos da área de negócios, respeitando todas as regras
              propostas. Sou grata por conhecer um profissional como o Henrique,
              e acredito que todos que trabalharem com ele também serão.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col">
            <h3 className="uppercase text-4xl text-badgeText">Daniel Lima</h3>
            <p className="text-2xl text-primary-500">Desenvolvedor front-end</p>
            <p className="text-badgeText text-xl">
              Henrique é um líder de UX excepcional com uma capacidade inata de
              transformar insights do usuário em experiências integradas e
              envolventes. Sua atenção aos detalhes, natureza colaborativa e
              mentalidade inovadora fazem dele um ativo inestimável para
              qualquer equipe. Sua paixão pelo design centrado no usuário é
              evidente nas soluções notáveis que ele oferece de forma
              consistente. A liderança e criatividade do Henrique o diferenciam
              e eu o recomendo fortemente para qualquer empreendimento
              relacionado a UX.
            </p>
          </div>
          <Image
            src="/feedbacks/dani.png"
            width={300}
            height={300}
            alt="Rapaz sorrindo."
          />
        </div>
      </div>
    </>
  );
}
