import { useParams } from 'react-router-dom'
import InfosTemplate from '../../components/templates/InfosTemplate';
import E404 from '../404';

export default function Infos({ datas }) {
    const { locationID } = useParams()

    if (datas[locationID]) {
        return (
            <InfosTemplate datas={datas[locationID]} />
        );
    } else {
        return (
            <E404 />
        );
    }
}
