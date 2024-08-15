import { useState } from 'react';
import { ExtendedInput } from '../extended-input';
import { FaAt } from 'react-icons/fa';
import stiles from './Signup.module.css';
import { RadioInputGroup } from '../radio-input-group';

interface IFormValuesUP {
	name: string;
	nickname: string;
	email: string;
	gender: string;
	password: string;
	confirmPassword: string;
}

export function Signup() {
	const defaultFormValues = {
		name: '',
		nickname: '',
		email: '',
		gender: '',
		password: '',
		confirmPassword: '',
	};
	const [formValues, setFormValues] = useState<IFormValuesUP>(defaultFormValues);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormValues({
			...formValues,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setFormValues(defaultFormValues);
		console.log('Submitted values:', formValues);
	};

	return (
		<div className={stiles.container}>
			<form onSubmit={handleSubmit}>
				<ExtendedInput
					label="Имя"
					placeholder="Имя"
					name="name"
					withAsterisk={true}
					value={formValues.name}
					onChange={handleChange}
				/>
				<ExtendedInput
					label="Ник"
					placeholder="Ник"
					name="nickname"
					withAsterisk={true}
					value={formValues.nickname}
					icon={<FaAt />}
					onChange={handleChange}
				/>
				<ExtendedInput
					label="Почта"
					placeholder="Почта"
					name="email"
					withAsterisk={true}
					value={formValues.email}
					onChange={handleChange}
				/>
				<RadioInputGroup
					label="Пол"
					name="gender"
					options={[
						{ label: 'Мужской', value: 'male' },
						{ label: 'Женский', value: 'female' },
					]}
					value={formValues.gender}
					withAsterisk={true}
					description="Выберите Ваш пол"
					onChange={handleChange}
				/>
				<ExtendedInput
					label="Пароль"
					placeholder="Пароль"
					name="password"
					value={formValues.password}
					withAsterisk={true}
					type="password"
					onChange={handleChange}
				/>
				<ExtendedInput
					label="Повторите пароль"
					placeholder="Повторите пароль"
					name="confirmPassword"
					value={formValues.confirmPassword}
					withAsterisk={true}
					type="password"
					onChange={handleChange}
				/>
				<button className={stiles.submit} type="submit">
					Зарегистрироваться
				</button>
			</form>
		</div>
	);
}
