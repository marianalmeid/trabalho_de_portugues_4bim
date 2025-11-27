import React, { useState } from "react";
import Modal from "../components/Modal";
import "../styles/Personagens.css";

const personagens = [
  {
    nome: "João Romão",
    imagem: "https://i.postimg.cc/7PWYH424/joaoromao.jpg",
    titulo: "Carta de alforria de Bertoleza por João Romão",
    subtitulo: "",
    texto: `Rio de Janeiro, 12 de agosto de 1883

Eu, José Freitas de Melo, casado, senhor e legítimo possuidor da escravizada Bertoleza, de cor preta, de cerca de quarenta anos, cozinheira e conhecida por seus bons serviços, declaro que a mesma adquiriu sua liberdade mediante pagamento, tendo-me entregue integralmente a quantia estabelecida entre as partes.

Pelo valor recebido e pela fiel satisfação das condições ajustadas, concedo-lhe plena e definitiva alforria, ficando desde esta data livre de qualquer cativeiro, podendo viver, trabalhar, contratar e negociar como pessoa emancipada, sem que sobre ela recaia vínculo ou obrigação para comigo, meus herdeiros ou sucessores.

A referida liberdade é plena, irrevogável e imediata, não havendo dívida pendente, prazo a cumprir ou condição adicional. Peço às autoridades policiais, civis e judiciais que reconheçam esta carta como título legítimo de sua liberdade, devendo a dita Bertoleza ser tratada como pessoa livre, não podendo ser reclamada por quem quer que seja.

E, para firmeza e validade do que fica declarado, assino a presente: José Freitas de Melo (assinatura grosseiramente imitada por João Romão).

Testemunhas idôneas que presenciam e atestam o presente ato: Manuel Joaquim de Araújo, comerciante; Antônio Pereira da Fonseca, costureiro; Maria do Carmo Leitão, lavadeira — todos residentes nesta cidade, que abaixo subscrevem para fins de comprovação.`
  },
  {
    nome: "Rita Baiana",
    imagem: "https://i.postimg.cc/Dw1GfLpw/rita-baiana.jpg",
    titulo: "O preconceito que mora entre nós",
    subtitulo: "Por Rita Baiana",
    texto: `No cortiço, todos vivem próximos, dividindo paredes finas, fome, festa e briga. Mesmo assim, existe um mal que pesa mais do que o calor do verão: o preconceito. Falo do olhar torto que muitos lançam a quem dança, ama e vive sem pedir licença para ninguém.

Ser mulher e ser livre neste lugar é quase um desafio. Julgam minha dança, meu jeito de falar, minha alegria. Dizem que eu “provoco demais”, quando na verdade só vivo como o coração manda. Mas por que a felicidade de uma mulher incomoda tanto? Será porque muitos aqui aprenderam a esconder seus desejos e ficam ofendidos ao ver alguém que não tem medo de senti-los?

Defendo que cada um cuide da própria vida. O cortiço já tem miséria demais para carregarmos também preconceitos. Se todos olhassem mais para dentro e menos para os passos dos outros, talvez a vida aqui fosse mais leve.

A alegria não é crime. E se é pecado viver intensamente, então eu assumo: sou pecadora, mas sou livre.

Rita Baiana`
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
