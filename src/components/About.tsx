import React from 'react';

export default function About() {
  return (
    <section className="sobre" id="sobre">
      <div className="container">
        <div className="descricao">
          <h1>Sobre mim</h1>

          <p>
            Focada em criar interfaces modernas e desenvolver soluções completas
            do front-end ao back-end, possuo experiência com React, Node.js,
            TypeScript, JavaScript, HTML, CSS, Python, Django, Java e SQL, além
            de versionamento com Git e GitHub. Sou certificada AWS Certified
            Cloud Practitioner, reforçando meus conhecimentos em computação em
            nuvem e boas práticas de infraestrutura.
          </p>
          <p>
            Cursando Análise e Desenvolvimento de Sistemas, sou apaixonada por
            construir aplicações funcionais, responsivas e bem estruturadas.
            Busco constantemente evoluir, aprendendo novas tecnologias,
            ferramentas e metodologias que aprimorem a qualidade do código e a
            experiência do usuário, entregando projetos completos e escaláveis.
          </p>

          <a
            href="/Curriculo_Nathali_Eduarda_de_Andrade.pdf"
            download
            className="btn-curriculo"
          >
            Meu Currículo
          </a>
        </div>

        <div className="foto">
          <img src="/imagens/fotoeu.jpg" alt="Foto de Eduarda" />
        </div>
      </div>
    </section>
  );
}
