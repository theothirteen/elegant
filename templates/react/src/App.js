import React from "react";

import { createStore } from "redux";
import { Provider } from "react-redux";
import HomePage from "./pages";
import rootReducer from "./state/rootReducer";

const store = createStore(rootReducer);

const App = () => (
  <HomePage />
);


const RootApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default RootApp;
