import React from 'react';
import { Visibility } from '@mui/icons-material';
import { Divider, Grid } from '@mui/material';
import { OutlinedButton, TextButton } from '../../../common/Buttons';

const PatientDetailCard = ({ patient }) => {
	return (
		<Grid item xs={12} md={6} lg={4}>
			<div className='patient-detail-card'>
				<div className='name-wrap'>
					<h3>
						{patient.firstName} {patient.lastName}
					</h3>
					{patient.age && (
						<h3>
							<sub>age</sub> ({patient.age})
						</h3>
					)}
				</div>

				<p>{patient.cnic}</p>
				<span>
					<p>Employee ID: {patient.employeeId}</p>
					<p>Company Name: {patient.companyName}</p>
					<p>Address: {patient.address}</p>
				</span>
				<Divider />
				<Grid item className='buttons-wrap'>
					<TextButton buttonText='view' startIcon={<Visibility />} />

					<OutlinedButton buttonText={'Activate'} />
				</Grid>
			</div>
		</Grid>
	);
};

export { PatientDetailCard };
