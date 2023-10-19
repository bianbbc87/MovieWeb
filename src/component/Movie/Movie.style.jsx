import styled from 'styled-components';

const MovieCard = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 150px;
    max-height: 300px; 
    background-color: #373B69;
    &:hover MovieContent {
        display: block;
        z-index: 500;
    }
`

const ContentContainer = styled.div`
display: ${props => (props.isDisplay ? 'block' : 'none')};
`

const MoviePoster = styled.div`
    width: 150px;
    height: 300px;
    background-size: cover;
    background-image: url(${props => props.url});
    `

const Introduction = styled.div` 
    display: flex;
    width: 150px;
    height: 100px;
    justify-content: space-between;
    align-items: center;
`

const MovieTitle = styled.h2`
    padding-left: 10px;
    font-size: 10px;
    color: #EFF4F5;
`

const MovieScore = styled.div`
    font-size: 10px;
    padding: 8px;
    color: #EFF4F5;
`

const MovieContent = styled.div`
    display: none;
`

export const S = {
    MovieCard,
    MoviePoster,
    Introduction,
    MovieTitle,
    MovieScore,
    MovieContent,
    ContentContainer
}