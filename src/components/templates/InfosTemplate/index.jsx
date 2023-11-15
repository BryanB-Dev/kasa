import Header from "../../organisms/Header"
import Details from "../../organisms/Details"
import Footer from "../../organisms/Footer"

export default function InfosTemplate({ datas }) {

    const location = { home: false , about: false };

    return (
        <>
            <Header location={location} />
            <Details datas={datas} />
            <Footer />
        </>
    );
}
