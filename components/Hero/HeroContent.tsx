import ButtonCta from '../UI/ButtonCta';
import classes from './HeroContent.module.scss';

const HeroContent = () => {
	return (
		<div className={classes.content}>
			<div className={classes.logo}>
				<img src="/assets/logo/logo.png" />
				<span>R-BUS</span>
			</div>

			<h1>
				Przewóz osób i paczek
				<span>Polska - Francja</span>
			</h1>

			<ButtonCta>Skontaktuj się</ButtonCta>
		</div>
	);
};

export default HeroContent;
