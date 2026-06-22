import { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Box } from '@mui/material';

interface LeftbarButtonProps {
  title: string;
  link: string;
  icon: ReactElement;
}

const LeftbarButton: FC<LeftbarButtonProps> = ({ title, link, icon }) => {
  return (
    <Link to={link} style={{ textDecoration: 'none' }}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: { xs: 'center', md: 'flex-start' },
        color: '#f0e8d5',
        mb: 1.5,
        px: 1.5,
        py: 1,
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        border: '1px solid',
        borderColor: 'rgba(201, 168, 76, 0.12)',
        borderRadius: 1.5,
        backgroundColor: 'rgba(6, 2, 10, 0.7)',
        backdropFilter: 'blur(6px)',
        transition: 'all 0.2s ease',
        lineHeight: 1,
        '&:hover': {
          borderColor: 'rgba(201, 168, 76, 0.6)',
          color: '#c9a84c',
          backgroundColor: 'rgba(201, 168, 76, 0.06)',
          boxShadow: '0 0 14px rgba(201, 168, 76, 0.12), inset 0 0 12px rgba(201, 168, 76, 0.04)',
        },
      }}>
        <Box sx={{ fontSize: '20px', lineHeight: 1 }}>
          {icon}
        </Box>
        <Typography sx={{
          display: { xs: 'none', lg: 'block' },
          ml: 1.5,
          fontFamily: '"Crimson Text", serif',
          fontSize: '1rem',
          fontWeight: 600,
          letterSpacing: '0.05em',
          lineHeight: 1,
        }}>
          {title}
        </Typography>
      </Box>
    </Link>
  );
};

export default LeftbarButton;
