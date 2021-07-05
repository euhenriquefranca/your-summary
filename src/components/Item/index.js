import React from "react";
import Button from "../Button";
import More from "../More";

import "./styles.css";

export default function Item({ item }) {
  return (
    <div className="item">
      <div className="header">
        <span className="summary">Seu resumo</span>
        <div className="more-svg">
          <More />
        </div>
      </div>
      <p className="invested">Valor investido</p>
      <p className="value">
        {item.total.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
      <div className="profitability-container">
        <p className="profitability">Rentabilidade/mês</p>
        <p className="profitability-value">{item.profitability.toFixed(3)}%</p>
      </div>
      <div className="cdi-container">
        <p className="cdi">CDI</p>
        <p className="cdi-value">{item.cdi.toFixed(2)}%</p>
      </div>
      <div className="gain-container">
        <p className="gain">Ganho/mês</p>
        <p className="gain-value">
          {item.gain.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
      <div className="line"></div>
      <div className="btn">
        <Button title="VER MAIS" />
      </div>
    </div>
  );
}
