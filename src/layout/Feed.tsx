import { FC } from 'react';
import { Grid } from '@mui/material';
import { Outlet } from 'react-router';

const styleFeed = {
    backgroundColor: "#00000080",
    height: '100%',
    padding: "2%",
    color: "white",
    img: {
        maxWidth: '100%',
        maxHeight: '100%'
    },
    marginBottom: "2%",
}

const Feed: FC = () => {
    
    return(
    <Grid container sx = {{...styleFeed}} alignItems="center" direction="column">
        <Outlet/>
    </Grid>);
}
export default Feed;
