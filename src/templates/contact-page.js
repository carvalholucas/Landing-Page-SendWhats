import React from 'react'

import * as S from './styles'
import GlobalStyles from "../styles/global"

import Logo from '../images/logo.png'

const ContactPage = ({ pageContext: { user } }) => (
    <>
        <GlobalStyles />
        <S.Wrapper>
            <S.Header>
                <S.Logo src={Logo} />
            </S.Header>
            <S.Section>
                <S.Desc>Envie uma mensagem para <span>{user.name}</span>, é só clicar no botão 👇</S.Desc>
                <S.Button
                    href={`https://api.whatsapp.com/send?phone=${user.number}&text=${user.message}`}
                    target="_blank" rel="noopener noreferrer">Enviar mensagem</S.Button>
            </S.Section>
        </S.Wrapper>
    </>
)

export default ContactPage
