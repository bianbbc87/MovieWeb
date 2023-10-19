import styled from 'styled-components';

const MoviecontentCard = styled.div`
  display: block;
  position: absolute;
  max-width: 150px;
  max-height: 300px; 
  background-color: rgba(1, 1, 1, 0.7);
  z-index: 500;
`

const ContentIntroduction = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 300px;
  overflow-y: auto; 

  &::-webkit-scrollbar {
    display: none;
  }
`

const MoviecontentTitle = styled.h2`
  margin: 30px 10px 20px 10px;
  font-size: 10px;
  color: #EFF4F5
`

const MoviecontentContent = styled.div`
  margin: 0px 10px 0px 10px;
  font-size: 10px;
  color: #EFF4F5
`

function MovieContent({movieContentData}) {

  const {title, overview} = movieContentData;
  
    return (
        <MoviecontentCard>
        <ContentIntroduction>
        <MoviecontentTitle>{title}</MoviecontentTitle> 
        <MoviecontentContent>{overview}</MoviecontentContent>
        </ContentIntroduction>
        </MoviecontentCard>
    )
  }
  
  export default MovieContent