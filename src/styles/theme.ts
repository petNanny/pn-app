import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { StyleFunctionProps } from "@chakra-ui/theme-tools";
import buttonStyles from "./components/buttonStyles";

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
  brand: {
    primary: "#344C5C",
    secondary: "#40B484",
    primaryLight: "#496A80",
    lightGray: "#B6B6B6",
  },
  background: {
    primary: "#2C4E8A",
    secondary: "#7088B1",
    tertiary: "#FFFFFF",
    secondaryLight: "#2c5282",
    lightOrange: "#DD6B20",
    veryLightOrange: "#E18E11",
    darkRed: "#9F100F",
    lightblue: "#E2E8F0",
  },
  fontcolor: {
    primary: "#FFFFFF",
    secondary: "#1A202C",
    tertiary: "#4285f4",
    quaternary: "#C8C5C5",
    tealishBlue: "#2C4E8A",
    black: "#000000",
    green: "#40B383",
    red: "#EB4335",
    deepDark: "#000000",
    lightDark: "#344C5C",
  },
  CourtSizecolor: {
    btc: "#40B484",
    bt: "#FFFFFF",
    border: "#344C5C",
  },
  button: {
    hover: "#40B484",
    active: "#699D88",
  },
  footerSwitch: {
    500: "#40B484",
  },
  tag: {
    courtCategory: "#7c9fdf",
    courtType: "#E18E11",
  },
};

const theme = extendTheme({
  colors,
  config,
  styles,
});

export default theme;
