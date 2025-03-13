import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

function Login() {
  // Função de login com Google
  const handleGoogleLogin = async (response) => {
    console.log("Google Login Response:", response);

    try {
      const { credential } = response;
      // Enviar o token para o backend para autenticar o usuário com o Google
      const res = await axios.post("http://127.0.0.1:5000/api/fonoaudio/google-login", {
        token: credential,
      });
      console.log(res);
    } catch (error) {
      console.error("Erro ao autenticar com Google", error);
    }
  };

  // Função para o cadastro do usuário
  const handleButtonCadastro = async (formData) => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/api/fonoaudiologos", formData);
      console.log("Cadastro realizado com sucesso:", response.data);
      alert("Cadastro realizado com sucesso!");
    } catch (error) {
      console.error("Erro ao cadastrar:", error.response?.data || error.message);
      alert("Erro ao realizar o cadastro.");
    }
  };

  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    senha: "",
  });

  // Função de mudança de estado para os campos do formulário
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Função para submeter o formulário
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificar se todos os campos estão preenchidos
    if (!formData.nome || !formData.telefone || !formData.email || !formData.senha) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Enviar os dados de cadastro para o backend
    await handleButtonCadastro(formData);
  };

  return (
    <GoogleOAuthProvider clientId="805951123972-u6m5m1i6dkkeo5nd24ku2ihd3e9vmust.apps.googleusercontent.com">
      <div>
        <div className="min-h-screen flex items-center justify-center bg-[#E9F9EA]">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row w-full max-w-4xl">
            {/* Lado esquerdo - saudação e ilustração */}
            <div className="w-full md:w-1/2 bg-[#0B71AB] p-8 rounded-t-2xl md:rounded-l-2xl text-white flex flex-col justify-center items-center">
              <h1 className="text-4xl font-medium mb-4 pt-10">Faça já o seu cadastro!</h1>
              <p className="mb-6 text-lg text-center">
                Crie sua conta para ter acesso a mais opções!
              </p>
              <div className="py-5">
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

            {/* Lado direito - formulário de login */}
            <div className="w-full md:w-1/2 p-8">
              <h2 className="text-3xl text-center pt-40 font-semibold mb-6">Cadastre-se</h2>

              <form onSubmit={handleSubmit}>
                {/* Campo de nome */}
                <div className="mb-4">
                  <label className="block text-gray-700">Nome</label>
                  <div className="flex items-center border border-gray-300 rounded-lg p-2">
                    <input
                      type="text"
                      onChange={handleChange}
                      placeholder="Digite seu nome"
                      name="nome"
                      value={formData.nome}
                      className="w-full focus:outline-none"
                    />
                  </div>
                </div>

                {/* Campo de telefone */}
                <div className="mb-4">
                  <label className="block text-gray-700">Telefone</label>
                  <div className="flex items-center border border-gray-300 rounded-lg p-2">
                    <input
                      onChange={handleChange}
                      name="telefone"
                      value={formData.telefone}
                      type="phone"
                      placeholder="Digite seu telefone"
                      className="w-full focus:outline-none"
                    />
                  </div>
                </div>

                {/* Campo de e-mail */}
                <div className="mb-4">
                  <label className="block text-gray-700">E-mail</label>
                  <div className="flex items-center border border-gray-300 rounded-lg p-2">
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="Digite o seu e-mail"
                      className="w-full focus:outline-none"
                    />
                  </div>
                </div>

                {/* Campo de senha */}
                <div className="mb-6">
                  <label className="block text-gray-700">Senha</label>
                  <div className="flex items-center border border-gray-300 rounded-lg p-2">
                    <input
                      onChange={handleChange}
                      name="senha"
                      value={formData.senha}
                      type="password"
                      placeholder="Digite uma senha"
                      className="w-full focus:outline-none"
                    />
                  </div>
                </div>

                {/* Botão de cadastro */}
                <button className="bg-[#0B71AB] text-white w-full py-2 rounded-full">
                  Cadastrar
                </button>

                <p className="text-center text-gray-600 mt-4">
                  Já tem conta?{" "}
                  <Link to="/login">
                    <a className="text-[#0B71AB] hover:underline">Faça login</a>
                  </Link>
                </p>
              </form>

              {/* Botão de login com Google */}
              <div className="mt-4">
                <GoogleLogin
                  onSuccess={handleGoogleLogin}
                  onError={(error) => console.log('Erro ao fazer login com Google', error)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default Login;
