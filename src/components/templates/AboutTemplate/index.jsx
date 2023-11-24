import Header from "../../organisms/Header"
import Footer from "../../organisms/Footer"
import BannerImg from "../../../assets/images/banner-2.png";
import Banner from "../../molecules/Banner";

export default function AboutTemplate() {

    return (
        <>
            <Header />
            <Banner src={BannerImg} title="" />
            <Footer />
        </>
    );
}
