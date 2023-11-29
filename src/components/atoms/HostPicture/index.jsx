import "./style.scss";

export default function HostPicture({ img, title }) {

  return <img className="host__img" src={img} alt={title} />;
  
}
