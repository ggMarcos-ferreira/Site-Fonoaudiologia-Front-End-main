import { useState, useEffect } from "react";
import image from "../img/image 33.png";
import secondImage from "../img/Group 15768.png";
import Loader from "../components/Loader"; 
import "../styles/loader.css";

function Main() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulando um carregamento de 2 segundos antes de exibir o conteúdo
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main className="bg-white p-16">
      <div className="max-w-5xl mx-auto text-center space-y-16">
        
        {/* Seção: O que é Disfagia? */}
        <section>
          <h2 className="text-4xl font-bold text-blue-600 mb-6">O que é Disfagia?</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Disfagia é a dificuldade em engolir, que pode ocorrer devido a diversas condições.
          </p>
        </section>

        {/* Imagem Central */}
        <div className="flex justify-center items-center">
          <img src={image} alt="Consultório" className="w-80 h-80 object-contain" />
        </div>

        {/* Seção: Como Tratar a Disfagia? */}
        <section>
          <h2 className="text-4xl font-bold text-blue-600 mb-6">Como Tratar a Disfagia?</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            O tratamento da disfagia depende da causa subjacente e pode incluir terapia fonoaudiológica.
          </p>
        </section>

        {/* Seção: Fonoaudiólogo */}
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="flex-shrink-0 w-[350px] md:w-[550px] h-[350px] md:h-[550px]">
            <img src={secondImage} alt="Tratamento" className="object-contain w-full h-full" />
          </div>
          <div className="text-left max-w-lg">
            <h1 className="text-3xl font-bold text-blue-600 mb-4">O que é um Fonoaudiólogo?</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Um fonoaudiólogo é um profissional de saúde especializado na comunicação e deglutição.
            </p>
          </div>
        </div>

        {/* Seção: Mais Informações */}
        <section>
          <h1 className="text-4xl font-bold text-blue-600 mb-8">
            Aqui você aprenderá mais sobre <span className="text-blue-600">Fonoaudiologia!</span>
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            <strong>Além disso,</strong> oferecemos um espaço informativo para melhorar sua saúde!
          </p>
          <div className="flex flex-col md:flex-row justify-center mt-12 gap-12">
            <div className="bg-gray-100 p-8 rounded-lg shadow-md max-w-sm">
              <h2 className="text-2xl text-blue-600 font-bold mb-4">Sinais de Apraxia</h2>
              <p className="text-gray-700">Explicamos os sinais comuns da apraxia na infância.</p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-md max-w-sm">
              <h2 className="text-2xl text-blue-600 font-bold mb-4">Distúrbios da Fala</h2>
              <p className="text-gray-700">Dicas e exercícios para melhorar a dicção.</p>
            </div>
          </div>
        </section>

        {/* Novo conteúdo sobre Fonoaudiologia */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Por que a Fonoaudiologia é Importante?</h2>
          <p className="text-lg leading-relaxed mb-6">
            A fonoaudiologia desempenha um papel fundamental na comunicação humana, ajudando crianças, adultos e idosos a superarem desafios relacionados à fala, audição e linguagem.
          </p>
          <p className="text-lg leading-relaxed mb-8">
            Com um acompanhamento adequado, é possível tratar dificuldades como atrasos na fala, problemas na dicção e distúrbios na voz, promovendo mais qualidade de vida e autoestima.
          </p>
          
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Áreas de Atuação da Fonoaudiologia</h2>
          <p className="text-lg leading-relaxed mb-6">
            A fonoaudiologia abrange diversas especialidades, incluindo a reabilitação auditiva, terapia da fala, desenvolvimento da linguagem infantil e aprimoramento da comunicação em adultos.
          </p>
          <p className="text-lg leading-relaxed mb-8">
            Além disso, auxilia profissionais que dependem da voz, como professores, palestrantes e cantores, no fortalecimento vocal e na prevenção de lesões.
          </p>
          
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Benefícios do Acompanhamento Fonoaudiológico</h2>
          <p className="text-lg leading-relaxed mb-6">
            Consultar um fonoaudiólogo pode prevenir e tratar problemas como dificuldades na pronúncia, gagueira, distúrbios na mastigação e deglutição, proporcionando mais bem-estar e confiança na comunicação.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            O acompanhamento também é essencial para crianças com dificuldades no aprendizado, ajudando na alfabetização e no desenvolvimento cognitivo.
          </p>
          <p className="text-lg leading-relaxed mb-8">
            Para idosos, a fonoaudiologia pode auxiliar na reabilitação da fala e audição, promovendo maior independência e qualidade de vida.
          </p>
          
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">A Comunicação e o Desenvolvimento Pessoal</h2>
          <p className="text-lg leading-relaxed mb-6">
            Uma comunicação eficaz é essencial para o desenvolvimento pessoal e profissional. Melhorar a dicção, a entonação e a expressividade pode abrir novas oportunidades e fortalecer relações interpessoais.
          </p>
          <p className="text-lg leading-relaxed mb-8">
            Se você enfrenta dificuldades na fala, na escrita ou na audição, procure um fonoaudiólogo para orientação e tratamento adequado.
          </p>
        </div>

        {/* Cards Azuis (Agora no final, antes do rodapé) */}
        <section className="flex flex-col md:flex-row justify-center mt-12 gap-12">
          <a
            href="https://youtu.be/7OQB_yDyWbY?si=b9bgIm8Hz-voVOOK"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0B71AB] text-white p-8 rounded-lg shadow-md max-w-sm block"
          >
            <h2 className="text-2xl font-bold mb-4">Exercícios para Melhorar a Fala</h2>
            <p className="text-white">Veja exercícios práticos para melhorar sua dicção.</p>
          </a>
          <a
            href="https://youtu.be/ampW-4T0goQ?si=O6UdtHknOpFh0YIp"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0B71AB] text-white p-8 rounded-lg shadow-md max-w-sm block"
          >
            <h2 className="text-2xl font-bold mb-4">Dicas para Cuidar da Voz</h2>
            <p className="text-white">Aprenda técnicas para manter sua voz saudável.</p>
          </a>
          <a
            href="https://youtu.be/LW2zyMx99s8?si=PhURH318e-Ol0M2p"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0B71AB] text-white p-8 rounded-lg shadow-md max-w-sm block"
          >
            <h2 className="text-2xl font-bold mb-4">Como Identificar Problemas Auditivos</h2>
            <p className="text-white">Saiba como reconhecer sinais de perda auditiva.</p>
          </a>
        </section>

        {/* Rodapé com os direitos reservados */}
        <div className="mt-8 bg-blue-900 text-white border-t border-gray-400 pt-6 text-lg py-4">
          <p>&copy; {new Date().getFullYear()} - Todos os direitos reservados.</p>
        </div>
      </div>
    </main>
  );
}

export default Main;
