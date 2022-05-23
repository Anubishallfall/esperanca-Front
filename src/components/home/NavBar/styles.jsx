import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.div`
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: #52e427;
`;

export const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;

    span {
        height: 2px;
        width: 25px;
        background: #fff;
        margin-bottom: 4px;
        border-radius: 5px;
    }

    @media(max-width: 768px){
        display: flex;
    }

`;

export const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media(max-width: 768px){
        overflow: hidden;
        flex-direction: column;
        width: 100%;
        max-height: ${({ isOpenMenu }) => (isOpenMenu ? "300px" : "0")};
        transition: max-height 0.3s ease-in;
    }
`;

export const MenuLink = styled.p`
    padding: 1rem 2rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;

    transition: all 0.3s ease-in;
    font-size: 0.9rem;

    &:hover{
        color: #fff;
        background-color: #72ed46;
    }

    background-color: ${({ menuselecionado, nomemenu }) => {
        if (menuselecionado == nomemenu) return ("#72ed46")
        if (menuselecionado != nomemenu) return ("#52e427")
    }};
    
     color: ${({ menuselecionado, nomemenu }) => {
        if (menuselecionado == nomemenu) return ("#fff")
        if (menuselecionado != nomemenu) return ("#fff")
    }};
`;

export const Logo = styled.a`
    padding: 1rem 0;
    color: #fff;
    text-decoration: none;
    font-weight: 800;
    font-size: 1.7rem;

    span{
        font-weight: 300;
        font-size: 1.3rem;
    }


`;
export const Img = styled.img`
  width: 25px;
  height: 25px;
`;