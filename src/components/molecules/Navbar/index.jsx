import Link from "../../atoms/Link"
import "./style.scss"

export default function Navbar() {

    return (
        <nav className="nav">
            <Link title="Accueil" href="/"/>
            <Link title="À propos" href="/about"/>
        </nav>
    )
}