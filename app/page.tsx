import About from '@/components/About/About';
import Hero from '@/components/Hero/Hero';
import Routes from '@/components/Routes/Routes';
import WhyUs from '@/components/WhyUs/WhyUs';

export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<WhyUs />
			<Routes />
		</>
	);
}
