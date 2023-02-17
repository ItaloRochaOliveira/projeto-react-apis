import styled from "styled-components";

export const CorDoCard = styled.div`
    background: ${(props) => {
        switch(props.type){
            case "grass": 
                console.log(props.type)
                return "green"
            case "fire": 
                return "red"
            case "water":
                return "blue"
            case "bug":
                return "green"
            case "poison":
                return "purple"
            case "electric":
                return "yellow"
            case "ground":
                return "brown"
            default:
                return "gray"
    }}};
    width: 300px;
    margin: 10px;
`