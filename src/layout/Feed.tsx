import React, { FC } from 'react';
import { Routes, Route} from 'react-router-dom';
import { Grid, Box, Paper, List, } from '@mui/material';
import { Outlet } from 'react-router';

const styleFeed = {
    backgroundColor: "#00000080",
    height: '100%',
    overflow: 'visible'
}

const Feed: FC = () => {
    
    return(

    <Grid container sx = {{...styleFeed}} alignItems="center" direction="column">
            <Grid item container direction="column" spacing={1}>
                <Outlet/>
            </Grid>
    </Grid>);
}
export default Feed;
