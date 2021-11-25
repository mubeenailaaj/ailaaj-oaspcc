import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from '../views/Auth';
import { Patient, Patients, QuickView } from '../views';
import { RoutePaths } from './AppPaths';
import '../../src/resources/styles/style.css';

const AppRouter = () => {
	return (
		<BrowserRouter>
			<div>
				<Routes>
					<Route path='/about' element={<About />} />
					<Route path={RoutePaths.Patients.Patients} element={<Patients />} />

					<Route path={RoutePaths.Patients.Patient} element={<Patient />} />
					<Route path={RoutePaths.Patients.QuickView} element={<QuickView />} />
					<Route path='/login' element={<Login />} />
					<Route path='/' element={<Login />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};

function About() {
	return <h2>About</h2>;
}

export { AppRouter };
