import React, { useState, useRef } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FiDownload } from "react-icons/fi";
import { FaCalendarCheck, FaMicrophone, FaPaperPlane, FaCamera } from "react-icons/fa";
import doctorImage from "../img/Doctor.png";
import "../styles/calendarStyles.css";

const Paciente = () => {
  const [files, setFiles] = useState([
    { name: "Prescription.pdf", type: "pdf" },
    { name: "X-Ray.pdf", type: "pdf" },
    { name: "Ultra sound.pdf", type: "pdf" },
  ]);
  const [date, setDate] = useState(new Date(2024, 8, 21));
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [appointments, setAppointments] = useState([]);
  const [appointmentReason, setAppointmentReason] = useState("");
  const [selectedDateAppointments, setSelectedDateAppointments] = useState([]);
  const [profileImage, setProfileImage] = useState(null);
  const [isRecording, setIsRecording] = useState(false); // Controla o estado da gravação
  const [audioBlob, setAudioBlob] = useState(null); // Armazena o áudio gravado
  const [audioUrl, setAudioUrl] = useState(null); // URL do áudio gravado

  const mediaRecorderRef = useRef(null); // Referência para o MediaRecorder
  const audioChunksRef = useRef([]); // Armazena os pedaços do áudio

  // Função para upload de arquivos
  const handleUpload = (event) => {
    const uploadedFiles = Array.from(event.target.files).map((file) => ({
      name: file.name,
      type: file.type.split("/")[1],
    }));
    setFiles([...files, ...uploadedFiles]);
  };

  // Função para download de arquivos
  const handleDownload = (fileName) => {
    alert(`Baixando ${fileName}`);
  };

  // Função para iniciar a gravação
  const startRecording = async () => {
    setIsRecording(true);
    audioChunksRef.current = []; // Limpa os pedaços de áudio anteriores
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);

    mediaRecorderRef.current.ondataavailable = (event) => {
      audioChunksRef.current.push(event.data); // Armazena os pedaços de áudio
    };

    mediaRecorderRef.current.onstop = () => {
      const audioBlob = new Blob(audioChunksRef.current, { type: "audio/wav" });
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudioBlob(audioBlob); // Armazena o áudio gravado
      setAudioUrl(audioUrl); // Armazena a URL do áudio
      sendMessage(audioUrl); // Envia o áudio como mensagem
    };

    mediaRecorderRef.current.start();
  };

  // Função para parar a gravação
  const stopRecording = () => {
    setIsRecording(false);
    mediaRecorderRef.current.stop();
  };

  // Função para enviar a mensagem (texto ou áudio)
  const sendMessage = (audioUrl = null) => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput(""); // Limpa o campo de texto após o envio
    }

    if (audioUrl) {
      setMessages([...messages, { audio: audioUrl, sender: "user" }]); // Envia o áudio
    }
  };

  // Função para agendar consulta
  const handleAppointment = () => {
    if (appointmentReason.trim()) {
      const newAppointment = { date, reason: appointmentReason };
      setAppointments([...appointments, newAppointment]);

      // Atualiza os agendamentos para a data selecionada
      if (date.toDateString() === newAppointment.date.toDateString()) {
        setSelectedDateAppointments([...selectedDateAppointments, newAppointment]);
      }

      setAppointmentReason(""); // Limpa o campo de motivo após o agendamento
    }
  };

  // Função para selecionar uma data no calendário
  const handleDateClick = (selectedDate) => {
    setDate(selectedDate);
    const filteredAppointments = appointments.filter(
      (appointment) => new Date(appointment.date).toDateString() === selectedDate.toDateString()
    );
    setSelectedDateAppointments(filteredAppointments);
  };

  // Função para upload de imagem de perfil
  const handleProfileImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Função para remover agendamento
  const handleRemoveAppointment = (appointmentToRemove) => {
    setAppointments(appointments.filter(appointment => appointment !== appointmentToRemove));
    setSelectedDateAppointments(selectedDateAppointments.filter(appointment => appointment !== appointmentToRemove));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex p-4">
      {/* Coluna esquerda: conteúdo principal */}
      <div className="w-2/3 pr-8">
        <h2 className="text-3xl font-bold mt-10 text-gray-800">
          Oi <span className="text-blue-500 font-semibold">Abdel</span>, bem-vindo de volta!
        </h2>

        <div className="bg-blue-500 text-white rounded-3xl shadow-lg mt-8 px-8 py-6 w-full flex relative">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold">Diagnóstico</h3>
            <p className="mt-2 text-lg">Histórico de Consultas</p>
            <p className="text-lg">Documentos Do Paciente</p>
            <label htmlFor="file-upload" className="mt-4 flex items-center justify-center border-2 border-white rounded-lg w-16 h-16 cursor-pointer">
              <span className="text-3xl">+</span>
            </label>
            <input id="file-upload" type="file" multiple onChange={handleUpload} style={{ display: "none" }} />
          </div>
          <img src={doctorImage} alt="Médico" className="absolute right-[-30px] bottom-[-20px] w-64" />
        </div>

        <div className="bg-white rounded-3xl shadow-xl mt-12 w-full p-6">
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
                <button className="text-blue-500" onClick={() => handleDownload(file.name)}>
                  <FiDownload size={20} />
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 p-6 bg-white shadow-lg rounded-3xl w-full">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Calendário</h3>
          <Calendar
            onChange={handleDateClick}
            value={date}
            tileContent={({ date }) =>
              appointments.some((appointment) => {
                const appointmentDate = new Date(appointment.date);
                return (
                  appointmentDate.getDate() === date.getDate() &&
                  appointmentDate.getMonth() === date.getMonth() &&
                  appointmentDate.getFullYear() === date.getFullYear()
                );
              }) ? (
                <div className="flex justify-center mt-1">
                  <FaCalendarCheck className="text-blue-500" size={16} />
                </div>
              ) : null
            }
            className="custom-calendar"
          />

          <div className="mt-4">
            <input
              type="text"
              value={appointmentReason}
              onChange={(e) => setAppointmentReason(e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="Motivo da consulta"
            />
            <button
              onClick={handleAppointment}
              className="mt-2 w-full p-2 bg-blue-500 text-white rounded-md"
            >
              Agendar Consulta
            </button>
          </div>
        </div>

        {selectedDateAppointments.length > 0 && (
          <div className="mt-8 p-6 bg-white shadow-lg rounded-3xl w-full">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Consultas Agendadas</h3>
            <ul>
              {selectedDateAppointments.map((appointment, index) => (
                <li key={index} className="mb-2 p-2 bg-gray-100 rounded-md">
                  <p><strong>Motivo:</strong> {appointment.reason}</p>
                  <button
                    onClick={() => handleRemoveAppointment(appointment)}
                    className="text-red-500 mt-2 text-xs"
                  >
                    Remover
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Coluna direita: Perfil e Chat */}
      <div className="w-1/3 flex flex-col items-center">
        <div className="mt-10 bg-white shadow-lg rounded-3xl p-6 w-full flex flex-col items-center border border-gray-200">
          <input
            type="file"
            accept="image/*"
            onChange={handleProfileImageUpload}
            style={{ display: "none" }}
            id="profile-upload"
          />
          <label htmlFor="profile-upload" className="cursor-pointer">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300">
              {profileImage ? (
                <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500">
                  <FaCamera size={24} />
                </div>
              )}
            </div>
          </label>
          <h3 className="text-2xl font-semibold mt-4">Ashley Black</h3>
          <p className="text-gray-500 text-sm">ashley.black@gmail.com</p>
          <div className="mt-3 text-gray-700 text-lg text-center">
            <p><strong>Sangue:</strong> A+</p>
            <p><strong>Altura:</strong> 164cm</p>
            <p><strong>Peso:</strong> 57kg</p>
          </div>

          <div className="mt-4 border rounded-lg h-40 overflow-auto p-2 bg-gray-100 w-full">
            {messages.map((msg, index) => (
              <div key={index} className={`p-2 my-1 rounded-lg max-w-[80%] text-sm ${msg.sender === "user" ? "bg-blue-500 text-white self-end ml-auto" : "bg-gray-300 text-black"}`}>
                {msg.text}
                {msg.audio && (
                  <audio controls src={msg.audio} className="w-full mt-2"></audio> // Exibe o áudio se disponível
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center mt-2 border-t pt-2 w-full">
            <button className="p-2 text-blue-500" onClick={isRecording ? stopRecording : startRecording}>
              <FaMicrophone size={20} />
            </button>
            <input
              type="text"
              className="flex-1 p-2 border rounded-lg text-sm"
              placeholder="Digite sua mensagem..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              className="p-2 text-blue-500"
              onClick={() => sendMessage()} // Corrigido para enviar mensagens de texto
            >
              <FaPaperPlane size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paciente;
