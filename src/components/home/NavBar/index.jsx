import React, { useState } from 'react'
import { Hamburger, Logo, Menu, MenuLink, Nav, Img } from './styles'
import Logotipo from "../../../images/Orion_wheat.svg"
import { useNavigate } from 'react-router-dom'
function Navbar({ back, admin }) {
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const [menuSelecionado, setMenuSelecionado] = useState("")
    let navigate = useNavigate();




    function handleShowMenu(menuClicado) {
        setIsOpenMenu(!isOpenMenu)
        if (menuClicado != null) setMenuSelecionado(menuClicado)
    }
    function handleToHome() {
        handleShowMenu("Home");
        console.log("aqui")
        console.log(back)
        navigate(back);



    }
    function handleToAdmin() {
        handleShowMenu("Admin")
        if (admin != "") {
            navigate(admin);
        }


    }

    return (
        <Nav>
            <Logo>
                <Img src={Logotipo} />
                Hope
            </Logo>
            <Hamburger onClick={() => handleShowMenu()}>
                <span />
                <span />
                <span />
            </Hamburger>
            <Menu isOpenMenu={isOpenMenu}>
                <MenuLink onClick={handleToHome} menuselecionado={menuSelecionado} nomemenu="Home">Home</MenuLink>
                <MenuLink onClick={handleToAdmin} menuselecionado={menuSelecionado} nomemenu="Admin">Admin</MenuLink>
            </Menu>
        </Nav>
    )
}

export default Navbar