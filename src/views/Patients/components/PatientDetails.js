import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';

const PatientDetails = ({ patient }) => {
	return (
		<Grid item xs={12} sm={12} md={6} lg={4}>
			<div>
				<h1>
					{patient.firstName} {patient.lastName}
				</h1>
				<h3>{patient.cnic}</h3>

				<span>
					<p>Age: {patient?.age || ' _'}</p>
					<p>Contact: {patient.contactNo || ' _'}</p>
					<p>Employee ID: {patient.employeeId}</p>
					<p>Company Name: {patient.companyName}</p>
					<p>Address: {patient.address}</p>
				</span>
			</div>
		</Grid>
	);
};

PatientDetails.propTypes = {
	patient: PropTypes.object.isRequired,
};

export { PatientDetails };
