import Collapse from "../../atoms/Collapse";
import "./style.scss";

export default function CollapseContainer({ datas, row }) {
    console.log(datas)
  return (
    <section className={"collapseContainer " + (row ? 'collapseContainer--row' : 'collapseContainer--column')}>
      {datas.map(({ title, content }) => (
        <Collapse title={title} content={content} />
      ))}
    </section>
  );
}