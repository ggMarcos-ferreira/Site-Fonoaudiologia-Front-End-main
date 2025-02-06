import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const FormAnamneseParte4 = ({ onNext, onPrev }) => {
  const [formData, setFormData] = useState({
    tratamentosAnteriores: "",
    investigacaoCirurgias: "",
    patologiaLaringea: "",
    ferimentos: "",
    mudancaVozPuberdade: "",
    desenvolvimentoImportante: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <h2>Tratamentos Anteriores e Investigação Complementar</h2>

      <div>
        <label>Tratamentos anteriores para disfonia:</label>
        <textarea
          name="tratamentosAnteriores"
          value={formData.tratamentosAnteriores}
          onChange={handleChange}
          placeholder="Descreva tratamentos anteriores..."
          required
        />
      </div>

      <div>
        <label>Submeteu-se a alguma cirurgia? Qual(is)?</label>
        <textarea
          name="investigacaoCirurgias"
          value={formData.investigacaoCirurgias}
          onChange={handleChange}
          placeholder="Informe as cirurgias e datas..."
          required
        />
      </div>

      <div>
        <label>História de patologia laríngea (tumor, inflamação, etc.):</label>
        <textarea
          name="patologiaLaringea"
          value={formData.patologiaLaringea}
          onChange={handleChange}
          placeholder="Descreva a patologia laríngea..."
          required
        />
      </div>

      <div>
        <label>Sofreu algum ferimento na área do nariz ou garganta?</label>
        <textarea
          name="ferimentos"
          value={formData.ferimentos}
          onChange={handleChange}
          placeholder="Descreva o ferimento..."
          required
        />
      </div>

      <div>
        <label>Houve algo incomum na mudança de voz durante a puberdade?</label>
        <textarea
          name="mudancaVozPuberdade"
          value={formData.mudancaVozPuberdade}
          onChange={handleChange}
          placeholder="Informe qualquer ocorrência incomum..."
          required
        />
      </div>

      <div>
        <label>Há algo importante sobre seu desenvolvimento (gestação até hoje)?</label>
        <textarea
          name="desenvolvimentoImportante"
          value={formData.desenvolvimentoImportante}
          onChange={handleChange}
          placeholder="Descreva qualquer fato relevante..."
          required
        />
      </div>

      <button type="button" onClick={onPrev}>Voltar</button>
      <button type="submit">Próximo</button>
    </form>
  );
};

export default FormAnamneseParte4;
