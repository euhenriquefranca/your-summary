import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/client/link/ws";

const { REACT_APP_HASURA_ADMIN_SECRET } = process.env;
const { REACT_APP_HASURA_GRAPHQL_URL } = process.env;
const { REACT_APP_HASURA_GRAPHQL_WSS } = process.env;

const cache = new InMemoryCache();

const headers = {
  "content-type": "application/json",
  "x-hasura-admin-secret": REACT_APP_HASURA_ADMIN_SECRET,
};
const getHeaders = () => {
  return headers;
};

const wsLink = new WebSocketLink({
  uri: REACT_APP_HASURA_GRAPHQL_WSS,
  options: {
    reconnect: true,
    lazy: true,
    connectionParams: {
      headers: getHeaders(),
    },
  },
});

const httpLink = new HttpLink({
  uri: REACT_APP_HASURA_GRAPHQL_URL,
  headers: getHeaders(),
});

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  httpLink
);

export const summary = new ApolloClient({
  link,
  cache: cache,
});
