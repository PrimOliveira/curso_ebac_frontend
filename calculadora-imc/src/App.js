import React, { useState } from "react";
import "./index.css";

function App() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState("");

  const calcularIMC = () => {
    if (altura && peso) {
      const alturaEmMetros = altura / 100; // Converte altura para metros
      const resultadoIMC = (peso / (alturaEmMetros * alturaEmMetros)).toFixed(2);
      setImc(resultadoIMC);
      definirClassificacao(resultadoIMC);
    }
  };

  const definirClassificacao = (imc) => {
    if (imc < 18.5) setClassificacao("Abaixo do peso");
    else if (imc >= 18.5 && imc < 24.9) setClassificacao("Peso normal");
    else if (imc >= 25 && imc < 29.9) setClassificacao("Sobrepeso");
    else if (imc >= 30 && imc < 34.9) setClassificacao("Obesidade Grau I");
    else if (imc >= 35 && imc < 39.9) setClassificacao("Obesidade Grau II");
    else setClassificacao("Obesidade Grau III");
  };

  const handleAlturaChange = (e) => {
    setAltura(e.target.value);
    setImc(null);
    setClassificacao("");
  };

  const handlePesoChange = (e) => {
    setPeso(e.target.value);
    setImc(null);
    setClassificacao("");
  };

  return (
    <div className="container">
      <h1>Calculadora de IMC</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Altura (cm):
          <input
            type="number"
            value={altura}
            onChange={handleAlturaChange}
            placeholder="Digite sua altura"
          />
        </label>
        <label>
          Peso (kg):
          <input
            type="number"
            value={peso}
            onChange={handlePesoChange}
            placeholder="Digite seu peso"
          />
        </label>
        <button type="button" onClick={calcularIMC}>
          Calcular IMC
        </button>
      </form>
      {imc && (
        <div className="resultado">
          <p>Seu IMC: <strong>{imc}</strong></p>
          <p>Classificação: <strong>{classificacao}</strong></p>
        </div>
      )}
    </div>
  );
}

export default App;
