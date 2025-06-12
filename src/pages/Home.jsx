import React from 'react'
import { useNavigate } from 'react-router-dom'

const cities = [
  'Santos',
  'Praia Grande',
  'Guarujá',
  'Bertioga',
  'Mongaguá',
  'Itanhaém',
  'São Vicente',
  'Cubatão'
]

export default function Home() {
  const navigate = useNavigate()

  return (
    <section>
      <h1>Faxinalitoral – Limpeza na Baixada Santista</h1>
      <p>Escolha sua cidade para contratar um serviço ou oferecer seu trabalho:</p>

      <div className="city-grid">
        {cities.map((city, index) => (
          <div key={index} className="city-card">
            <span>{city}</span>
            <div className="city-actions">
              <button onClick={() => navigate('/contratar')}>CONTRATAR</button>
              <button onClick={() => navigate('/anunciar')}>FAXINAR</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
