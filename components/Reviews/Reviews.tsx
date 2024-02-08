import Section from '../UI/Section/Section';
import SectionTitle from '../UI/Section/SectionTitle';
import Review from './Review';
import classes from './Reviews.module.scss';

const Reviews = () => {
	const reviewsData: { text: string; author: string }[] = [
		{
			text: 'Polecam serdecznie, busy są klimatyzowane, jest dużo miejsca dla każdej osoby, szybki i bezproblemowy transport od drzwi do drzwi.',
			author: 'Monika, Facebook',
		},
		{
			text: 'Firma godna polecania! Przyjazna atmosfera, bezpieczeństwo i oczywiście wszystko sprawnie i tanio. Podczas podróży to podstawa! Daje 11/10!',
			author: 'Patrycja, Facebook',
		},
		{
			text: 'Najlepsza firma przewozowa jaką jeździłam. Bezpiecznie, konkretnie z adresu na adres, bez zbędnych km, mili kierowcy, nic tylko wsiadać i jechać',
			author: 'Olga, Facebook',
		},
	];

	return (
		<Section>
			<SectionTitle>Opinie</SectionTitle>

			<div className={classes.box}>
				{reviewsData.map((review, i) => (
					<Review key={i} text={review.text} author={review.author} />
				))}
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
