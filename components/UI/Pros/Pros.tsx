import classes from './Pros.module.scss';

interface ProsProps {
	icon: JSX.Element;
	text: string;
}

const Pros: React.FC<ProsProps> = ({ icon, text }) => {
	return (
		<div className={classes.pros}>
			{icon}
			<strong>{text}</strong>
		</div>
	);
};

export default Pros;
