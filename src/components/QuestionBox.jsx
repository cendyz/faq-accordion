import { useState } from "react";

const QuestionBox = ({ questionBox }) => {
	const { question, answer } = questionBox;
	const [truly, setTruly] = useState(false);

	const toggleDisplay = () => {
		setTruly(prevState => !prevState);
	};

	return (
		<section className='main__box'>
			<div className='main__box-top'>
				<h2 className='main__box-top-title'>{question}</h2>
				<button onClick={toggleDisplay}>
					{truly ? (
						<>
							<img src='src/assets/images/icon-minus.svg' alt='Minus icon' className='main__box-top-icon' />
						</>
					) : (
						<>
							<img src='src/assets/images/icon-plus.svg' alt='Plus icon' className='main__box-top-icon' />
						</>
					)}
				</button>
			</div>
			{truly && (
				<div className='main__box-bottom'>
					<p className='main__box-bottom-text'>{answer}</p>
				</div>
			)}
			{/*  */}
		</section>
	);
};
export default QuestionBox;
