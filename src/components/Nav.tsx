/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export default function Navbar() {
  return (
    <header className="navbar">
      
      <div className="logo">Σ.Λ</div>

      <nav>
        <ul className="nav-links">
          <li><a href="/" className="active">Home</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#experiencia">Experiência</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}