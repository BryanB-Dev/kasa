import { useParams } from 'react-router-dom'
import InfosTemplate from '../../components/templates/InfosTemplate';
import E404 from '../404';

export default function Infos({ datas }) {
    const { locationID } = useParams()
    const locationObject = datas.find(item => item.id === locationID)

    if (locationObject) {
        return (
            <InfosTemplate datas={locationObject} />
        );
    } else {
        return (
            <E404 />
        );
    }
}
