import { FC } from 'react';


import { Grid } from '@mui/material';
import Leftbar from './Leftbar';
import Feed from './Feed'
import Footer from '../components/Footer';

const styleItem = {
    paddingTop: 10,
    flexDirection: 'column',
    alignItems: {xs:'flex-start', md:'center'},
};

const styleFeedParent = {
    minHeight: "92vh"
}

const styleHidden = {
    display: {xs:'none', md:'inline'}
}

export const Home: FC = () => {
    return(
    <Grid container>
        <Grid container md={3} xs={2} sx={styleItem } ><Leftbar/></Grid>
        <Grid container md={6} xs={9} sx={{...styleItem, ...styleFeedParent} }><Feed/></Grid>
        <Grid item md={3} xs={1} sx={{...styleItem, ...styleHidden}} position="sticky"><div/></Grid>
        <Grid item xs={12}><Footer/></Grid>
    </Grid>
    );
}

export default Home