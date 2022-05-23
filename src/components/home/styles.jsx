import styled from "styled-components";
import ConfiguracaoSistema from '../../config/index'

export const Body = styled.div`
 width: 100%;
 background: ${props => `url(${props.background})`};
 background-size: auto;
 min-height: ${ConfiguracaoSistema.tela.tamanho.height}px;
`;
export const Main = styled.div`
display: flex;
flex-wrap: wrap;
 width: 100%;
 min-height: 553px;
`;
export const Foother = styled.div`
 width: 100%;
 min-height: 50px;
 background-color: #52e427;
`;
