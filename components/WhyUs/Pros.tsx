import classes from './Pros.module.scss';
import { FaClock } from 'react-icons/fa6';
import { FaStopwatch } from 'react-icons/fa6';
import { FaBus } from 'react-icons/fa';
const Pros = () => {
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
				<div className={classes.pros} key={i}>
					<div className={classes.icon}>{item.icon}</div>
					<div className={classes.text}>
						<strong>{item.title}</strong>
						<p>{item.description}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Pros;
