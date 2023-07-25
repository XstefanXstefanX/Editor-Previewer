import Header from "./HEADER/Header";
import ImageMarket from "./CONTENT/ImageMarket";

const App = () => {
  return (
    <div className="App">
      {/*Still in need of some changes in Header :(*/}
      <Header />
      <div className="videoContainer">
        <video autoPlay loop muted className="videoBg">
          <source
            type="video/mp4"
            src="https://cdne-marshall-assets.azureedge.net/content/uploads/07d9e2c0-b2a9-4d54-b0d6-8e0d6cfda4c6.mp4?20210924124105"
          />
        </video>
        <button className="rotatedSquare" id='square'>
          <div className="tick"></div>
        </button>
      </div>
      <ImageMarket />
    </div>
  );
};

export default App;
