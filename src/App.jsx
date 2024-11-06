import { useState } from "react";
import { info } from "./data";
import QuestionBox from "./components/QuestionBox";

function App() {
	return (
		<>
			<header className='header'>
				<img src='src/assets/images/background-pattern-mobile.svg' alt='Header background' className='header__img' />
			</header>
			<main className='main'>
				<section className='main__title'>
					<h1 className='main__title-subject'>
						<img src='src/assets/images/icon-star.svg' alt='Star icon' className='main__title-subject-icon' /> FAQs
					</h1>
				</section>
				{info.map(item => {
					return <QuestionBox questionBox={item} key={item.id} />;
				})}
			</main>
		</>
	);
}

export default App;
