import React, { FC } from 'react';
import { Grid, Box } from '@mui/material';
import LeftbarButton from './LeftbarButton';
import { Brush, Newspaper, VideogameAsset } from '@mui/icons-material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

const Leftbar: FC = () => {
  return (
    <Box m={1}>
      <Grid item flexDirection='column' position="fixed">
        <Grid container flexDirection='column'>
          <LeftbarButton link={'/'} title={'Newsy'} icon={<Newspaper />} />
          <LeftbarButton
            link={'/games'}
            title={'Visual Novelki'}
            icon={<VideogameAsset />}
          />
          <LeftbarButton link={'/gallery'} title={'Galeria'} icon={<Brush />} />
          <LeftbarButton
            link={'/discord'}
            title={'Discord'}
            icon={<FontAwesomeIcon icon={faDiscord} />}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Leftbar;
