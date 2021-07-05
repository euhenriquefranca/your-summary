import React from "react";

import Card from "./components/Card";
import { summary } from "./graphql/summary";
import { ApolloProvider } from "@apollo/client";
import "./App.css";

function App() {
  return (
    <ApolloProvider client={summary}>
      <div className="container">
        <Card />
      </div>
    </ApolloProvider>
  );
}

export default App;
