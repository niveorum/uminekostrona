import { FC } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Navbar from './layout/Navbar';
import Home from './layout/Home';
import DiscordLink from './components/DiscordLink';
import Gallery from './components/Gallery';
import NewsFeed from './components/NewsFeed';
import VisualNovelGrid from './components/VisualNovelGrid';
import VisualNovelPost from './components/VisualNovelPost';

export const AppRoutes: FC = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='' element={<NewsFeed />} />
            <Route path='games' element={<VisualNovelGrid />} />
            <Route path='games/:game' element={<VisualNovelPost />} />
            <Route path='gallery' element={<Gallery />} />
            <Route path='discord' element={<DiscordLink />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
