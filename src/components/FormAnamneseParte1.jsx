import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const FormAnamneseParte1 = ({ onNext }) => {
  const [formData, setFormData] = useState({
    nome: "",
    idade: "",
    dataNascimento: "",
    localNascimento: "",
    uf: "",
    sexo: "",
    estadoConjugal: "",
    grauInstrucao: "",
    profissao: "",
    periodoTrabalho: "",
    cargaHoraria: "",
    endereco: "",
    contato: "",
    encaminhadoPor: "",
    informante: "",
    parentesco: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar se todos os campos obrigatórios foram preenchidos
    if (!formData.nome || !formData.idade || !formData.dataNascimento) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Chama a função `onNext` para passar os dados para o próximo passo
    onNext(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <h2>Identificação Pessoal</h2>
      <label>Nome:</label>
      <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />
      
      <label>Idade:</label>
      <input type="number" name="idade" value={formData.idade} onChange={handleChange} required />
      
      <label>Data de Nascimento:</label>
      <input type="date" name="dataNascimento" value={formData.dataNascimento} onChange={handleChange} required />
      
      <label>Local de Nascimento:</label>
      <input type="text" name="localNascimento" value={formData.localNascimento} onChange={handleChange} required />
      
      <label>UF:</label>
      <input type="text" name="uf" value={formData.uf} onChange={handleChange} required />
      
      <label>Sexo:</label>
      <select name="sexo" value={formData.sexo} onChange={handleChange} required>
        <option value="">Selecione</option>
        <option value="F">Feminino</option>
        <option value="M">Masculino</option>
      </select>
      
      <label>Estado Conjugal:</label>
      <input type="text" name="estadoConjugal" value={formData.estadoConjugal} onChange={handleChange} required />
      
      <label>Grau de Instrução:</label>
      <input type="text" name="grauInstrucao" value={formData.grauInstrucao} onChange={handleChange} required />
      
      <label>Profissão:</label>
      <input type="text" name="profissao" value={formData.profissao} onChange={handleChange} required />
      
      <label>Período de Trabalho:</label>
      <input type="text" name="periodoTrabalho" value={formData.periodoTrabalho} onChange={handleChange} required />
      
      <label>Carga Horária:</label>
      <input type="text" name="cargaHoraria" value={formData.cargaHoraria} onChange={handleChange} required />
      
      <label>Endereço:</label>
      <input type="text" name="endereco" value={formData.endereco} onChange={handleChange} required />
      
      <label>Contato (Telefone/Email):</label>
      <input type="text" name="contato" value={formData.contato} onChange={handleChange} required />
      
      <label>Encaminhado por:</label>
      <input type="text" name="encaminhadoPor" value={formData.encaminhadoPor} onChange={handleChange} required />
      
      <label>Informante:</label>
      <input type="text" name="informante" value={formData.informante} onChange={handleChange} required />
      
      <label>Parentesco:</label>
      <input type="text" name="parentesco" value={formData.parentesco} onChange={handleChange} required />
      
      <button type="submit">Próximo</button>
    </form>
  );
};

export default FormAnamneseParte1;
