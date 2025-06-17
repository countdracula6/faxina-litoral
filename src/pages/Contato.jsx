import React from "react";
import "./Contato.css";

export default function Contato() {
  return (
    <div className="contato">
      <h1>Fale Conosco</h1>
      <p>Entre em contato conosco para tirar dúvidas, oferecer sugestões ou solicitar ajuda.</p>

      <h2>Formas de Contato</h2>
      <ul>
        <li>Email: <a href="mailto:atendimento@faxinalitoral.com.br">atendimento@faxinalitoral.com.br</a></li>
        <li>Telefone/WhatsApp: <a href="tel:+5513999999999">(13) 99999-9999</a></li>
        <li>Endereço: Av. Principal, 123 - Santos/SP</li>
      </ul>

      <h2>Horário de Atendimento</h2>
      <p>Segunda à Sexta, das 08h às 18h</p>

      <h2>Redes Sociais</h2>
      <ul>
        <li><a href="https://instagram.com/faxinalitoral" target="_blank" rel="noreferrer">Instagram</a></li>
        <li><a href="https://facebook.com/faxinalitoral" target="_blank" rel="noreferrer">Facebook</a></li>
      </ul>

      <p>Estamos aqui para te ajudar e garantir o melhor serviço de limpeza da região.</p>
    </div>
  );
}
