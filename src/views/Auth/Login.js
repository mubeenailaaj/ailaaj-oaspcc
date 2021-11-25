import React, { useState } from 'react';
import { ForgotPasswordForm, LoginForm } from './forms';

const Login = () => {
	const [isLoginForm, setIsLoginForm] = useState(true);

	return (
		<div className='main-container'>
			<div className='login-body'>
				{isLoginForm ? (
					<LoginForm onForgotButtonClick={() => setIsLoginForm(!isLoginForm)} />
				) : (
					<ForgotPasswordForm
						onLoginButtonClick={() => setIsLoginForm(!isLoginForm)}
					/>
				)}
			</div>
		</div>
	);
};

export { Login };
