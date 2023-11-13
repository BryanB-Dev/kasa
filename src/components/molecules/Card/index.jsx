import "./style.scss";

export default function Card({img, title, href}) {

    return (
        <a className="card" href={href}>
            <img className="card__img" src={img} alt={title} />
            <p className="card__text">{title}</p>
        </a>
    )
}