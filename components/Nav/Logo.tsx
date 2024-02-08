import Link from 'next/link';
import classes from './Logo.module.scss';

const Logo = () => {
	return (
		<Link href="#home" className={classes.logo}>
			<img src="/assets/logo/logo.png" />
			<div className={classes.text}>
				<span>R-Bus</span>
				<p>Przewozy Polska-Francja</p>
			</div>
		</Link>
	);
};

export default Logo;
