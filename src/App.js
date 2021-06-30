import "./styles.css"; //Import peret m'accès à d'autres fichier
import React from "react";

const App = () => {
  const greeting = "Yo momma so fat";

  return (
    <div className="App">
      <div>
        <h1>Zesty</h1>
        <h2>
          A photography project
          <br /> by Ella Fielding
        </h2>
      </div>

      <div className="image-container">
        <img alt="" src=""></img>
      </div>
    </div>
  );
};

export default App; //Good practice to make the last part of the file
