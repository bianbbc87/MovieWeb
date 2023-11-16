import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-left: 10%;
    padding-top: 1%;
`

// 490px 750px
const Poster = styled.div`
    width: 490px;
    height: 750px;
    background-size: cover;
    background-image: url(${props => props.url});
    `

const Title = styled.div`
    font-size: 21px;
    font-weight: 600;
    `

export const S = {
Container,
Poster,
Title
}