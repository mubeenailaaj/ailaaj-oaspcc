import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard } from '../views/Dashboard';
import { Login } from '../views/Auth';
import '../../src/resources/styles/style.css';

const AppRouter = () => {
	return (
		<BrowserRouter>
			<div>
				<Routes>
					<Route path='/about' element={<About />} />
					<Route path='/users' element={<Users />} />
					<Route path='/login' element={<Login />} />
					<Route path='/' element={<Dashboard />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};

function About() {
	return <h2>About</h2>;
}

function Users() {
	return <h2>Users</h2>;
}

export { AppRouter };
