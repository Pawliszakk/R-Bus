'use client';
import classes from './WhyUsPros.module.scss';
import { FaClock } from 'react-icons/fa6';
import { FaStopwatch } from 'react-icons/fa6';
import { FaBus } from 'react-icons/fa';
import SlideFromTop from '../UI/Animations/SlideFromTop';
import BorderIcon from '../UI/Icons/BorderIcon';
const WhyUsPros = () => {
	const prosData: { icon: JSX.Element; title: string; description: string }[] =
		[
			{
				icon: <FaClock />,
				title: 'Doświadczeni kierowcy',
				description:
					'Doświadczeni kierowcy to fundament w obszarze przewozów. Umiejętności oraz znajomość tras przekładają się na profesjonalną i bezpieczną obsługę klientów.',
			},
			{
				icon: <FaBus />,
				title: 'Komfort przejazdu',
				description:
					'Nasze busy marki Renault nie tylko gwarantują bezpieczeństwo, ale także oferują podróżnym wyjątkowy komfort, umożliwiając relaks i przyjemność podczas każdej trasy.',
			},
			{
				icon: <FaStopwatch />,
				title: 'Punktualność',
				description:
					'Z szacunku do klienta i własnej marki dostarczanie paczek na czas i zapewnianie punktualnych przewozów to dla nas priorytet.',
			},
		];

	return (
		<div className={classes.box}>
			{prosData.map((item, i) => (
				<SlideFromTop className={classes.pros} key={i} index={i}>
					<BorderIcon>{item.icon}</BorderIcon>
					<div className={classes.text}>
						<strong>{item.title}</strong>
						<p>{item.description}</p>
					</div>
				</SlideFromTop>
			))}
		</div>
	);
};

export default WhyUsPros;
