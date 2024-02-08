import classes from './Section.module.scss';

interface SectionProps {
	children: React.ReactNode;
	className?: string;
	dark?: boolean;
	id?: string;
}

const Section: React.FC<SectionProps> = ({ children, className, dark, id }) => {
	return (
		<section
			{...(id && { id })}
			className={`${classes.section} ${className ? className : ''} ${
				dark ? classes.dark : ''
			}`}
		>
			{children}
		</section>
	);
};

export default Section;
