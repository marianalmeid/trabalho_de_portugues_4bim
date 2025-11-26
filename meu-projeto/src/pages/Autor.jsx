import React from "react";
import "../styles/Autor.css";

export default function Autor() {
  return (
    <div className="autor">
      <img src="https://s5.static.brasilescola.uol.com.br/be/2020/02/azevedo.jpg" alt="" className="img-autor"/>
      <h1 className="h1-autor">Sobre o Autor</h1>
      <h2 className="autor-h2">Aluísio de Azevedo</h2>
      <p className="p-autor">
        <strong>Aluísio Azevedo</strong> foi um escritor, jornalista e diplomata brasileiro, considerado o principal nome e introdutor do Naturalismo na literatura brasileira. Nascido em São Luís, no Maranhão, em 1857, ele é mais conhecido por obras como "O Mulato" (que marca o início do Naturalismo no Brasil), "Casa de Pensão" e "O Cortiço", que retratam a sociedade de forma crítica e pessimista, influenciado por Eça de Queirós e Émile Zola. Além de escritor, foi caricaturista e se tornou diplomata em 1895, morrendo em Buenos Aires em 1913. 
      </p>
    </div>
  );
}
