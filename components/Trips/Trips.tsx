import ButtonCta from '../UI/Buttons/ButtonCta';
import Section from '../UI/Section/Section';
import SectionTitle from '../UI/Section/SectionTitle';
import classes from './Trips.module.scss';

const Trips = () => {
	return (
		<Section dark>
			<SectionTitle>Wyjazdy</SectionTitle>

			<div className={classes.box}>
				<span>
					<strong> Piątek - z Polski</strong>
					<img src="/assets/flags/polandFlag.JPG" alt="flaga polski" />
				</span>
				<span>
					<strong>Sobota - z Francji</strong>
					<img src="/assets/flags/franceFlag.JPG" alt="flaga francji" />
				</span>
			</div>

			<ButtonCta>Zarezerwuj</ButtonCta>
		</Section>
	);
};

export default Trips;