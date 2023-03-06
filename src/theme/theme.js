import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors: {
        typeColorCard: {
            grass: "#729F92",
            fire: "#EAAB7D",
            water: "#71C3FF",
            bug: "#76A866",
            poison: "purple",
            electric: "yellow",
            ground: "brown",
            normal: "#BF9762"
        },
        typeColorType: {
            grass: "#70B873",
            fire: "#F44900",
            water: "#33A4F5",
            bug: "#316520",
            poison: "#AD61AE",
            electric: "yellow",
            ground: "brown",
            normal: "#8A8A8A",
            flying: "#6892B0"
        }
    },
    font: {
        padrao: {
            fontFamily:"Poppins",
            fontStyle:"normal",
            fontWeight: 700
        }
    }
})