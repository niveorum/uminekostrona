import React, { FC, ReactElement } from 'react';
import { Link} from 'react-router-dom';
import { Typography, Grid, Box, Icon, Divider,} from '@mui/material';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

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
                    {props.date.toDateString()}
                </Typography>
            </Grid>
        </Grid>
    )
}
interface PostProps{
    title:string;
    content:string;
    date:Date;
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
            <Typography >
                {props.content}
            </Typography>
          </CardContent>
          <Divider sx={{backgroundColor:"#ffffff"}}/>
        </Card>
      );
}
export default Post