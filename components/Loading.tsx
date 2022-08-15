import type { NextPage } from 'next';

import ReactLoading from 'react-loading';

import { LoadingProps } from '../types/index';

import { Grid } from '@mui/material';

const Loading: NextPage<LoadingProps> = ({ type, color }) => {
  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justifyContent='center'
      style={{ minHeight: '100vh', backgroundColor: 'whitesmoke' }}
    >
      <ReactLoading type={type} color={color} height={'20%'} width={'20%'} />
    </Grid>
  );
};

export default Loading;
