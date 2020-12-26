import { AppProps } from 'next/app'
import Layout from '../containers/Layout';
import 'normalize.css';
import '../styles/index.scss';


function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App;