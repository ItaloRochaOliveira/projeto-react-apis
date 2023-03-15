import { extendTheme } from "@chakra-ui/react";
import { Progress } from "./component/Progress";
import { colors } from "./colors/colors";

export const theme = extendTheme({
  components: {
    Progress,
  },
    colors,
    textStyles: {
        padrao: {
            fontFamily:"Poppins",
            fontStyle:"normal",
            fontWeight: 700
        }
    },
    breakpoints : {
      sm: '320px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
      '2xl': '1536px',
    }
})

