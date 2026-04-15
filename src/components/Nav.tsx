/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="logo">Σ.Λ</div>

      <button
        type="button"
        className="menu-toggle"
        aria-label="Abrir menu de navegação"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li>
            <a href="#sobre" onClick={() => setMenuOpen(false)}>
              Sobre
            </a>
          </li>
          <li>
            <a href="#experiencia" onClick={() => setMenuOpen(false)}>
              Experiência
            </a>
          </li>
          <li>
            <a href="#projetos" onClick={() => setMenuOpen(false)}>
              Projetos
            </a>
          </li>
          <li>
            <a href="#contato" onClick={() => setMenuOpen(false)}>
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
