import Section from '../UI/Section/Section';
import SectionTitle from '../UI/Section/SectionTitle';
import Review from './Review';
import classes from './Reviews.module.scss';

const Reviews = () => {
	return (
		<Section>
			<SectionTitle>Opinie</SectionTitle>

			<div className={classes.box}>
				<Review
					text="Polecam serdecznie, busy są klimatyzowane, jest dużo miejsca dla każdej osoby, szybki i bezproblemowy transport od drzwi do drzwi."
					author="Monika, Facebook"
				/>
				<Review
					text="Firma godna polecania! Przyjazna atmosfera, bezpieczeństwo i oczywiście wszystko sprawnie i tanio. Podczas podróży to podstawa! Daje 11/10!"
					author="Patrycja, Facebook"
				/>
				<Review
					text="Najlepsza firma przewozowa jaką jeździłam. Bezpiecznie, konkretnie z adresu na adres, bez zbędnych km, mili kierowcy, nic tylko wsiadać i jechać"
					author="Olga, Facebook"
				/>
			</div>

			<p className={classes.paragraph}>
				Po więcej opinii, zparaszamy na naszego{' '}
				<a
					href="https://www.facebook.com/profile.php?id=100064112472168"
					rel="noopener"
					target="_blank"
				>
					Facebooka
				</a>
			</p>
		</Section>
	);
};

export default Reviews;
