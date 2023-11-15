import { FC, ReactElement } from 'react';
import { Link} from 'react-router-dom';
import { Typography, Grid } from '@mui/material';
import React from 'react';

const styleHidden = {
    display: {
        xs: 'none', 
        sm:'none', 
        md:'none', 
        lg:'flex', 
        xl:'flex'
    },
    marginLeft: 3,
    lineHeight: 0.5,
}

const styleItem = {
    display: "flex",
    color: '#ffffff',
    fontWeight: 'bold',
    direction: 'row',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: { 
        xs: 'center', 
        md: 'flex-start' 
    },
    verticalAlign: 'middle',
    marginBottom: '20px',
    cursor: 'pointer',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    padding: 1,
    lineHeight: 0,
    border: 1,
    borderColor: '#00000000',
    borderRadius: 8,
    backgroundColor: "#00000080",
    '&:hover': {
      borderRadius: 8,
      border: 1,
      borderColor: '#ffffff',
      color: '#ffffff',
    },
}

interface LeftbarButtonProps {
    title: string;
    link: string;
    icon: ReactElement;
    useDefaultIconSize?: boolean;
}
  
const LeftbarButton: FC<LeftbarButtonProps> = (props) => {
const iconStyle = props.useDefaultIconSize ? {} : { fontSize: '24px' };
    return (
            <Link to={props.link} style={{ textDecoration: 'none' }}>
                <Grid item sx={{ ...styleItem }}>
                    <Grid item>
                        {React.cloneElement(props.icon, { style: iconStyle })}
                    </Grid>
                    <Grid item>
                        <Typography sx={{ ...styleHidden }}>{props.title}</Typography>
                    </Grid>
                </Grid>
            </Link>
    )
}
export default LeftbarButton