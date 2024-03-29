'use client';
import classes from './HeroContent.module.scss';
import SlideAnimation from '../UI/Animations/SlideAnimation';

const HeroContent = () => {
	return (
		<SlideAnimation className={classes.content}>
			<div className={classes.logo}>
				<img src="/assets/logo/logo.png" alt="Zdjęcie loga firmy r-bus" />
				<span>R-BUS</span>
			</div>
			<p>&quot;Podróżuj z nami - komfort i pewność.&quot;</p>
			<h1>
				Przewóz osób i paczek
				<span>Polska - Francja</span>
			</h1>
		</SlideAnimation>
	);
};

export default HeroContent;
