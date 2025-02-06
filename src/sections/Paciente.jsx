import React, { useState } from "react";
import { FiDownload } from "react-icons/fi";
import doctorImage from "../img/Doctor.png"; // Verifique o caminho correto

const Paciente = () => {
  const [files, setFiles] = useState([
    { name: "Prescription.pdf", type: "pdf" },
    { name: "X-Ray.pdf", type: "pdf" },
    { name: "Ultra sound.pdf", type: "pdf" },
  ]);

  const handleUpload = (event) => {
    const uploadedFiles = Array.from(event.target.files).map((file) => ({
      name: file.name,
      type: file.type.split("/")[1], // Obtém a extensão do arquivo
    }));
    setFiles([...files, ...uploadedFiles]);
  };

  const handleDownload = (fileName) => {
    alert(`Baixando ${fileName}`); // Substitua por lógica real de download
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      <h2 className="text-3xl font-bold mt-10 text-gray-800">
        Oi <span className="text-blue-500 font-semibold">Abdel</span>, bem-vindo de volta!
      </h2>

      {/* Cartão de Diagnóstico */}
      <div className="bg-blue-500 text-white rounded-3xl shadow-lg mt-8 px-8 py-6 w-[36rem] max-w-md flex relative">
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-bold">Diagnóstico</h3>
          <p className="mt-2 text-lg">Histórico de Consultas</p>
          <p className="text-lg">Documentos Do Paciente</p>

          {/* Botão de Upload */}
          <label htmlFor="file-upload" className="mt-4 flex items-center justify-center border-2 border-white rounded-lg w-16 h-16 cursor-pointer">
            <span className="text-3xl">+</span>
          </label>
          <input
            id="file-upload"
            type="file"
            multiple
            onChange={handleUpload}
            style={{ display: "none" }}
          />
        </div>

        {/* Imagem */}
        <img src={doctorImage} alt="Médico" className="absolute right-[-30px] bottom-[-20px] w-64" />
      </div>

      {/* Seção de Uploads */}
      <div className="bg-white rounded-3xl shadow-xl mt-12 w-4/5 max-w-2xl p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Documentos</h3>
          <label htmlFor="file-upload" className="text-blue-500 font-semibold cursor-pointer">
            Adicionar arquivos
          </label>
        </div>

        <ul className="divide-y divide-gray-200">
          {files.map((file, index) => (
            <li key={index} className="flex justify-between items-center py-2">
              <div className="flex items-center">
                <span className="text-gray-600">📄</span>
                <span className="ml-2 text-gray-800">{file.name}</span>
              </div>
              <button
                className="text-blue-500"
                onClick={() => handleDownload(file.name)}
              >
                <FiDownload size={20} />
              </button>
            </li>
          ))}
        </ul>

        <div className="text-center mt-4">
          <button className="text-blue-500 font-semibold">Ver todos</button>
        </div>
      </div>

      {/* Seção do Perfil do Usuário */}
      <UserProfile />
    </div>
  );
};

const UserProfile = () => {
  const [image, setImage] = useState(null);
  const user = {
    name: "Ashley Black",
    email: "ashley.black@gmail.com",
    phone: "(11) 98765-4321",
    address: "123, Rua Principal, São Paulo, SP",
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="fixed bottom-5 right-5 bg-white shadow-lg rounded-3xl p-6 w-80 flex flex-col items-center border border-gray-200">
      {/* Upload da Foto */}
      <label className="relative w-28 h-28">
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageUpload}
        />
        <img
          src={image || "https://via.placeholder.com/100"}
          alt="User"
          className="w-28 h-28 rounded-full object-cover border-2 border-gray-300 cursor-pointer"
        />
      </label>

      {/* Nome e Email */}
      <h3 className="text-2xl font-semibold mt-3">{user.name}</h3>
      <p className="text-gray-500 text-sm">{user.email}</p>

      {/* Informações do Usuário */}
      <div className="mt-3 text-gray-700 text-lg text-center">
        <p><strong>Telefone:</strong> {user.phone}</p>
        <p><strong>Endereço:</strong> {user.address}</p>
      </div>

      {/* Botão de Chat */}
      <button className="mt-4 bg-blue-500 text-white px-6 py-3 rounded-full shadow-md text-lg">
        Chat
      </button>
    </div>
  );
};

export default Paciente;
