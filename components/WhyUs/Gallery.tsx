'use client';
import { useState } from 'react';
import Backdrop from '../UI/Backdrop/Backdrop';
import classes from './Gallery.module.scss';
import { SlMagnifierAdd } from 'react-icons/sl';

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
				<div className={classes.image} onClick={() => showGalleryHandler(1)}>
					<img
						src="/assets/gallery/gallery1.jpg"
						alt="Zdjęcie busów z floty r-bus"
					/>
					<div className={classes.otherSide}>
						<SlMagnifierAdd />
						<span>Kliknij, aby przybliżyć zdjęcie</span>
					</div>
				</div>
				<div className={classes.image} onClick={() => showGalleryHandler(2)}>
					<img
						src="/assets/gallery/gallery2.jpg"
						alt="Zdjęcie busów z floty r-bus"
					/>{' '}
					<div className={classes.otherSide}>
						<SlMagnifierAdd />
						<span>Kliknij, aby przybliżyć zdjęcie</span>
					</div>
				</div>
			</div>
			<div>
				<div className={classes.image} onClick={() => showGalleryHandler(3)}>
					<img
						src="/assets/gallery/gallery3.jpg"
						alt="Zdjęcie busów z floty r-bus"
					/>{' '}
					<div className={classes.otherSide}>
						<SlMagnifierAdd />
						<span>Kliknij, aby przybliżyć zdjęcie</span>
					</div>
				</div>
				<div className={classes.image} onClick={() => showGalleryHandler(4)}>
					<img
						src="/assets/gallery/gallery4.jpg"
						alt="Zdjęcie busów z floty r-bus"
					/>{' '}
					<div className={classes.otherSide}>
						<SlMagnifierAdd />
						<span>Kliknij, aby przybliżyć zdjęcie</span>
					</div>
				</div>
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
