import Header from "../../organisms/Header"
import Slider from "../../molecules/Slider"
import Details from "../../organisms/Details"
import Footer from "../../organisms/Footer"

export default function InfosTemplate({ datas }) {

    const location = { home: false , about: false };

    return (
        <>
            <Header location={location} />
            <Slider datas={datas}/>
            <Details datas={datas} />
            <Footer />
        </>
    );
}
