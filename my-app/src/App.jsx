import Header from "./HEADER/Header";
import ImageMarket from "./CONTENT/ImageMarket";
import AnimatedP from "./CONTENT/AnimatedParagraphs";
import Newsletter from "./CONTENT/Newsletter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./HEADER/SignUp";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="./HEADER/SignUp" element={<SignUp />} />
        </Routes>
      </Router>
      {/*Still in need of some changes in Header :(*/}
      <div className="videoContainer">
        <video autoPlay loop muted className="videoBg">
          <source
            type="video/mp4"
            src="https://cdne-marshall-assets.azureedge.net/content/uploads/07d9e2c0-b2a9-4d54-b0d6-8e0d6cfda4c6.mp4?20210924124105"
          />
        </video>
        <button className="rotatedSquare" id="square">
          <div className="tick"></div>
        </button>
      </div>
      <ImageMarket />
      <AnimatedP />
      <Newsletter />
      <div className="BLACKBLOCK">THE END IS NEAR...</div>
    </div>
  );
};

export default App;
