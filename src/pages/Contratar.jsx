import React, { useState } from 'react';
import './Contratar.css';

export default function Contratar() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    type: 'Residencial',
    description: '',
    priceRange: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted data:', formData);
    // Add submission logic (e.g. send to backend/API)
  };

  return (
    <div className="contratar">
      <h1>Solicitar Serviço de Limpeza</h1>
      <p>Preencha o formulário abaixo para solicitar um serviço de limpeza personalizado para sua casa, comércio ou indústria.</p>

      <form onSubmit={handleSubmit}>
        <label>Nome:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Contato (WhatsApp ou telefone):</label>
        <input type="text" name="contact" value={formData.contact} onChange={handleChange} required />

        <label>Tipo de Local:</label>
        <select name="type" value={formData.type} onChange={handleChange}>
          <option>Residencial</option>
          <option>Comercial</option>
          <option>Industrial</option>
        </select>

        <label>Descreva o serviço desejado:</label>
        <textarea name="description" value={formData.description} onChange={handleChange} required></textarea>

        <label>Faixa de Preço:</label>
        <select name="priceRange" value={formData.priceRange} onChange={handleChange}>
          <option value="">Selecione</option>
          <option>Até R$100</option>
          <option>R$100 a R$200</option>
          <option>R$200 a R$300</option>
          <option>Acima de R$300</option>
        </select>

        <button type="submit">Enviar Pedido</button>
      </form>
    </div>
  );
}
