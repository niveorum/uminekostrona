import { FC } from 'react';
import { Box } from '@mui/material';
import { useLocation, useOutlet } from 'react-router';
import { AnimatePresence, motion } from 'framer-motion';

const Feed: FC = () => {
  const location = useLocation();
  const element = useOutlet();

  return (
    <Box sx={{
      width: '100%',
      minHeight: '92vh',
      backgroundColor: 'rgba(4, 1, 8, 0.82)',
      backdropFilter: 'blur(6px)',
      border: '1px solid rgba(201, 168, 76, 0.15)',
      borderRadius: 1,
      p: '5%',
      mb: '2%',
      color: '#f0e8d5',
      img: {
        maxWidth: '100%',
        maxHeight: '100%',
      },
    }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
        >
          {element}
        </motion.div>
      </AnimatePresence>
    </Box>
  );
};

export default Feed;
