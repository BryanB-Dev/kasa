import Header from "../../organisms/Header"
import Slider from "../../molecules/Slider"
import Details from "../../organisms/Details"
import Footer from "../../organisms/Footer"
import CollapseContainer from "../../organisms/CollapseContainer";
import "./style.scss";

export default function InfosTemplate({ datas }) {

    const collaspe = [
        { title: 'Description', content: datas.description },
        { title: 'Équipements', content: datas.equipments }
    ]

    return (
        <>
            <div className="wrapper">
                <div className="infosContainer">
                    <Header />
                    <div className="infosContainer__details">
                        <Slider datas={datas} />
                        <Details datas={datas} />
                        <CollapseContainer datas={collaspe} row={true} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
