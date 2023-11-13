import HostName from "../../atoms/HostName";
import HostPicture from "../../atoms/HostPicture";
import "./style.scss";

export default function Host({ name, img, title }) {

    return (
        <div className="host">
            <HostName name={name} />
            <HostPicture img={img} title={title}/>
        </div>
    )
}