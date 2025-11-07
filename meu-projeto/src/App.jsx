import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Integrantes from "./pages/Integrantes";
import Professora from "./pages/Professora";
import Resumo from "./pages/Resumo";
import Autor from "./pages/Autor";
import Personagens from "./pages/Personagens";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/integrantes" element={<Integrantes />} />
          <Route path="/professora" element={<Professora />} />
          <Route path="/resumo" element={<Resumo />} />
          <Route path="/autor" element={<Autor />} />
          <Route path="/personagens" element={<Personagens />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
