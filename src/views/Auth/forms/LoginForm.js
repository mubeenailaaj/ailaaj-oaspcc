import React from 'react';
import { Grid, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { AilaajLogo } from '../../../resources/images';
import { emailRegex } from '../../../utils/constants';
import { OutlinedButton, TextButton } from '../../../common/Buttons';

const LoginForm = ({ onForgotButtonClick }) => {
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
				<span className='login-title'>Login</span>
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
						<TextField
							fullWidth
							label='Password'
							variant='outlined'
							type='password'
							{...register('password', { required: true })}
							error={errors.password?.type === 'required'}
							helperText={
								errors.password?.type === 'required' && 'password is required'
							}
						/>
					</Grid>
					<Grid item>
						<Grid container direction='row' justifyContent='space-between'>
							<TextButton
								buttonText={'Forgot Password?'}
								onClick={onForgotButtonClick}
							/>
							<OutlinedButton type='submit' buttonText={'Login'} />
						</Grid>
					</Grid>
				</Grid>
			</div>
		</form>
	);
};

export { LoginForm };
