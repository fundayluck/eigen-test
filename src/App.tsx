import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Article from './pages/Article';
import DetailArticle from './pages/DetailArticle';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Article />} />
      <Route path='/detail/:id' element={<DetailArticle />} />
    </Routes>
  );
}

export default App;
