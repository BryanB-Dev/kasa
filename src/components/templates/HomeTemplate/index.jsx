import Header from "../../organisms/Header"
import Footer from "../../organisms/Footer"
import CardContainer from "../../organisms/CardContainer";
import Banner from "../../molecules/Banner";
import BannerImg from "../../../assets/images/banner-1.png";
import "./style.scss";

export default function HomeTemplate({ datas }) {

    return (
        <>
            <div className="wrapper">
                <div className="home">
                    <Header />
                    <div className="home__main">
                        <Banner src={BannerImg} title="Chez vous, partout et ailleurs" />
                        <CardContainer datas={datas} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
