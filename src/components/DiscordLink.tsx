import React from 'react';
import { Box, Typography, Divider } from '@mui/material';

const DiscordLink: React.FC = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h5" sx={{
        textAlign: 'center',
        color: '#c9a84c',
        mb: 2.5,
        letterSpacing: '0.05em',
      }}>
        ✦ Dołącz do nas ✦
      </Typography>
      <iframe
        src="https://discord.com/widget?id=1004049919377678366&theme=dark"
        width="100%"
        height="500px"
        style={{ backgroundColor: 'transparent', border: 0, margin: 0, display: 'block' }}
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      />

      <Divider sx={{ my: 3 }}>
        <Typography sx={{ color: 'rgba(201, 168, 76, 0.4)', fontSize: '0.8rem', px: 1 }}>✦</Typography>
      </Divider>

      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <img
          src="/cackle.png"
          alt="ahaha.wav"
          style={{
            maxWidth: '100%',
            borderRadius: '4px',
            filter: 'drop-shadow(0 0 18px rgba(201, 168, 76, 0.15))',
          }}
        />
      </Box>
    </Box>
  );
};

export default DiscordLink;
