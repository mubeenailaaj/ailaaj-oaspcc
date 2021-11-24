import React from 'react';
import { Button } from '@mui/material';

const OutlinedButton = ({
	type,
	buttonText = 'text here',
	onClick = () => {},
}) => {
	return type === 'submit' ? (
		<Button variant='outlined' type={type}>
			{buttonText}
		</Button>
	) : (
		<Button variant='outlined' onClick={onClick}>
			{buttonText}
		</Button>
	);
};

export { OutlinedButton };
