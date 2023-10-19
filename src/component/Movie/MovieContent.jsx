import './MovieContent.css';


function MovieContent({movieContentData}) {

  const {title, overview} = movieContentData;
  
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