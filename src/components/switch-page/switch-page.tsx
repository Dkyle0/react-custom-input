import stiles from './switch-page.module.css';

export const SwitchPage = ({
	chendge,
	setChendge,
}: {
	chendge: boolean;
	setChendge: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const handleToggle = () => {
		setChendge(!chendge);
	};

	return (
		<div className={stiles.toggleContainer} onClick={handleToggle}>
			<div className={`${stiles.toggleSwitch} ${chendge ? stiles.toggled : ''}`}>
				<div className={stiles.toggleCircle}></div>
			</div>
			<span className={stiles.toggleLabel}>{chendge ? 'Signup' : 'Signin'}</span>
		</div>
	);
};
