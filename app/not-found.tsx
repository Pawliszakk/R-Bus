import classes from './not-found.module.scss';
import { IoSadOutline } from 'react-icons/io5';
import ButtonCta from '@/components/UI/Buttons/ButtonCta';
export default function NotFound() {
	return (
		<div className={classes.box}>
			<h2>
				Ups !<IoSadOutline />
			</h2>
			<p>Strona której szukasz nie istnieje...</p>
			<ButtonCta href="/">Przejdź do strony głównej</ButtonCta>
		</div>
	);
}
