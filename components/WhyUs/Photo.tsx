'use client';
import { SlMagnifierAdd } from 'react-icons/sl';
import classes from './Photo.module.scss';
import SlideAnimation from '../UI/Animations/SlideAnimation';

interface PhotoProps {
	showGalleryHandler: (number: number) => void;
	photoNumber: number;
}

const Photo: React.FC<PhotoProps> = ({ showGalleryHandler, photoNumber }) => {
	return (
		<SlideAnimation left={photoNumber > 2}>
			<div
				className={classes.image}
				onClick={() => showGalleryHandler(photoNumber)}
			>
				<img
					src={`/assets/gallery/gallery${photoNumber}.jpg`}
					alt="Zdjęcie busów z floty r-bus"
					loading="lazy"
				/>
				<div className={classes.otherSide}>
					<SlMagnifierAdd />
					<span>Kliknij, aby przybliżyć zdjęcie</span>
				</div>
			</div>
		</SlideAnimation>
	);
};

export default Photo;
