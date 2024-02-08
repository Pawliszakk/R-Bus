import ButtonCta from '../UI/Buttons/ButtonCta';
import Section from '../UI/Section/Section';
import SectionTitle from '../UI/Section/SectionTitle';
import classes from './Routes.module.scss';

const Routes = () => {
	return (
		<Section id="trasy">
			<SectionTitle>Trasy naszych busów</SectionTitle>

			<div className={classes.box}>
				{' '}
				<div className={classes.route}>
					<div className={classes.content}>
						<span>
							Polska
							<img src="/assets/flags/polandFlag.JPG" alt="flaga polski" />
						</span>
						<hr />

						<div className={classes.lists}>
							<ul>
								<li>Zamość</li>
								<li>Lublin</li>
								<li>Chełm</li>
								<li>Radom</li>
								<li>Kielce</li>
								<li>Warszawa</li>
								<li>Łódź</li>
							</ul>
							<ul>
								<li>Częstochowa</li>
								<li>Rzeszów</li>
								<li>Kraków</li>
								<li>Katowice</li>
								<li>Opole</li>
								<li>Wrocław</li>
								<li>Zgorzelec</li>
							</ul>
						</div>
					</div>
					<div className={classes.map}>
						<iframe src="https://www.google.com/maps/d/embed?mid=1HxxoAniJzM3pfsPX62S2mOcE6i4XrM4&ehbc=2E312F&noprof=1"></iframe>
					</div>
				</div>
				<hr />
				<div className={`${classes.route} ${classes.france}`}>
					<div className={classes.content}>
						<span>
							Francja
							<img src="/assets/flags/franceFlag.JPG" alt="flaga francji" />
						</span>
						<hr />

						<div className={classes.lists}>
							<ul>
								<li>Metz</li>
								<li>Nancy</li>
								<li>Reims</li>
								<li>Lille</li>
								<li>Saint Quentin</li>
								<li>Rouen</li>
								<li>Caen</li>
								<li>Paryż</li>
								<li>Hawr</li>
								<li>Saint Malo</li>
							</ul>
							<ul>
								<li>Saint Brieuc</li>
								<li>Vannes</li>
								<li>Nantes</li>
								<li>Angers</li>
								<li>Le Mans</li>
								<li>Tours</li>
								<li>Orléans</li>
								<li>Rennes</li>
								<li>I inne</li>
							</ul>
						</div>
					</div>
					<div className={classes.map}>
						<iframe src="https://www.google.com/maps/d/embed?mid=1G-Ce66ownAnaG50e3m6oTifO4IP3up4&ehbc=2E312F&noprof=1"></iframe>
					</div>
				</div>
			</div>
			<ButtonCta>Skontaktuj się</ButtonCta>
		</Section>
	);
};

export default Routes;
