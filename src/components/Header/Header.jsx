import React from "react";
import {
  TextField,
  ThemeProvider,
  createTheme,
  MenuItem,
} from "@material-ui/core";
import languages from "../../data/languages";
import "./Header.css";

const Header = ({ language, setLanguage, word, setWord, lightMode }) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: lightMode ? "#fff" : "#000",
      },
      type: lightMode ? "light" : "dark",
      mode: lightMode ? "light" : "dark",
    },
  });
  return (
    <div className="header">
      <h1 className="heading">word hunt</h1>
      <div className="input">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            id="standard-basic" 
            label="Search a word"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <TextField
            className="select"
            select
            label="Language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            {languages.map((l) => (
              <MenuItem key={l.label} value={l.label}>
                {l.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
