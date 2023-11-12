import { FC, } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Navbar from './layout/Navbar';
import Home from './layout/Home';
import DiscordLink from './components/DiscordLink';
import Post from './components/Post';
import VisualNovelGrid from './components/VisualNovelGrid';
import VisualNovelPost from './components/VisualNovelPost';


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
              content={'Bardzo serdecznie witam fanów 07th Expansion! ~Niveorum'} 
              date={new Date('October 3, 2023'
            )}/>}/>
            <Route path='games' element={<VisualNovelGrid/>}/>
            <Route path='games/:game' element={<VisualNovelPost/>}/>
            <Route path='gallery' element={<img src='/cycebeatrice.jpg'/>}/>
            <Route path='discord' element={<DiscordLink/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
