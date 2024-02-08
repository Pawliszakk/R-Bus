import classes from './Footer.module.scss';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className={classes.footer}>
			<p>
				R-BUS <span>{currentYear}</span> | Realizacja{' '}
				<a href="www.pawliszakdev.com">pawliszakDev</a>
			</p>
		</footer>
	);
};

export default Footer;
