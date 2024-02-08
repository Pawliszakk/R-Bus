import classes from './Hero.module.scss';
import HeroContent from './HeroContent';

const Hero = () => {
	return (
		<div className={classes.hero} id="home">
			<HeroContent />
		</div>
	);
};

export default Hero;
