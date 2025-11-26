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
    nome: "Barão Miranda",
    imagem: "https://i.postimg.cc/W4GSGbLM/miranda.jpg",
    titulo: "Entrevista com o Barão Miranda",
    subtitulo: "A ascensão social de um homem que sempre buscou distinção",
    texto: `
Repórter: Excelência, parabéns pela nomeação. Como recebe o título de barão?

Miranda: Agradeço. Recebo-o como reconhecimento natural de meus esforços, de minha posição e de meu compromisso com a ordem e o progresso. É um título que honra minha família.

Repórter: Muitos comentam que o senhor sempre buscou distinção social. Este título representa a realização desse desejo?

Miranda: Representa, sobretudo, a confirmação de um trabalho sério. Quem se dedica à boa administração, à moral e às tradições acaba colhendo frutos.

Repórter: O cortiço fica muito próximo de sua propriedade. O senhor acredita que o título muda sua relação com o lugar ou com seus vizinhos?

Miranda: Minha relação permanece a mesma: distância respeitosa. Cada um ocupa o espaço que lhe cabe. O título apenas oficializa uma diferença que já existia.

Repórter: E quanto à sua imagem pública? Acredita que o título reforça sua autoridade?

Miranda: Sem dúvida. A sociedade valoriza símbolos. E o título é um deles — uma marca de distinção que reafirma meu papel na comunidade.

Repórter: Para finalizar: o que o barão Miranda espera daqui em diante?

Miranda: Apenas continuar ascendendo. Títulos são degraus, não destinos.`
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
