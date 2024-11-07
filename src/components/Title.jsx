import starIcon from "../images/icon-star.svg";

const Title = () => {
  return (
		<section className='main__title'>
			<h1 className='main__title-subject'>
				<img src={starIcon} alt='Star icon' className='main__title-subject-icon' /> FAQs
			</h1>
		</section>
	);
}
export default Title