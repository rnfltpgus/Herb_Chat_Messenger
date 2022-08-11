import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import styled from 'styled-components';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Herb Chat Messenger</title>
        <meta name='description' content='Herb Chat Messenger' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      index 영역
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8fafc;
  width: 100%;
  height: 100%;
  background-color: #ff9361;
`;
