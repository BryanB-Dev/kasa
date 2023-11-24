import Header from "../../organisms/Header"
import Slider from "../../molecules/Slider"
import Details from "../../organisms/Details"
import Footer from "../../organisms/Footer"

export default function InfosTemplate({ datas }) {

    return (
        <>
            <Header />
            <Slider datas={datas}/>
            <Details datas={datas} />
            <Footer />
        </>
    );
}
