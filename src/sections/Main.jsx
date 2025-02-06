import React from "react";
import image from "../img/image 33.png";
import secondImage from "../img/Group 15768.png";

function Main() {
  return (
    <main className="bg-white p-10">
      <div className="max-w-4xl mx-auto text-center">
        {/* Seção: O que é Disfagia? */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-4">O que é Disfagia?</h2>
          <p className="text-lg text-gray-700">
            Disfagia é a dificuldade em engolir, que pode ocorrer devido a diversas condições, como problemas neurológicos, lesões ou doenças que afetam a garganta ou o esôfago.
            Os sintomas podem incluir dor ao engolir, sensação de que os alimentos ficam presos na garganta e regurgitação.
          </p>
        </section>

        <div className="flex justify-center items-center mb-10">
          <div className="w-64 h-64">
            <img 
              src={image} 
              alt="Consultório" 
              className="object-contain w-full h-full"
            />
          </div>
        </div>

        {/* Seção: Como Tratar a Disfagia? */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-4">Como Tratar a Disfagia?</h2>
          <p className="text-lg text-gray-700">
            O tratamento da disfagia depende da causa subjacente. As opções podem incluir terapia de deglutição com fonoaudiólogo, mudanças na dieta, como a ingestão de alimentos mais macios, e, em alguns casos, medicamentos ou cirurgias.
            É essencial consultar um profissional de saúde para avaliação e planejamento do tratamento adequado.
          </p>
        </section>

        {/* Seção: Fonoaudiólogo */}
        <div className="mt-80 flex mb-10"> 
          <div className="flex-shrink-0 w-[500px] h-[500px] mr-4"> 
            <img 
              src={secondImage} 
              alt="Tratamento" 
              className="object-contain w-full h-full"
            />
          </div>
          <div className="text-left"> 
            <h1 className="text-2xl font-bold mb-2">O que é um Fonoaudiólogo afinal?</h1>
            <h2 className="text-lg text-gray-700">
              Um fonoaudiólogo é um profissional de saúde especializado na prevenção, diagnóstico e tratamento de distúrbios relacionados à comunicação, audição, voz, linguagem, fala, e deglutição. Eles trabalham com pessoas de todas as idades, desde bebês até idosos, abordando uma ampla gama de condições que podem afetar a capacidade de falar, ouvir, compreender, e interagir de forma eficaz.
            </h2>
          </div>
        </div>

        {/* Seção: Fonoaudiologia */}
        <section className="mb-10">
          <h1 className="text-3xl font-bold mb-6">
            Aqui vc aprenderá muito mais sobre <span className="text-blue-600">a Fonoaudiologia!</span>
          </h1>
          <p className="text-lg text-gray-700">
            <strong>Além</strong> disso oferecemos um espaço informativo e acessível
            para pessoas que buscam melhorar sua saúde!
          </p>
          <div className="flex justify-center mt-10 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-xs">
              <h2 className="text-xl text-blue-600 font-bold mb-2">Sinais de Apraxia na Infância</h2>
              <p className="text-gray-700">
                A apraxia é um distúrbio neurológico que afeta a capacidade de planejar e
                executar os movimentos necessários para falar. Aqui, explicamos os sinais
                comuns em crianças, como dificuldade em formar sons ou palavras longas, e
                destacamos a importância do diagnóstico precoce.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-xs">
              <h2 className="text-xl text-blue-600 font-bold mb-2">Distúrbios da Fala</h2>
              <p className="text-gray-700">
                A dicção é a forma como pronunciamos as palavras e pode ser afetada por
                diversos fatores, como ansiedade ou hábitos de fala. Neste artigo,
                abordamos exercícios simples e práticos, como repetir palavras lentamente ou
                gravar sua fala para identificar possíveis melhorias.
              </p>
            </div>
          </div>
        </section>

        {/* Seção: Audição */}
        <section className="mt-10 text-left">
          <h2 className="text-2xl font-bold mb-4">Audição</h2>
          <h3 className="text-lg text-gray-700 mb-2">Como Identificar Perda Auditiva</h3>
          <p className="text-gray-700">
            A perda auditiva pode ser sutil no início, mas identificar sinais como
            dificuldade em entender conversas ou aumentar o volume da TV pode fazer toda a
            diferença. Leia este artigo para conhecer os sinais e descobrir como agir.
          </p>
        </section>
      </div>

        {/* Seção: Audiometria */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            A Importância do Teste de Audiometria
          </h2>
          <p className="text-lg text-gray-700">
            A audiometria é fundamental para avaliar a saúde auditiva. Este texto explica o que esperar durante o teste, quem deve realizá-lo regularmente e como ele pode prevenir problemas mais graves no futuro.
          </p>
        </section>

        {/* Seção: Conexão com Profissionais */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-blue-600">
            Te ajudamos a se conectar com <span className="font-extrabold">Profissionais Especializados!</span>
          </h2>
        </section>

        {/* Seção: Quando Procurar um Fonoaudiólogo */}
        <section className="bg-black text-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
          <h2 className="text-2xl font-bold mb-4">Quando Procurar um Fonoaudiólogo?</h2>
          <p className="text-lg">
            Nem sempre é fácil identificar atrasos no desenvolvimento da fala. Este artigo ajuda pais e responsáveis a reconhecer sinais de alerta e saber quando buscar a ajuda de um fonoaudiólogo para avaliação profissional.
          </p>
        </section>
    </main>
  );
}

export default Main;
