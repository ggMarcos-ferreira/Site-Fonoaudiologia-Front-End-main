import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import logo from "../img/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="text-gray-600 body-font bg-[#E9F9EA]">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={logo} alt="Fono.Fun Logo" />
          <span className="text-[#608BFF] ml-3 text-xl font-bold">fono.fun</span>
        </Link>

        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-gray-900">Página Inicial</Link>
          <div className="relative">
            {/* Botão Dropdown */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="mr-5 flex items-center hover:text-gray-900 focus:outline-none"
            >
              Selecione <FaChevronDown className="ml-1 text-sm" />
            </button>

            {/* Opções do Dropdown */}
            {isOpen && (
              <div className="absolute mt-2 bg-white shadow-lg rounded-md w-40 z-10">
                <Link 
                  to="/Paciente" 
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  Paciente
                </Link>
                <Link 
                  to="/Fonoaudiologo" 
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  Fonoaudiólogo
                </Link>
              </div>
            )}
          </div>
          <Link to="/sobre" className="mr-5 hover:text-gray-900">Sobre</Link>
          <Link to="/contato" className="mr-5 hover:text-gray-900">Contato</Link>
        </nav>

        <div className="flex items-center">
          <Link to="/login" className="mr-5 hover:text-gray-900">Login</Link>
          <Link to="/signup">
            <button className="inline-flex items-center bg-[#608BFF] text-white rounded-full py-2 px-3 focus:outline-none hover:bg-blue-600 text-base">
              Cadastre-se
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
