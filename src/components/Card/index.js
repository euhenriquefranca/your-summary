import React from "react";
import Button from "../Button";

import "./styles.css";

export default function Card() {
  return (
    <div className="card-container">
      <p className="summary">Seu resumo</p>
      <p className="invested">Valor investido</p>
      <p className="value">R$ 3.200.876,00</p>
      <p className="profitability">Rentabilidade/mês</p>
      <p className="cdi">CDI</p>
      <p className="gain">Ganho/mês</p>
      <div className="btn">
        <Button title="VER MAIS" />
      </div>
    </div>
  );
}
