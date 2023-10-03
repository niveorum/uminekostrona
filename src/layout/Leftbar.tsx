import React, { FC } from 'react';
import { Grid, Box,} from '@mui/material';
import LeftbarButton from './LeftbarButton';
import {Brush, Newspaper, VideogameAsset} from '@mui/icons-material';

const Leftbar: FC = () => {

    return(
        <Box m={1}>
            <Grid item flexDirection='column' position="fixed">
                <Grid container flexDirection='column'>
                    <LeftbarButton link = {'/'} title = {'Newsy'} icon = {<Newspaper/>}/>
                    <LeftbarButton link = {'/games'} title = {'Visual Novelki'} icon = {<VideogameAsset/>}/>
                    <LeftbarButton link = {'/gallery'} title = {'Galeria'} icon = {<Brush/>}/>
                    <LeftbarButton link = {'/discord'} title = {'Discord'} icon = {<img width={24} height={24} src="/discord-v2.svg" alt="My SVG" />}/>
                </Grid>
            </Grid>
        </Box>
    );
}
export default Leftbar;