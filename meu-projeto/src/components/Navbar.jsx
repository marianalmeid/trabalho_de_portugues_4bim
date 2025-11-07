import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>O Cortiço</h1>
      <ul>
        <li><Link to="/">Início</Link></li>
        <li><Link to="/integrantes">Integrantes</Link></li>
        <li><Link to="/professora">Professora</Link></li>
        <li><Link to="/resumo">Resumo</Link></li>
        <li><Link to="/autor">Autor</Link></li>
        <li><Link to="/personagens">Personagens</Link></li>
      </ul>
    </nav>
  );
}
