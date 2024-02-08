import Image from 'next/image';
import classes from './Logo.module.scss';

const Logo = () => {
	return (
		<div className={classes.logo}>
			<div>{/* <Image /> */}</div>
			<div className={classes.name}>
				<span>R-Bus</span>
				<p>Przewozy Polska-Francja</p>
			</div>
		</div>
	);
};

export default Logo;
