import Header from "../../organisms/Header"
import Details from "../../organisms/Details"
import Footer from "../../organisms/Footer"

export default function InfosTemplate({ datas }) {

    return (
        <>
            <Header />
            <Details datas={datas} />
            <Footer />
        </>
    );
}
