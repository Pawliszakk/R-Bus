'use client';
import classes from './Contact.module.scss';
import SlideAnimation from '../UI/Animations/SlideAnimation';
import BorderIcon from '../UI/Icons/BorderIcon';
import Section from '../UI/Section/Section';
import SectionTitle from '../UI/Section/SectionTitle';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import { FaFacebookF } from 'react-icons/fa6';
const Contact = () => {
	return (
		<Section id="kontakt" dark>
			<SectionTitle>Kontakt</SectionTitle>

			<div className={classes.box}>
				<SlideAnimation className={classes.options}>
					<div className={classes.option}>
						<BorderIcon>
							<FaEnvelope />
						</BorderIcon>
						<p>rbus_kontakt@op.pl</p>
					</div>
					<div className={classes.option}>
						<BorderIcon>
							<FaPhone />
						</BorderIcon>
						<p>515 325 201</p>
					</div>
					<a
						href="https://www.facebook.com/profile.php?id=100064112472168"
						rel="noopener"
						target="_blank"
						className={classes.option}
					>
						<BorderIcon>
							<FaFacebookF />
						</BorderIcon>
						<p>Facebook</p>
					</a>
				</SlideAnimation>
				<SlideAnimation left className={classes.logo}>
					<img src="/assets/logo/logo.png" alt="Zdjęcie loga firmy r-bus" />
					<div className={classes.text}>
						<span>R-Bus</span>
						<p>Przewozy Polska-Francja</p>
					</div>
				</SlideAnimation>
			</div>
		</Section>
	);
};

export default Contact;
