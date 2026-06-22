import React from 'react';
import { Typography, Link, Grid, Box, Divider } from '@mui/material';
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { linkDiscord, linkGithub } from '../Config';

const Footer: React.FC = () => {
  return (
    <Box sx={{
      backgroundColor: 'rgba(4, 1, 8, 0.96)',
      borderTop: '1px solid rgba(201, 168, 76, 0.25)',
      color: '#f0e8d5',
      pt: 3,
      pb: 2,
      width: '100%',
    }}>
      <Grid container>
        <Grid item md={3} />
        <Grid item xs={12} md={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2 }}>
          <img
            width={180}
            src="/umilogo.png"
            alt="Umineko"
            style={{ filter: 'drop-shadow(0 0 8px rgba(201, 168, 76, 0.3))' }}
          />
        </Grid>
        <Grid item xs={12} md={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
          <Typography sx={{
            fontFamily: '"IM Fell English", serif',
            color: 'rgba(201, 168, 76, 0.7)',
            mb: 1.5,
            fontSize: '1rem',
            letterSpacing: '0.12em',
          }}>
            Śledź nas
          </Typography>
          <Box sx={{ display: 'flex', gap: 2.5, fontSize: '1.5rem' }}>
            <Link href={linkGithub} color="inherit" underline="none" sx={{ '&:hover': { color: '#c9a84c' } }}>
              <FontAwesomeIcon icon={faGithub} />
            </Link>
            <Link href={linkDiscord} color="inherit" underline="none" sx={{ '&:hover': { color: '#c9a84c' } }}>
              <FontAwesomeIcon icon={faDiscord} />
            </Link>
          </Box>
        </Grid>
        <Grid item md={3} />
      </Grid>

      <Divider sx={{ mx: 4, my: 2 }}>
        <Typography sx={{ color: 'rgba(201, 168, 76, 0.4)', fontSize: '0.8rem', px: 1 }}>✦</Typography>
      </Divider>

      <Typography variant="body2" align="center" sx={{
        color: 'rgba(240, 232, 213, 0.35)',
        fontFamily: '"Crimson Text", serif',
        fontSize: '0.9rem',
        letterSpacing: '0.04em',
      }}>
        {'✦ Copyright © '}
        <Link color="inherit" href="https://umineko.pl" underline="hover">umineko.pl</Link>
        {' '}{new Date().getFullYear()}
        {' ✦'}
      </Typography>
    </Box>
  );
};

export default Footer;
