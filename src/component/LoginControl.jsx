import React, {useState} from 'react'
import styled from 'styled-components';

const LoginButton = styled.button`
background-color: white;
border-radius: 10px;
margin-right: 10px;
width: 70px;
`

const Container = styled.div`
font-size: 12px;
color: white;
`

export default function LoginControl() {

    const [isLoggedIn, setIsLoggedIn] = useState(true);

    function handleLoginClick() {
        setIsLoggedIn(false);
    }

    function handleLogoutClick() {
        setIsLoggedIn(true);
    }

  return (
    <div>
        {isLoggedIn ? 
        <Container><LoginButton onClick={handleLoginClick}>로그인</LoginButton> 로그인 해주세요.</Container>
        : 
        <Container><LoginButton onClick={handleLogoutClick}>로그아웃</LoginButton>환영합니다!</Container>
        }
        </div>
  )
}
