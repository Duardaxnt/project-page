import React from 'react';

export default function Skills() {
    return (
        <section className="habilidades" id="habilidades">
            <h2>Habilidades</h2>
            <div className="habilidades-lista">
                <div className="habilidade">
                    <h3>HTML</h3>
                    <p>Criação de estruturas de páginas web.</p>
                </div>
                <div className="habilidade">
                    <h3>CSS</h3>
                    <p>Estilização de páginas web com foco em responsividade.</p>
                </div>
                <div className="habilidade">
                    <h3>JavaScript</h3>
                    <p>Programação de funcionalidades e interatividade em páginas web.</p>
                </div>
                <div className="habilidade">
                    <h3>React</h3>
                    <p>Construção de interfaces de usuário com componentes reutilizáveis.</p>
                </div>
            </div>
        </section>
    );
}