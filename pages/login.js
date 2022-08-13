/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';

import { signInWithPopup } from '@firebase/auth';
import { auth, provider } from '../firebase';

import { Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import styled from 'styled-components';

const login = () => {
  const loginWithGoogle = () => {
    signInWithPopup(auth, provider);
  };

  return (
    <Container>
      <Login>
        <Image src='/login.jpeg' height={100} width={100} />
        <Button startIcon={<GoogleIcon />} onClick={loginWithGoogle}>
          Login with google
        </Button>
      </Login>
    </Container>
  );
};

export default login;

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: rgb(149, 255, 176);
  width: 100vw;
`;

const Login = styled.div`
  padding: 30px;
  display: flex;
  gap: 20px;
  background-color: white;
  border-radius: 15px;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  transform: translateY(0);

  :hover {
    transform: translateY(-10px);
  }

  button {
    color: gray;
    font-weight: bolder;
    font-size: 1.5rem;
  }
`;
