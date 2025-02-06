import './App.css';
import { Routes, Route } from 'react-router-dom';
import Inicio from './sections/Inicio';
import Signup from './signup/Signup';
import Login from './login/Login';
import Navbar from './sections/Navbar';
import SignUpFono from './signup/SignUpFono';
import LoginFono from './login/LoginFono';
import FormAnamnese from './formAnamnese/FormAnamnese';
import Paciente from './sections/Paciente'; // Certifique-se de importar corretamente o componente
import Footer from './sections/Footer'; // Certifique-se de que o caminho está correto
import Fonoaudiologo from './sections/Fonoaudiologo';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login-fono" element={<LoginFono />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup-fono" element={<SignUpFono />} />
        <Route path="/form-anamnese" element={<FormAnamnese />} />
        <Route path="/paciente" element={<Paciente />} /> 
        <Route path="/Fonoaudiologo" element={<Fonoaudiologo />} /> 
      </Routes>
      <Footer /> {/* Footer adicionado ao final */}
    </>
  );
}

export default App;
