const fontStyles = {
  variants: {
    headerPrimary: {
      textColor: "fontcolor.secondary",
      fontSize: { base: "20", sm: "28" },
    },
    headerSecondary: {
      textColor: "fontcolor.secondary",
      fontSize: { base: "16", sm: "20" },
    },
    LinkText: {
      textColor: "fontcolor.tertiary",
      fontSize: { base: "16", sm: "20" },
      cursor: "pointer",
      _hover: { textDecoration: "underline" },
    },
  },
};

export default fontStyles;
