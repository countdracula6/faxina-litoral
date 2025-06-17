import React, { useState } from 'react';
import './Faxinar.css';

export default function Faxinar() {
  const [formData, setFormData] = useState({
    nome: '',
    endereco: '',
    datahora: '',
    telefone: '',
    email: '',
    servico: '',
    preco: '',
    tipoPreco: 'hora',
    foto: null
  });

  const handleChange = e => {
    const { name, value, type, files } = e.target;
    setFormData({ ...formData, [name]: type === 'file' ? files[0] : value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Serviço enviado:', formData);
    alert('Serviço enviado com sucesso!');
  };

  return (
    <section className="faxinar-form">
      <h1>Ofereça seu Serviço de Faxina</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nome" placeholder="Seu nome completo" required onChange={handleChange} />
        <input type="text" name="endereco" placeholder="Endereço aproximado" required onChange={handleChange} />
        <input type="datetime-local" name="datahora" required onChange={handleChange} />

        <input type="tel" name="telefone" placeholder="WhatsApp com DDD" required onChange={handleChange} />
        <input type="email" name="email" placeholder="Email (opcional)" onChange={handleChange} />

        <textarea
          name="servico"
          maxLength="500"
          placeholder="Descreva o tipo de serviço (máximo 500 caracteres)"
          required
          onChange={handleChange}
        />

        <div className="preco-group">
          <input
            type="number"
            name="preco"
            placeholder="Valor"
            required
            onChange={handleChange}
          />
          <select name="tipoPreco" onChange={handleChange}>
            <option value="hora">por hora</option>
            <option value="diaria">por diária</option>
          </select>
        </div>

        <label className="foto-label">
          Foto de perfil (opcional):
          <input type="file" name="foto" accept="image/*" onChange={handleChange} />
        </label>

        <button type="submit">Publicar Serviço</button>
      </form>
    </section>
  );
}
