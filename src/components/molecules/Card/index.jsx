import "./style.scss";

export default function Card({img, title}) {

    return (
        <div className="card">
            <img className="card__img" src={img} alt={title} />
            <p className="card__text">{title}</p>
        </div>
    )
}