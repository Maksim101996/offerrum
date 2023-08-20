import "./Header.scss"
import logo from "../../img/header/header__logo.svg"
import menuOpen from "../../img/header/menu-icon__open.svg"
import menuClose from "../../img/header/menu-icon__close.svg"
import { useEffect, useState } from "react"


const Header = () => {

	//состояние для открытия мобильного меню
	const [openBurgerMenu, setOpenBurgerMenu] = useState(false)


	// Отслеживаем ширику окна браузера
	const useWindowSize = () => {
		const [widthSize, setWidthSize] = useState({
			width: window.innerWidth,
		});

		useEffect(() => {
			const handleResize = () => {
				setWidthSize({
					width: window.innerWidth,
				});
			};
			window.addEventListener("resize", handleResize);

			return () => {
				window.removeEventListener("resize", handleResize);
			};
		}, []);

		return widthSize;
	};
	const size = useWindowSize()


	return <header className="header">
		<div className="header__container">
			<a href="#" className={!openBurgerMenu ? "header__logo" : "header__logo not-show"}>
				<img src={logo} alt="logo" className="header__logo-image" />
			</a>
			<nav className="header__menu menu">
				<ul className={!openBurgerMenu ? "menu__items" : "menu__items active"}>
					{openBurgerMenu && size.width < 992 && <img src={logo} alt="logo" className="menu__logo" />}
					<li className="menu__item"><a className="menu__link">Главная </a></li>
					<li className="menu__item"><a className="menu__link" >Что даст обучение</a></li>
					<li className="menu__item menu__item_button"><button className="menu__button">Личный кабинет</button></li>
				</ul>
				<div className="menu__mobile-button" onClick={() => setOpenBurgerMenu(!openBurgerMenu)}>{openBurgerMenu ? <img src={menuClose} alt="menu-open-icon" /> : <img src={menuOpen} alt="menu-close-icon" />}</div>
			</nav>
		</div>
	</header>
}

export default Header