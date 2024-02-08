import { franceData, polandData } from '@/data/RoutesData';
import ButtonCta from '../UI/Buttons/ButtonCta';
import Section from '../UI/Section/Section';
import SectionTitle from '../UI/Section/SectionTitle';
import Route from './Route';
import classes from './Routes.module.scss';

const Routes = () => {
	return (
		<Section id="trasy">
			<SectionTitle>Trasy naszych busów</SectionTitle>

			<div className={classes.box}>
				<Route
					country={polandData.country}
					flagSrc={polandData.flagSrc}
					flagAlt={polandData.flagAlt}
					citiesLists={polandData.citiesLists}
					mapSrc={polandData.mapSrc}
				/>

				<hr />
				<Route
					country={franceData.country}
					flagSrc={franceData.flagSrc}
					flagAlt={franceData.flagAlt}
					citiesLists={franceData.citiesLists}
					mapSrc={franceData.mapSrc}
					france
				/>
			</div>
			<ButtonCta>Skontaktuj się</ButtonCta>
		</Section>
	);
};

export default Routes;
