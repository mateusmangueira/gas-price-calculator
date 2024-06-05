import { useState, FormEvent } from "react";
import logoImg from "./assets/logo.png";
import "./App.css";

import { calculatePrice, formatCurrency } from "./utils";

interface InfoProps {
  result: string;
  gasPrice: string | number;
  ethanolPrice: string | number;
}

function App() {
  const [gasPrice, setGasPrice] = useState(0);
  const [ethanolPrice, setEthanolPrice] = useState(0);
  const [info, setInfo] = useState<InfoProps>();

  function handleFormSubmit(event: FormEvent) {
    event.preventDefault();
    const calculo = calculatePrice(gasPrice, ethanolPrice);
    const newGasPrice = formatCurrency(gasPrice);
    const newEthanolPrice = formatCurrency(ethanolPrice);

    calculo <= 0.7
      ? setInfo({
          result: "Etanol",
          gasPrice: newGasPrice,
          ethanolPrice: newEthanolPrice,
        })
      : setInfo({
          result: "Gasolina",
          gasPrice: newGasPrice,
          ethanolPrice: newEthanolPrice,
        });
  }

  function handleFormReset() {
    setGasPrice(0);
    setEthanolPrice(0);
  }

  return (
    <div>
      <main className="container">
        <img src={logoImg} alt="logo-calculator" className="logo-img" />
        <h1 className="title">Qual melhor opção?</h1>

        <form
          onSubmit={handleFormSubmit}
          className="form"
          onReset={handleFormReset}
        >
          <label>Gasolina (preço por litro):</label>

          <input
            className="input"
            type="number"
            placeholder="Digite o preço da gasolina"
            min="1"
            step="0.01"
            value={gasPrice === 0 ? "" : gasPrice}
            onChange={(e) => setGasPrice(Number(e.target.value))}
            required
          />

          <label>Etanol (preço por litro):</label>

          <input
            className="input"
            type="number"
            placeholder="Digite o preço do etanol"
            min="1"
            step="0.01"
            value={ethanolPrice === 0 ? "" : ethanolPrice}
            onChange={(e) => setEthanolPrice(Number(e.target.value))}
            required
          />

          <input type="submit" value="Calcular" className="button" />
          <input type="reset" value="Limpar" className="clear-button" />
        </form>

        {info && Object.keys(info).length > 0 && (
          <section className="result">
            <h2 className="result-title">Compensa usar {info.result}</h2>
            <span>Preço gasolina: {info.gasPrice} </span>
            <span>Preço etanol: {info.ethanolPrice}</span>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
