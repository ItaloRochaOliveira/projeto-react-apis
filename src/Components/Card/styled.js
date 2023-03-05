import styled from "styled-components";

export const TipoDoPokemon = styled.span`
    background: ${(props) => {
        switch(props.type){
            case "grass": 
                return "#70B873"
            case "fire": 
                return "#F44900"
            case "water":
                return "#33A4F5"
            case "bug":
                return "#316520"
            case "poison":
                return "#AD61AE"
            case "electric":
                return "yellow"
            case "ground":
                return "brown"
            case "normal":
                return "#8A8A8A"
            case "flying":
                return "#6892B0"
            default:
                return "gray"
    }}};

    width: 99px;
    height: 31px;
    padding: 5px 8px;
    margin: 5px;

    border: 1px dashed rgba(255, 255, 255, 0.47);
    border-radius: 8px;
`


export const ImagemDoPokemon = styled.img`
    position: absolute;
    right: 0;
    top: 0;

    width: 193px;
    height: 193px;
`

export const EspacoEntreItens = styled.div`
    display: flex;
    justify-content: space-between;
`

export const BotaoDetalhes = styled.a`
    text-decoration: underline;
    color: white;
`

export const BotaoCapturar = styled.button`
    width: 146px;
    height: 38px;
    padding: 4px 10px;

    border-radius: 8px;
`