import React, { FC, ReactElement } from 'react';
import { Typography, Grid, Box, Icon, Divider,} from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

const styleItem = {
  backgroundColor: "#00000075",
  color: "#ffffff",
  width: "100%",
  border: 1,
  borderColor: '#00000000',
  borderRadius: 8,
  '&:hover': {
      borderRadius: 8,
      border: 1,
      borderColor: '#ffffff',
   },
}

const VisualNovelItemTitle: FC <VisualNovelItemProp> = (props) => {
  return(
      <Grid container justifyContent="center">
          <Grid item>
              <Typography variant="h5">
                  {props.title}
              </Typography>
          </Grid>
      </Grid>
  )
}

interface VisualNovelItemProp{
  title:string;
  content:string;
  imageFileName:string
}

const VisualNovelItem: FC <VisualNovelItemProp> = (props) => {
  return (
    <Card sx={styleItem}>
      <CardHeader
        title={<VisualNovelItemTitle {...props}/>}
      />
      <CardMedia
        component="img"
        height="194"
        width="150"
        image={props.imageFileName}
      />
      <CardContent>
        <Typography >
            {props.content}
        </Typography>
      </CardContent>
    </Card>
  );
}
export default VisualNovelItem