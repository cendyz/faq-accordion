import { useState } from "react";

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
				<section className='main__box'>
					<div className='main__box-top'>
						<h2 className='main__box-top-title'>What is Frontend Mentor, and how will it help me?</h2>
						<img src='src/assets/images/icon-plus.svg' alt='Plus icon' className='main__box-top-icon' />
					</div>
					<div className='main__box-bottom'>
						<p className='main__box-bottom-text'>
							Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills
							with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.
						</p>
					</div>
				</section>
				<section className='main__box'>
					<div className='main__box-top'>
						<h2 className='main__box-top-title'>Is Frontend Mentor free?</h2>
						<img src='src/assets/images/icon-plus.svg' alt='Plus icon' className='main__box-top-icon' />
					</div>
					<div className='main__box-bottom'>
						<p className='main__box-bottom-text'>
							Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access
							to a range of projects suitable for all skill levels.
						</p>
					</div>
				</section>
				<section className='main__box'>
					<div className='main__box-top'>
						<h2 className='main__box-top-title'>Can I use Frontend Mentor projects in my portfolio?</h2>
						<img src='src/assets/images/icon-plus.svg' alt='Plus icon' className='main__box-top-icon' />
					</div>
					<div className='main__box-bottom'>
						<p className='main__box-bottom-text'>
							Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to
							showcase your skills to potential employers!
						</p>
					</div>
				</section>
				<section className='main__box'>
					<div className='main__box-top'>
						<h2 className='main__box-top-title'>How can I get help if I'm stuck on a  challenge?</h2>
						<img src='src/assets/images/icon-plus.svg' alt='Plus icon' className='main__box-top-icon' />
					</div>
					<div className='main__box-bottom'>
						<p className='main__box-bottom-text'>
							The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you
							can ask questions and seek support from other community members.
						</p>
					</div>
				</section>
			</main>
		</>
	);
}

export default App;

//

//

//

//
