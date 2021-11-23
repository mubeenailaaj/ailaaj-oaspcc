import React from 'react';
import { LeftNavBar } from '../LeftNavBar/LeftNavBar';

const MainWrap = ({ children, isLeftNav }) => {
	return (
		<div className='main-container'>
			{isLeftNav && <LeftNavBar />}
			<div className='container-body'>{children}</div>
		</div>
	);
};

export { MainWrap };
