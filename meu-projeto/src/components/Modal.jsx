import React from "react";
import "../styles/Modal.css";

export default function Modal({ open, onClose, titulo, subtitulo, texto }) {
  if (!open) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{titulo}</h2>
        <h4>{subtitulo}</h4>
        <p>{texto}</p>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
}
