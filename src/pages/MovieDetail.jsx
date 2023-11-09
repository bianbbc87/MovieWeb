import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-left: 10%;
    padding-top: 1%;
`

// 490px 750px
const MoviePoster = styled.div`
    width: 490px;
    height: 750px;
    background-size: cover;
    background-image: url(${props => props.url});
    `

const MovieTitle = styled.div`
    font-size: 21px;
    font-weight: 600;
    `

export default function MovieDetail() {

    // url로 넘겨받은 id 근데 있을필요 없는듯?
    const {id} = useParams();

    // 네비게이트 훅을 통해 페이지 이동 시 넘겨받은 정보들(state)
    const {state} = useLocation();
  return (
    <Container>
      <MoviePoster url={state.posterImageUrl} />
      <MovieTitle>{state.title}</MovieTitle>
    </Container>
  )
}
