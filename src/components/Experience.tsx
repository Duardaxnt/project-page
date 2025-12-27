import React from 'react';

export default function Experience() {
    return (
        <section className="experiencia" id="experiencia"> {/* adiciona id aqui */}
            <h2>Experiência</h2>
            <div className="timeline">
                <div className="linha"></div>
                <div className="item esquerda">
                    <div className="card">
                        <h3>Compass UOL</h3>
                        <p><strong>Estagiária em Desenvolvimento Full-Stack</strong></p>
                        <p>Março 2025 – Agosto 2025</p>
                    </div>
                </div>
            </div>
        </section>
    );
}