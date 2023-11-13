import Header from "./components/organisms/Header";
import Banner from "./components/molecules/Banner";
import BannerImg from "./assets/images/banner-1.png";
import Host from "./components/molecules/Host";
import "./styles/style.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner src={BannerImg} title="Chez vous, partout et ailleurs"/>
      <Host />
    </div>
  );
}

export default App;
