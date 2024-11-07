import { useState } from "react";
import { answers } from "../data";

const AnswersPartOne = () => {
	const [isActive, setIsActive] = useState(null);

	const toggleDisplay = id => {
		setIsActive(prevId => (prevId === id ? null : id));
	};

	return (
		<>
			{answers.map(({ question, answer }, index) => {
				return (
					<section className='main__box' key={index}>
						<div className='main__box-top'>
							<h2 className='main__box-top-title'>{question}</h2>
							<button onClick={() => toggleDisplay(index)}>
								{isActive === index ? (
									<img src='src/assets/images/icon-minus.svg' alt='Minus icon' className='main__box-top-icon' />
								) : (
									<img src='src/assets/images/icon-plus.svg' alt='Plus icon' className='main__box-top-icon' />
								)}
							</button>
						</div>
						{isActive === index && (
							<div className='main__box-bottom'>
								<p className='main__box-bottom-text'>{answer}</p>
							</div>
						)}
					</section>
				);
			})}
		</>
	);
};
export default AnswersPartOne;
