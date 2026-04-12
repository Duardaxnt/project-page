import React from 'react';

export default function Hero() {
    return (
        <header className="hero" id="home">
            <div className="content">
                <h2>Olá! Meu nome é </h2>
                <h1> <span className="destaque">Eduarda de Andrade</span></h1>
                <p>Atuo como <span className="typing">desenvolvedora full stack</span></p>
                <a href="#sobre" className="btn">Sobre mim ⬇</a>
            </div>
        </header>
    );
}