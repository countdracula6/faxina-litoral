import React, { useState } from 'react'

export default function PostJob() {
  const [form, setForm] = useState({
    name: '',
    address: '',
    datetime: '',
    phone: '',
    email: '',
    service: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.service.length > 3000) {
      alert('Descrição do serviço não pode ultrapassar 500 palavras.')
      return
    }

    console.log('Dados enviados:', form)
    alert("Solicitação enviada com sucesso!")
  }

  return (
    <section>
      <h1>Anunciar Serviço de Limpeza</h1>
      <p>Preencha os campos abaixo para publicar seu anúncio:</p>

      <form className="job-form" onSubmit={handleSubmit}>
        <input name="name" placeholder="Seu nome completo" value={form.name} onChange={handleChange} required />
        <input name="address" placeholder="Endereço aproximado (ex: Rua A, Bairro B)" value={form.address} onChange={handleChange} required />
        <input name="datetime" type="datetime-local" value={form.datetime} onChange={handleChange} required />
        <input name="phone" placeholder="Telefone ou WhatsApp" value={form.phone} onChange={handleChange} required />
        <input name="email" type="email" placeholder="E-mail para contato" value={form.email} onChange={handleChange} required />
        <textarea
          name="service"
          placeholder="Descreva o tipo de serviço desejado (máximo 500 palavras)"
          value={form.service}
          onChange={handleChange}
          rows={6}
          required
        />
        <button type="submit">Publicar Anúncio</button>
      </form>
    </section>
  )
}
