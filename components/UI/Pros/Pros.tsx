'use client';
import SlideFromTop from '../Animations/SlideFromTop';
import classes from './Pros.module.scss';

interface ProsProps {
	icon: JSX.Element;
	text: string;
	index: number;
}

const Pros: React.FC<ProsProps> = ({ icon, text, index }) => {
	return (
		<SlideFromTop index={index}>
			<div className={classes.pros}>
				{icon}
				<span>{text}</span>
			</div>
		</SlideFromTop>
	);
};

export default Pros;
