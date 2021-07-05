import { gql } from "@apollo/client";

export const GET_YOUR_SUMMARY = gql`
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
