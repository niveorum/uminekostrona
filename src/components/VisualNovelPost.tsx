import React, { FC, ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import Post from './Post';
import { visualNovelList } from '../pageContent/VisualNovel';

const VisualNovelPost: FC = () => {
    const {game} = useParams();
    const visualNovel = visualNovelList.find((item) => item.title == game || "") 
    return (
        <Post title={visualNovel?.displayTitle || ""} content={visualNovel?.text || ""}/>
            
      );
}
export default VisualNovelPost