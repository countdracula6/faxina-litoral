import React from 'react';
import './ComoAnunciar.css';

export default function ComoAnunciar() {
  return (
    <section className="como-anunciar">
      <h1>Como Anunciar Seus Serviços de Limpeza</h1>
      <p>
        Está procurando uma maneira fácil, segura e eficaz de oferecer seus serviços de limpeza na Baixada Santista?
        O Faxinalitoral conecta profissionais qualificados a famílias, condomínios e empresas de toda a região —
        incluindo Santos, Praia Grande, Guarujá, Cubatão, São Vicente, Mongaguá, Bertioga e Itanhaém.
      </p>

      <h2>Por que Anunciar no Faxinalitoral?</h2>
      <ul>
        <li><strong>100% gratuito:</strong> não cobramos taxa para publicar seu anúncio.</li>
        <li><strong>Fácil de usar:</strong> basta preencher um formulário com seu nome, localização e tipo de serviço.</li>
        <li><strong>Alcance regional:</strong> visibilidade para milhares de potenciais clientes na sua cidade.</li>
        <li><strong>Confiança:</strong> nosso site é seguro e verificado, com boa reputação online.</li>
        <li><strong>Valorização:</strong> destaque seu perfil com fotos, avaliações e experiências.</li>
      </ul>

      <h2>Como Funciona?</h2>
      <ol>
        <li>Clique no botão “FAXINAR” na sua cidade.</li>
        <li>Preencha seu nome, endereço aproximado, telefone, e-mail e tipo de serviço.</li>
        <li>Seu anúncio é publicado rapidamente e pode ser visualizado por centenas de clientes locais.</li>
        <li>Clientes interessados entrarão em contato direto com você.</li>
      </ol>

      <h2>Dicas para se Destacar</h2>
      <ul>
        <li>Adicione uma boa foto de perfil.</li>
        <li>Escreva um pequeno texto dizendo por que você é confiável.</li>
        <li>Seja claro sobre horários e tipos de limpeza que realiza.</li>
      </ul>

      <p>
        No Faxinalitoral, seu trabalho é valorizado. Faça parte da maior plataforma local de serviços de limpeza
        e conquiste novos clientes hoje mesmo.
      </p>

      <div className="cta-button">
        <a href="/faxinar">Comece Agora</a>
      </div>
    </section>
  );
}
