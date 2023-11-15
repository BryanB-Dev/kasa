import Header from "../../organisms/Header"
import Footer from "../../organisms/Footer"

export default function E404Template() {

    const location = { home: false , about: false };

    return (
        <>
            <Header location={location} />
            <h1>404</h1>
            <Footer />
        </>
    );
}
