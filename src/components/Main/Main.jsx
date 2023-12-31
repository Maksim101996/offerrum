import "./Main.scss"
import mainPhoto from "../../img/main/main-photo.png"
import Button from "../Button/Button"


const Main = ({ setActive }) => {
	return <section className="main">
		<div className="main__container">
			<div className="main__content">
				<h1 className="main__title">Не упусти возможность войти в <span>прибыльную нишу</span></h1>
				<div className="main__text">Получи все нужные навыки для заработка на NFT всего за 28 дней!</div>
				<Button setActive={setActive} text={"Начать зарабатывать на NFT"} style={{ position: "absolute", bottom: "-20px" }} />
			</div>
			<picture className="main__picture">
				<img className="main__image" src={mainPhoto} alt="main-photo" />
			</picture>

		</div>
	</section>
}

export default Main