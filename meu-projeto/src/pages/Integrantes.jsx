import React from "react";
import "../styles/Integrantes.css";

const integrantes = [
  { nome: "Aluno 1", imagem: "aluno1.jpg" },
  { nome: "Aluno 2", imagem: "aluno2.jpg" },
  { nome: "Aluno 3", imagem: "aluno3.jpg" },
];

export default function Integrantes() {
  return (
    <div className="integrantes">
      <h2>Integrantes do Trabalho</h2>
      <div className="grid">
        {integrantes.map((i, index) => (
          <div className="card" key={index}>
            <img src={i.imagem} alt={i.nome} />
            <p>{i.nome}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
