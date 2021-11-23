import React from 'react';
import { useLocation } from 'react-router-dom';
import { Divider, List, ListItemButton, ListItemText } from '@mui/material';
import { AilaajLogo } from '../../resources/images';

const MenuItems = [
	{
		title: 'Dashboard',
		to: '/Dashboard',
	},
	{
		title: 'Accounts',
		to: '/Accounts',
	},
	{
		title: 'Patients',
		to: '/Patients',
	},
	{
		title: 'About',
		to: '/About',
	},
];

const LeftNavBar = () => {
	const location = useLocation();
	const currentRoute = location?.pathname || null;
	console.log(location, currentRoute);

	return (
		<div className='left-nav-bar'>
			<div>
				<AilaajLogo />
			</div>
			<Divider />
			<List>
				{MenuItems.map((mi) => (
					<ListItemButton selected={currentRoute === mi.to} key={mi.title}>
						<ListItemText primary={mi.title} to={mi.title} />
					</ListItemButton>
				))}
			</List>
			{/* <nav>
				<ul>
					<li></li>
					<li>
						<Link to='/about'>About</Link>
					</li>
					<li>
						<Link to='/users'>Users</Link>
					</li>
				</ul>
			</nav> */}
		</div>
	);
};

export { LeftNavBar };
