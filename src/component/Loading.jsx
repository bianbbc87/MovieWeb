import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
width: 100vh;
z-index: 500;
background-color: white;
`

const Text = styled.div`
font-size: 40px;
font-weight: 500; 
`

export default function Loading() {
  return (
    <Wrapper>
        <Text>로딩 중...</Text>
    </Wrapper>
  )
}
