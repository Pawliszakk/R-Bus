'use client';
import classes from './Decoration.module.scss';
import { FaTv } from 'react-icons/fa6';
import { FaSnowflake } from 'react-icons/fa6';
import { FaLuggageCart } from 'react-icons/fa';
import { FaWifi } from 'react-icons/fa';
import Section from '../UI/Section/Section';
import Pros from '../UI/Pros/Pros';
const Decoration = () => {
	const decorationData: { icon: JSX.Element; text: string }[] = [
		{
			icon: <FaTv />,
			text: 'TV',
		},
		{
			icon: <FaSnowflake />,
			text: 'Klimatyzacja',
		},
		{
			icon: <FaLuggageCart />,
			text: 'Przestrzeń bagażowa',
		},
		{
			icon: <FaWifi />,
			text: 'Wi-Fi',
		},
	];

	return (
		<Section className={classes.decoration}>
			<div className={classes.box}>
				{decorationData.map((pros, i) => (
					<Pros key={i} index={i} icon={pros.icon} text={pros.text} />
				))}
			</div>
		</Section>
	);
};

export default Decoration;
