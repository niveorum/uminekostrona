import React, { FC } from 'react';

import { Grid } from '@mui/material';
import Leftbar from './Leftbar';
import Feed from './Feed'

const styleItem = {
    paddingTop: 10,
    flexDirection: 'column',
    alignItems: {xs:'flex-start', sm:'center'},
};

const styleHidden = {
    display: {xs:'none', sm:'inline'}
}

export const Home: FC = () => {
    return(
    <Grid container>
        <Grid container md={3} xs={2} sx={styleItem } ><Leftbar/></Grid>
        <Grid item md={5} xs={9} sx={{...styleItem} }><Feed/></Grid>
        <Grid item md={4} xs={1} sx={{...styleItem, ...styleHidden}} position="sticky"><div/></Grid>
    </Grid>
    );
}

export default Home