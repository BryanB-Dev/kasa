import "./style.scss";
import { Link } from 'react-router-dom'

export default function Card({img, title, id}) {

    return (
        <Link className="card" to={`/infos/${id}`}>
            <img className="card__img" src={img} alt={title} />
            <p className="card__text">{title}</p>
        </Link>
    )
}