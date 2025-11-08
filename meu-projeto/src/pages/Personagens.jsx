import React, { useState } from "react";
import Modal from "../components/Modal";
import "../styles/Personagens.css";

const personagens = [
  {
    nome: "João Romão",
    imagem: "https://i.postimg.cc/7PWYH424/joaoromao.jpg",
    titulo: "Carta de João Romão para Miranda",
    subtitulo: "Uma carta revelando sua ambição e desejo de ascensão social",
    texto: `Meu caro Miranda,

Escrevo-lhe estas palavras movido por um misto de admiração e inveja. 
Admiro o modo como o senhor conduz seus negócios, o respeito que desperta e a posição que ocupa entre os mais abastados desta cidade. 
Mas confesso-lhe: não me contentarei enquanto não alcançar — ou mesmo superar — o seu prestígio.

Trabalho dia e noite, economizo até o último vintém, e tenho feito do cortiço o alicerce do meu império. 
Sei que muitos me julgam mesquinho, mas o progresso exige sacrifício. 
Um dia, hei de ser reconhecido não como um simples vendeiro, mas como um homem de posses e influência.

Com estima e ambição,
João Romão`
  },
  {
    nome: "Bertoleza",
    imagem: "https://i.postimg.cc/d10wFNQ3/bertoleza.jpg",
    titulo: "Artigo de Opinião por Bertoleza",
    subtitulo: "Uma reflexão sobre a injustiça e a exploração do povo trabalhador",
    texto: `O valor do trabalho sempre foi medido pelo suor do pobre. 
Enquanto uns descansam, outros se dobram sob o peso da labuta e ainda são tratados como se não fossem gente.

Falo por mim e por tantos que, como eu, dedicam suas vidas a enriquecer os patrões. 
A liberdade prometida nunca chega de verdade: trocamos as correntes da senzala pelas da necessidade.

É tempo de o povo trabalhador ser reconhecido. 
Sem nossas mãos, não há riqueza, não há cidade, não há progresso. 
E, mesmo que minha voz se perca no vento, que ecoe a verdade: o mundo é injusto com quem trabalha.`
  },
  {
    nome: "Rita Baiana",
    imagem: "https://i.postimg.cc/fyGNxwct/rita.jpg",
    titulo: "Entrevista com Rita Baiana",
    subtitulo: "A mulher que leva cor e alegria ao cortiço",
    texto: `🗣️ Entrevistador: Rita, como é viver no cortiço?

💃 Rita: É vida danada, mas é vida minha. Aqui tem barulho, tem risada, tem samba... o povo se ajuda, se ama e se desentende, tudo no mesmo dia.

🗣️ Entrevistador: E o que te faz ser tão querida por todos?

💃 Rita: Ah, meu bem, eu sou feita de festa e de liberdade. Gosto de dançar, de viver sem amarras. O povo sente isso — e quem sente alegria, sente amor também.

🗣️ Entrevistador: Você acredita que o cortiço representa o Brasil?

💃 Rita: Representa sim. Aqui tem de tudo: sofrimento, calor, esperança. É mistura de raça, de riso e de dor. Mas é onde o coração bate forte, é onde a gente vive de verdade.`
  }
];

export default function Personagens() {
  const [open, setOpen] = useState(null);

  return (
    <div className="personagens">
      <h1 className="h1-personagens">Gêneros textuais dos Personagens Principais</h1>
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
