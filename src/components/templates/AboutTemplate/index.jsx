import Header from "../../organisms/Header"
import Footer from "../../organisms/Footer"
import BannerImg from "../../../assets/images/banner-2.png";
import Banner from "../../molecules/Banner";
import CollapseContainer from "../../organisms/CollapseContainer";
import "./style.scss";

export default function AboutTemplate( { datas }) {

    return (
        <>
            <div className="aboutContainer">
            <Header />
            <Banner src={BannerImg} title="" />
            <CollapseContainer datas={datas} />
            <Footer />
            </div>
        </>
    );
}
