import React from 'react'
import { tvProgram } from '../tvDummy'; 
import Contents from '../component/Contents';
import { useNavigate } from 'react-router-dom';

export default function TV() {

  const navigate = useNavigate();


  // props를 객체로 주지 않으면 값 전달이 안됨.
  const onClickTv = (tv) => {
    // 값 오는지 확인
    console.log("name = ", tv.name, " id = ", tv.id);
    const posterImageUrl = `https://image.tmdb.org/t/p/w500${tv.poster_path}`; // 각 아이템에 대한 URL 생성
    navigate(`/tv/${tv.id}`, { // 원하는 주소
      state: { 
        id: tv.id,
        name: tv.name,
        posterImageUrl: posterImageUrl,
       }, // 넘기고자 하는 정보, props
    });
  };

  return (
         <div className="container">
    <div className="movie-item">
    {
      tvProgram.results.map((item) => {
        return (
          <div 
          key={item.id} 
          className="tv" 
          onClick={() => onClickTv(item)}>
            <Contents contentData={item} className="kind-tv"/>
          </div>
        )
      })
    }
  </div>
    </div>
  )
}

