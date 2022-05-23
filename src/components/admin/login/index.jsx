
import React, { useState, useEffect } from 'react'
import { Body, Main, Foother, Img, Form, Div, DivImg, ImgForm, Erro, DivButton, Button, DivLink, P, PLink, DivImagem, DivLoginForm } from './styles'
import Navbar from "../../home/NavBar/index"
import ImagemLogin from '../../../images/undraw_explore_re_8l4v.svg'
import ImagemForm from '../../../images/undraw_my_password_re_ydq7.svg'
import Fundo from '../../../images/vecteezy_abstract-white-fluid-wave-background_7075692.jpg'
import InputItemText from '../InputText'
import Cadastro from '../Cadastro'
import { useNavigate } from 'react-router-dom'

function Login() {
    let navigate = useNavigate();
    const [viewLogin, setViewLogin] = useState(true)




    return (
        <Body background={Fundo}>
            <Navbar back={-1} admin={""} />
            <Main>
                {viewLogin &&
                    <>
                        <DivImagem>
                            {/* <Img src={ImagemLogin} width="300" height="300" /> */}
                        </DivImagem>
                        <DivLoginForm>
                            <Form onSubmit={() => { navigate("dashboard") }}>
                                <Div>
                                    <DivImg>
                                        <ImgForm src={ImagemForm} />
                                    </DivImg>
                                    <InputItemText width="100%" placeholder="E-mail" type="text" requiredValue={true} />
                                    <InputItemText width="100%" placeholder="Password" type="password" requiredValue={true} />
                                    <Erro></Erro>
                                    <DivButton>
                                        <Button type='submit'>Login</Button>
                                    </DivButton>
                                    <DivLink>
                                        <P>Não tem uma conta?</P>
                                        <PLink onClick={() => { setViewLogin(false) }}>Cadastre-se</PLink>
                                    </DivLink>
                                </Div>
                            </Form>
                        </DivLoginForm>
                    </>
                    ||
                    <Cadastro setViewLogin={setViewLogin} />
                }

            </Main>
            <Foother>asdas</Foother>
        </Body>
    )
}

export default Login