import React, { useState } from 'react';
import './Faxinar.css';

export default function Faxinar() {
  const [formData, setFormData] = useState({
    nome: '',
    endereco: '',
    datahora: '',
    telefone: '',
    email: '',
    servico: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Serviço enviado:', formData);
    alert('Serviço enviado com sucesso!');
  };

  return (
    <section className="faxinar-form">
      <h1>Oferecer Serviço de Faxina</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nome" placeholder="Seu nome" required onChange={handleChange} />
        <input type="text" name="endereco" placeholder="Endereço aproximado" required onChange={handleChange} />
        <input type="datetime-local" name="datahora" required onChange={handleChange} />
        <input type="tel" name="telefone" placeholder="WhatsApp" required onChange={handleChange} />
        <input type="email" name="email" placeholder="Email (opcional)" onChange={handleChange} />
        <textarea name="servico" maxLength="500" placeholder="Descreva o tipo de serviço (máx 500 caracteres)" required onChange={handleChange} />
        <button type="submit">Enviar Serviço</button>
      </form>
    </section>
  );
}
