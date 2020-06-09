import styled from 'styled-components'

export const CopyHero = styled.article`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    grid-area: copy;
    justify-content: center;
    padding: 0 4em;

    h1 {
        color: #2a2a2a;
        font-size: 3.2em;
        font-weight: 700;
        margin: 1.5em 0 .8em;
        line-height: 125%;
    }

    p {
        color: #7f8f9f;
        font-weight: 300;
        line-height: 1.5em;
        margin-bottom: 3em;
        width: 75%;
    }
`

export const ImageHero = styled.article`
    grid-area: bg;
    opacity: .5;
`