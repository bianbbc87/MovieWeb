import styled from 'styled-components';

const ContentCard = styled.div`
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

const ContentTitle = styled.h2`
  margin: 30px 10px 20px 10px;
  font-size: 10px;
  color: #EFF4F5
`

const ContentContent = styled.div`
  margin: 0px 10px 0px 10px;
  font-size: 10px;
  color: #EFF4F5
`

function ExplainContent({contentData}) {

  const {title, name, overview} = contentData;
  
    return (
        <ContentCard>
        <ContentIntroduction>
        <ContentTitle>{title}</ContentTitle> 
        <ContentTitle>{name}</ContentTitle> 
        <ContentContent>{overview}</ContentContent>
        </ContentIntroduction>
        </ContentCard>
    )
  }
  
  export default ExplainContent