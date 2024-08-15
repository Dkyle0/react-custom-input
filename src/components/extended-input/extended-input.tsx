import stiles from './extended-input.module.css';

interface ExtendedInputProps {
	placeholder: string;
	size?: string;
	border?: string;
	label?: string;
	name: string;
	value: string;
	withAsterisk?: boolean;
	error?: string;
	type?: string;
	isDisabled?: boolean;
	icon?: React.ReactNode;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ExtendedInput = ({
	placeholder,
	size = '14px',
	border = '0',
	label = '',
	name,
	value,
	withAsterisk,
	error,
	type = 'text',
	isDisabled = false,
	icon,
	onChange,
}: ExtendedInputProps) => {
	return (
		<div className={stiles.container}>
			<label style={{ fontSize: size, borderRadius: border }}>
				{label}
				<sup>{withAsterisk && '*'}</sup>
			</label>
			<div className={stiles.inputContainer}>
				{icon && <span className={stiles.icon}>{icon}</span>}
				<input
					type={type}
					disabled={isDisabled}
					className={`${error ? stiles.error : ''} ${icon ? stiles.withIcon : ''}`}
					name={name}
					placeholder={placeholder}
					value={value}
					onChange={onChange}
					style={{ fontSize: size, borderRadius: border }}
				/>
			</div>
			<div className={stiles.error}>{error}</div>
		</div>
	);
};
