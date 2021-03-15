import { createMuiTheme } from "@material-ui/core/styles";
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Titillium Web:200,300,400,700,900", "sans-serif"],
  },
});

const lightGray = "#ccd0cd",
  raisinBlack = "#171a2a";

export default createMuiTheme({
  palette: {
    common: {
      lightGray: `${lightGray}`,
      raisinBlack: `${raisinBlack}`,
      middleBluePurple: "#8272b3",
      polishedPine: "#6f9c84",
      purpleNavy: "#4d4a86",
    },
    primary: {
      main: `${raisinBlack}`,
    },
    secondary: {
      main: `${lightGray}`,
    },
  },
  typography: {
    fontFamily: [
      "Titillium Web",
      "-apple-system",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
    fontStyle: "semi-bold",
  },
});
