import classes from './Section.module.scss';

interface SectionProps {
	children: React.ReactNode;
	className?: string;
	dark?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, className, dark }) => {
	return (
		<section
			className={`${classes.section} ${className ? className : ''} ${
				dark ? classes.dark : ''
			}`}
		>
			{children}
		</section>
	);
};

export default Section;
