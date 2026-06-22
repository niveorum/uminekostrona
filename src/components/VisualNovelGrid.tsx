import { FC } from 'react';
import { Box, Grid } from '@mui/material';
import VisualNovelItem from './VisualNovelItem';
import { visualNovelList } from '../pageContent/VisualNovel';

const VisualNovelGrid: FC = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container spacing={2}>
        {visualNovelList.map((item) => (
          <Grid item key={item.title} xs={12} md={6}>
            <VisualNovelItem
              title={item.title}
              displayTitle={item.displayTitle}
              summary={item.summary}
              imageFileName={item.imageFileName}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default VisualNovelGrid;
