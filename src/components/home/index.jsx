import React from 'react'
import { Body, Main, Foother } from './styles'
import Navbar from './NavBar'
import Desaparecido from './desaparecido'
import Fundo from '../../images/vecteezy_abstract-white-fluid-wave-background_7075692.jpg'

function Home() {
    return (
        <Body background={Fundo}>
            <Navbar back={""} admin={"admin"} />
            <Main>
                <Desaparecido />
                <Desaparecido />
                <Desaparecido />
                <Desaparecido />
                <Desaparecido />
                <Desaparecido />
                <Desaparecido />
                <Desaparecido />
                <Desaparecido />
                <Desaparecido />
                <Desaparecido />
                <Desaparecido />
                <Desaparecido />
                <Desaparecido />
                <Desaparecido />
                <Desaparecido />
                <Desaparecido />
                <Desaparecido />
            </Main>
            <Foother>asdas</Foother>
        </Body>
    )
}

export default Home