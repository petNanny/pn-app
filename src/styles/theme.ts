import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { StyleFunctionProps } from "@chakra-ui/theme-tools";
import buttonStyles from "./components/buttonStyles";
import fontStyles from "./components/fontStyles";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const styles = {
  styles: {
    global: (props: StyleFunctionProps) => ({
      "html, body": {
        bg: props.colorMode === "dark" ? "gray.800" : "orange.50",
      },
    }),
  },
};

const colors = {
  background: {
    primary: "#5CACE2",
    secondary: "#00C38A",
    tertiary: "#F9F9F9",
    quaternary: "#5197C6",
    error: "#EB4335",
    lightgrey: "#CECECE",
    grey: "#808080",
  },
  fontcolor: {
    primary: "#FFFFFF",
    secondary: "#4F4F4F",
    tertiary: "#00AFED",
    quaternary: "#C8C5C5",
    black: "#000000",
    green: "#00C38A",
    ok: "#EB4335",
    success: "#00C38A",
    error: "#EB4335",
  },
};
const components = {
  Button: { ...buttonStyles },
  Text: { ...fontStyles },
};

const theme = extendTheme({
  colors,
  config,
  styles,
  components,
});

export default theme;
