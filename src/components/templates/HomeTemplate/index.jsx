import Header from "../../organisms/Header"
import Footer from "../../organisms/Footer"

export default function HomeTemplate() {

    const location = { home: true , about: false };

    return (
        <>
            <Header location={location} />
            <h1>Home</h1>
            <Footer />
        </>
    );
}
