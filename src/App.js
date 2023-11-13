import Header from "./components/organisms/Header";
import Banner from "./components/molecules/Banner";
import Host from "./components/molecules/Host";
import BannerImg from "./assets/images/banner-1.png";
import Footer from "./components/organisms/Footer";
import CardContainer from "./components/organisms/CardContainer";
import "./styles/style.scss";
import Rate from "./components/molecules/Rate";
import Infos from "./components/molecules/Infos";
import Tag from "./components/atoms/Tag";

const test = 5;

function App() {
  return (
    <div className="App">
      <Header />
      <Banner src={BannerImg} title="Chez vous, partout et ailleurs"/>
      <CardContainer />
      <Host />
      <Rate rating={test}/>
      <Infos title="Cozy loft on the Canal Saint-Martin" location="Paris, Ile de France"/>
      <Tag title="Cozy"/>
      <Footer />
    </div>
  );
}

export default App;
