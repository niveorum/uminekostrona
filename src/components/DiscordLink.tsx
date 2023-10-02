import { Typography } from '@mui/material';
import React from 'react';

const DiscordLink: React.FC = () => {
  return (
    <div style={{margin: 'auto', overflow: ''}}>
      <iframe src="https://discord.com/widget?id=1004049919377678366&theme=dark" width="350" height="500" style={{backgroundColor: 'transparent', border: 0, margin: 'auto'}} sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"/>
    </div>
  );
};

export default DiscordLink;