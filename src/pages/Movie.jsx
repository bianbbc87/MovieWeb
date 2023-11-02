import React from 'react'
import { movies } from '../movieDummy';
import MovieCards from '../component/Movie/MovieCards';

export default function Movie() {
  return (
         <div className="container">
    <div className="movie-item">
    {
      movies.results.map((item) => {
        return (
          <div key={item.id} className="movie">
            <MovieCards movieData={item} className="kind-movie"/>
          </div>
        )
      })
    }
  </div>
    </div>
  )
}

