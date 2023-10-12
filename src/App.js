import React, { useState } from 'react';
import Movie from './component/Movie';
import MovieContent from './component/MovieContent';
import { movies } from './movieDummy';

function App() {

  return (
    <div className="container">
    <div className="grid-container">
    <div className="movie-item">
    {
      movies.results.map((item) => {
        return (
          <div key={item.id} className="movie">
            <MovieContent movieData={item} className="movie-content"/>
            <Movie movieData={item} className="kind-movie"/>
          </div>
        )
      })
    }
  </div>
  </div>
  </div>
  );
}

export default App;
