import React from "react";

import SummaryContextProvider from "./context/SummaryContext";
import { summary } from "./config/summary-graphql";
import { ApolloProvider } from "@apollo/client";
import Summary from "./components/Summary";
import "./App.css";

function App() {
  return (
    <ApolloProvider client={summary}>
      <SummaryContextProvider>
        <div className="container">
          <Summary />
        </div>
      </SummaryContextProvider>
    </ApolloProvider>
  );
}

export default App;
