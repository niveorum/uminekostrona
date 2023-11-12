import { Box, Grid } from '@mui/material';
import { FC } from 'react';
import VisualNovelItem from './VisualNovelItem';
import { visualNovelList } from '../pageContent/VisualNovel';

const styleItem = {
    overflowY: "scroll",
    overflowX: "hidden",
    width: "100%",
    padding: "4px",
    
    '&::-webkit-scrollbar': {
      width: '0.6em',
    },
    '&::-webkit-scrollbar-track': {
      background: "#00000000",
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#00000080',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: '#ffffff10'
    }
}

const VisualNovelGrid: FC = () => {
    return (
        <Box sx={styleItem}>
            <Grid container spacing={2}>
                {
                    visualNovelList.map((item) => 
                        <Grid item key={item.title} xs={12} md={6}>
                            <VisualNovelItem 
                                title={item.title} 
                                displayTitle={item.displayTitle} 
                                summary={item.summary}
                                imageFileName={item.imageFileName}/>
                        </Grid>
                    )
                }
            </Grid>
        </Box>
    );
  }
export default VisualNovelGrid