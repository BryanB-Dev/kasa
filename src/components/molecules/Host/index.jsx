import HostName from "../../atoms/HostName";
import HostPicture from "../../atoms/HostPicture";
import "./style.scss";

export default function Host() {

    return (
        <div className="host">
            <HostName name={"" || "John Doe"} />
            <HostPicture img="" title=""/>
        </div>
    )
}