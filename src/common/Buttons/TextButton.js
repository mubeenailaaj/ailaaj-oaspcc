import React from 'react';
import { Button } from '@mui/material';

const TextButton = ({
	type,
	startIcon,
	buttonText = 'text here',
	onClick = () => {},
}) => {
	return type === 'submit' ? (
		<Button variant='text' type={type} startIcon={startIcon}>
			{buttonText}
		</Button>
	) : (
		<Button variant='text' onClick={onClick} startIcon={startIcon}>
			{buttonText}
		</Button>
	);
};

export { TextButton };
