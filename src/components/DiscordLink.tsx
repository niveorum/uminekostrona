import { Typography } from '@mui/material';
import React from 'react';

const DiscordLink: React.FC = () => {
  return (
    <iframe src="https://discord.com/widget?id=1004049919377678366&theme=dark" width="100%" height="100%" style={{backgroundColor: 'transparent', border: 0, margin: '0'}} sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"/>
  );
};

export default DiscordLink;