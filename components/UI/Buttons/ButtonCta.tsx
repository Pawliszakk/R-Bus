import classes from './ButtonCta.module.scss';

interface ButtonCtaProps {
	children: React.ReactNode;
	className?: string;
}

const ButtonCta: React.FC<ButtonCtaProps> = ({ children, className }) => {
	return (
		<button className={`${classes.button} ${className ? className : ''}`}>
			{children}
		</button>
	);
};

export default ButtonCta;
