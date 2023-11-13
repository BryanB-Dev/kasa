import "./style.scss";

export default function Banner({ src, title }) {

    return (
        <section className="banner">
            <img className="banner__img" src={src} alt={title} />
            <p className="banner__text">{title}</p>
        </section>
    )
}