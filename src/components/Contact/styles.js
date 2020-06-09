import styled, { css } from 'styled-components'

export const FormWrapper = styled.section`
    margin-top: 6em;
    text-align: left;
    width: 45%;
`

export const FormDesc = styled.p`
    color: #fff;
    line-height: 1.5em;
    margin-top: 2em;
    text-align: center;
    width: 45%;
`

export const FormItem = styled.div`
    display: flex;
    font-size: 14px;
    flex-direction: column;
    margin-bottom: 24px;

    .error {
        color: #ff4d4f;
        font-size: 12px;
        padding-top: .5em;
    }
`

export const Label = styled.label`
    margin-bottom: 10px;
    line-height: 1.5715;
    white-space: initial;
`

export const FieldStyle = styled.input`
    border-radius: 5px;
    border: 1px solid #e6e6e6;
    font-size: 13px;
    outline: 0;
    padding: 1em;
`

const Default = css`
    border-radius: 5px;
    border: 1px solid #e6e6e6;
    font-size: 13px;
    outline: 0;
    padding: 1em;

    &.field-error {
        border: 1px solid #ff4d4f;
    }

    &.field-success {
        border: 1px solid #5fc837;
    }

    ::placeholder {
        color: #c9c9c9;
    }

    &:focus {
        border-color: #02c39a;
    } 
`

export const Field = styled.input`
    ${Default}
    width: 100%;
`

export const FieldArea = styled.textarea`
    ${Default}
    resize: none;
`

export const FieldPassword = styled.div`
    align-items: center;
    display: flex;
    justify-content: flex-end;
    position: relative;

    .icon {
        cursor: pointer;
        color: #949494;
        height: 2.2em;
        position: absolute;
        width: 2.2em;
        padding-right: 1em;
    }

    input {
        ${Default}
        width: 100%;
    }
`

export const Button = styled.button`
    background: #05668d;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    font-size: 1em;
    padding: 1em;

    &:hover {
        background: rgba(5, 102, 141, .7);
    }
`