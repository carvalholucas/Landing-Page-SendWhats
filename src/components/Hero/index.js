import React from 'react'

import * as S from './styles'
import * as L from '../Layout/styles'

const Hero = () => (
    <L.Hero>
        <S.CopyHero>
            <h1>Crie um link <br/>direto para o seu <br/>Whatsapp.</h1>
            <p>Nunca foi tão fácil criar um link personalizado para compartilhar seu Whatsapp. Faça tudo de maneira rápida e segura, sem pagar absolutamente nada!</p>
            <L.ActionButton>Quero criar meu link</L.ActionButton>
        </S.CopyHero>
        <S.ImageHero>
            
        </S.ImageHero>
    </L.Hero>
)

export default Hero;
