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
          <Route path='dupa' element={<div>:)</div>}/>
          <Route path='cyce' element={<DiscordLink/>}/>
        </Route>
      </Routes>
    </div>
  );
};
