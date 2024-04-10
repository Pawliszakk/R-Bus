import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/Nav/Navbar';
import Footer from '@/components/Footer/Footer';
import PhoneIcon from '@/components/UI/Icons/PhoneIcon';
import CookiesAlert from '@/components/UI/Cookies/CookiesAlert';

const inter = Inter({
	weight: ['200', '400', '700'],
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'R-BUS - Busy Polska - Francja, przewóz osób i paczek.',
	description:
		'Potrzebujesz busa z Polski do Francji lub z Francji do Polski? Firma R-Bus zajmuje się przewozem osób i paczek z punktu A do punktu B !',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pl">
			<body className={inter.className}>
				<div>
					<div id="overlay-root"></div>
					<NavBar />
					<main>{children}</main>
					<Footer />
					<PhoneIcon />
					<CookiesAlert />
				</div>
			</body>
		</html>
	);
}
