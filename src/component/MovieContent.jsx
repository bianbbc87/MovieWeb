import './MovieContent.css';


function MovieContent({movieData}) {

    const {
        title,                // 영화 제목
        overview,             // 요약 설명
      } = movieData;

    return (
        <div className="moviecontent-card">
        <div className="content-introduction">
        <h2 className="moviecontent-title">{title}</h2> 
        <div className="moviecontent-content">{overview}</div>
        </div>
        </div>
    )
  }
  
  export default MovieContent