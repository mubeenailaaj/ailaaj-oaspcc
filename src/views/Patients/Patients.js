import React, { useState } from 'react';
import { Search } from '@mui/icons-material';
import { TextField } from '@mui/material';
import { MainWrap } from '../../common';
import { useDebounce } from '../../utils/use-debounce';
import { DataTable } from './DataTable';

const Patients = () => {
	const [filterByName, setFilterByName] = useState('');
	const { debouncedValue } = useDebounce(filterByName, 500);

	return (
		<MainWrap isLeftNav>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<h2>Patients</h2>
				<span>
					<TextField
						variant='outlined'
						placeholder='search'
						value={filterByName}
						onChange={({ target }) => setFilterByName(target.value)}
						InputProps={{
							startAdornment: <Search />,
						}}
					/>
				</span>
			</div>
			<div
				style={{
					backgroundColor: 'white',
				}}
			>
				<DataTable />
			</div>
		</MainWrap>
	);
};

export { Patients };
