import React, { useState } from 'react';
import { MainWrap } from '../../common';
import { ForgotPasswordForm, LoginForm } from './forms';

const Login = () => {
	const [isLoginForm, setIsLoginForm] = useState(true);

	return (
		<MainWrap isLeftNav={false}>
			{isLoginForm ? (
				<LoginForm onForgotButtonClick={() => setIsLoginForm(!isLoginForm)} />
			) : (
				<ForgotPasswordForm
					onLoginButtonClick={() => setIsLoginForm(!isLoginForm)}
				/>
			)}
		</MainWrap>
	);
};

export { Login };
