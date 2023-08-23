import { useState } from 'react';
import Cards from './components/Cards/Cards';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Modal from './components/Modal/Modal';
import './css/App.scss';

function App() {
	//состояние для открытия мобильного меню
	const [openBurgerMenu, setOpenBurgerMenu] = useState(false)
	//состояние для видимости модального окна
	const [modalActive, setModalActive] = useState(false)

	return (
		<div className="wrapper" onClick={() => setOpenBurgerMenu(false)} >
			<Header menu={openBurgerMenu} setMenu={setOpenBurgerMenu} />
			<Main setActive={setModalActive} />
			<Cards />
			<Modal active={modalActive} setActive={setModalActive} />
		</div>
	);
}

export default App;
