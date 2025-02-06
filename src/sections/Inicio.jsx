import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../sections/Navbar';
import Main from '../sections/Main'; 
import capa from '../img/capa.svg';

function Inicio() {
  const navigate = useNavigate();

  const handleFormClick = () => {
    navigate('/form-anamnese');
  };

  return (
    <div>
      <section className="text-gray-600 body-font bg-gradient-to-b from-[#E9F9EA] to-white">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font xl:text-6xl text-4xl mb-4 font-medium text-gray-900">
              Transforme sua voz e comunicação
            </h1>
            <p className="mb-8 xl:text-xl text-[#004F7C]">
              Cuidados personalizados em fonoaudiologia.
            </p>
            <div className="flex justify-center">
              <button
                onClick={handleFormClick}
                className="inline-flex text-white bg-[#004F7C] rounded-full border-0 py-2 px-6 focus:outline-none hover:bg-[#004F7C] text-lg"
              >
                Formulário Anamnese
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={capa}
            />
          </div>
        </div>
        <div className="text-center py-12">
          <p className="text-xl font-semibold text-gray-900">
            Aqui oferecemos um espaço informativo e acessível para pessoas que buscam melhorar sua saúde!
          </p>
          <p className="text-gray-700 mt-2">
            comunicação, voz, audição e de linguagem
          </p>
        </div>
      </section>
      <Main /> 
    </div>
  );
}

export default Inicio;
