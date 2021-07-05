import React from "react";
import Item from "../Item";

import "./styles.css";

export default function Card({ item, loading }) {
  const { total, profitability, cdi, gain } = item;
  return (
    <div className="container">
      {loading ? (
        "Carregando..."
      ) : (
        <Item
          total={total}
          profitability={profitability}
          cdi={cdi}
          gain={gain}
        />
      )}
    </div>
  );
}
