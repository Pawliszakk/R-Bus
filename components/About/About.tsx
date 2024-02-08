import Section from '../UI/Section/Section';
import SectionTitle from '../UI/Section/SectionTitle';
import classes from './About.module.scss';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { FaPeopleGroup, FaTruckFast } from 'react-icons/fa6';
import { FaUserShield } from 'react-icons/fa';
import ButtonCta from '../UI/Buttons/ButtonCta';
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
		<Section>
			<SectionTitle>Oferujemy</SectionTitle>

			<div className={classes.box}>
				{offerData.map((el, i) => (
					<div key={i} className={classes.pros}>
						{el.icon}
						<strong>{el.text}</strong>
					</div>
				))}
			</div>

			<ButtonCta>Zadzwoń</ButtonCta>
		</Section>
	);
};

export default About;
