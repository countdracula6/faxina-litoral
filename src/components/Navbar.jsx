import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="faxina">FAXINA</span>
        <span className="litoral">LITORAL</span>
      </div>
      <ul>
        <li><Link to="/">Início</Link></li>
        <li><Link to="/anunciar">Anunciar</Link></li>
        <li><Link to="/contratar">Contratar</Link></li>
        <li><Link to="/produtos">Produtos</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul>
    </nav>
  );
}
