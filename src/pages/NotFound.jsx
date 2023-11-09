import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Container = styled.div`
width: 100%;
margin: 50px;
padding-left: 10%;
`

const NavigationButton = styled(Link)`
color: red;
text-decoration: none;
&:visited {
  color: red;
}
`

export default function NotFound() {
  return (
    <Container>
      <h2>해당 페이지를 찾지 못했습니다.</h2>
      주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.<br />
      <NavigationButton to="/">메인 페이지로 이동</NavigationButton>
    </Container>
  )
}
