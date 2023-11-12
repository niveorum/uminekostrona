import { FC } from 'react';
import { Toolbar, Grid } from '@mui/material'

const style_toolbar = {
    backgroundColor: "#00000000",
    display: "flex",
    justifyContent:"space-between",
    whiteSpace: "nowrap",
    marginTop: '5px'
}

const Navbar: FC = () => {
    return(
    <Grid container position="fixed" zIndex={10000}>
        <Grid item xs={12} position="sticky">
            <Toolbar sx={{...style_toolbar}}>
                <img width={215} style={{margin: 'auto'}} src={"/umilogo.png"}/>
            </Toolbar>
        </Grid>
    </Grid>
    );
}
export default Navbar;
