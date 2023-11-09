import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`

// 490px 750px
const MoviePoster = styled.div`
    margin-left: 150px;
    margin-top: 50px;
    width: 300px;
    height: 600px;
    background-size: cover;
    background-image: url(${props => props.url});
    `

const MovieTitle = styled.div`
    margin-top: 50px;
    font-size: 21px;
    font-weight: 600;
    `

export default function MovieDetail() {

    // url로 넘겨받은 title
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
