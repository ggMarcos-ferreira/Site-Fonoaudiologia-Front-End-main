import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin, handleGoogleLogin } from "@react-oauth/google";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validação simples
    if (!email || !password) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:5000/api/login", {
        email,
        password,
      });
      console.log("Login bem-sucedido:", response.data);
      // Redirecionar para a página de dashboard ou outra página
    } catch (error) {
      setError("E-mail ou senha incorretos.");
      console.error("Erro ao fazer login:", error);
    }
  };

  return (
    <GoogleOAuthProvider clientId="805951123972-u6m5m1i6dkkeo5nd24ku2ihd3e9vmust.apps.googleusercontent.com">
      <div>
        <div className="min-h-screen flex items-center justify-center bg-[#E9F9EA]">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row w-full max-w-4xl">
            {/* Lado esquerdo - saudação e ilustração */}
            <div className="w-full md:w-1/2 bg-[#0B71AB] p-8 rounded-t-2xl md:rounded-l-2xl text-white flex flex-col justify-center items-center">
              <h1 className="text-4xl font-medium mb-4 pt-10">Bem-vindo de volta!</h1>
              <p className="mb-6 text-lg text-center">
                Insira os seus dados pessoais para obter acesso ao site novamente!
              </p>
              <div className="py-5">
                <Link
                  to="/login-fono"
                  className="bg-white font-bold rounded-full px-5 text-[#0B71AB] w-full py-2 hover:bg-gray-100 text-center"
                >
                  Sou Fonoaudiólogo
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
              <h2 className="text-3xl text-center pt-40 font-semibold mb-6">Entrar</h2>
              <p className="text-center">Entre com sua conta</p>

              {error && <p className="text-red-500 text-center mb-4">{error}</p>}

              <form onSubmit={handleSubmit}>
                {/* Campo de e-mail */}
                <div className="mb-4">
                  <label className="block text-gray-700">E-mail</label>
                  <div className="flex items-center border border-gray-300 rounded-lg p-2">
                    <input
                      type="email"
                      placeholder="Digite seu e-mail"
                      className="w-full focus:outline-none"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                {/* Campo de senha */}
                <div className="mb-6">
                  <label className="block text-gray-700">Senha</label>
                  <div className="flex items-center border border-gray-300 rounded-lg p-2">
                    <input
                      type="password"
                      placeholder="Digite uma senha"
                      className="w-full focus:outline-none"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>

                {/* Botão de login */}
                <button
                  type="submit"
                  className="bg-[#0B71AB] text-white w-full py-2 rounded-full hover:bg-[#076A94]"
                >
                  Entrar
                </button>

                {/* Link para criar uma conta */}
                <p className="text-center text-gray-600 mt-4">
                  Ainda não tem cadastro?{" "}
                  <Link to="/signup" className="text-[#0B71AB] hover:underline">
                    Crie uma conta
                  </Link>
                </p>
              </form>

              {/* Botão de login com Google */}
              <div className="mt-4">
                <GoogleLogin
                  onSuccess={handleGoogleLogin}
                  onError={(error) => console.log("Erro ao fazer login com Google", error)}
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