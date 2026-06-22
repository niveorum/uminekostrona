import { FC } from 'react';
import { Grid, Box } from '@mui/material';
import Leftbar from './Leftbar';
import Feed from './Feed';
import Footer from '../components/Footer';

const Home: FC = () => {
  return (
    <Box>
      <Grid container sx={{ paddingTop: '68px' }}>
        <Grid item md={3} xs={2} sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'flex-end' },
          pt: 2,
          pr: { md: 2 },
        }}>
          <Leftbar />
        </Grid>
        <Grid item md={6} xs={9} sx={{ pt: 2, pb: 2 }}>
          <Feed />
        </Grid>
        <Grid item md={3} xs={1} />
      </Grid>
      <Footer />
    </Box>
  );
};

export default Home;
