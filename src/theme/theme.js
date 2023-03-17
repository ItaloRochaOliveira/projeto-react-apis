import { extendTheme } from "@chakra-ui/react";
import { Progress } from "./component/Progress";
import { colors } from "./colors/colors";
import { textStyles } from "./textStyles/textStyles";

export const theme = extendTheme({
  components: {
    Progress,
  },
    colors,
    textStyles,
})

