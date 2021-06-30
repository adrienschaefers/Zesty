import "./styles.css"; //Import peret m'accès à d'autres fichier
import React from "react";
import cabbage from "./assets/image1.jpeg";
import mango from "./assets/image2.jpeg";
import fig from "./assets/image3.jpeg";
import gaze from "./assets/image4.jpeg";
import peach from "./assets/image5.jpeg";
import avocado from "./assets/image6.jpeg";

const images = [cabbage, mango, fig, gaze, peach, avocado];

const App = () => {
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
        <img alt="" src={images[2]}></img>
      </div>
    </div>
  );
};

export default App; //Good practice to make the last part of the file
