import React from "react";
import "../styles/Integrantes.css";

const integrantes = [
  {
    nome: "Emanuelle",
    imagem: "https://i.postimg.cc/fRPttdFG/eu.jpg",
    email: "emanuelle.2008@alunos.utfpr.edu.br",
    escolaridade: "3º ano do Técnico Integrado em Informática - UTFPR"
  },
  {
    nome: "José Eduardo",
    imagem: "https://i.postimg.cc/bwrSwg6G/jose.jpg",
    email: "jose.2008@alunos.utfpr.edu.br",
    escolaridade: "3º ano do Técnico Integrado em Informática - UTFPR"
  },
  {
    nome: "Maria Macedo",
    imagem: "https://i.postimg.cc/wBbVB3c3/Imagem-do-Whats-App-de-2025-11-07-a-s-20-06-37-984ad6b6.jpg",
    email: "mariasouza.2008@alunos.utfpr.edu.br",
    escolaridade: "3º ano do Técnico Integrado em Informática - UTFPR"
  },
  {
    nome: "Mariana",
    imagem: "https://i.postimg.cc/9FGJBmVw/Imagem-do-Whats-App-de-2025-11-07-a-s-20-06-04-c4ff7b04.jpg",
    email: "marianacristinaalmeida@alunos.utfpr.edu.br",
    escolaridade: "3º ano do Técnico Integrado em Informática - UTFPR"
  },
  {
    nome: "Ralielly",
    imagem: "https://i.postimg.cc/sDVZts7N/rally.jpg",
    email: "raliellysilva@alunos.utfpr.edu.br",
    escolaridade: "3º ano do Técnico Integrado em Informática - UTFPR"
  }
];

export default function Integrantes() {
  return (
    <div className="integrantes">
      <h2>Integrantes do Trabalho</h2>
      <div className="grid">
        {integrantes.map((i, index) => (
          <div className="card" key={index}>
            <img src={i.imagem} alt={i.nome} />
            <p className="nome">{i.nome}</p>
            <p className="email">{i.email}</p>
            <p className="escolaridade">{i.escolaridade}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
