import React from "react"

const CardElement = (props) => {
	const toggleStyle = props.isToggled ? "" : "hidden"
	return (
		<div id="container" className="flex flex-col bg-slate-200 my-4">
			<div id="foldContainer" className="flex">
				<h1 className="font-bold">{props.question}</h1>
				<button onClick={() => props.onToggleClick(props.id)}>+</button>
			</div>
			<p className={`${toggleStyle}`}>{props.answer}</p>
		</div>
	)
}

export default CardElement
