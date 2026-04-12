import React from "react";

const Projetos = () => {
  const projetos = [
    {
      id: 1,
      titulo: "Furniro",
      desc: "E-commerce full stack com React, Node.js e PostgreSQL.",
      link: "https://github.com/Duardaxnt/projeto-furniro",
      linguagens: [
        { nome: "TypeScript", porcentagem: 69.8, cor: "#3B82F6" },
        { nome: "CSS", porcentagem: 26.9, cor: "#A855F7" },
        { nome: "HTML", porcentagem: 0.3, cor: "#cc0606" },
        { nome: "Shell", porcentagem: 1.6, cor: "#34cc06" },
        { nome: "Batchfile", porcentagem: 1.4, cor: "#45ac26" }
      ],
      techs: ["React", "TypeScript"]
    },
    {
      id: 2,
      titulo: "Paws n' Play",
      desc: "Petshop fictício desenvolvido com HTML, CSS e JS.",
      link: "https://github.com/Duardaxnt/petshop-compass.com",
      linguagens: [
        { nome: "HTML", porcentagem: 65.9, cor: "#cc0606" },
        { nome: "CSS", porcentagem: 32.2, cor: "#A855F7" },
        {nome: "JavaScript", porcentagem: 1.9, cor: "#FACC15" },
      ],
      techs: ["HTML", "CSS", "JavaScript"]
    },
    {
      id: 3,
      titulo: "iBico Site",
      desc: "Marketplace de serviços.",
      link: "https://ibicobrasil.com.br/",
      linguagens: [
        { nome: "Typescript (TS + TSX)", porcentagem: 80.9, cor: "#3B82F6" },
        { nome: "(JSON + TOML)", porcentagem: 12.8, cor: "#64748B" },
        { nome: "SQL", porcentagem: 5.8, cor: "#ae4a4a" },
        { nome: "CSS + HTML", porcentagem: 0.6, cor: "#ae4aae" }

      ],
      techs: ["React", "Typescript", "SQL"]
    },
    {
      id: 4,
      titulo: "Sistema de Gestão Educacional",
      desc: "Sistema de Gestão Educacional em Java, utilizando Programação Orientada a Objetos (POO) para gerenciamento de entidades acadêmicas como alunos, professores, cursos e turmas.",
      link: "https://github.com/Duardaxnt/SGE-EduConnect",
      linguagens: [
        { nome: "Java", porcentagem: 100.0, cor: "#f58e26" },
      ],
      techs: ["Java"]
    },
    {
      id: 5,
      titulo: "iBico App",
      desc: "Aplicativo móvel em desenvolvimento para marketplace de serviços.",
      link: "https://github.com/",
      linguagens: [
        { nome: "Python", porcentagem: 100.0, cor: "#79a7f1" },
        { nome: "Dart", porcentagem: 62.4, cor: "#07d7da" },
        { nome: "C++", porcentagem: 18.7, cor: "#ec267f" },
        { nome: "CMake", porcentagem: 15.3, cor: "#f00808" },
        { nome: "Swift", porcentagem: 1.5, cor: "#e38807" },
        { nome: "C", porcentagem: 1.1, cor: "#746b6b" },
        { nome: "HTML", porcentagem: 0.9, cor: "#cc0606" },
        { nome: "Other", porcentagem: 0.1, cor: "#ffffff" },
      ],
      techs: ["Python", "Django", "Flutter", "Dart", "C++"]
    },
    
  ];

  return (
    <section className="portfolio-section" id="projetos">
      <h2 className="portfolio-title">Projetos</h2>

      <div className="cards">
        {projetos.map((p) => (
          <div key={p.id} className="card">

            {/* HEADER */}
          <div className="card-header">
              <img src="/icones/github.png" alt="GitHub" className="icon" />

              <div className="icons-right">
                <a href={p.link} target="_blank" rel="noopener noreferrer">
                  <img src="/icones/link-externo.png" alt="Link" />
                </a>
              </div>
            </div>

            <h3>{p.titulo}</h3>
            <p>{p.desc}</p>

            {/* BARRA */}
            <div className="barra">
              {p.linguagens.map((l, i) => (
                <div
                  key={i}
                  style={{
                    width: `${l.porcentagem}%`,
                    background: l.cor
                  }}
                ></div>
              ))}
            </div>

            {/* LEGENDA */}
            <div className="legenda">
              {p.linguagens.map((l, i) => (
                <span key={i}>
                  <span
                    className="dot"
                    style={{ background: l.cor }}
                  ></span>
                  {l.nome} {l.porcentagem}%
                </span>
              ))}
            </div>

            {/* TAGS */}
            <div className="tags">
              {p.techs.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Projetos;