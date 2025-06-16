import React from 'react'
import { useNavigate } from 'react-router-dom'

const cities = [
  { name: 'Santos', image: '/images/cities/santos.png' },
  { name: 'Praia Grande', image: '/images/cities/praia-grande.png' },
  { name: 'Guarujá', image: '/images/cities/guaruja.png' },
  { name: 'Bertioga', image: '/images/cities/bertioga.png' },
  { name: 'Mongaguá', image: '/images/cities/mongagua.png' },
  { name: 'Itanhaém', image: '/images/cities/itanhaem.png' },
  { name: 'São Vicente', image: '/images/cities/sao-vicente.png' },
  { name: 'Cubatão', image: '/images/cities/cubatao.png' }
]


export default function Home() {
  const navigate = useNavigate()

  return (
    <section>
      <h1>Faxinalitoral – Limpeza na Baixada Santista</h1>
      <p>Escolha sua cidade para contratar um serviço ou oferecer seu trabalho:</p>

      <div className="city-grid">
        {cities.map((city, index) => (
          <div
            key={index}
            className="city-card"
            style={{ backgroundImage: `url(${city.image})` }}
          >
            <div className="city-overlay">
              <div className="city-actions">
                <button onClick={() => navigate('/contratar')}>CONTRATAR</button>
                <button onClick={() => navigate('/faxinar')}>FAXINAR</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
