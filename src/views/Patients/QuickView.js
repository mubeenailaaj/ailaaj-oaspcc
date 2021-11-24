import React, { useEffect, useState } from 'react';
import { Search } from '@mui/icons-material';
import { Grid, TextField } from '@mui/material';
import { MainWrap } from '../../common';
import { useDebounce } from '../../utils/use-debounce';
import { patientsLst } from '../../utils/dummydata';
import { PatientDetailCard } from './components';

const QuickView = () => {
	const [filterByName, setFilterByName] = useState('');
	const { debouncedValue } = useDebounce(filterByName, 500);

	const [filteredPatients, setFilteredPatients] = useState([...patientsLst]);

	useEffect(() => {
		if (debouncedValue) {
			setFilteredPatients([
				...patientsLst.filter((p) => {
					return `${p.firstName.toLowerCase()} ${p.lastName.toLowerCase()}`.includes(
						debouncedValue.toLowerCase()
					);
				}),
			]);
		} else {
			setFilteredPatients([...patientsLst]);
		}
	}, [debouncedValue]);

	return (
		<MainWrap isLeftNav>
			<div className='quick-view'>
				<div className='top-search'>
					<Grid container style={{ alignItems: 'center' }}>
						<Grid item xs={3} md={4} lg={4}>
							<h2
								style={{
									textAlign: 'left',
								}}
							>
								Quick View
							</h2>
						</Grid>

						<Grid item xs={9} md={8} lg={4}>
							<TextField
								fullWidth
								variant='outlined'
								placeholder='search'
								value={filterByName}
								onChange={({ target }) => setFilterByName(target.value)}
								InputProps={{
									startAdornment: <Search />,
								}}
								className='search-field'
							/>
						</Grid>
					</Grid>
				</div>
				<div className='grid-container'>
					<Grid container spacing={2}>
						{filteredPatients.map((p) => {
							return <PatientDetailCard key={p.id} patient={p} />;
						})}
					</Grid>
				</div>
			</div>
		</MainWrap>
	);
};

export { QuickView };
