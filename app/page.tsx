import About from '@/components/About/About';
import Decoration from '@/components/Decoration/Decoration';
import Hero from '@/components/Hero/Hero';
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
		</>
	);
}
