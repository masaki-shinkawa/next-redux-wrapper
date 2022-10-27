import "../styles/globals.css";
import type { AppProps } from "next/app";
import { wrapper } from "../store/store";
import { FC } from "react";
import { Provider } from "react-redux";

const App: FC<AppProps> = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  );
};

export default App;
