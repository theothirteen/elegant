import React from "react";

import HomePage from "./pages";
import { ApolloProvider } from "@apollo/client";
import client from "./client";


const App = () => (
  <HomePage />
);


const RootApp = () => {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};

export default RootApp;
