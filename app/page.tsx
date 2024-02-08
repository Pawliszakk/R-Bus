import About from '@/components/About/About';
import Contact from '@/components/Contact/Contact';
import Decoration from '@/components/Decoration/Decoration';
import Footer from '@/components/Footer/Footer';
import Hero from '@/components/Hero/Hero';
import Reviews from '@/components/Reviews/Reviews';
import Routes from '@/components/Routes/Routes';
import Trips from '@/components/Trips/Trips';
import WhyUs from '@/components/WhyUs/WhyUs';

export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<WhyUs />
			<Routes />
			<Trips />
			<Decoration />
			<Reviews />
			<Contact />
			<Footer />
		</>
	);
}
