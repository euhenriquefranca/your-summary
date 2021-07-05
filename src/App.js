import React from "react";

import Card from "./components/Card";
import { summary } from "./config/summary-graphql";
import { ApolloProvider } from "@apollo/client";
import SummaryContextProvider from "./context/SummaryContext";
import "./App.css";

function App() {
  return (
    <ApolloProvider client={summary}>
      <SummaryContextProvider>
        <div className="container">
          <Card />
        </div>
      </SummaryContextProvider>
    </ApolloProvider>
  );
}

export default App;
