import Link from 'next/link';
import classes from './NavList.module.scss';

interface NavListProps {
	isOpen: boolean;
	onToggle: () => void;
}

const NavList: React.FC<NavListProps> = (props) => {
	const navItems = [
		{ name: 'O nas', href: '#o-nas' },
		{ name: 'Trasy', href: '#trasy' },
		{ name: 'Wyjazdy', href: '#wyjazdy' },
		{ name: 'Kontakt', href: '#kontakt' },
	];

	return (
		<div className={`${classes.list} ${props.isOpen ? classes.open : null}`}>
			<ul>
				{navItems.map((item, i) => (
					<li key={i} onClick={props.onToggle}>
						<Link href={`/${item.href}`}>{item.name}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default NavList;
