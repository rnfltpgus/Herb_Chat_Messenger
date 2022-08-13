import { AuthProvider } from '../Auth';

import Layout from '../components/Layout';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
};

export default MyApp;
