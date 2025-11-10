import React from "react";
import "../styles/Autor.css";

export default function Autor() {
  return (
    <div className="autor">
      <img src="https://s5.static.brasilescola.uol.com.br/be/2020/02/azevedo.jpg" alt="" className="img-autor"/>
      <h1 className="h1-autor">Sobre o Autor</h1>
      <h2 className="autor-h2">Aluísio de Azevedo</h2>
      <p className="p-autor">
        <strong>Aluísio Azevedo</strong> foi um importante escritor brasileiro do século XIX,
        conhecido por suas obras naturalistas. Além de "O Cortiço", escreveu "Casa de Pensão" e "O Mulato",
        explorando temas sociais e raciais com forte crítica à sociedade da época.
      </p>
    </div>
  );
}
