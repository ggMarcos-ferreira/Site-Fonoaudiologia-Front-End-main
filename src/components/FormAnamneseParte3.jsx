import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const FormAnamneseParte3 = ({ onNext, onPrev }) => {
  const [formData, setFormData] = useState({
    sintomasAuditivos: [],
    sintomasSensoriais: [],
    fatoresOrganizacionais: [],
    fatoresAmbientais: [],
    fatoresPessoais: [],
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData((prevData) => {
      const updatedArray = checked
        ? [...prevData[name], value] // Adiciona o valor se estiver checado
        : prevData[name].filter((item) => item !== value); // Remove o valor se não estiver checado
      return { ...prevData, [name]: updatedArray };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <h2>Sintomas Vocais e Fatores de Risco</h2>

      <fieldset>
        <legend>Sintomas Auditivos</legend>
        <label>
          <input
            type="checkbox"
            name="sintomasAuditivos"
            value="rouquidão"
            onChange={handleChange}
          />
          Rouquidão
        </label>
        <label>
          <input
            type="checkbox"
            name="sintomasAuditivos"
            value="voz muda depois do uso"
            onChange={handleChange}
          />
          Voz muda depois do uso
        </label>
        {/* Adicione mais opções aqui */}
      </fieldset>

      <fieldset>
        <legend>Sintomas Sensoriais / Cinestésicos</legend>
        <label>
          <input
            type="checkbox"
            name="sintomasSensoriais"
            value="fadiga ao falar"
            onChange={handleChange}
          />
          Fadiga ao falar
        </label>
        <label>
          <input
            type="checkbox"
            name="sintomasSensoriais"
            value="bolo na garganta"
            onChange={handleChange}
          />
          “Bolo” na garganta
        </label>
        {/* Adicione mais opções aqui */}
      </fieldset>

      <fieldset>
        <legend>Fatores de Risco Organizacionais</legend>
        <label>
          <input
            type="checkbox"
            name="fatoresOrganizacionais"
            value="Jornada de trabalho longa"
            onChange={handleChange}
          />
          Jornada de trabalho longa
        </label>
        <label>
          <input
            type="checkbox"
            name="fatoresOrganizacionais"
            value="Demanda vocal excessiva"
            onChange={handleChange}
          />
          Demanda vocal excessiva
        </label>
        {/* Adicione mais opções aqui */}
      </fieldset>

      <fieldset>
        <legend>Fatores Ambientais</legend>
        <label>
          <input
            type="checkbox"
            name="fatoresAmbientais"
            value="Ruído de fundo"
            onChange={handleChange}
          />
          Ruído de fundo
        </label>
        <label>
          <input
            type="checkbox"
            name="fatoresAmbientais"
            value="Baixa umidade do ar"
            onChange={handleChange}
          />
          Baixa umidade do ar
        </label>
        {/* Adicione mais opções aqui */}
      </fieldset>

      <fieldset>
        <legend>Fatores Pessoais</legend>
        <label>
          <input
            type="checkbox"
            name="fatoresPessoais"
            value="Fuma"
            onChange={handleChange}
          />
          Fuma
        </label>
        <label>
          <input
            type="checkbox"
            name="fatoresPessoais"
            value="Fala muito"
            onChange={handleChange}
          />
          Fala muito
        </label>
        {/* Adicione mais opções aqui */}
      </fieldset>

      <button type="button" onClick={onPrev}>Voltar</button>
      <button type="submit">Próximo</button>
    </form>
  );
};

export default FormAnamneseParte3;
