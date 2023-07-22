import Header from "./HEADER/Header";
const App = () => {
  return (
    <div className="App">
      {/*Still in need of some changes in Header :(*/}
      <Header />
      <div className="video">
        <video autoPlay loop muted className="videoBg">
          <source
            type="video/mp4"
            src="https://cdne-marshall-assets.azureedge.net/content/uploads/8a0d1cfb-2e6a-40f3-90cb-26b0b5501d31.mp4?20210924124101"
          />
        </video>
        <div className="rotatedSquare"></div>
      </div>
    </div>
  );
};

export default App;
