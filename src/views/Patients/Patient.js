import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';
import { Grid, IconButton } from '@mui/material';
import { ArrowBackIosNew } from '@mui/icons-material';
import { BasicTabs, Loader, MainWrap } from '../../common';
import { OutlinedButton } from '../../common/Buttons';
import { PatientDetails } from './components';
import { patientsLst } from '../../utils/dummydata';
import { RoutePaths } from '../../router/AppPaths';

const getPatient = (id) => {
	return patientsLst.find((p) => p.id === id) || null;
};

const Patient = () => {
	const location = useLocation();
	const navigation = useNavigate();

	const goBack = () => {
		navigation(RoutePaths.Patients.QuickView);
	};

	const [isLoading, setLoading] = useState(false);
	const [patient, setPatient] = useState(location?.state || null);

	const [activeTab, setActiveTab] = useState(0);

	useEffect(() => {
		const searchParam = queryString.parse(location.search);
		setLoading(true);
		const data = getPatient(parseInt(searchParam.id));
		setTimeout(function () {
			if (data) {
				setPatient(data);
				setLoading(false);
			}
		}, 2000);

		return () => {
			setPatient(null);
		};
	}, [location]);

	return (
		<MainWrap isLeftNav>
			{isLoading && <Loader />}
			<div className='quick-view'>
				<div className='top-search'>
					<Grid container style={{ alignItems: 'center' }}>
						<Grid
							item
							xs={12}
							sm={12}
							md={6}
							lg={6}
							style={{ display: 'flex', alignItems: 'center' }}
						>
							<span>
								<IconButton color='primary' onClick={goBack}>
									<ArrowBackIosNew />
								</IconButton>
							</span>

							<Grid item>
								<h2
									style={{
										textAlign: 'left',
									}}
								>
									Patient Name: {patient?.firstName}
								</h2>
							</Grid>

							<div></div>
						</Grid>

						<Grid
							item
							xs={12}
							sm={12}
							md={6}
							lg={6}
							style={{
								display: 'flex',
								justifyContent: 'flex-end',
							}}
						>
							<OutlinedButton buttonText='Activate' />
							<span style={{ padding: '10px' }} />
							<OutlinedButton buttonText='Book an instant appointment' />
						</Grid>
					</Grid>
				</div>
				<div className='grid-container'>
					{patient && !isLoading && (
						<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
							<BasicTabs
								activeTab={activeTab}
								setActiveTab={setActiveTab}
								tabs={[
									{
										label: 'Details',
										component: <PatientDetails patient={patient} />,
									},
									{
										label: 'Appointments',
										component: (
											<p>Appointments (Current & Previous | if any)</p>
										),
									},
									{
										label: 'History',
										component: <p>History</p>,
									},
								]}
							/>
						</Grid>
					)}
				</div>
			</div>
		</MainWrap>
	);
};

export { Patient };
