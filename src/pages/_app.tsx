import "normalize.css";
import "../styles/index.scss";

import { AppProps } from "next/app";

import Layout from "../containers/Layout";

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
