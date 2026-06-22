import { FC } from 'react';
import { Typography, Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';

const VisualNovelItem: FC<VisualNovelItemProp> = ({ title, displayTitle, summary, imageFileName }) => {
  return (
    <Link to={title} style={{ textDecoration: 'none' }}>
      <Card elevation={0} sx={{
        backgroundColor: 'rgba(6, 2, 10, 0.85)',
        color: '#f0e8d5',
        width: '100%',
        border: '1px solid',
        borderColor: 'rgba(201, 168, 76, 0.15)',
        borderRadius: 2,
        backdropFilter: 'blur(4px)',
        transition: 'all 0.25s ease',
        '&:hover': {
          borderColor: 'rgba(201, 168, 76, 0.6)',
          boxShadow: '0 0 22px rgba(201, 168, 76, 0.1), 0 6px 24px rgba(0,0,0,0.5)',
          transform: 'translateY(-3px)',
        },
      }}>
        <CardHeader title={
          <Typography sx={{
            fontFamily: '"IM Fell English", serif',
            color: '#f0e8d5',
            textAlign: 'center',
            fontSize: '1.2rem',
          }}>
            {displayTitle}
          </Typography>
        } />
        <CardMedia
          component="img"
          height="194"
          image={`/${imageFileName}`}
          alt={displayTitle}
          sx={{ objectFit: 'cover' }}
        />
        <CardContent>
          <Typography sx={{
            color: 'rgba(240, 232, 213, 0.7)',
            fontFamily: '"Crimson Text", serif',
            fontSize: '1rem',
            lineHeight: 1.6,
          }}>
            {summary}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

interface VisualNovelItemProp {
  title: string;
  displayTitle: string;
  summary: string;
  imageFileName: string;
}

export default VisualNovelItem;
