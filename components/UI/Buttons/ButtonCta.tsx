'use client';
import SlideFromBottom from '../Animations/SlideFromBottom';
import classes from './ButtonCta.module.scss';

interface ButtonCtaProps {
	children: React.ReactNode;
	className?: string;
}

const ButtonCta: React.FC<ButtonCtaProps> = ({ children, className }) => {
	return (
		<SlideFromBottom className={classes.button}>
			<button className={`${className ? className : ''}`}>{children}</button>
		</SlideFromBottom>
	);
};

export default ButtonCta;
