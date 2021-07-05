import { useQuery } from "@apollo/client";
import React, { createContext, useContext } from "react";
import { GET_YOUR_SUMMARY } from "../graphql";

const MyContext = createContext();

export default function SummaryContextProvider({ children }) {
  const { data, loading } = useQuery(GET_YOUR_SUMMARY);
  return (
    <MyContext.Provider
      value={{
        summary: {
          itens: data ? data.wealthSummary : [],
          loading,
        },
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export function useSummaryContext() {
  return useContext(MyContext);
}
