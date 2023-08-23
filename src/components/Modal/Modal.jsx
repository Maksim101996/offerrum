import Button from "../Button/Button"
import "./Modal.scss"
import { useState } from "react"
import closeModal from "../../img/header/menu-icon__close.svg"

const Modal = ({ active, setActive }) => {
	const [inputValue, setimputValue] = useState("")

	const changeInput = (e) => {
		setimputValue(e.target.value)

	}
	const resetInput = () => {
		setimputValue("")
	}
	return <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
		<div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
			{<img className="close__modal" src={closeModal} alt="close-modal" onClick={() => setActive(false)} />}
			<h2 className="modal__title">Начни прямо сейчас!</h2>
			<div className="modal__text">Получи все нужные навыки для заработка на NFT всего за 28 дней!</div>
			<input type="text" className="modal__input" placeholder="Ваш email" onChange={changeInput} value={inputValue} />
			<Button text={"Оплатить"} setActive={resetInput} />
		</div>
	</div>
}

export default Modal