import classes from './About.module.scss';
import Section from '../UI/Section/Section';
import SectionTitle from '../UI/Section/SectionTitle';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { FaPeopleGroup, FaTruckFast } from 'react-icons/fa6';
import { FaUserShield } from 'react-icons/fa';
import ButtonCta from '../UI/Buttons/ButtonCta';
import Pros from '../UI/Pros/Pros';

const About = () => {
	const offerData: { icon: JSX.Element; text: string }[] = [
		{
			icon: <FaMapMarkedAlt />,
			text: 'Odbiór i dojazd pod wskazany adres',
		},
		{
			icon: <FaPeopleGroup />,
			text: 'Przewóz osób',
		},
		{
			icon: <FaTruckFast />,
			text: 'Transport przesyłek',
		},
		{
			icon: <FaUserShield />,
			text: 'Bezpieczeństwo i komfort',
		},
	];

	return (
		<Section id="o-nas">
			<SectionTitle>Oferujemy</SectionTitle>

			<div className={classes.box}>
				{offerData.map((pros, i) => (
					<Pros index={i} key={i} icon={pros.icon} text={pros.text} />
				))}
			</div>

			<ButtonCta>Zadzwoń</ButtonCta>
		</Section>
	);
};

export default About;
