import { FC } from 'react';
import { Grid, Box } from '@mui/material';
import LeftbarButton from './LeftbarButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faGamepad, faNewspaper, faPaintbrush } from '@fortawesome/free-solid-svg-icons';

const Leftbar: FC = () => {
  return (
    <Box m={1}>
      <Grid item flexDirection='column' position="fixed">
        <Grid container flexDirection='column'>
          <LeftbarButton 
            link={'/'} 
            title={'Newsy'} 
            icon={<FontAwesomeIcon icon={faNewspaper} />} 
          />
          <LeftbarButton
            link={'/games'}
            title={'Visual Novelki'}
            icon={<FontAwesomeIcon icon={faGamepad} />}
          />
          <LeftbarButton 
            link={'/gallery'} 
            title={'Galeria'}
            icon={<FontAwesomeIcon icon={faPaintbrush} />} 
          />
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
