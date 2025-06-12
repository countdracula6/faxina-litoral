import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const toggleMenu = () => setOpen(!open)
  const closeMenu = () => setOpen(false)

  return (
    <nav className="navbar">
      <div className="logo">
        <span className="faxina">FAXINA</span>
        <span className="litoral">LITORAL</span>
      </div>

      <button className="burger" onClick={toggleMenu} aria-label="Abrir menu">
        ☰
      </button>

      <ul className={`menu ${open ? 'show' : ''}`}>
        <li><Link to="/" onClick={closeMenu}>Início</Link></li>
        <li><Link to="/anunciar" onClick={closeMenu}>Anunciar</Link></li>
        <li><Link to="/anunciar" onClick={closeMenu}>Como Anunciar</Link></li>
        <li><Link to="/contratar" onClick={closeMenu}>Como Contratar</Link></li>
        <li><Link to="/contato" onClick={closeMenu}>Contato</Link></li>
      </ul>
    </nav>
  )
}
