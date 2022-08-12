/* eslint-disable jsx-a11y/alt-text */
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
      <div>
        <Image src='/messenger-icon.jpeg' height={320} width={320} />
        <h2>Herb Chat Messenger</h2>
        <p>Select a contact and use the messenger.</p>
      </div>
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

  & div {
    width: 50%;
    text-align: center;
  }

  & h2 {
    color: #727372;
  }

  & p {
    color: #b7b9bb;
  }

  & img {
    border-radius: 1rem;
  }
`;
