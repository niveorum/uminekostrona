import { FC } from 'react';
import { Box } from '@mui/material';

const Navbar: FC = () => {
  return (
    <Box
      position="fixed"
      width="100%"
      zIndex={10000}
      sx={{
        backgroundColor: 'rgba(4, 1, 8, 0.92)',
        borderBottom: '1px solid rgba(201, 168, 76, 0.3)',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        justifyContent: 'center',
        py: 0.75,
      }}
    >
      <img
        width={215}
        src="/umilogo.png"
        alt="Umineko"
        style={{
          display: 'block',
          filter: 'drop-shadow(0 0 10px rgba(201, 168, 76, 0.3))',
        }}
      />
    </Box>
  );
};

export default Navbar;
