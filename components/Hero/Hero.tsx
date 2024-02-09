import ButtonCta from '../UI/Buttons/ButtonCta';
import ScrollIcon from '../UI/Icons/ScrollIcon';
import classes from './Hero.module.scss';
import HeroContent from './HeroContent';

const Hero = () => {
	return (
		<header className={classes.hero} id="home">
			<HeroContent />
			<ButtonCta>Skontaktuj się</ButtonCta>
			<ScrollIcon />
		</header>
	);
};

export default Hero;
