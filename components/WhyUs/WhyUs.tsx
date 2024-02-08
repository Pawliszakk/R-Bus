import ButtonCta from '../UI/Buttons/ButtonCta';
import Section from '../UI/Section/Section';
import SectionTitle from '../UI/Section/SectionTitle';
import Gallery from './Gallery';
import Pros from './Pros';
import classes from './WhyUs.module.scss';
const WhyUs = () => {
	return (
		<Section dark>
			<SectionTitle>Dlaczego my?</SectionTitle>

			<div className={classes.box}>
				<Pros />
				<Gallery />
			</div>

			<ButtonCta>Zadzwoń</ButtonCta>
		</Section>
	);
};

export default WhyUs;
