import styled from 'styled-components'
import media from 'styled-media-query'

export const Header = styled.header`
    align-items: center;
    background: #ffffff;
    border-bottom: 1px solid #f5f5f5;
    display: flex;
    justify-content: space-between;
    padding: 1.5em 6em;
`

export const LogoWrapper = styled.div`
    font-size: 1.2em;
    font-weight: 700;
`

export const Menu = styled.ul`
    display: flex;
`

export const MenuItem = styled.li`
    margin-left: 2em;
    font-size: .9em;
`