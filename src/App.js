import React, { useState } from 'react';
import Movie from './component/Movie/Movie';
import { movies } from './movieDummy';

function App() {

  return (
    <main> 
    <div className="container">
    <div className="movie-item">
    {
      movies.results.map((item) => {
        return (
          <div key={item.id} className="movie">
            <Movie movieData={item} className="kind-movie"/>
          </div>
        )
      })
    }
  </div>
  </div>
  </main>

  );
}

export default App;
