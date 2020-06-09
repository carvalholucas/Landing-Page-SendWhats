import styled from 'styled-components'

export const LayoutMain = styled.main`
    background: #ffffff;
    display: grid;
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    grid-template-columns: 5em 1fr 5em;
    grid-template-areas: 
        'header header header'
        '. hero .'
        '. how .'
        '. benefit .'
        'contact contact contact'
        'footer footer footer';
` 

export const Header = styled.header`
    align-items: center;
    background: #ffffff;
    display: flex;
    grid-area: header;
    justify-content: space-between;
    padding: 1.5em 4em;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 2;
    /* -webkit-box-shadow: 0px 0px 30px 0px rgba(180,180,180,0.15);
    -moz-box-shadow: 0px 0px 30px 0px rgba(180,180,180,0.15);
    box-shadow: 0px 0px 30px 0px rgba(180,180,180,0.15); */
`

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    padding: 0 4em;
    text-align: center;
`

export const Hero = styled.section`
    display: grid;
    grid-area: hero;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "copy bg";
    height: 100vh;
`

export const How = styled(Section)`
    grid-area: how;
`

export const Benefit = styled(Section)`
    grid-area: benefit;
`

export const Contact = styled(Section)`
    align-items: center;
    background: #49aa98;
    grid-area: contact;
`

export const Footer = styled.footer`
    align-items: center;
    display: flex;
    grid-area: footer;
    justify-content: space-between;
    padding: 1.5em 4em;
`

export const SubTitle = styled.p`
    color: ${props => props.color ? props.color : '#7f8f9f' };
    margin-bottom: .5em;
`

export const Title = styled.h1`
    color: ${props => props.color ? props.color : '#00a896' };
    font-weight: 700;
    font-size: 2em;
`

export const ActionButton = styled.button`
    background: #49aa98;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    font-size: 1em;
    margin-top: 3em;
    padding: 1.5em 4em;

    &:hover {
        background: #47a291;
    }
`