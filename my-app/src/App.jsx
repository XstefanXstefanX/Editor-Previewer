import Header from './HEADER/Header';
const App = () => {
    return (
        <div className='App'>
            <Header/>
            <video autoPlay loop muted className='videoBg'>
                <source type="video/mp4" src="https://cdne-marshall-assets.azureedge.net/content/uploads/8a0d1cfb-2e6a-40f3-90cb-26b0b5501d31.mp4?20210924124101"/>
                    <img src="https://cdne-marshall-assets.azureedge.net/content/uploads/7aaec63a-2a51-4c4c-9c60-d1d62e9c15ff.jpg?20190925151235" alt=""/>
            </video>
        </div>
    )
};

export default App;