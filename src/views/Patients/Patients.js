import React, { useState } from 'react';
import { Search } from '@mui/icons-material';
import { Grid, TextField } from '@mui/material';
import { MainWrap } from '../../common';
// import { useDebounce } from '../../utils/use-debounce';
import { DataTable } from './DataTable';

const Patients = () => {
	const [filterByName, setFilterByName] = useState('');
	// const { debouncedValue } = useDebounce(filterByName, 500);

	return (
		<MainWrap isLeftNav>
			<div className='patients-view'>
				<div className='top-search'>
					<Grid container style={{ alignItems: 'center' }}>
						<Grid item xs={3} md={4} lg={4}>
							<h2
								style={{
									textAlign: 'left',
								}}
							>
								Patients
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
					<Grid container>
						<Grid
							xs={12}
							sm={12}
							md={12}
							lg={12}
							style={{
								backgroundColor: 'white',
							}}
						>
							<DataTable />
						</Grid>
					</Grid>
				</div>
			</div>
		</MainWrap>
	);
};

export { Patients };
