import * as React from 'react';
import PropTypes from 'prop-types';
import { Box, Tabs, Tab } from '@mui/material';

const TabPanel = (props) => {
	const { children, value, index, ...other } = props;

	return (
		<div hidden={value !== index} {...other}>
			{value === index && <Box>{children}</Box>}
		</div>
	);
};

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

const BasicTabs = ({ tabs, activeTab, setActiveTab }) => {
	return (
		<Box className='tabs-container'>
			<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
				<Tabs
					value={activeTab}
					onChange={(event, newValue) => setActiveTab(newValue)}
				>
					{tabs.map((t) => (
						<Tab key={t.label} label={t.label} />
					))}
				</Tabs>
			</Box>
			{tabs.map((t, i) => (
				<TabPanel key={t.label} value={activeTab} index={i}>
					{t.component}
				</TabPanel>
			))}
		</Box>
	);
};

BasicTabs.propTypes = {
	tabs: PropTypes.array,
	activeTab: PropTypes.number,
};

export { BasicTabs };
