import { Box, Grid } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import VisualNovelItem from './VisualNovelItem';

const styleItem = {
    overflowY: "scroll",
    overflowX: "hidden",
    width: "100%",
    padding: "4px",
    
    // scrollbarWidth: 'thin',
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

const visualNovelList = [{
    title:"umineko0",
    content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    imageFileName:"umi.png"
},
{
    title:"umineko1",
    content:"ahaha.wav",
    imageFileName:"umi.png"
},
{
    title:"umineko2",
    content:"ahaha.wav",
    imageFileName:"umi.png"
},
{
    title:"umineko3",
    content:"ahaha.wav",
    imageFileName:"umi.png"
}
]

const VisualNovelGrid: FC = () => {
    return (
        <Box sx={styleItem}>
            <Grid container spacing={2}>
                {
                    visualNovelList.map((item) => 
                        <Grid item xs={12} md={6}>
                            <VisualNovelItem title={item.title} content={item.content} imageFileName={item.imageFileName}/>
                        </Grid>
                    )
                }
            </Grid>
        </Box>
    );
  }
export default VisualNovelGrid