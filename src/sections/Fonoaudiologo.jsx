import React, { useState } from "react";

const Fonoaudiologo = () => {
  const [pacientes, setPacientes] = useState([
    { nome: "João Silva", consultado: true },
    { nome: "Maria Oliveira", consultado: false },
    { nome: "Carlos Souza", consultado: true },
    { nome: "Ana Costa", consultado: false },
  ]);

  const pacientesConsultados = pacientes.filter(paciente => paciente.consultado);
  const pacientesPendentes = pacientes.filter(paciente => !paciente.consultado);

  return (
    <div className="container mx-auto p-6 max-w-3xl">
      <h2 className="text-3xl font-semibold text-[#608BFF] mb-8">Fonoaudiólogo - Listagem de Pacientes</h2>

      {/* Consultados */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <h3 className="text-2xl font-medium text-gray-800 mb-5">Consultados</h3>
        <div className="space-y-4">
          {pacientesConsultados.length > 0 ? (
            pacientesConsultados.map((paciente, index) => (
              <div key={index} className="flex justify-between items-center bg-[#E9F9EA] rounded-lg p-4 shadow-sm hover:shadow-md transition duration-300">
                <p className="text-lg font-medium text-gray-800">{paciente.nome}</p>
                <span className="text-sm text-gray-600">Consultado</span>
              </div>
            ))
          ) : (
            <p className="text-gray-600">Nenhum paciente consultado ainda.</p>
          )}
        </div>
      </div>

      {/* Pendentes */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-2xl font-medium text-gray-800 mb-5">Faltando</h3>
        <div className="space-y-4">
          {pacientesPendentes.length > 0 ? (
            pacientesPendentes.map((paciente, index) => (
              <div key={index} className="flex justify-between items-center bg-[#FEE2E2] rounded-lg p-4 shadow-sm hover:shadow-md transition duration-300">
                <p className="text-lg font-medium text-gray-800">{paciente.nome}</p>
                <span className="text-sm text-gray-600">Pendente</span>
              </div>
            ))
          ) : (
            <p className="text-gray-600">Todos os pacientes foram consultados.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Fonoaudiologo;
