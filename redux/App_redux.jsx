import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import ProductList from "./ProductList";

const AppRedux = () => {
  return (
    <Provider store={store}>
      <ProductList />
    </Provider>
  );
};

export default AppRedux;
