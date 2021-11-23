import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
import { AccountCircle, Logout } from '@mui/icons-material';

const Header = () => {
	const navigate = useNavigate();
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const openMenu = Boolean(anchorEl);
	return (
		<div className='header'>
			<div className='header-div'>
				<span>
					Offline Activation And Support For Patients With Call Center
				</span>
				<span className='welcome-span'>
					<span
						style={{
							textDecoration: 'underline',
						}}
					>
						Welcome Mubeen!
					</span>
					<Tooltip title='Account settings'>
						<IconButton onClick={handleClick} size='small' sx={{ ml: 2 }}>
							<AccountCircle fontSize={'large'} />
						</IconButton>
					</Tooltip>
					<span>
						<Menu
							anchorEl={anchorEl}
							MenuListProps={{
								'aria-labelledby': 'long-button',
							}}
							open={openMenu}
							onClose={handleClose}
							PaperProps={{
								elevation: 0,
								sx: {
									overflow: 'visible',
									filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
									mt: 1.5,
									'& .MuiAvatar-root': {
										width: 32,
										height: 32,
										ml: -0.5,
										mr: 1,
									},
									'&:before': {
										content: '""',
										display: 'block',
										position: 'absolute',
										top: 0,
										right: 14,
										width: 10,
										height: 10,
										bgcolor: 'background.paper',
										transform: 'translateY(-50%) rotate(45deg)',
										zIndex: 0,
									},
								},
							}}
							transformOrigin={{ horizontal: 'right', vertical: 'top' }}
							anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
						>
							<MenuItem>
								<AccountCircle />
								<span style={{ marginLeft: '10px' }}>My account</span>
							</MenuItem>
							<MenuItem onClick={() => navigate('/Login')}>
								<Logout />
								<span style={{ marginLeft: '10px' }}>Logout</span>
							</MenuItem>
						</Menu>
					</span>
				</span>
			</div>
		</div>
	);
};

export { Header };
