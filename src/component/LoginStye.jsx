import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding : 3%;
    font-family: '궁서';
`

const Title = styled.div`
position: absolute;
display: flex;
font-size: 30px;
font-weight: 700;
`

const Lable = styled.label`
position: absolute;
top: ${props => props.top};
display: flex;
font-size: 14px;
font-weight: 700;
`

const Input = styled.input`
position: absolute;
padding: 10px;
top: ${props => props.top};
border: 1px solid #F0F0F0;
width: 600px;
height: 40px;
border-radius: 10px;
color: black;

&::placeholder {
    color: #F0F0F0;
}
`

const LoginBtn = styled.div`
display: flex;
position: absolute;
top: 440px;
align-items: center;
justify-content: center;
border-radius: 50px;
width: 600px;
height: 60px;
outline: none;
background-color: ${props => props.disabled ? '#F0F0F0' : '#032641'};
border: none;
color: #FFF;
`

const ErrorMessage = styled.div`
position: absolute;
top: ${props => props.top};
color: red;
font-weight: 500;
font-size: 12px;
`

export const S = {
    Container,
    Title,
    Lable,
    Input,
    LoginBtn,
    ErrorMessage
}