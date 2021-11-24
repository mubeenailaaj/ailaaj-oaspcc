import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { patientsLst } from '../../utils/dummydata';

const columns = [
	{ field: 'id', headerName: 'ID', width: 100 },
	{ field: 'firstName', headerName: 'First name', width: 170 },
	{ field: 'lastName', headerName: 'Last name', width: 170 },
	{
		field: 'age',
		headerName: 'Age',
		// type: 'number',
		width: 150,
	},
	{
		field: 'fullName',
		headerName: 'Full name',
		description: 'This column has a value getter and is not sortable.',
		sortable: false,
		width: 250,
		valueGetter: (params) =>
			`${params.getValue(params.id, 'firstName') || ''} ${
				params.getValue(params.id, 'lastName') || ''
			}`,
	},
];

const DataTable = () => {
	return (
		<div style={{ height: 600, width: '100%' }}>
			<DataGrid
				rows={patientsLst}
				columns={columns}
				pageSize={5}
				rowsPerPageOptions={[5]}
				checkboxSelection
				disableColumnMenu
			/>
		</div>
	);
};

export { DataTable };
