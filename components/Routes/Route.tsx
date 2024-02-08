'use client';
import SlideAnimation from '../UI/Animations/SlideAnimation';
import classes from './Route.module.scss';

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
		<SlideAnimation
			className={`${classes.route} ${france ? classes.france : ''}`}
			left={france}
		>
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
				<iframe
					src={mapSrc}
					title={`Trasy firmy r-bus na obszarze: ${country}`}
				></iframe>
			</div>
		</SlideAnimation>
	);
};

export default Route;
