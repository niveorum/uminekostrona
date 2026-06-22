import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import Post from './Post';
import { visualNovelList } from '../pageContent/VisualNovel';

const VisualNovelPost: FC = () => {
  const { game } = useParams();
  const visualNovel = visualNovelList.find((item) => item.title === game);

  if (!visualNovel) {
    return (
      <Typography sx={{ color: 'rgba(240, 232, 213, 0.5)', fontStyle: 'italic' }}>
        Nie znaleziono visual novelki.
      </Typography>
    );
  }

  return (
    <>
      <Post title={visualNovel.displayTitle} content={visualNovel.text} />
      <Box sx={{
        mt: 2,
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Box sx={{
          border: '1px solid rgba(201, 168, 76, 0.3)',
          borderRadius: 1,
          overflow: 'hidden',
          boxShadow: '0 0 24px rgba(201, 168, 76, 0.08)',
          maxWidth: '480px',
          width: '100%',
        }}>
          <img
            src={`/${visualNovel.coverFileName}`}
            alt={visualNovel.displayTitle}
            style={{ width: '100%', display: 'block' }}
          />
        </Box>
      </Box>
    </>
  );
};

export default VisualNovelPost;
