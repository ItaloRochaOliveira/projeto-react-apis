import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors: {
        type: {
            grass: "#729F92",
            fire: "#EAAB7D",
            water: "#71C3FF",
            bug: "#76A866",
            poison: "purple",
            electric: "yellow",
            ground: "brown",
            normal: "#BF9762"
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