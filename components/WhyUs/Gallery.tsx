import classes from './Gallery.module.scss';

const Gallery = () => {
	return (
		<div className={classes.box}>
			<div>
				<div className={classes.image}>
					<img
						src="/assets/gallery/gallery1.jpg"
						alt="Zdjęcie busów z floty r-bus"
					/>
				</div>
				<div className={classes.image}>
					<img
						src="/assets/gallery/gallery2.jpg"
						alt="Zdjęcie busów z floty r-bus"
					/>
				</div>
			</div>
			<div>
				<div className={classes.image}>
					<img
						src="/assets/gallery/gallery3.jpg"
						alt="Zdjęcie busów z floty r-bus"
					/>
				</div>
				<div className={classes.image}>
					<img
						src="/assets/gallery/gallery4.jpg"
						alt="Zdjęcie busów z floty r-bus"
					/>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
