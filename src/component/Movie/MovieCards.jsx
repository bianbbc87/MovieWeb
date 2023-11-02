import React, { useState } from 'react';
import { S } from './Movie.style';
import MovieContent from './MovieContent';

function MovieCards({movieData}) {
  const [ishovered, setIsHovered] = useState(false);

    const {
        title,                // 영화 제목
        poster_path,          // 포스터 이미지 경로
        vote_average,         // 평점
        overview,             // 요약 설명
      } = movieData;

    const posterImageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`; // 완전한 포스터 이미지 URL

    console.log("이미지경로 : ", posterImageUrl);
    return (
      
      <>
        <S.MovieCard
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
          <S.ContentContainer isDisplay={ishovered}>
           <MovieContent movieContentData={{title, overview}}/>
           </S.ContentContainer>
        <S.MoviePoster url = {posterImageUrl}/>
        <S.Introduction>
        <S.MovieTitle>{title}</S.MovieTitle> 
        <S.MovieScore>{vote_average}</S.MovieScore>
        </S.Introduction>
        </S.MovieCard>
        </>
    )
  }
  
  export default MovieCards