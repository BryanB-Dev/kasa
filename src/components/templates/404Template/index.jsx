import Header from "../../organisms/Header"
import Footer from "../../organisms/Footer"
import Link from "../../atoms/Link";
import "./style.scss";

export default function E404Template() {

    const location = { home: false, about: false };

    return (
        <section className="error">
            <Header location={location} />
            <h1 className="error__h1">404</h1>
            <h2 className="error__h2">Oups! La page que vous demandez n'existe pas.</h2>
            <div className="error__link">
                <Link title="Retourner sur la page d'accueil" href="/" selected={true} />
            </div>
            <Footer />
        </section>
    );
}
