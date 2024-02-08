'use client';
import Portal from '@/lib/Portal';
import classes from './Backdrop.module.scss';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

interface BackdropProps {
	onClose: () => void;
	children: React.ReactNode;
}

const Backdrop: React.FC<BackdropProps> = ({ onClose, children }) => {
	useEffect(() => {
		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = 'auto';
		};
	}, []);

	return (
		<Portal>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className={classes.backdrop}
				onClick={onClose}
			>
				{children}
			</motion.div>
		</Portal>
	);
};

export default Backdrop;
