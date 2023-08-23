import "./Button.scss"

const Button = ({ setActive, text, style }) => {
	return (
		<><button style={style} className="button" onClick={() => setActive(true)}>{text}</button></>
	)
}

export default Button