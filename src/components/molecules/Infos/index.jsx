import "./style.scss";

export default function Infos( {title, location} ) {

    return (
        <div className="infos">
            <h1 className="infos__title">{title}</h1>
            <p className="infos__location">{location}</p>
        </div>
    )
}