import BorderIcon from '../UI/Icons/BorderIcon';
import Section from '../UI/Section/Section';
import SectionTitle from '../UI/Section/SectionTitle';
import classes from './Contact.module.scss';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import { FaFacebookF } from 'react-icons/fa6';
const Contact = () => {
	return (
		<Section id="kontakt" dark>
			<SectionTitle>Kontakt</SectionTitle>

			<div className={classes.box}>
				<div className={classes.options}>
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
					<div className={classes.option}>
						<BorderIcon>
							<FaFacebookF />
						</BorderIcon>
						<p>
							<a
								href="https://www.facebook.com/profile.php?id=100064112472168"
								rel="noopener"
								target="_blank"
							>
								Facebook
							</a>
						</p>
					</div>
				</div>
				<div className={classes.logo}></div>
			</div>
		</Section>
	);
};

export default Contact;
