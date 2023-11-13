import Header from "./components/organisms/Header";
import Banner from "./components/molecules/Banner";
import BannerImg from "./assets/images/banner-1.png";
import Footer from "./components/organisms/Footer";
import CardContainer from "./components/organisms/CardContainer";
import "./styles/style.scss";
import Details from "./components/organisms/Details";
import Datas from "./data/data.json";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Banner src={BannerImg} title="Chez vous, partout et ailleurs"/> */}
      {/* <CardContainer /> */}
      <Details datas={Datas[0]}/>
      <Footer />
    </div>
  );
}

export default App;
