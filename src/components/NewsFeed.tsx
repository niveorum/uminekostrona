import { FC } from 'react';
import Post from './Post';
import { posts } from '../pageContent/Posts';

const NewsFeed: FC = () => {
  return (
    <>
      {posts.map((post, index) => (
        <Post
          key={index}
          title={post.title}
          date={post.date}
          content={post.content}
        />
      ))}
    </>
  );
};

export default NewsFeed;
