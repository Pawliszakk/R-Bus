'use client';
import { useState } from 'react';
import classes from './Gallery.module.scss';
import Backdrop from '../UI/Backdrop/Backdrop';
import Photo from './Photo';

const Gallery = () => {
	const [isGallery, setIsGallery] = useState(false);
	const [currentPhoto, setCurrentPhoto] = useState<null | number>(null);

	const showGalleryHandler = (number: number) => {
		setIsGallery(true);
		setCurrentPhoto(number);
	};
	const hideGalleryHandler = () => setIsGallery(false);

	return (
		<div className={classes.box}>
			<div>
				<Photo showGalleryHandler={showGalleryHandler} photoNumber={1} />
				<Photo showGalleryHandler={showGalleryHandler} photoNumber={2} />
			</div>
			<div>
				<Photo showGalleryHandler={showGalleryHandler} photoNumber={3} />

				<Photo showGalleryHandler={showGalleryHandler} photoNumber={4} />
			</div>

			{isGallery && (
				<Backdrop onClose={hideGalleryHandler}>
					<div className={classes.backdropPhoto}>
						<img
							src={`/assets/gallery/gallery${currentPhoto}.jpg`}
							alt="Zdjęcie busów z floty r-bus"
						/>
						<button className={classes.close}>Zamknij</button>
					</div>
				</Backdrop>
			)}
		</div>
	);
};

export default Gallery;
