import { extendTheme } from "@chakra-ui/react";
import { typePokemonImage } from "../img/img";
import { Progress } from "./component/Progress";

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
            electric: "#F4D23B",
            ground: "#D97745",
            normal: "#8A8A8A",
            flying: "#6892B0"
        },
    },
    textStyles: {
        padrao: {
            fontFamily:"Poppins",
            fontStyle:"normal",
            fontWeight: 700
        }
    },
    Progress,
    Image: {
      links: {
        typePokemonImage: typePokemonImage
      }
    }
})

export const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
}