import { FC } from 'react';
import { Typography, Box, Divider } from '@mui/material';
import Markdown from 'react-markdown';

interface PostProps {
  title: string;
  content: string;
  date?: Date;
}

const Post: FC<PostProps> = ({ title, content, date }) => {
  return (
    <Box sx={{ width: '100%', mb: 3 }}>
      <Box sx={{
        borderLeft: '3px solid',
        borderColor: 'rgba(201, 168, 76, 0.65)',
        pl: 2,
        mb: 2.5,
      }}>
        <Typography variant="h5" sx={{
          fontFamily: '"IM Fell English", serif',
          color: '#f0e8d5',
          letterSpacing: '0.03em',
          lineHeight: 1.3,
        }}>
          {title}
        </Typography>
        {date && (
          <Typography sx={{
            color: 'rgba(201, 168, 76, 0.65)',
            fontStyle: 'italic',
            fontFamily: '"Crimson Text", serif',
            fontSize: '0.95rem',
            mt: 0.5,
          }}>
            {date.toLocaleDateString('pl-PL', { year: 'numeric', month: 'long', day: 'numeric' })}
          </Typography>
        )}
      </Box>

      <Box sx={{
        color: '#f0e8d5',
        fontFamily: '"Crimson Text", serif',
        fontSize: '1.1rem',
        lineHeight: 1.85,
        '& p': { margin: '0 0 1em 0' },
        '& h1, & h2, & h3, & h4': {
          fontFamily: '"IM Fell English", serif',
          color: '#c9a84c',
          mt: 2,
          mb: 1,
        },
        '& a': { color: '#c9a84c', '&:hover': { color: '#e8d5a3' } },
        '& strong': { color: '#e8d5a3' },
      }}>
        <Markdown>{content}</Markdown>
      </Box>

      <Divider sx={{ mt: 3 }}>
        <Typography sx={{ color: 'rgba(201, 168, 76, 0.4)', fontSize: '0.8rem', px: 1 }}>✦</Typography>
      </Divider>
    </Box>
  );
};

export default Post;
