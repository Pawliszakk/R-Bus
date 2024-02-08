'use client';
import Link from 'next/link';
import SlideFromBottom from '../Animations/SlideFromBottom';
import classes from './ButtonCta.module.scss';

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
