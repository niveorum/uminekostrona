import React, { FC, useEffect } from 'react';
import { Routes, Route, Navigate} from 'react-router-dom'
import Navbar from './layout/Navbar';
import Home from './layout/Home';
import DiscordLink from './components/DiscordLink';
import Post from './components/Post';
import VisualNovelGrid from './components/VisualNovelGrid';


export const AppRoutes: FC = () => {  
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}>         
          <Route path='' element={<Post title={'Witamy na stronie!'} content={'Bardzo serdecznie witam fanów 07th Expansion! ~Snowy'} date={new Date('October 3, 2023')}/>}/>
          <Route path='games' element={<VisualNovelGrid/>}/>
          <Route path='gallery' element={<img src='/cycebeatrice.jpg'/>}/>
          <Route path='discord' element={<DiscordLink/>}/>
        </Route>
      </Routes>
    </div>
  );
};
