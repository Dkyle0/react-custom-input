import { useState } from 'react';
import { ExtendedInput } from '../extended-input';
import stiles from './Signin.module.css';

interface IFormValuesIN {
	email: string;
	password: string;
}

export function Signin() {
	const [formValues, setFormValues] = useState<IFormValuesIN>({
		email: '',
		password: '',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormValues({
			...formValues,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setFormValues({ email: '', password: '' });
		console.log('Submitted values:', formValues);
	};

	return (
		<div className={stiles.container}>
			<form onSubmit={handleSubmit}>
				<ExtendedInput
					label="Почта"
					placeholder="Почта"
					name="email"
					withAsterisk={true}
					value={formValues.email}
					onChange={handleChange}
				/>

				<ExtendedInput
					label="Пароль"
					placeholder="Пароль"
					name="password"
					type="password"
					withAsterisk={true}
					value={formValues.password}
					onChange={handleChange}
				/>

				<button className={stiles.submit} type="submit">
					Войти
				</button>
			</form>
		</div>
	);
}
