import './Movie.css';

function Movie({movieData}) {

    const {
        title,                // 영화 제목
        poster_path,          // 포스터 이미지 경로
        vote_average,         // 평점
      } = movieData;

    const posterImageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`; // 완전한 포스터 이미지 URL

    return (
        <div className="movie-card">
            <div className="movie-image">
        <img src={posterImageUrl} alt={title} className="movie-poster" />
        </div>
        <div className="introduction">
        <h2 className="movie-title">{title}</h2> 
        <div className="movie-score">{vote_average}</div>
        </div>
        <div className="movie-content">
        </div>
        </div>
    )
  }
  
  export default Movie