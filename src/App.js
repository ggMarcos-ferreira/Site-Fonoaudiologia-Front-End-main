import './App.css';
import { Routes, Route } from 'react-router-dom';
import Inicio from './sections/Inicio';
import Signup from './signup/Signup'; // Cadastro para usuário normal
import Login from './login/Login'; // Login para usuário normal
import Navbar from './sections/Navbar';
import SignUpFono from './signup/SignUpFono'; // Cadastro para fonoaudiólogo
import LoginFono from './login/LoginFono'; // Login para fonoaudiólogo
import FormAnamnese from './formAnamnese/FormAnamnese';
import Paciente from './sections/Paciente';
import Fonoaudiologo from './sections/Fonoaudiologo';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Página Inicial */}
        <Route path="/" element={<Inicio />} />

        {/* Login e Cadastro de usuário normal */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Login e Cadastro de fonoaudiólogo */}
        <Route path="/login-fono" element={<LoginFono />} />
        <Route path="/signup-fono" element={<SignUpFono />} />

        {/* Outras rotas */}
        <Route path="/form-anamnese" element={<FormAnamnese />} />
        <Route path="/Paciente" element={<Paciente />} />
        <Route path="/Fonoaudiologo" element={<Fonoaudiologo />} />
      </Routes>
     
    </>
  );
}

export default App;
