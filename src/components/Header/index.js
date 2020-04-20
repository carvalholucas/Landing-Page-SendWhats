import React from 'react'

import * as S from './styles'

const Header = () => (
    <S.Header>
        <S.LogoWrapper>SendWhats</S.LogoWrapper>
        <nav>
            <S.Menu>
                <S.MenuItem>Como funciona?</S.MenuItem>
                <S.MenuItem>Benefícios</S.MenuItem>
            </S.Menu>
        </nav>
    </S.Header>
)

export default Header
