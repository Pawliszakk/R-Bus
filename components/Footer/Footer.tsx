import Link from 'next/link';
import classes from './Footer.module.scss';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className={classes.footer}>
			<p>
				R-BUS <span>{currentYear}</span> | Realizacja{' '}
				<a href="https://www.pawliszakdev.com/" rel="noopener" target="_blank">
					pawliszakDev
				</a>
			</p>
			<Link href="/polityka-prywatnosci">Polityka prywatności</Link>
		</footer>
	);
};

export default Footer;
