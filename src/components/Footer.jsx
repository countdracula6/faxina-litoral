import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Faxinalitoral. Todos os direitos reservados.</p>
        <p><a href="/contato">Fale conosco</a></p>
      </div>
    </footer>
  )
}
