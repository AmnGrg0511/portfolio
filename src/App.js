import "./App.css";
import { useState } from "react";
import { responsiveFontSizes } from "@material-ui/core/styles";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import {
  blue,
  deepOrange,
  purple,
  pink,
  red,
  green,
  indigo,
} from "@material-ui/core/colors";
import Home from "./Home";

const colors = [blue, deepOrange, purple, pink, red, green, indigo];

function App() {
  const [dark, setDark] = useState(localStorage.getItem("dark") === "T");
  const [palette, setPalette] = useState(localStorage.getItem("palette") ?? 0);

  let theme = createTheme({
    overrides: {
      MuiPaper: {
        elevation1: {
          boxShadow: "rgb(0 0 0 / 15%) 0px 5px 15px 0px",
        },
      },
    },
    typography: {
      fontFamily: "'Poppins', 'sans-serif'",
    },
    palette: {
      type: dark ? "dark" : "light",
      primary: {
        main: colors[palette][500],
        contrastText: "#fff",
      },
      background: {
        default: dark ? "#121620" : "#fafafa",
        paper: dark ? "#040813" : "#ffffff",
      },
    },
  });
  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <Home
        dark={dark}
        setDark={setDark}
        palette={palette}
        setPalette={setPalette}
      />
    </ThemeProvider>
  );
}

export default App;
