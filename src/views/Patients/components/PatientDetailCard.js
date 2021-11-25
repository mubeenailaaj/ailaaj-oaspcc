import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Visibility } from '@mui/icons-material';
import { Divider, Grid } from '@mui/material';
import { OutlinedButton, TextButton } from '../../../common/Buttons';
import { RoutePaths } from '../../../router/AppPaths';

const PatientDetailCard = ({ patient }) => {
	const navigation = useNavigate();

	const redirectUrl = () => {
		navigation(
			{
				pathname: RoutePaths.Patients.Patient,
				search: `id=${patient.id}`,
			},
			{
				state: patient,
			}
		);
	};

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
					<TextButton
						buttonText='view'
						startIcon={<Visibility />}
						onClick={redirectUrl}
					/>

					<OutlinedButton buttonText={'Activate'} />
				</Grid>
			</div>
		</Grid>
	);
};

PatientDetailCard.propTypes = {
	patient: PropTypes.object.isRequired,
};

export { PatientDetailCard };
