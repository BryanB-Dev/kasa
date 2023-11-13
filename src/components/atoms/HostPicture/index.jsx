import "./style.scss";

export default function HostPicture({ img, title }) {
  return <img className="hostImg" src={img} alt={title} />;
}
