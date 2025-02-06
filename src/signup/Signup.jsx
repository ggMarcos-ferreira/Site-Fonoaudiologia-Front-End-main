import React from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import { useState } from "react";

function Signup() {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tel, setTel] = useState("");

  async function cadastrar(e) {
    e.preventDefault()
    try {
      
      const data = {
        email: email,
        senha: password,
        nome: name,
        telefone: tel
      };
      const response = await axios.post('http://127.0.0.1:5000/api/pacientes', data);
      console.log(response)

    } catch (error) {
      console.log(error);

    } 
  }

  return (

    <div>
        <div className="min-h-screen flex items-center justify-center bg-[#E9F9EA]">
  <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row w-full max-w-4xl">
    
    {/* Left side - Greeting and Illustration */}
    <div className="w-full md:w-1/2 bg-[#0B71AB] p-8 rounded-t-2xl md:rounded-l-2xl text-white flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4 pt-10 ">Olá amigo!</h1>
      <p className="mb-6 text-lg text-center">Cadastre-se com os seus dados pessoais para obter todos os recursos do site!</p>
      <div class="py-5">
      <Link to="/signup-fono">
      <a className="bg-white font-bold rounded-full px-5 text-[#0B71AB] w-full py-2 hover:bg-gray-100">
          É Fonoaudiólogo?
        </a></Link>
      </div>
      <img 
        src="https://via.placeholder.com/200" 
        alt="Ilustração de fonoaudiologia" 
        className="w-full"
      />
    </div>

    {/* Right side - Signup form */}
    <div className="w-full md:w-1/2 p-8">
      <h2 className="text-3xl text-center font-semibold mb-6">Paciente</h2>

      <form onSubmit={cadastrar}>
        <div className="mb-4">
          <label className="block text-gray-700">Nome</label>
          <div className="flex items-center border border-gray-300 rounded-lg p-2">
            <input 
              type="name " 
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Digite seu nome" 
              className="w-full focus:outline-none"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">E-mail</label>
          <div className="flex items-center border border-gray-300 rounded-lg p-2">

            <input 
            type="email " 
            onChange={(e) => setEmail(e.target.value)}
            value={email}
              placeholder="Digite seu e-mail" 
              className="w-full focus:outline-none"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Telefone</label>
          <div className="flex items-center border border-gray-300 rounded-lg p-2">

            <input 
            type="tel " 
            onChange={(e) => setTel(e.target.value)}
            value={tel}
              placeholder="11 96123-4567" 
              className="w-full focus:outline-none"
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700">Senha</label>
          <div className="flex items-center border border-gray-300 rounded-lg p-2">

            <input 
              type="password " 
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Digite uma senha" 
              className="w-full focus:outline-none"
            />
          </div>
        </div>

        <button className="bg-[#0B71AB] text-white w-full py-2 rounded-full">
          Criar Conta
        </button>

        <p className="text-center text-gray-600 mt-4">
          Já tem cadastro? <a href="#" className="text-[#0B71AB] hover:underline">Entre na sua conta</a>
        </p>
      </form>
    </div>
  </div>
</div>

    </div>
  )
}

export default Signup