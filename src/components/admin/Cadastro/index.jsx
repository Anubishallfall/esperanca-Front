import React, { useRef, useState, useContext } from 'react'
import { Conteiner, Form, Div, Img, DivImagem, DivButton, Button, DivCirculo, DivFormCadastro, DivButtonVoltarLogin, PLogin, ImgVoltarLogin, DivVoltarParaLogin, DivButtonCadastrar, P, A } from "./styles";
import InputItemText from '../InputText';
import ImagemCad from '../../../images/undraw_color_palette_re_dwy7.svg'




function Cadastro({ setViewLogin }) {


    return (

        <Conteiner>
            <DivFormCadastro>
                <Form >
                    <DivImagem>
                        <DivCirculo>
                            <Img src={ImagemCad} width="150" height="150" />
                        </DivCirculo>
                    </DivImagem>
                    <Div>
                        <InputItemText width="70%" placeholder="Nome Completo" requiredValue={true} />
                        <InputItemText width="70%" placeholder="Email" type='email' requiredValue={true} />
                        <InputItemText width="70%" placeholder="Password" type='password' requiredValue={true} />
                    </Div>
                    <P></P>
                    <DivButton>
                        <DivVoltarParaLogin>
                            <P>
                                Tem uma conta?

                            </P>
                            <PLogin onClick={() => { setViewLogin(true) }}>Conecte-se</PLogin>
                        </DivVoltarParaLogin>
                        <DivButtonCadastrar>
                            <Button type="submit" >Cadastrar</Button>
                        </DivButtonCadastrar>
                    </DivButton>
                </Form>
            </DivFormCadastro>
            <DivButtonVoltarLogin>
                {/* <ImgVoltarLogin /> */}
            </DivButtonVoltarLogin>

        </Conteiner>

    )
}

export default Cadastro