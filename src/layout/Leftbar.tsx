import React, { FC } from 'react';
import { Link} from 'react-router-dom';
import { Typography, Grid, Box,} from '@mui/material';
import LeftbarButton from './LeftbarButton';


const styleBox = {
    borderRadius: 2,
    border: 1,
    borderColor: 'primary.main',
    padding: 5,
}

const Leftbar: FC = () => {

    return(
    <Box m={1}>
    <Grid item flexDirection='column' position="fixed">
        <Grid container flexDirection='column'>
            <LeftbarButton link = {'/dupa'} title = {'chuj'} icon = {<div>pizda</div>}/>
        </Grid>
    </Grid>
    </Box>
    );
}
export default Leftbar;

// DRY - don't repeat yourself
