import styled from 'styled-components'

export const LogoWrapper = styled.img`
    width: 200px;
`

export const Menu = styled.ul`
    align-items: center;
    display: flex;
`

export const MenuItem = styled.li`
    color: #7f8f9f;
    cursor: pointer;
    font-size: .9em;
    font-weight: 300;
    margin-left: 3em; 

    &:hover {
        color: #49aa98;
    }

    &.btn {
        background: #49aa98;
        border-radius: 5px;
        color: #fff;
        padding: 1em 2em;

        &:hover {
            background: #47a291;
        }
    }
`