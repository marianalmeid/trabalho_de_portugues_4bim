import React, { useState } from "react";
import Modal from "../components/Modal";
import "../styles/Personagens.css";

const personagens = [
  {
    nome: "João Romão",
    imagem: "joao.jpg",
    titulo: "João Romão",
    subtitulo: "O ambicioso dono do cortiço",
    texto: "João Romão é o protagonista de 'O Cortiço'. Um homem ambicioso, símbolo da busca pelo enriquecimento a qualquer custo."
  },
  {
    nome: "Bertoleza",
    imagem: "bertoleza.jpg",
    titulo: "Bertoleza",
    subtitulo: "A trabalhadora explorada",
    texto: "Bertoleza é uma mulher negra e trabalhadora que vive com João Romão, sendo explorada por ele até um trágico fim."
  },
  {
    nome: "Rita Baiana",
    imagem: "rita.jpg",
    titulo: "Rita Baiana",
    subtitulo: "Símbolo da sensualidade e alegria popular",
    texto: "Rita Baiana representa a força e alegria do povo simples, trazendo vida e cor ao cortiço."
  }
];

export default function Personagens() {
  const [open, setOpen] = useState(null);

  return (
    <div className="personagens">
      <h2>Personagens Principais</h2>
      <div className="grid">
        {personagens.map((p, i) => (
          <div key={i} className="card" onClick={() => setOpen(i)}>
            <img src={p.imagem} alt={p.nome} />
            <p>{p.nome}</p>
          </div>
        ))}
      </div>

      {personagens.map((p, i) => (
        <Modal
          key={i}
          open={open === i}
          onClose={() => setOpen(null)}
          titulo={p.titulo}
          subtitulo={p.subtitulo}
          texto={p.texto}
        />
      ))}
    </div>
  );
}
