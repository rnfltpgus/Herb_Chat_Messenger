import type { NextPage } from 'next';
import { AppProps } from 'next/app';

import { AuthProvider } from '../Auth';
import Layout from '../components/Layout';

import '../styles/globals.css';

const MyApp: NextPage = ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
};

export default MyApp;
