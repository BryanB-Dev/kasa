import Header from "./components/organisms/Header";
import Banner from "./components/molecules/Banner";
import BannerImg from "./assets/images/banner-1.png";
import Host from "./components/molecules/Host";
import Footer from "./components/organisms/Footer";
import "./styles/style.scss";
import Card from "./components/molecules/Card";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner src={BannerImg} title="Chez vous, partout et ailleurs"/>
      {/* <Host /> */}
      <Card img={BannerImg} title="Titre de la location" />
      <Footer />
    </div>
  );
}

export default App;
