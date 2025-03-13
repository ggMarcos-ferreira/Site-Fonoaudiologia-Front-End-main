import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

function LoginFono() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleLogin = async (response) => {
    const { credential } = response;
    try {
      const res = await axios.post("http://127.0.0.1:5000/api/fonoaudio/google-login", {
        token: credential,
      });
      console.log(res);
    } catch (error) {
      console.error("Erro ao autenticar com Google", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginData = { email, password };
    console.log("Login data: ", loginData);
    // Enviar os dados para o backend para autenticação
    // axios.post('API_URL', loginData);
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div className="min-h-screen flex items-center justify-center bg-[#E9F9EA]">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row w-full max-w-4xl">
          {/* Lado esquerdo - Saudação e ilustração */}
          <div className="w-full md:w-1/2 bg-green-600 p-8 rounded-t-2xl md:rounded-l-2xl text-white flex flex-col justify-center items-center">
            <h1 className="text-4xl font-medium mb-4 pt-10">Bem-vindo de volta!</h1>
            <p className="mb-6 text-lg text-center">Entre com sua conta para acessar o sistema.</p>
            <img src="https://via.placeholder.com/200" alt="Ilustração de login" className="w-full"/>
          </div>

          {/* Lado direito - Formulário de Login */}
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-3xl text-center font-semibold mb-6">Entre com sua conta</h2>
            <form onSubmit={handleSubmit}>
              {/* Campo de E-mail */}
              <div className="mb-4">
                <label className="block text-gray-700">E-mail</label>
                <input
                  type="email"
                  placeholder="Digite seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>

              {/* Campo de Senha */}
              <div className="mb-6">
                <label className="block text-gray-700">Senha</label>
                <input
                  type="password"
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>

              {/* Botão de Login */}
              <button type="submit" className="bg-green-600 text-white w-full py-2 rounded-full hover:bg-green-700">Entrar</button>
            </form>

            {/* Link para Cadastro */}
            <div className="mt-4 text-center">
              <p className="text-gray-600">Não tem uma conta? <a href="/signup-fono" className="text-green-600 hover:underline">Cadastre-se aqui</a></p>
            </div>

            {/* Botão de login com Google */}
            <div className="mt-4">
              <GoogleLogin onSuccess={handleGoogleLogin} onError={(error) => console.log('Erro ao fazer login com Google', error)} />
            </div>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default LoginFono;
