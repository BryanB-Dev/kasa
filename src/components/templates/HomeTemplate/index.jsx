import Header from "../../organisms/Header"
import Footer from "../../organisms/Footer"
import CardContainer from "../../organisms/CardContainer";
import Banner from "../../molecules/Banner";
import BannerImg from "../../../assets/images/banner-1.png";

export default function HomeTemplate({ datas }) {

    const location = { home: true , about: false };

    return (
        <>
            <Header location={location} />
            <Banner src={BannerImg} title="Chez vous, partout et ailleurs"/>
            <CardContainer datas={datas} />
            <Footer />
        </>
    );
}
