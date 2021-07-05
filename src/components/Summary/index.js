import React from "react";
import { useSummaryContext } from "../../context/SummaryContext";
import Card from "../Card";

export default function SummaryContainer() {
  const { summary } = useSummaryContext();
  return (
    <div>
      {summary.itens.map((item, index) => (
        <Card key={index} item={item} loading={summary.loading} />
      ))}
    </div>
  );
}
