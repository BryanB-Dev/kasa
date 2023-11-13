import Infos from '../../molecules/Infos';
import Host from '../../molecules/Host';
import Tag from '../../atoms/Tag';
import Rate from '../../atoms/Star';
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