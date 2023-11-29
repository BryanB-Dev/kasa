import Card from "../../molecules/Card";
import "./style.scss";

export default function CardContainer({ datas }) {
  return (
    <section className="cardContainer">
      {datas.map(({ id, title, cover }, index) => (
        <Card img={cover} title={title} id={id} key={index}/>
      ))}
    </section>
  );
}