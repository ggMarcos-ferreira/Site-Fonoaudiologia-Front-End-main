import image from "../img/image 33.png";
import secondImage from "../img/Group 15768.png";
import GooeyButton from "../components/GooeyButton"; // Importe o GooeyButton

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
        <div className="flex flex-col md:flex-row items-center mb-10">
          <div className="flex-shrink-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] mb-6 md:mb-0 md:mr-4">
            <img 
              src={secondImage} 
              alt="Tratamento" 
              className="object-contain w-full h-full"
            />
          </div>
          <div className="text-left max-w-lg">
            <h1 className="text-2xl font-bold mb-2">O que é um Fonoaudiólogo afinal?</h1>
            <h2 className="text-lg text-gray-700">
              Um fonoaudiólogo é um profissional de saúde especializado na prevenção, diagnóstico e tratamento de distúrbios relacionados à comunicação, audição, voz, linguagem, fala e deglutição. Eles trabalham com pessoas de todas as idades, desde bebês até idosos, abordando uma ampla gama de condições que podem afetar a capacidade de falar, ouvir, compreender e interagir de forma eficaz.
            </h2>
          </div>
        </div>

        {/* Seção: Fonoaudiologia */}
        <section className="mb-10">
          <h1 className="text-3xl font-bold mb-6">
            Aqui você aprenderá muito mais sobre <span className="text-blue-600">a Fonoaudiologia!</span>
          </h1>
          <p className="text-lg text-gray-700">
            <strong>Além</strong> disso, oferecemos um espaço informativo e acessível
            para pessoas que buscam melhorar sua saúde!
          </p>
          <div className="flex flex-col md:flex-row justify-center mt-10 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-xs">
              <h2 className="text-xl text-blue-600 font-bold mb-2">Sinais de Apraxia na Infância</h2>
              <p className="text-gray-700">
                A apraxia é um distúrbio neurológico que afeta a capacidade de planejar e
                executar os movimentos necessários para falar. Aqui, explicamos os sinais
                comuns em crianças e destacamos a importância do diagnóstico precoce.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-xs">
              <h2 className="text-xl text-blue-600 font-bold mb-2">Distúrbios da Fala</h2>
              <p className="text-gray-700">
                A dicção pode ser afetada por diversos fatores, como ansiedade ou hábitos de fala. 
                Neste artigo, abordamos exercícios simples para melhorar sua fala.
              </p>
            </div>
          </div>
        </section>

        {/* Novos Cards */}
        <section className="flex flex-col md:flex-row justify-center mt-10 gap-8">
          <a href="https://www.youtube.com/watch?v=video1" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-6 rounded-lg shadow-md max-w-xs">
            <h2 className="text-xl text-blue-600 font-bold mb-2">Exercícios para Melhorar a Fala</h2>
            <p className="text-gray-700">Veja exercícios práticos para melhorar sua dicção e fluência.</p>
          </a>
          <a href="https://www.youtube.com/watch?v=video2" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-6 rounded-lg shadow-md max-w-xs">
            <h2 className="text-xl text-blue-600 font-bold mb-2">Dicas para Cuidar da Voz</h2>
            <p className="text-gray-700">Aprenda técnicas para manter sua voz saudável.</p>
          </a>
          <a href="https://www.youtube.com/watch?v=video3" target="_blank" rel="noopener noreferrer" className="bg-gray-100 p-6 rounded-lg shadow-md max-w-xs">
            <h2 className="text-xl text-blue-600 font-bold mb-2">Como Identificar Problemas Auditivos</h2>
            <p className="text-gray-700">Saiba como reconhecer sinais de perda auditiva.</p>
          </a>
        </section>
      </div>
    </main>
  );
}

export default Main;
