import React from "react";
import { Provider } from "react-redux";
import { Store } from "./store";

export const Providers: React.FC = ({ children }) => {
  return <Provider store={Store}>{children}</Provider>;
};
