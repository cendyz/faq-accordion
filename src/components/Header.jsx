const Header = () => {
	return (
		<header className='header'>
			<picture>
				<source
					srcSet='src/assets/images/background-pattern-desktop.svg'
					media='(min-width: 992px)'
					className='header__img'
				/>
				<img src='src/assets/images/background-pattern-mobile.svg' alt='Header background' className='header__img' />
			</picture>
		</header>
	);
};
export default Header;
