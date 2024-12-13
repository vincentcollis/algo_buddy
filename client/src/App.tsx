import { useState } from 'react';
import './App.css';
import logo from './assets/logo.png';

import QuestionSearchBox from './features/question_search/QuestionSearchBox.tsx';

function App() {
	return (
		<>
			<img
				width={'200px'}
				src={logo}
			/>
			<QuestionSearchBox />
			<div></div>
		</>
	);
}

export default App;
