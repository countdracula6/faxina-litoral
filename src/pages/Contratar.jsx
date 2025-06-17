import React, { useState } from 'react';
import './Contratar.css';

export default function Contratar() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    type: 'Residencial',
    description: '',
    address: '',
    priceRange: '',
    date: '',
    rate: '',
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted data:', formData);
    // Add backend submission logic here
  };

  return (
    <div className="contratar">
      <h1>Solicitar Serviço de Limpeza</h1>
      <p>Preencha o formulário abaixo para solicitar um serviço personalizado para sua residência, comércio ou indústria.</p>

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
        <textarea name="description" value={formData.description} onChange={handleChange} required />

        <label>Endereço aproximado:</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Ex: Av. Marechal, nº 300 - Itanhaém" required />

        <label>Data Preferencial (DD/MM/AAAA):</label>
        <input type="text" name="date" value={formData.date} onChange={handleChange} placeholder="Ex: 28/06/2025" required />

        <label>Faixa de Preço:</label>
        <select name="priceRange" value={formData.priceRange} onChange={handleChange}>
          <option value="">Selecione</option>
          <option>Até R$100</option>
          <option>R$100 a R$200</option>
          <option>R$200 a R$300</option>
          <option>Acima de R$300</option>
        </select>

        <label>Valor por hora ou sessão (opcional):</label>
        <input type="text" name="rate" value={formData.rate} onChange={handleChange} placeholder="Ex: R$50/hora" />

        <label>Foto do local (opcional):</label>
        <input type="file" name="photo" accept="image/*" onChange={handleChange} />

        <button type="submit">Enviar Pedido</button>
      </form>
    </div>
  );
}
