import React, { FC, useEffect } from 'react';
import { Routes, Route, Navigate} from 'react-router-dom'
import Navbar from './layout/Navbar';
import Home from './layout/Home';
import DiscordLink from './components/DiscordLink';


export const AppRoutes: FC = () => {  
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}>         
          <Route path='news' element={<div>Strona w przygotowaniu :3</div>}/>
          <Route path='games' element={<div>Umineko, Higurashi</div>}/>
          <Route path='gallery' element={<img src='/cycebeatrice.jpg'/>}/>
          <Route path='discord' element={<DiscordLink/>}/>
        </Route>
      </Routes>
    </div>
  );
};
