import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-[#E9F9EA]">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row w-full max-w-4xl">
          <div className="w-full md:w-1/2 bg-[#0B71AB] p-8 rounded-t-2xl md:rounded-l-2xl text-white flex flex-col justify-center items-center">
            <h1 className="text-4xl font-medium mb-4 pt-10 ">Bem-vindo de volta!</h1>
            <p className="mb-6 text-lg text-center">
              Insira os seus dados pessoais para obter acesso ao site novamente!
            </p>
            <div class="py-5">
              <Link to="/login-fono">
                <a className="bg-white font-bold rounded-full px-5 text-[#0B71AB] w-full py-2 hover:bg-gray-100">
                 Sou Fonoaudiólogo
                </a>
              </Link>
            </div>
            <img
              src="https://via.placeholder.com/200"
              alt="Ilustração de fonoaudiologia"
              className="w-full"
            />
          </div>

          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-3xl text-center pt-40 font-semibold mb-6">Entrar</h2>
            <p class="text-center">Entre com sua conta</p>

            <form>
              <div className="mb-4">
                <label className="block text-gray-700">E-mail</label>
                <div className="flex items-center border border-gray-300 rounded-lg p-2">
                  <input
                  type="email" 
                  
                    placeholder="Digite seu e-mail"
                    className="w-full focus:outline-none"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700">Senha</label>
                <div className="flex items-center border border-gray-300 rounded-lg p-2">
                  <input
                    type="password " 
                   
                    placeholder="Digite uma senha"
                    className="w-full focus:outline-none"
                  />
                </div>
              </div>

              <button className="bg-[#0B71AB] text-white w-full py-2 rounded-full">
                Entrar
              </button>

              <p className="text-center text-gray-600 mt-4">
                Ainda não tem cadastro?{" "}
                <a href="#" className="text-[#0B71AB] hover:underline">
                  Crie uma conta
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
