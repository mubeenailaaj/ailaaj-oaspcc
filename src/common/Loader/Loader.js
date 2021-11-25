import React from 'react';
import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';

const Loader = () => {
	return (
		<div className='loaderWrapper'>
			<Box sx={{ display: 'flex' }}>
				<CircularProgress size={75} />
			</Box>
		</div>
	);
};

export { Loader };
