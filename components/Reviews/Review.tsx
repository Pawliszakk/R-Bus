'use client';
import classes from './Review.module.scss';
import SlideAnimation from '../UI/Animations/SlideAnimation';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
interface ReviewProps {
	text: string;
	author: string;
}

const Review: React.FC<ReviewProps> = ({ text, author }) => {
	return (
		<SlideAnimation>
			{' '}
			<div className={classes.review}>
				<p>
					<RiDoubleQuotesL className={classes.leftQuote} />
					{text}
					<RiDoubleQuotesR className={classes.rightQuote} />
				</p>
				<span>{author}</span>
			</div>
		</SlideAnimation>
	);
};

export default Review;
