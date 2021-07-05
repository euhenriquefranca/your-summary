import React, { useEffect } from "react";

import Card from "./components/Card";
import { summary } from "./graphql/summary";
import { gql } from "@apollo/client";
import "./App.css";

function App() {
  useEffect(() => {
    initial();
  }, []);

  function initial() {
    summary
      .query({
        query: gql`
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
        `,
      })
      .then((res) => console.log(res));
  }

  return (
    <div className="container">
      <Card />
    </div>
  );
}

export default App;
