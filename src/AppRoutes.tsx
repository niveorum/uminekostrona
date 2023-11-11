import React, { FC, useEffect } from 'react';
import { Routes, Route, Navigate, Router, BrowserRouter} from 'react-router-dom'
import Navbar from './layout/Navbar';
import Home from './layout/Home';
import DiscordLink from './components/DiscordLink';
import Post from './components/Post';
import VisualNovelGrid from './components/VisualNovelGrid';
import VisualNovelPost from './components/VisualNovelPost';
import FooterLayout from './layout/FooterLayout';


export const AppRoutes: FC = () => {  
  return (
    <div>
    <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}>         
            <Route path='' element={
            <Post 
              title={'Witamy na stronie!'} 
              content={'Bardzo serdecznie witam fanów 07th Expansion! ~Snowy'} 
              date={new Date('October 3, 2023'
            )}/>}/>
            <Route path='games' element={<VisualNovelGrid/>}/>
            <Route path='games/:game' element={<VisualNovelPost/>}/>
            <Route path='gallery' element={<img src='/cycebeatrice.jpg'/>}/>
            <Route path='discord' element={<DiscordLink/>}/>
          </Route>
        </Routes>
        <FooterLayout/>
      </BrowserRouter>
    </div>
  );
};
