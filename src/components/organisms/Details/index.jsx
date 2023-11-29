import Infos from "../../molecules/Infos";
import Host from "../../molecules/Host";
import Tag from "../../atoms/Tag";
import Rate from "../../molecules/Rate";
import "./style.scss";

export default function Details({ datas }) {

	return (
		<section className="details">
			<div className="details__infos">
				<Infos title={datas.title} location={datas.location} />
				<div className="details__tags">
					{datas.tags.map((tag, index) => {
						return <Tag key={index} title={tag} />;
					})}
				</div>
			</div>
			<div className="details__host">
				<Host
					name={datas.host.name}
					img={datas.host.picture}
					title={datas.title}
				/>
				<Rate rating={datas.rating} />
			</div>
		</section>
	);
}
