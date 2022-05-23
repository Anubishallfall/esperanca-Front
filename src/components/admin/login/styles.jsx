import styled from "styled-components";
import ConfiguracaoSistema from '../../../config/index'

export const Body = styled.div`
 width: 100%;
 background: ${props => `url(${props.background}) no-repeat top center`};
 background-size: auto;
 height: ${ConfiguracaoSistema.tela.tamanho.height}px;
`;
export const Main = styled.div`
display: flex;
 width: 100%;
 height: 81.4%;
`;
export const Foother = styled.div`
 width: 100%;
 height: 7.1%;
 background-color: #52e427;
`;
export const DivImagem = styled.div`
 width: 50%;
 height: 100%;
 display: flex;
 justify-content:center ;
 align-items: flex-end;
 @media (max-width: 800px) {
display: none;
visibility: hidden;
    }
`;
export const DivLoginForm = styled.div`
 width: 50%;
 display: flex;
 padding-top: 100px;
 justify-content: center;
 @media (max-width: 800px) {
width: 100%;
padding-top: 50px;
    }

`;

export const Form = styled.form`
width: 300px;
height: 300px;
@media (max-width: 800px) {
width: 80%;
    }

`;
export const Div = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;

`;
export const Button = styled.button`
margin-top: 5px;
padding: 8px 20px;
font-size: 20px;
border: none;
color: #fff;
background-color: #52e427;
transition: transform .5s;
 &:hover{
    transform: scale(1.1);
    box-shadow: 4px 4px 4px #888888;
 }
 @media (max-width: 800px) {
    width: 100%;
    padding: 15px 40px;
    }
`;

export const DivButton = styled.div`
width: 100%;
display: flex;
justify-content:center;
`;

export const Img = styled.img`
width:  ${props => `${props.width}`}px;
height:  ${props => `${props.height}`}px;
@media (width: 100px) {
   display: none;
   visibility: hidden;
        
    }
`;

export const ImgForm = styled.img`
width:150px;
height:150px;
`;

export const DivImg = styled.div`
padding: 10px;
border-top-left-radius: 50px;
border-top-right-radius:  150px;
border-bottom-right-radius:150px;
border-bottom-left-radius: 150px;
background-color:#b5f24a;

`;

export const P = styled.p`
font-size: 12px;
color: #707070;
`;

export const PLink = styled.p`
font-size: 12px;
color: #52e427;
cursor: pointer;
margin-left: 2px;
`;
export const DivLink = styled.div`
margin-top: 20px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;
export const Erro = styled.p`
color: #707070;
`;
