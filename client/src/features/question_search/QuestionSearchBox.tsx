import { useState } from 'react';
import Question from '../../components/Question.tsx';
import { leetcodeDemoData } from './leetcodeDemoData.ts';

export default function QuestionSearchBox() {
	const [inputBoxQuestion, setInputBoxQuestion] = useState('');

	const inputBoxHandler = (e) => {
		const input = e.target.value;
		setInputBoxQuestion(input);
	};

	return (
		<>
			<div>
				<h2>Leet Code Questions</h2>
				<input
					value={inputBoxQuestion}
					placeholder='Type Leetcode Question Here...'
					onChange={(e) => inputBoxHandler(e)}
				></input>
			</div>
			{inputBoxQuestion != '' && (
				<div>
					{leetcodeDemoData.map((question, i) => {
						return (
							<Question
								key={i + question.name}
								name={question.name}
								type={question.type}
								difficulty={question.difficulty}
								status={question.status}
							/>
						);
					})}
				</div>
			)}
		</>
	);
}
