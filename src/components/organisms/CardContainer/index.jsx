import Card from "../../molecules/Card";
import BannerImg from "../../../assets/images/banner-1.png"
import "./style.scss";

export default function CardContainer() {
  return (
    <section className="cardContainer">
      <Card img={BannerImg} title="Titre de la location" href="/"/>
      <Card img={BannerImg} title="Titre de la location" href="/"/>
      <Card img={BannerImg} title="Titre de la location" href="/"/>
      <Card img={BannerImg} title="Titre de la location" href="/"/>
    </section>
  );
}
