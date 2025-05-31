import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#86A8E4",
    },
    secondary: {
      main: "#C8743C",
      dark: "#92202A"
    },
    text: {
      primary: "#E1E8F4",
      secondary: "#9ca1aa"
    },
    background: {
      default: "#050A0A",
      paper: "#E1E8F4"
    }
  }
});

export default theme;