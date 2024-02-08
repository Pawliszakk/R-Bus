import classes from './Review.module.scss';

interface ReviewProps {
	text: string;
	author: string;
}

const Review: React.FC<ReviewProps> = ({ text, author }) => {
	return (
		<div className={classes.review}>
			<p>{text}</p>

			<span>{author}</span>
		</div>
	);
};

export default Review;
