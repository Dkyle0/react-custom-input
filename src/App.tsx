import { useState } from 'react';
import './App.css';
import { SwitchPage } from './components/switch-page/switch-page';
import { Signin } from './components/Signin/Signin';
import { Signup } from './components/Signup';

export function App() {
	const [chendge, setChendge] = useState(false);

	const render = chendge ? <Signup /> : <Signin />;
	return (
		<div className="container">
			<SwitchPage chendge={chendge} setChendge={setChendge} />
			{render}
		</div>
	);
}
