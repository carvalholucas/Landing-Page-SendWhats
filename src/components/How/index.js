import React from 'react'

import { LogIn } from 'styled-icons/evaicons-solid'
import { Text } from 'styled-icons/entypo'
import { ShareAlt } from 'styled-icons/boxicons-solid'

import * as S from './styles'
import * as L from '../Layout/styles'

const How = () => (
    <L.How>
        <L.SubTitle>Como funciona</L.SubTitle>
        <L.Title>É muito simples, rápido e seguro</L.Title>

        <S.CardWrapper>
            <S.Card>
                <S.CardIcon>
                    <S.CardIcon className="inner">
                        <LogIn size={28} />
                    </S.CardIcon>
                </S.CardIcon>
                <h1>Crie sua conta</h1>
                <p>É simples, só precisamos de um e-mail válido e uma senha forte que você se lembre para logar.</p>
            </S.Card>

            <S.Card className="shadow">
                <S.CardIcon>
                    <S.CardIcon className="inner">
                        <Text size={28} />
                    </S.CardIcon>
                </S.CardIcon>
                <h1>Coloque as informações</h1>
                <p>Prometemos que é rápido, é só informar o seu Whatsapp, e se desejar coloque uma mensagem predefinida.</p>
            </S.Card>

            <S.Card>
                <S.CardIcon>
                    <S.CardIcon className="inner">
                        <ShareAlt size={28} />
                    </S.CardIcon>
                </S.CardIcon>
                <h1>Compartilhe</h1>
                <p>Copíe seu link e compartilhe em todas as suas redes sociais. Viu como é fácil ?.</p>
            </S.Card>
        </S.CardWrapper>
    </L.How>
)

export default How
