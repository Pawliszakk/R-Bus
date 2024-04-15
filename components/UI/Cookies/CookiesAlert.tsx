'use client';

import { useState, useEffect } from 'react';
import classes from './CookiesAlert.module.scss';
import Link from 'next/link';

const CookiesAlert = () => {
	const [isClickedOk, setIsClickedOk] = useState(true);

	useEffect(() => {
		const areCookiesAccepted = localStorage.getItem('cookiesOK');
		if (areCookiesAccepted) {
			setIsClickedOk(true);
		} else {
			setIsClickedOk(false);
		}
	}, []);

	const buttonClickHandler = () => {
		localStorage.setItem('cookiesOK', 'true');
		setIsClickedOk(true);
	};

	return (
		<>
			{isClickedOk ? (
				<></>
			) : (
				<div className={classes.box}>
					<p>
						Ta strona korzysta z ciasteczek, dalsze korzystanie ze strony
						oznacza, że zgadzasz się na ich użycie.
						<Link href="/polityka-prywatnosci">Polityka prywatności</Link>
					</p>
					<button onClick={buttonClickHandler}>ok</button>
				</div>
			)}
		</>
	);
};

export default CookiesAlert;
