import { useState } from 'react';
import Question from './Question.tsx';
import { leetcodeDemoData } from './leetcodeDemoData.ts';

interface question {
	name: string;
	type: string;
	difficulty: string;
}

export default function QuestionSearchBox() {
	const [inputBoxQuestion, setInputBoxQuestion] = useState('');

	const inputBoxHandler = (e) => {
		const input = e.target.value;
		setInputBoxQuestion(input);
	};

	// console.log(leetcodeDemoData);
	return (
		<>
			<div>
				<input
					value={inputBoxQuestion}
					placeholder='Type Leetcode Question Here...'
					onChange={(e) => inputBoxHandler(e)}
				></input>
			</div>
			{inputBoxQuestion != '' && (
				<div>
					<h1>Leet Code Questions</h1>
					{leetcodeDemoData.map((question, i) => {
						console.log('question ', question);
						return (
							<Question
								key={i + question.name}
								name={question.name}
								type={question.type}
								difficulty={question.difficulty}
							/>
						);
					})}
				</div>
			)}
		</>
	);
}
