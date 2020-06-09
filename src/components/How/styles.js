import styled from 'styled-components'

export const CardWrapper = styled.section`
    align-items: center;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 350px;
    margin-top: 7em;
`

export const Card = styled.article`
    align-items: center;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
    padding: 2em;
    text-align: center;

    &.shadow {
        -webkit-box-shadow: 0px 0px 30px 0px rgba(198,198,198,0.4);
        -moz-box-shadow: 0px 0px 30px 0px rgba(198,198,198,0.4);
        box-shadow: 0px 0px 30px 0px rgba(198,198,198,0.4);   
    }

    h1 {
        color: #2a2a2a;
        font-weight: 500;
    }

    p {
        color: #7f8f9f;
        font-weight: 300;
        font-size: .9em;
        line-height: 1.5em;
    }
`

export const CardIcon = styled.div`
    align-items: center;
    background: rgba(73, 170, 152, 0.2);
    border-radius: 50%;
    color: #028090;
    display: flex;
    justify-content: center;
    margin-bottom: 2em;
    width: 90px;
    height: 90px;

    &.inner {
        background: rgba(73, 170, 152, 0.3);
        width: 60px;
        height: 60px;
        margin: 0;
    }
`