import React, { FC} from 'react';
import { AppBar, Toolbar, Typography, Grid } from '@mui/material'

const style_toolbar = {
    display: "flex",
    justifyContent:"space-between",
    whiteSpace: "nowrap",
}

const Navbar: FC = () => {
    return(
    <Grid container position="fixed" zIndex={10000}>
        <Grid item md={3} xs={0} position="sticky"></Grid>
        <Grid item md={5} xs={12} position="sticky">
            <AppBar position="sticky">
                <Toolbar sx={{...style_toolbar}}>
                    <Typography variant='h4' component='span'>
                        Umineko.pl
                    </Typography>
                </Toolbar>
            </AppBar>
        </Grid>
        <Grid item md={4} xs={0} position="sticky"></Grid>
    </Grid>
    );
}
export default Navbar;
