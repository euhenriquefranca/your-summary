import React from "react";
import { gql, useQuery } from "@apollo/client";
import Item from "../Item";

import "./styles.css";

const GET_YOUR_SUMMARY = gql`
  query MyQuery {
    wealthSummary {
      cdi
      gain
      hasHistory
      id
      profitability
      total
    }
  }
`;

const ContainerSummary = ({ children }) => (
  <div className="container">{children}</div>
);
export default function Card() {
  const { loading, data } = useQuery(GET_YOUR_SUMMARY);

  if (loading) return <ContainerSummary>Carregando...</ContainerSummary>;

  return (
    <ContainerSummary>
      {data.wealthSummary.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </ContainerSummary>
  );
}
