import React from 'react';
import { useForm } from 'react-hook-form';
import { ArrowBack } from '@mui/icons-material';
import { Button, Grid, TextField } from '@mui/material';
import { AilaajLogo } from '../../../resources/images';
import { emailRegex } from '../../../utils/constants';

const ForgotPasswordForm = ({ onLoginButtonClick }) => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm({ mode: 'onSubmit', reValidateMode: 'onChange' | 'onBlur' });

	const onSubmit = (data) => console.log({ data, errors });

	return (
		<form className='login-container' onSubmit={handleSubmit(onSubmit)}>
			<div className='login'>
				<AilaajLogo />
				<span className='login-title'>Forgot Password</span>
				<Grid
					container
					spacing={{ xs: 2, md: 3 }}
					direction='column'
					style={{ padding: '15%', paddingTop: '10%' }}
				>
					<Grid item>
						<TextField
							fullWidth
							label='Email'
							variant='outlined'
							{...register('email', { required: true, pattern: emailRegex })}
							error={['required', 'pattern'].includes(errors.email?.type)}
							helperText={
								errors.email?.type === 'required'
									? 'email is required'
									: errors.email?.type === 'pattern'
									? 'invalid email'
									: ''
							}
						/>
					</Grid>

					<Grid item>
						<Grid container direction='row' justifyContent='space-between'>
							<Button
								variant='text'
								onClick={onLoginButtonClick}
								startIcon={<ArrowBack />}
							>
								Back to Login
							</Button>
							<Button variant='outlined' type='submit'>
								Reset password
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</div>
		</form>
	);
};

export { ForgotPasswordForm };
