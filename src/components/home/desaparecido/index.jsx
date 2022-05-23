import React from 'react'
import { Container, DivImagem, DivDados, ContentDados, P, Img, H2 } from './styles'
import Imagemdesp from '../../../images/perfilgithub.jpeg'
function Desaparecido() {

    return (
        <Container>
            <DivImagem>
                <Img src={Imagemdesp} />
            </DivImagem>
            <DivDados>
                <ContentDados>
                    <P>Mauro Peixoto</P>
                    <P>local: valentina</P>
                    <P>Idade: 17</P>
                </ContentDados>
                <H2>(81) 99606-4851</H2>
            </DivDados>



        </Container>
    )
}

export default Desaparecido