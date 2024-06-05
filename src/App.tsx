import "./App.css";
import logoImg from "./assets/logo.png";

function App() {
  return (
    <div>
      <main className="container">
        <img src={logoImg} alt="logo-calculator" className="logo-img" />
        <h1 className="title">Qual melhor escolha?</h1>

        <form action="">
          <label>Gasolina (preço por litro):</label>

          <input
            className="input"
            type="number"
            placeholder="R$ 5,60"
            min="1"
            step="0.01"
            required
          />

          <label>Álcool (preço por litro):</label>

          <input
            className="input"
            type="number"
            placeholder="R$ 3,99"
            min="1"
            step="0.01"
            required
          />

          <input type="submit" value="Calcular" className="button" />
        </form>
      </main>
    </div>
  );
}

export default App;
