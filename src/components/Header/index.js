import React from 'react'

import * as S from './styles'
import * as L from '../Layout/styles'

import Logo from '../../images/logo.png'

const Header = () => (
    <L.Header>
        <S.LogoWrapper src={Logo} alt="SendWhats"/>
        <nav>
            <S.Menu>
                <S.MenuItem>Como funciona?</S.MenuItem>
                <S.MenuItem>Benefícios</S.MenuItem>
                <S.MenuItem>Fale Conosco</S.MenuItem>
                <S.MenuItem>Login</S.MenuItem>
                <S.MenuItem className="btn">Crie uma conta</S.MenuItem>
            </S.Menu>
        </nav>
    </L.Header>
)

export default Header