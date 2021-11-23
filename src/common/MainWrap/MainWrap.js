import React from 'react';
import { LeftNavBar } from '../LeftNavBar/LeftNavBar';
import { Header } from '../Header/Header';

const MainWrap = ({ children, isLeftNav }) => {
	return (
		<div className='main-container'>
			{isLeftNav && <LeftNavBar />}
			<div className='container-body'>
				{isLeftNav && <Header />}
				<div className='main-body'>{children}</div>
			</div>
		</div>
	);
};

export { MainWrap };
