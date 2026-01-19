import { Provider } from "react-redux";
import store from "@/store";
import { type PropsWithChildren } from "react";

const ReduxProvider = ({ children }: PropsWithChildren) => (
  <Provider store={store}>{children}</Provider>
);

export default ReduxProvider;
