import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { S } from '../component/DetailStyle';

export default function MovieDetail() {

    // url로 넘겨받은 id 근데 있을필요 없는듯?
    const {id} = useParams();

    // 네비게이트 훅을 통해 페이지 이동 시 넘겨받은 정보들(state)
    const {state} = useLocation();
  return (
    <S.Container>
      <S.Poster url={state.posterImageUrl} />
      <S.Title>{state.title}</S.Title>
    </S.Container>
  )
}
