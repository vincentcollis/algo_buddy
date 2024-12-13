import QuestionInterface from '../util/interfaces';

export default function Question({ name, status }: QuestionInterface) {
	function handleButtonClick(e) {
		console.log(e.target.textContent, ' was clicked');
	}

	return (
		// question.staus value determines the display symbol and avaiable functionality
		<>
			<div>
				<strong>Question Name:</strong> {name} &nbsp;
				<span onClick={(e) => handleButtonClick(e)}>{status ? '❌' : '✅'}</span>
			</div>
		</>
	);
}
