import classes from './Hero.module.scss';
import HeroContent from './HeroContent';

const Hero = () => {
	return (
		<div className={classes.hero}>
			<HeroContent />
		</div>
	);
};

export default Hero;
