import React from "react";
import "./Contato.css";

export default function Contato() {
  return (
    <div className="contato">
      <h1>Fale Conosco</h1>
      <p>Entre em contato conosco para tirar dúvidas, oferecer sugestões ou solicitar ajuda.</p>

      <h2>Formas de contato:</h2>
      <ul>
        <li>Email: atendimento@faxinalitoral.com.br</li>
        <li>Telefone/WhatsApp: (13) 99999-9999</li>
        <li>Endereço: Av. Principal, 123 - Santos/SP</li>
      </ul>

      <h3>Horário de atendimento</h3>
      <p>Segunda à Sexta, das 08h às 18h</p>

      <h3>Redes sociais</h3>
      <ul>
        <li><a href="https://instagram.com/faxinalitoral" target="_blank">Instagram</a></li>
        <li><a href="https://facebook.com/faxinalitoral" target="_blank">Facebook</a></li>
      </ul>

      <p>Estamos aqui para te ajudar e garantir o melhor serviço de limpeza da região.</p>
    </div>
  );
}
