import Header from "../../organisms/Header"
import Footer from "../../organisms/Footer"
import CardContainer from "../../organisms/CardContainer";

export default function HomeTemplate({ datas }) {

    const location = { home: true , about: false };

    return (
        <>
            <Header location={location} />
            <CardContainer datas={datas} />
            <Footer />
        </>
    );
}
