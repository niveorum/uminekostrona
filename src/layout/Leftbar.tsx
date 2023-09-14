import React, { FC } from 'react';
import { Link} from 'react-router-dom';
import { Typography, Grid, Box,} from '@mui/material';


const styleHidden = {
    display: {xs: 'none', sm:'none', md:'none', lg:'flex', xl:'flex'},
    marginLeft: 3,
    lineHeight: 0.5,
}

const styleItem = {
    display: "flex",
    color: 'primary.main',
    //justifyContent:"space-between",
    direction: 'row',
    textAlign: 'center',
    alignItems:'center',
    verticalAlign:'middle',
    marginBottom: '20px',
    cursor: 'pointer',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    padding: 1,
    lineHeight: 0,
    border: 2,
    borderColor: '#00000000',
    borderRadius: 8,
    '&:hover': {
        borderRadius: 8,
        border: 2,
        borderColor: 'primary.main',
     },
}

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
            <Link to='/dupa' style={{ textDecoration: 'none' }}>
                <Grid item sx={{...styleItem}}>
                    <Grid item>
                        A
                    </Grid>
                    <Grid item>
                        <Typography sx={{...styleHidden}}>A</Typography>
                    </Grid>
                </Grid>
            </Link>
            <Link to='/cyce' style={{ textDecoration: 'none' }}>
                <Grid item sx={{...styleItem}}>
                    <Grid item>
                        B
                    </Grid>
                    <Grid item>
                        <Typography sx={{...styleHidden}}>B</Typography>
                    </Grid>
                </Grid>
            </Link>
        </Grid>
    </Grid>
    </Box>
    );
}
export default Leftbar;
