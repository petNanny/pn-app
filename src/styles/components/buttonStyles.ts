const buttonStyles = {
  variants: {
    submitBtn: {
      bg: "background.secondary",
      color: "fontcolor.primary",
      height: "50px",
      lineHeights: "40",
      margin: "16px 0px",
      width: { base: "300px", sm: "480px" },
      _hover: { bg: "background.secondary", opacity: "0.80" },
    },
    deleteBtn: {
      bg: "#C13D46",
      color: "white",
      _hover: { bg: "#C13D46", opacity: "0.80" },
    },
    strategiesLoginButton: {
      variant: "solid",
      fontSize: "lg",
      boxShadow: "base",
      width: { base: "300px", sm: "480px" },
      height: "50px",
    },
  },
};

export default buttonStyles;
