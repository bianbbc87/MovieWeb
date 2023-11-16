import React, { useState } from 'react';
import { S } from './Contentstyle';
import ExplainContent from './ExplainContent';

function Contents({contentData}) {
  const [ishovered, setIsHovered] = useState(false);

    const {
        title,                // 영화 제목
        name,                 // 티비 제목
        poster_path,          // 포스터 이미지 경로
        vote_average,         // 평점
        overview,             // 요약 설명
      } = contentData;

    const posterImageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`; // 완전한 포스터 이미지 URL

    console.log("이미지경로 : ", posterImageUrl);
    return (
      
      <>
        <S.Card
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
          <S.ContentContainer isdisplay={ishovered.toString()}>
           <ExplainContent contentData={{title, name, overview}}/>
           </S.ContentContainer>
        <S.Poster url = {posterImageUrl}/>
        <S.Introduction>
          {title != null ? 
          (<S.Title>{title}</S.Title>)
        :
        (
          <S.Name>{name}</S.Name>
        ) }       
        <S.Score>{vote_average}</S.Score>
        </S.Introduction>
        </S.Card>
        </>
    )
  }
  /* 위 코드에서, 영화는 title, 티비는 name으로 선언되었고 두 개를 겹쳐 사용하면 
  이전 태그로 인해 여백이 생겨 삼항 조건식을 추가하였음.
  */
  export default Contents