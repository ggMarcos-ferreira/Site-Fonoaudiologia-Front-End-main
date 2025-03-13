import React, { useState } from 'react';

function SignUpFono() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [numeroInstituicao, setNumeroInstituicao] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const signupData = { nome, email, telefone, numeroInstituicao, senha };
    console.log("Cadastro de Fonoaudiólogo: ", signupData);
    // Enviar os dados para o backend para criar a conta do fonoaudiólogo
    // axios.post('API_URL', signupData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E9F9EA]">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row w-full max-w-4xl">
        {/* Lado esquerdo - Saudação e ilustração */}
        <div className="w-full md:w-1/2 bg-green-600 p-8 rounded-t-2xl md:rounded-l-2xl text-white flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold mb-4">Olá Fono!</h1>
          <p className="mb-6 text-lg text-center">Cadastre-se e ajude seus Pacientes!</p>
          <img src="https://via.placeholder.com/200" alt="Ilustração de fonoaudiologia" className="w-full"/>
        </div>

        {/* Lado direito - Formulário de Cadastro */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl text-center font-semibold mb-6">Criar uma conta</h2>
          <form onSubmit={handleSubmit}>
            {/* Nome */}
            <div className="mb-4">
              <label className="block text-gray-700">Nome</label>
              <input
                type="text"
                placeholder="Digite seu nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>

            {/* E-mail */}
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

            {/* Telefone */}
            <div className="mb-4">
              <label className="block text-gray-700">Telefone</label>
              <input
                type="tel"
                placeholder="11 96123-4567"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>

            {/* Número da Instituição */}
            <div className="mb-4">
              <label className="block text-gray-700">Número da Instituição</label>
              <input
                type="text"
                placeholder="Digite o número"
                value={numeroInstituicao}
                onChange={(e) => setNumeroInstituicao(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>

            {/* Senha */}
            <div className="mb-6">
              <label className="block text-gray-700">Senha</label>
              <input
                type="password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>

            {/* Botão de Cadastro */}
            <button type="submit" className="bg-green-600 text-white w-full py-2 rounded-lg hover:bg-green-700">Criar Conta</button>
          </form>

          {/* Link para Login */}
          <p className="text-center text-gray-600 mt-4">
            Já tem cadastro? <a href="/login-fono" className="text-green-600 hover:underline">Entre na sua conta</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUpFono;
