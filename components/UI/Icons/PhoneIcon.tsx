'use client';
import { useEffect, useState } from 'react';

import classes from './PhoneIcon.module.scss';

import { motion, AnimatePresence } from 'framer-motion';
import Portal from '@/lib/Portal';
import { FaPhone } from 'react-icons/fa';
import Link from 'next/link';

const PhoneIcon = () => {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	const [isScrolled, setIsScrolled] = useState(false);
	const handleScroll = () => {
		window.scrollY >= 400 ? setIsScrolled(true) : setIsScrolled(false);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
	}, []);

	return (
		<AnimatePresence>
			{isScrolled && (
				<Portal>
					<motion.div
						className={classes.box}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						whileTap={{ scale: 0.5 }}
					>
						{isClient && (
							<Link href="/#kontakt">
								<FaPhone />
								<span>Kontakt</span>
							</Link>
						)}
					</motion.div>
				</Portal>
			)}
		</AnimatePresence>
	);
};

export default PhoneIcon;
