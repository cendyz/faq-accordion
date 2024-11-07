import desktopHeader from "../images/background-pattern-desktop.svg";
import mobileHeader from "../images/background-pattern-mobile.svg";

const Header = () => {
	return (
		<header className='header'>
			<picture>
				<source
					srcSet={desktopHeader}
					media='(min-width: 992px)'
					className='header__img'
				/>
				<img src={mobileHeader} alt='Header background' className='header__img' />
			</picture>
		</header>
	);
};
export default Header;
