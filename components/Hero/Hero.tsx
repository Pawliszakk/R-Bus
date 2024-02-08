import ButtonCta from '../UI/Buttons/ButtonCta';
import classes from './Hero.module.scss';
import HeroContent from './HeroContent';

const Hero = () => {
	return (
		<div className={classes.hero} id="home">
			<HeroContent />
			<ButtonCta>Skontaktuj się</ButtonCta>
		</div>
	);
};

export default Hero;
