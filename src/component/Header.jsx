import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import LoginControl from './LoginControl';

const Container = styled.div`
display: flex;
align-items: center;
background-color: #22254B;
padding-left: 10%;
` 

const NavigationButton = styled(Link)`
font-size : 14px;
color: white;
text-decoration: none;
margin: 10px;
&:visited {
  color: white;
}
`

export default function Header() {
  return (
    <Container>
      <img
		style={{ width: "154px", height: "50px" }}
		src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
		alt="로고"
/>
<NavigationButton to = "/movie">영화</NavigationButton>
<NavigationButton to = "/tv">TV 프로그램</NavigationButton>
<NavigationButton to = "/actor">인물</NavigationButton>
<LoginControl />
    </Container>
  )
}
