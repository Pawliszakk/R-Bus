import classes from './BorderIcon.module.scss';

interface BorderIconProps {
	children: React.ReactNode;
}

const BorderIcon: React.FC<BorderIconProps> = ({ children }) => {
	return <div className={classes.icon}>{children}</div>;
};

export default BorderIcon;
