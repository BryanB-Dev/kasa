import Collapse from "../../atoms/Collapse";
import "./style.scss";

export default function CollapseContainer({ datas, row }) {
  return (
    <section className={"collapseContainer " + (row ? 'collapseContainer--row' : 'collapseContainer--column')}>
      {datas.map(({ title, content }, index) => (
        <Collapse title={title} content={content} key={index} />
      ))}
    </section>
  );
}