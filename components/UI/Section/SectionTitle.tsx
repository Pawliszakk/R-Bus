import classes from './SectionTitle.module.scss';

interface SectionTitleProps {
	children: React.ReactNode;
	className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, className }) => {
	return (
		<h2 className={`${classes.title} ${className ? className : ''}`}>
			{children}
		</h2>
	);
};

export default SectionTitle;
