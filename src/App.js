import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './component/Header';
import  Movie from './pages/Movie';
import TV from './pages/TV';
import Celeirity from './pages/Celeirity';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import NotFound from './pages/NotFound';
import TvDetail from './pages/TvDetail';
import Login from './pages/Login';
import CityPage from './pages/CityPage';

function App() {

  return (
      <div className="root-wrap">
        <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/" element={<Home/>}></Route>
          <Route path="/movie" element={<Movie/>}></Route>
          <Route path="/tv" element={<TV/>}></Route>
          <Route path="/actor" element={<Celeirity/>}></Route>
          <Route path="/movie/:id" element={<MovieDetail/>}></Route>
          <Route path="/tv/:id" element={<TvDetail/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/city" element={<CityPage/>}></Route>

          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
        </BrowserRouter>
      </div>

  );
}

export default App;
