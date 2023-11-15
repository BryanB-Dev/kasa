import { useParams } from 'react-router-dom'
import Details from "../../components/organisms/Details"

export default function Infos({ datas }) {
    const { locationID } = useParams()

	return (
		<Details datas={datas[locationID]}/>
	);
}
