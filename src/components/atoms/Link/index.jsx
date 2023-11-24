import { NavLink } from "react-router-dom"
import "./style.scss"

export default function Link({ title, href }) {

    return (
        <NavLink className="link" to={href}>{title}</NavLink>
    )
}