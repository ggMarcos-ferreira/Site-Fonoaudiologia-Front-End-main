import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-10 px-6 text-center">
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
      
      <div className="mt-8 bg-blue-900 text-white border-t border-gray-400 pt-6 text-lg py-4">
        <p>&copy; {new Date().getFullYear()} - Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
