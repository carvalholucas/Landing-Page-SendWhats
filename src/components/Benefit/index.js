import React from 'react'

import * as S from './styles'
import * as L from '../Layout/styles'

const Benefit = () => (
    <L.Benefit>
        <S.Wrapper>
            <section></section>
            <S.Desc>
                <L.SubTitle>Como funciona</L.SubTitle>
                <L.Title>É muito simples, rápido e seguro</L.Title>

                <S.Text>Com apenas um link, você consegue compartilhar seu Whatsapp de uma maneira muito mais profissional, seu futuro cliente não precisará perder tempo cadastrando seu contato, com apenas um click, ele poderá entrar em contato com você, e tudo isso gratuitamente.</S.Text>

                <L.ActionButton>Quero criar meu link</L.ActionButton>
            </S.Desc>
        </S.Wrapper>
    </L.Benefit>
)

export default Benefit
