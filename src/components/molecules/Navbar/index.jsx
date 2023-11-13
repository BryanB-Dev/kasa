import Link from "../../atoms/Link"
import "./style.scss"

export default function Navbar() {

    return (
        <nav className="nav">
            <Link title="Link 1" href="/"/>
            <Link title="Link 2" href="/"/>
        </nav>
    )
}