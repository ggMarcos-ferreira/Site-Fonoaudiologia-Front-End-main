import React from 'react'
import { Link } from 'react-router-dom'

function LoginFono() {
  return (
    <div>
        <div className="min-h-screen flex items-center justify-center bg-[#E9F9EA]">
  <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row w-full max-w-4xl">
    
    <div className="w-full md:w-1/2 bg-[#71B476] p-8 rounded-t-2xl md:rounded-l-2xl text-white flex flex-col justify-center items-center">
      <h1 className="text-4xl font-medium text-center mb-4 pt-10 ">Bem-vindo de volta Fono!</h1>
      <p className="mb-6 text-lg text-center">Insira seus dados pessoais para obter todos os recursos do site!</p>

      <img 
        src="https://via.placeholder.com/200" 
        alt="Ilustração de fonoaudiologia" 
        className="w-full"
      />
    </div>

    <div className="w-full md:w-1/2 p-8">
      <h2 className="text-3xl pt-40 text-center font-semibold mb-6">Entrar</h2>
      <p class="text-center ">Entre com sua conta</p>

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
              type="password" 
              placeholder="Digite uma senha" 
              className="w-full focus:outline-none"
            />
          </div>
        </div>

        <button className="bg-[#71B476] text-white w-full py-2 rounded-full">
          Criar Conta
        </button>

        <p className="text-center text-gray-600 mt-4">
          Já tem cadastro? <a href="#" className="text-[#71B476] hover:underline">Entre na sua conta</a>
        </p>
      </form>
    </div>
  </div>
</div>

    </div>
  )
}

export default LoginFono