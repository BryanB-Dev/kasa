import Header from "../../organisms/Header"
import Footer from "../../organisms/Footer"

export default function AboutTemplate() {

    const location = { home: false , about: true };

    return (
        <>
            <Header location={location} />
            <h1>About</h1>
            <Footer />
        </>
    );
}
