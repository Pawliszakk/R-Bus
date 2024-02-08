import classes from './Routes.module.scss';

interface RouteProps {
	country: string;
	flagSrc: string;
	flagAlt: string;
	citiesLists: string[][];
	mapSrc: string;
	france?: boolean;
}

const Route: React.FC<RouteProps> = ({
	country,
	flagSrc,
	france,
	flagAlt,
	citiesLists,
	mapSrc,
}) => {

	return (
		<div className={`${classes.route} ${france ? classes.france : ''}`}>
			<div className={classes.content}>
				<span>
					{country}
					<img src={`/assets/flags/${flagSrc}`} alt={flagAlt} />
				</span>
				<hr />

				<div className={classes.lists}>
					<ul>
						{citiesLists[0].map((city) => (
							<li key={city}>{city}</li>
						))}
					</ul>
					<ul>
						{citiesLists[1].map((city) => (
							<li key={city}>{city}</li>
						))}
					</ul>
				</div>
			</div>
			<div className={classes.map}>
				<iframe src={mapSrc}></iframe>
			</div>
		</div>
	);
};

export default Route;
