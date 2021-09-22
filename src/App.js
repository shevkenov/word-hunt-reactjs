import React from "react";
import { alpha, Container, styled, Switch } from "@material-ui/core";
import "./App.css";

import dictionaryApi from "./helper/api";
import Header from "./components/Header/Header";
import Definitions from "./components/Definitions/Definitions";
import { grey } from "@material-ui/core/colors";

function App() {
  const [language, setLanguage] = React.useState("en");
  const [word, setWord] = React.useState("");
  const [meanings, setMeanings] = React.useState("");
  const [lightMode, setLightMode] = React.useState(false);

  const GreySwitch = styled(Switch)(({ theme }) => ({
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: grey[600],
      "&:hover": {
        backgroundColor: alpha(grey[600], theme.palette.action.hoverOpacity),
      },
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor: grey[600],
    },
  }));

  const translate = React.useCallback( async () => {
    try {
      const response = await dictionaryApi.get(`${language}/${word}`);

      setMeanings(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [language, word]);

  React.useEffect(() => {
    if (word) translate();
  }, [translate, word]);

  return (
    <div
      className="App"
      style={{
        height: "100vh",
        backgroundColor: lightMode ? "#fff" : "#282c34",
        color: lightMode ? "#000" : "#fff",
        transition: "all 0.5s linear",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <Container maxWidth="md">
        <div className="switch">
          <span>{lightMode ? "Dark" : "Light"} Mode</span>
          <GreySwitch
            checked={lightMode}
            onChange={() => setLightMode(!lightMode)}
          />
        </div>
        <Header
          word={word}
          setWord={setWord}
          language={language}
          setLanguage={setLanguage}
          lightMode={lightMode}
        />
        {meanings && (
          <Definitions lightMode={lightMode} meanings={meanings} word={word} language={language} />
        )}
      </Container>
    </div>
  );
}

export default App;
