export type RouteData = {
	country: string;
	flagSrc: string;
	flagAlt: string;
	citiesLists: string[][];
	mapSrc: string;
};

export const polandData: RouteData = {
	country: 'Polska',
	flagSrc: 'polandFlag.JPG',
	flagAlt: 'flaga Polski',
	citiesLists: [
		['Zamość', 'Lublin', 'Chełm', 'Radom', 'Kielce', 'Warszawa', 'Łódź'],
		[
			'Częstochowa',
			'Rzeszów',
			'Kraków',
			'Katowice',
			'Opole',
			'Wrocław',
			'Zgorzelec',
		],
	],
	mapSrc:
		'https://www.google.com/maps/d/embed?mid=1HxxoAniJzM3pfsPX62S2mOcE6i4XrM4&ehbc=2E312F&noprof=1',
};
export const franceData: RouteData = {
	country: 'Francja',
	flagSrc: 'franceFlag.JPG',
	flagAlt: 'flaga Francji',

	citiesLists: [
		[
			'Metz',
			'Nancy',
			'Reims',
			'Lille',
			'Saint Quentin',
			'Rouen',
			'Caen',
			'Paryż',
			'Hawr',
			'Saint Malo',
		],
		[
			'Saint Brieuc',
			'Vannes',
			'Nantes',
			'Angers',
			'Le Mans',
			'Tours',
			'Orléans',
			'Rennes',
			'I inne',
		],
	],
	mapSrc:
		'https://www.google.com/maps/d/embed?mid=1G-Ce66ownAnaG50e3m6oTifO4IP3up4&ehbc=2E312F&noprof=1',
};
