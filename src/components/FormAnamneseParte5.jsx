import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const FormAnamneseParte5 = ({ onPrev }) => {
  const [formData, setFormData] = useState({
    antecedentesFamiliares: "",
    motivacaoTerapia: "",
    outrasObservacoes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode enviar os dados ou apenas finalizar a ação
    alert("Formulário concluído!");
    console.log("Dados finais:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <h2>Antecedentes Familiares e Motivação para a Terapia</h2>

      <div>
        <label>Antecedentes familiares:</label>
        <textarea
          name="antecedentesFamiliares"
          value={formData.antecedentesFamiliares}
          onChange={handleChange}
          placeholder="Descreva os antecedentes familiares..."
          required
        />
      </div>

      <div>
        <label>Motivação para a terapia:</label>
        <textarea
          name="motivacaoTerapia"
          value={formData.motivacaoTerapia}
          onChange={handleChange}
          placeholder="Informe a motivação do paciente para a terapia..."
          required
        />
      </div>

      <div>
        <label>Outras observações:</label>
        <textarea
          name="outrasObservacoes"
          value={formData.outrasObservacoes}
          onChange={handleChange}
          placeholder="Inclua outras observações relevantes..."
          required
        />
      </div>

      <div>
        <button type="button" onClick={onPrev}>Voltar</button>
        <button type="submit">Finalizar</button>
      </div>
    </form>
  );
};

export default FormAnamneseParte5;
