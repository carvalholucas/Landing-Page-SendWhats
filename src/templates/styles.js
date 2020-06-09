import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
    background: #fff;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
`

export const Header = styled.header`
    align-items: center;
    /* background: #02c39a; */
    display: flex;
    height: 40vh;
    justify-content: center;
`

export const Logo = styled.img`
    width: 250px;
`

export const Section = styled.section`
    align-items: center;
    background: #fff;
    display: flex;
    flex-direction: column;
    height: 60vh;
    justify-content: space-between;
    padding: 1.5em;
    text-align: center;

    ${media.between("medium", "large")`
        align-items: center;
    `} 

    ${media.greaterThan("large")`
        align-items: center;
    `}
`

export const Desc = styled.h1`
    font-size: 1.6em;
    font-family: 'Poppins',sans-serif;
    font-weight: 200;
    line-height: 2em;
    width: 80%;

    span {
        font-weight: 400;
    }

    ${media.lessThan("medium")`
        width: 100%;
    `}
`

export const Button = styled.a`
    align-self: normal;
    border-radius: 30px;
    background: #02c39a;
    color: #ffffff;
    font-size: 1em;
    padding: 1em;
    text-decoration: none;

    ${media.between("medium", "large")`
        align-self: auto;
        width: 50%;
    `} 

    ${media.greaterThan("large")`
        align-self: auto;
        width: 25%;
    `} 
`