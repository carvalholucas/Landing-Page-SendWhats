import React from 'react'

import * as S from './styles'
import * as L from '../Layout/styles'

import Logo from '../../images/logo.png'

const Footer = () => (
    <L.Footer>
        <S.LogoWrapper src={Logo} alt="SendWhats"/>
        <S.Copyright>SendWhats 2020. Todos os direitos reservados</S.Copyright>
    </L.Footer>
)

export default Footer
