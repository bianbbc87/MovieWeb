import React from 'react'
import { movies } from '../movieDummy';
import Contents from '../component/Contents';
import { useNavigate } from 'react-router-dom';

export default function Movie() {

  const navigate = useNavigate();


  // props를 객체로 주지 않으면 값 전달이 안됨.
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
            <Contents contentData={item} className="kind-movie"/>
          </div>
        )
      })
    }
  </div>
    </div>
  )
}

