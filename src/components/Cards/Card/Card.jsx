import "./Card.scss"



const Card = ({ image, desc }) => {
	return <div className="card">
		<div className="card__picture"><img className="card__image" src={image} alt="smile" /></div>
		<div className="card__text">{desc}</div>
	</div>
}

export default Card