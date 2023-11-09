import React from 'react'
import { movies } from '../movieDummy';
import MovieCards from '../component/Movie/MovieCards';
import { useNavigate } from 'react-router-dom';

export default function Movie() {

  const navigate = useNavigate();


  const onClickMovie = (movie) => {
    // 값 오는지 확인
    console.log("title = ", movie.title, " id = ", movie.id);
    const posterImageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`; // 각 아이템에 대한 URL 생성
    navigate(`/movie/${movie.id}`, { // 원하는 주소
      state: { 
        id: movie.id,
        title: movie.title,
        posterImageUrl: posterImageUrl,
       }, // 넘기고자 하는 정보, props
    });
  };

  return (
         <div className="container">
    <div className="movie-item">
    {
      movies.results.map((item) => {
        return (
          <div 
          key={item.id} 
          className="movie" 
          onClick={() => onClickMovie(item)}>
            <MovieCards movieData={item} className="kind-movie"/>
          </div>
        )
      })
    }
  </div>
    </div>
  )
}

