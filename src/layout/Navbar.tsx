import React, { FC} from 'react';
import { AppBar, Toolbar, Typography, Grid } from '@mui/material'

const style_toolbar = {
    backgroundColor: "#00000000",
    display: "flex",
    justifyContent:"space-between",
    whiteSpace: "nowrap",
    marginLeft: "45%",
    marginRight: "37%"
}

const Navbar: FC = () => {
    return(
    <Grid container position="fixed" zIndex={10000}>
        <Grid item md={3} xs={0} position="sticky"></Grid>
        <Grid item md={5} xs={12} position="sticky">
            <Toolbar sx={{...style_toolbar}}>
                <img width={200} style={{margin: 'auto'}} src={"umilogo.png"}/>
            </Toolbar>
        </Grid>
        <Grid item md={4} xs={0} position="sticky"></Grid>
    </Grid>
    );
}
export default Navbar;
