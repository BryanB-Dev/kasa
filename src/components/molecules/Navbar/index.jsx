import Link from "../../atoms/Link"
import "./style.scss"

export default function Navbar({location}) {

    return (
        <nav className="nav">
            <Link title="Accueil" href="/" selected={location.home}/>
            <Link title="À propos" href="/about" selected={location.about}/>
        </nav>
    )
}