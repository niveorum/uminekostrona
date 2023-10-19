import React, { FC, ReactElement } from 'react';
import { Typography, Grid, Box, Icon, Divider,} from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Markdown from 'react-markdown';

const styleItem = {
    backgroundColor: "#00000000",
    color: "#ffffff",
    width: "100%"
}

const PostTitle: FC <PostProps> = (props) => {
    return(
        <Grid container justifyContent="space-between">
            <Grid item xs={12} md={9}>
                <Typography variant="h5">
                    {props.title}
                </Typography>
            </Grid>
            <Grid item xs={0}>
                <Typography>
                    {props.date?.toDateString()}
                </Typography>
            </Grid>
        </Grid>
    )
}
interface PostProps{
    title:string;
    content:string;
    date?:Date;
}

const Post: FC <PostProps> = (props) => {
    return (
        <Card sx={styleItem} elevation={0}>
          <CardHeader
            title={<PostTitle {...props}/>}
          />
          {/* <CardMedia
            component="img"
            height="194"
            image="/static/images/cards/paella.jpg"
            alt="Paella dish"
          /> */}
          <CardContent>
            <Markdown>
                {props.content}
            </Markdown>
          </CardContent>
          <Divider sx={{backgroundColor:"#ffffff"}}/>
        </Card>
      );
}
export default Post