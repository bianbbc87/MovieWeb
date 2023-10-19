import './Movie.css';
import MovieContent from './MovieContent';

function Movie({movieData}) {

    const {
        title,                // 영화 제목
        poster_path,          // 포스터 이미지 경로
        vote_average,         // 평점
        overview,             // 요약 설명
      } = movieData;

    const posterImageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`; // 완전한 포스터 이미지 URL

    return (
      <section>
        <div className="movie-card">
          <div className="movie-content">
          <MovieContent movieContentData={{title, overview}}/>
          </div>
            <div className="movie-image">
        <img src={posterImageUrl} alt={title} className="movie-poster" />
        </div>
        <div className="introduction">
        <h2 className="movie-title">{title}</h2> 
        <div className="movie-score">{vote_average}</div>
        </div>
        </div>
        </section>
    )
  }
  
  export default Movie