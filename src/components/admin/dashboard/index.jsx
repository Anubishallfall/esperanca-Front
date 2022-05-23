import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../home/NavBar'
import { Body, Main, Foother } from './styles'
function Dashboard() {
    let navigate = useNavigate();

    return (
        <Body>
            <Navbar back={-2} admin={""} />
            <Main>asd</Main>
            <Foother>asdas</Foother>
        </Body>

    )
}

export default Dashboard