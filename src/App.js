import React, { useState } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './component/Header';
import  Movie from './pages/Movie';
import TV from './pages/TV';
import Celeirity from './pages/Celeirity';
import Home from './pages/Home';
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
        </Routes>
        </BrowserRouter>
      </div>

  );
}

export default App;
