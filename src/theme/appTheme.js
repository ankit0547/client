import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

const primaryTheme = createTheme({
  palette: {
    primary: {
      main: "#88FF88",
    },
    secondary: {
      main: "#00FF00",
    },
  },
  zIndex: {
    snackbar: 1500,
    tooltip: 1600,
  },
});

export const theme = responsiveFontSizes(primaryTheme);
