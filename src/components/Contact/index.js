import React from 'react'

import { Form } from '@unform/web'

import * as S from './styles'
import Input from './Input'
import TextArea from './TextArea'

import * as L from '../Layout/styles'

const Contact = () => (
    <L.Contact>
        <L.Title color="#ffffff">Nos mande sua sugestão</L.Title>
        <S.FormDesc>Como podemos te ajudar? Nos conte sua necessidade, envie uma sugestão, será um prazer falar com você.</S.FormDesc>

        <S.FormWrapper>
            <Form>
                <S.FormItem>
                    <Input
                        name="name"
                        type="text"
                        label="Nome Completo"
                        placeholder="Informe seu nome completo"
                    />
                </S.FormItem>
                <S.FormItem>
                    <Input
                        name="email"
                        type="email"
                        label="Seu email"
                        placeholder="Informe seu email"
                    />
                </S.FormItem>
                <S.FormItem>
                    <TextArea
                        name="message"
                        label="Sua mensagem"
                        rows="6"
                        placeholder="Coloque aqui a sua sugestão"
                    />
                </S.FormItem>
                <S.FormItem>
                    <S.Button type="submit">Enviar minha sugestão</S.Button>
                </S.FormItem>
            </Form>
        </S.FormWrapper>
    </L.Contact>
)

export default Contact
