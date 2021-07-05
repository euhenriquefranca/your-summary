import React from "react";
import { useSummaryContext } from "../../context/SummaryContext";
import Item from "../Item";

import "./styles.css";

const ContainerSummary = ({ children }) => (
  <div className="container">{children}</div>
);
export default function Card() {
  const { summary } = useSummaryContext();
  if (summary.loading)
    return <ContainerSummary>Carregando...</ContainerSummary>;

  return (
    <ContainerSummary>
      {summary.itens.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </ContainerSummary>
  );
}
