import React, { FC } from 'react';
import { Routes, Route} from 'react-router-dom';
import { Grid, Box, Paper, List, } from '@mui/material';
import { Outlet } from 'react-router';

const styleFeed = {
    backgroundColor: "#00000080",
    height: '100%',
    overflow: 'visible',
    padding: "2%",
    color: "white",
    img: {
        maxWidth: '100%',
        maxHeight: '100%'
    }
}

const Feed: FC = () => {
    
    return(

    <Grid container sx = {{...styleFeed}} alignItems="center" direction="column">
        <Outlet/>
    </Grid>);
}
export default Feed;
