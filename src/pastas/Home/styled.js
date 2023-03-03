import styled from "styled-components";

export const HeaderLogin = styled.header`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    position: relative;

    margin: 21px 0;
`

export const BotaoPokedex = styled.button`
    @media(min-width: 700px){
        position: absolute;
        left: 75%;
        top: 15%;
    }
    
    display: flex;

    justify-content: center;
    align-items: center;
    padding: 4px 10px;

    width: 287px;
    height: 74px;
    


    background: #33A4F5;
    border-radius: 8px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;

    
`

export const Pokedex = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const CorDaMain = styled.main`
    background: #5E5E5E;
`

export const TodosPokemons = styled.p`
    color: white;

    margin-left: 20px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 3rem;
    line-height: 4.5rem;
`