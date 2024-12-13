import { useState } from 'react';
import './App.css';
import logo from './assets/logo.png';

import QuestionSearchBox from './features/question_search/QuestionSearchBox.tsx';
import CompletedQuestionsContainer from './features/completed_questions/CompletedQuestionsContainer.tsx';

function App() {
	return (
		<>
			<img
				width={'200px'}
				src={logo}
			/>
			<QuestionSearchBox />
			<CompletedQuestionsContainer />
		</>
	);
}

export default App;
