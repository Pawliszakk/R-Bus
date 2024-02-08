'use client';
import { useEffect, useState } from 'react';
import Logo from './Logo';
import classes from './Navbar.module.scss';
import Hamburger from 'hamburger-react';
import NavList from './NavList';

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const navToggleHandler = () => setIsOpen((prev) => !prev);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 768) {
				document.body.style.overflow = isOpen ? 'hidden' : 'auto';
			} else {
				document.body.style.overflow = 'auto';
			}
		};

		window.addEventListener('resize', handleResize);

		handleResize();

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [isOpen, navToggleHandler]);


    
	return (
		<header className={classes.header}>
			<nav>
				<Logo />
				<div className={classes.burger}>
					<Hamburger toggled={isOpen} toggle={navToggleHandler} />
				</div>
				<NavList isOpen={isOpen} onToggle={navToggleHandler} />
			</nav>
		</header>
	);
};

export default NavBar;
