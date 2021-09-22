import React from "react";
import "./Definitions.css";

const Definitions = ({ meanings, word, language, lightMode }) => {
  return (
    <div className="meanings">
      {meanings[0].phonetics[0].audio && word && language === "en" && (
        <div className="audio">
          <audio
            src={meanings[0].phonetics[0].audio}
            controls
            style={{ height: "20px" }}
          >
            Your browser doesn't support it!
          </audio>
        </div>
      )}

      {word ? (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def, inx) => (
              <div
                style={{
                  backgroundColor: lightMode ? "#424242" : "#fff",
                  color: lightMode ? "#fff" : "#000",
                  margin: "10px",
                  borderRadius: "5px",
                }}
                key={inx}
              >
                <p className="def">{def.definition}</p>
                {def.example && (
                  <>
                    <hr />
                    <p className="example">
                      <b>Example:</b> {def.example}
                    </p>
                  </>
                )}
                {def.synonyms.length !== 0 && (
                  <p className="synonyms">
                    <b>Synonyms:</b> {def.synonyms.join(", ")}
                  </p>
                )}
              </div>
            ))
          )
        )
      ) : (
        <span className="subtitle">Start by typing a word in search!</span>
      )}
    </div>
  );
};

export default Definitions;
