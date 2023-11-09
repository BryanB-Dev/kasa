import Infos from '../../atoms/Infos';
import Host from '../../atoms/Host';
import Tag from '../../atoms/Tag';
import Rate from '../../atoms/Rate';
import Collapse from '../../atoms/Collapse';

export default function Details() {

    return (
        <div>
            <Infos />
            <Host />
            <Tag />
            <Rate />
            <Collapse />
        </div>
    )
}