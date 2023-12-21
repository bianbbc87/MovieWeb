import React from "react";
import { useLocation } from "react-router-dom";
import { S } from "../component/DetailStyle";
export default function TvDetail() {
  // 네비게이트 훅을 통해 페이지 이동 시 넘겨받은 정보들(state)
  const { state } = useLocation();
  return (
    <S.Container>
      <S.Poster url={state.posterImageUrl} />
      <S.Title>{state.name}</S.Title>
    </S.Container>
  );
}
