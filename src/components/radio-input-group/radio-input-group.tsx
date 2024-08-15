import stiles from './radio-input-group.module.css';

interface RadioInputGroupProps {
	label: string;
	name: string;
	options: { label: string; value: string }[];
	value: string;
	withAsterisk?: boolean;
	description?: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const RadioInputGroup = ({
	label,
	name,
	options,
	value,
	withAsterisk = false,
	description = '',
	onChange,
}: RadioInputGroupProps) => {
	return (
		<div className={stiles.container}>
			<label className={stiles.label}>
				{label}
				{withAsterisk && <sup className={stiles.asterisk}> *</sup>}
			</label>
			{description && <p className={stiles.description}>{description}</p>}
			<div className={stiles.radioGroup}>
				{options.map((option) => (
					<label key={option.value} className={stiles.radioLabel}>
						<input
							type="radio"
							name={name}
							value={option.value}
							checked={value === option.value}
							onChange={onChange}
							className={stiles.radioInput}
						/>
						<span className={stiles.customRadio}></span>
						{option.label}
					</label>
				))}
			</div>
		</div>
	);
};
