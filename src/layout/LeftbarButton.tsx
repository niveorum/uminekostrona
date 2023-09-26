import React, { FC, ReactElement } from 'react';
import { Link} from 'react-router-dom';
import { Typography, Grid, Box, Icon,} from '@mui/material';

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
    backgroundColor: "#00000080",
    '&:hover': {
        borderRadius: 8,
        border: 2,
        borderColor: 'primary.main',
     },
}

interface LeftbarButtonProps{
    title:string;
    link:string;
    icon:ReactElement;
}

const LeftbarButton: FC <LeftbarButtonProps> = (props) => {
    return (<Link to={props.link} style={{ textDecoration: 'none' }}>
                <Grid item sx={{...styleItem}}>
                    <Grid item>
                        {props.icon}
                    </Grid>
                    <Grid item>
                        <Typography sx={{...styleHidden}}>{props.title}</Typography>
                    </Grid>
                </Grid>
            </Link>)

    
}
export default LeftbarButton