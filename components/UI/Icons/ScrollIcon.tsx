'use client';
import classes from './ScrollIcon.module.scss';
import { IoIosArrowDown } from 'react-icons/io';
import { motion } from 'framer-motion';

const ScrollIcon = () => {
	return (
		<motion.a
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 1.5 }}
			whileTap={{ scale: 0.5 }}
			whileHover={{ opacity: 0.8 }}
			href="#o-nas"
			className={`${classes.icon} ${classes.heartbeat}`}
		>
			<IoIosArrowDown />
			<span>Scroll down</span>
		</motion.a>
	);
};

export default ScrollIcon;
