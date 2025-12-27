import React from 'react';

export default function About() {
    return (
        <section className="sobre" id="sobre">
            <div className="container">
                <div className="descricao">
                    <h1>Sobre <span>mim</span></h1>
                    <h2>Meu nome é Nathali Eduarda de Andrade</h2>
                    <h3>desenvolvedora Full-Stack</h3>

                    <p>
                        Tenho experiência com desenvolvimento Front-End e estou em constante evolução na área de tecnologia. Possuo conhecimentos em React, Node.js, HTML, CSS, JavaScript, TypeScript, Python, C, SQL, Git e GitHub, além de ser certificada AWS Certified Cloud Practitioner, o que reforça minha base em computação em nuvem e boas práticas de infraestrutura.
                    </p>
                    <p>
                        Sou graduanda em Análise e Desenvolvimento de Sistemas e apaixonada por criar interfaces modernas, responsivas e funcionais. Busco sempre aprender novas ferramentas e metodologias que aprimorem minhas entregas e a qualidade do código.
                    </p>
                    <p>
                        Também tenho interesse pela área de Recursos Humanos, o que contribui para o meu desenvolvimento em comunicação, colaboração e trabalho em equipe dentro dos projetos.
                    </p>
                    <p>
                        Atualmente, estou em busca de oportunidades como desenvolvedora Full Stack, onde possa aplicar meus conhecimentos e continuar crescendo profissionalmente.
                    </p>
            
                    <p><strong>E-mail:</strong> eduardacadem99@gmail.com</p>
                    <p><strong>Local:</strong> João Pessoa, Paraíba, Brazil</p>
                    <a href="/Curriculo_Nathali_Andrade-1.pdf" download className="btn-curriculo">Meu Currículo</a>
                </div>
            </div>
        </section>
    );
}