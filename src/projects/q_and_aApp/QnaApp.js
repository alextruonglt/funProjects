import React from "react"
import cardInfo from "./data"
import CardElement from "./CardElement"
import { useState } from "react"

const QnaApp = () => {
	const newCardInfo = cardInfo.map((card, i) => {
		return {
			question: card.question,
			answer: card.answer,
			id: i,
			isToggled: false,
		}
	})
	const [cards, setCards] = useState(newCardInfo)

	const onToggleClick = (id) => {
		const toggledCards = cards.map((card) => {
			return card.id === id ? { ...card, isToggled: !card.isToggled } : card
		})
		setCards(toggledCards)
	}

	const cardEl = cards.map((card) => {
		return (
			<CardElement
				question={card.question}
				key={card.id}
				id={card.id}
				isToggled={card.isToggled}
				answer={card.answer}
				onToggleClick={onToggleClick}
			/>
		)
	})
	return (
		<div id="page" className="bg-slate-400  h-screen">
			<div className="cardContainer">{cardEl}</div>
		</div>
	)
}

export default QnaApp
