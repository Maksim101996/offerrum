import './Cards.scss'

import Card from "./Card/Card"
import star from "../../img/cards/smileStar.png"
import tong from "../../img/cards/smileTong.png"
import money from "../../img/cards/smileMoney.png"
import glass from "../../img/cards/smileGlass.png"


const Cards = () => {

	return <div className="cards">
		<h2 className="cards__title">Что даст тебе обучение?</h2>
		<div className="cards__items">
			<div className="cards__item"><Card image={star} desc={"Откроешь свой первый криптокошелек и научишься с ним работать"} /></div>
			<div className="cards__item"><Card image={tong} desc={"Поймёшь, как выбирать правильные дропы"} /></div>
			<div className="cards__item"><Card image={money} desc={"Построишь план по быстрому приумножению заработанных средств"} /></div>
			<div className="cards__item"><Card image={glass} desc={"Узнаешь кто такие холдеры и флипперы"} /></div>




		</div></div>
}

export default Cards