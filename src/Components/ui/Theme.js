import { createMuiTheme } from "@material-ui/core/styles";

const bayCharcoal = "#334048",
  bayTimberwolf = "#DBD3C9";

export default createMuiTheme({
  palette: {
    common: {
      bayCadet: `${bayCharcoal}`,
      bayFireOpal: "#ee6352",
      bayDarkByzantium: "#5b2e48",
      bayTimberwolf: `${bayTimberwolf}`,
      bayAsparagus: "#8dab7f",
    },
    primary: {
      main: `${bayCharcoal}`,
    },
    secondary: {
      main: `${bayTimberwolf}`,
    },
  },
});
