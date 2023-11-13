import "./style.scss"

export default function Link( {title, href} ) {

    return (
        <a className="link" href={href}>{title}</a>
    )
}