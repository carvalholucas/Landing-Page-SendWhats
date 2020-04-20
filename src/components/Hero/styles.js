import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.section`
    height: calc(100vh - 70px);
    background: #fff;
    padding: 1.5em 6em;
    display: grid; 
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
        "copy image";
`

export const CopyHero = styled.article`
    align-items: flex-start;
    grid-area: copy;
    display: flex;
    font-size: 3.5em;
    flex-direction: column;
    font-weight: 700;
    justify-content: center;
    line-height: 125%;
`

export const ImageHero = styled.article`
    grid-area: image;
`

export const ActionButton = styled.button`
    padding: 1em 2em;
    background: #278a65;
    border: none;
    color: #fff;
    font-size: 15px;
    border-radius: 3px;
    margin-top: 3em;
`