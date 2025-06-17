import React, { useState } from 'react';
import './Faxinar.css';

export default function Faxinar() {
  const [formData, setFormData] = useState({
    nome: '',
    cidade: '',
    bairro: '',
    disponibilidade: '',
    experiencia: '',
    foto: null,
    valor: '',
    data: '',
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Informações enviadas com sucesso!");
  };

  return (
    <div className="faxinar-form">
      <h1>Cadastre-se para Faxinar</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nome" placeholder="Seu nome completo" onChange={handleChange} required />
        <input type="text" name="cidade" placeholder="Cidade" onChange={handleChange} required />
        <input type="text" name="bairro" placeholder="Bairro" onChange={handleChange} required />
        <input type="date" name="data" onChange={handleChange} required />
        <textarea name="disponibilidade" placeholder="Disponibilidade (dias e horários)" onChange={handleChange} required />
        <textarea name="experiencia" placeholder="Conte um pouco da sua experiência" onChange={handleChange} />
        <input type="number" name="valor" placeholder="Valor por hora ou sessão (em R$)" onChange={handleChange} required />
        <input type="file" name="foto" accept="image/*" onChange={handleChange} />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
