export default function Contato() {
  return (
    <section id="contato">
      <div className="container">
        <h2 className="contato-title">Contato</h2>

        <p className="contato-texto">
          Estou sempre em busca de novos desafios e colaborações que
          impulsionem a inovação. Se você tem um projeto em mente ou deseja
          trocar ideias sobre tecnologia, será um prazer conversarmos. Entre em
          contato!
        </p>

        <div className="contato-icons">
          <a
            href="https://www.linkedin.com/in/deveduardadeandrade/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icones/linkedin.png" alt="LinkedIn" />
          </a>

          <a
            href="https://github.com/Duardaxnt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icones/github.png" alt="GitHub" />
          </a>

          <a href="mailto:eduardacadem99@gmail.com">
            <img src="/icones/gmail.png" alt="Gmail" />
          </a>

          <a
            href="https://wa.me/5583991213044"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icones/whatsapp.png" alt="WhatsApp" />
          </a>
        </div>
      </div>
    </section>
  );
}
