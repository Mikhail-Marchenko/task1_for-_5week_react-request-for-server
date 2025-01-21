import { useState } from 'react';
import styles from './App.module.css';

export const App = () => {
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const [passwordRepeat, setPasswordRepeat] = useState(null);
	const [error, setError] = useState(null);

	const onEmailChange = ({ target }) => {
		setEmail(target.value);

		let errorEmail = null;

		setError(errorEmail);
	};

	const onBlurEmail = () => {
		let errorEmail = null;
		if (email == null) {
			errorEmail = 'Вы не ввели адрес электронной почты.';
		} else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
			errorEmail = 'Неверный формат ввода адреса электронной почты.';
		}
		setError(errorEmail);
	};

	const onPasswordChange = ({ target }) => {
		setPassword(target.value);

		let errorPassword = null;

		setError(errorPassword);
	};

	const onBlurPassword = () => {
		let errorPassword = null;
		if (!/^[a-zA-Z0-9]+$/.test(password)) {
			errorPassword =
				'Неверные символы для пароля. Пароль должен состоять из букв и цифр.';
		}
		setError(errorPassword);
	};

	const onPasswordRepeatChange = ({ target }) => {
		setPasswordRepeat(target.value);

		let errorPasswordRepeat = null;

		setError(errorPasswordRepeat);
	};

	const onBlurPasswordRepeat = () => {
		let errorPasswordRepeat = null;
		if (passwordRepeat !== password) {
			errorPasswordRepeat = 'Пароли не совпадают. Попробуйте ввести занво.';
		}
		setError(errorPasswordRepeat);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		console.log(
			'email=',
			email,
			'password=',
			password,
			'passwordRepeat=',
			passwordRepeat,
		);
	};

	return (
		<div className={styles.App}>
			<form onSubmit={onSubmit}>
				{error && <div className={styles.errorLabel}>{error}</div>}
				<input
					name="email"
					type="email"
					value={email}
					placeholder="email"
					onChange={onEmailChange}
					onBlur={onBlurEmail}
				/>
				<input
					name="password"
					type="password"
					value={password}
					placeholder="password"
					onChange={onPasswordChange}
					onBlur={onBlurPassword}
				/>
				<input
					name="password-repeat"
					type="password"
					value={passwordRepeat}
					placeholder="password-repeat"
					onChange={onPasswordRepeatChange}
					onBlur={onBlurPasswordRepeat}
				/>
				<button
					type="submit"
					disabled={
						error !== null ||
						passwordRepeat == null ||
						password == null ||
						email == null
					}
				>
					Зарегистрироваться
				</button>
			</form>
		</div>
	);
};
