import "./style.scss"

export default function Link( {title, href, selected} ) {

    return (
        <a className={`link ${selected ? 'link--selected' : ''}`} href={href}>{title}</a>
    )
}