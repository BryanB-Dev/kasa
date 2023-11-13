import "./style.scss";

export default function Banner({ src, title }) {

    return (
        <div className="banner">
            <img className="banner__img" src={src} alt={title} />
            <p className="banner__text">{title}</p>
        </div>
    )
}