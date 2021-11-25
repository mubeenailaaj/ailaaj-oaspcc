import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Divider, List, ListItemButton, ListItemText } from '@mui/material';
import { AilaajLogo } from '../../resources/images';
import { RoutePaths } from '../../router/AppPaths';

const MenuItems = [
	{
		title: 'Quick View',
		to: RoutePaths.Patients.QuickView,
		activeRoutes: [RoutePaths.Patients.QuickView, RoutePaths.Patients.Patient],
	},
	{
		title: 'Patients',
		to: RoutePaths.Patients.Patients,
		activeRoutes: [RoutePaths.Patients.Patients],
	},
	{
		title: 'About',
		to: '/About',
		activeRoutes: ['/About'],
	},
];

const LeftNavBar = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const currentRoute = location?.pathname || null;

	return (
		<div className='left-nav-bar'>
			<div>
				<AilaajLogo />
			</div>
			<Divider />
			<List disablePadding>
				{MenuItems.map((mi) => (
					<ListItemButton
						selected={mi.activeRoutes.includes(currentRoute)}
						key={mi.title}
						onClick={() => navigate(mi.to)}
					>
						<ListItemText primary={mi.title} to={mi.title} />
					</ListItemButton>
				))}
			</List>
		</div>
	);
};

export { LeftNavBar };
