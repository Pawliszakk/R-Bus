'use client';
import SlideFromTop from '../UI/Animations/SlideFromTop';
import classes from './Review.module.scss';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
interface ReviewProps {
	text: string;
	author: string;
}

const Review: React.FC<ReviewProps> = ({ text, author}) => {
	return (
		<div>
			<div className={classes.review}>
				<p>
					<RiDoubleQuotesL className={classes.leftQuote} />
					{text}
					<RiDoubleQuotesR className={classes.rightQuote} />
				</p>
				<span>{author}</span>
			</div>
		</div>
	);
};

export default Review;
