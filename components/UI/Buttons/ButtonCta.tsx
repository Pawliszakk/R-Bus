'use client';
import classes from './ButtonCta.module.scss';
import Link from 'next/link';
import SlideFromBottom from '../Animations/SlideFromBottom';

interface ButtonCtaProps {
	children: React.ReactNode;
	className?: string;
	href?: string;
}

const ButtonCta: React.FC<ButtonCtaProps> = ({ children, className, href }) => {
	return (
		<SlideFromBottom className={classes.button}>
			<Link
				href={href ? href : '/#kontakt'}
				className={`${className ? className : ''}`}
			>
				{children}
			</Link>
		</SlideFromBottom>
	);
};

export default ButtonCta;
