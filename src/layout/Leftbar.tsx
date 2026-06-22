import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import LeftbarButton from './LeftbarButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faGamepad, faNewspaper, faPaintbrush } from '@fortawesome/free-solid-svg-icons';

const Leftbar: FC = () => {
  return (
    <Box sx={{ position: 'fixed', pt: 1 }}>
      <Typography sx={{
        display: { xs: 'none', lg: 'block' },
        textAlign: 'center',
        color: 'rgba(201, 168, 76, 0.45)',
        fontSize: '0.7rem',
        letterSpacing: '0.2em',
        fontStyle: 'italic',
        fontFamily: '"Crimson Text", serif',
        mb: 2,
      }}>
        ✦ When They Cry ✦
      </Typography>

      <LeftbarButton link="/" title="Newsy" icon={<FontAwesomeIcon icon={faNewspaper} />} />
      <LeftbarButton link="/games" title="Visual Novelki" icon={<FontAwesomeIcon icon={faGamepad} />} />
      <LeftbarButton link="/gallery" title="Galeria" icon={<FontAwesomeIcon icon={faPaintbrush} />} />
      <LeftbarButton link="/discord" title="Discord" icon={<FontAwesomeIcon icon={faDiscord} />} />

      <Typography sx={{
        display: { xs: 'none', lg: 'block' },
        mt: 3,
        textAlign: 'center',
        color: 'rgba(201, 168, 76, 0.25)',
        fontSize: '0.7rem',
        fontStyle: 'italic',
        fontFamily: '"Crimson Text", serif',
        letterSpacing: '0.1em',
      }}>
        ~ Rokkenjima ~
      </Typography>
    </Box>
  );
};

export default Leftbar;
