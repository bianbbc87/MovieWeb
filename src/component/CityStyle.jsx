import styled from 'styled-components';

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
height: 100vh;
`

const Search = styled.input`
border: 2px solid #000;
border-radius: 15px;
padding: 15px;
margin-bottom: 5%;
`

const WeatherWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 22%;
height: 22%;
border: 1px solid #000;
border-radius: 10px;
gap: 5%;
overflow: hidden;
`

const Name = styled.div`
margin-left: 5%;
text-align: left;
font-size: 30px;
font-weight: 500;
`

const Temp = styled.div`
margin-left: 5%;
text-align: left;
font-size: 60px;
font-weight: 500;
`

const Main = styled.div`
text-align: right;
margin-right: 5%;
font-size: 25px;
font-weight: 400;
`

export const S = {
    Wrapper,
    Search,
    WeatherWrapper,
    Name,
    Temp,
    Main

}