import classes from './WhyUs.module.scss';
import ButtonCta from '../UI/Buttons/ButtonCta';
import Section from '../UI/Section/Section';
import SectionTitle from '../UI/Section/SectionTitle';
import Gallery from './Gallery';
import WhyUsPros from './WhyUsPros';

const WhyUs = () => {
	return (
		<Section dark>
			<SectionTitle>Dlaczego my?</SectionTitle>

			<div className={classes.box}>
				<WhyUsPros />
				<Gallery />
			</div>

			<ButtonCta>Zadzwoń</ButtonCta>
		</Section>
	);
};

export default WhyUs;
