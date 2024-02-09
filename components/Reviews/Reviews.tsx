import classes from './Reviews.module.scss';
import Section from '../UI/Section/Section';
import SectionTitle from '../UI/Section/SectionTitle';
import Review from './Review';

const Reviews = () => {
	const reviewsData: { text: string; author: string }[] = [
		{
			text: 'Super kontakt z właścicielem firmy, możliwość rezerwacji miejsc przez wiadomość SMS lub telefonicznie.  Duży, komfortowy bus. Mili i doświadczeni kierowcy. Szybki i bezpieczny transport z adresu pod adres 😊 ',
			author: 'Kasia, Facebook',
		},
		{
			text: 'Firma godna polecania! Przyjazna atmosfera, bezpieczeństwo i oczywiście wszystko sprawnie i tanio. Podczas podróży to podstawa! Daje 11/10!',
			author: 'Patrycja, Facebook',
		},
		{
			text: 'Dziekuje bardzo za miłą obsługe 😉 Jestem wdzieczna za komfort, rzetelnosc, punktualnosc oraz mila atmosfere Bardzo polecam wszystkim którzy szukają transportu Polska Francja, do zobaczenia!',
			author: 'Iwona, Facebook',
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
