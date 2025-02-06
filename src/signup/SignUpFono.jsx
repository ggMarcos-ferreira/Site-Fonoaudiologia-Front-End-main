import React from 'react'

function SignUpFono() {
  return (
    <div>
        <div className="min-h-screen flex items-center justify-center bg-[#E9F9EA]">
  <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row w-full max-w-4xl">
    
    {/* Left side - Greeting and Illustration */}
    <div className="w-full md:w-1/2 bg-green-600 p-8 rounded-t-2xl md:rounded-l-2xl text-white flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">Olá Fono!</h1>
      <p className="mb-6 text-lg text-center">Cadastre-se e ajude seus Pacientes!</p>
      <img 
        src="https://via.placeholder.com/200" 
        alt="Ilustração de fonoaudiologia" 
        className="w-full"
      />
    </div>

    {/* Right side - Signup form */}
    <div className="w-full md:w-1/2 p-8">
      <h2 className="text-3xl text-center font-semibold mb-6">Criar uma conta</h2>

      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Nome</label>
          <div className="flex items-center border border-gray-300 rounded-lg p-2">
            <input 
              type="text" 
              placeholder="Digite seu nome" 
              className="w-full focus:outline-none"
            />
          </div>
        </div>

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

        <div className="mb-4">
          <label className="block text-gray-700">Telefone</label>
          <div className="flex items-center border border-gray-300 rounded-lg p-2">

            <input 
              type="tel" 
              placeholder="11 96123-4567" 
              className="w-full focus:outline-none"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Número da Instituição</label>
          <div className="flex items-center border border-gray-300 rounded-lg p-2">

            <input 
              type="text" 
              placeholder="Digite o número" 
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

        <button className="bg-green-600 text-white w-full py-2 rounded-lg hover:bg-green-700">
          Criar Conta
        </button>

        <p className="text-center text-gray-600 mt-4">
          Já tem cadastro? <a href="#" className="text-green-600 hover:underline">Entre na sua conta</a>
        </p>
      </form>
    </div>
  </div>
</div>

    </div>
  )
}

export default SignUpFono