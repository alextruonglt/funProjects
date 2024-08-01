import React, { useState, useEffect } from "react"

const CalculatorApp = () => {
	const [inputNum, setInputNum] = useState(0)
	const [operator, setOperator] = useState(null)
	const [total, setTotal] = useState(0)

	useEffect(() => {
		console.log(total)
	}, [total])

	const onValueChange = (e) => {}

	const onValueClick = (e) => {
		if (inputNum == 0) {
			setInputNum(e.target.value)
		} else {
			setInputNum((prevNum) => prevNum + e.target.value)
		}
	}

	const onClearClick = () => {
		setInputNum(0)
		setTotal(0)
		setOperator(null)
	}
	const onOperatorClick = (e) => {
		if (operator != null) {
			let result = calculateTotal()
			setTotal(result)
			setInputNum(0)
			// setOperator(null)
		} else {
			setOperator(e.target.value)
			setTotal(inputNum)
			setInputNum(0)
		}
	}

	const calculateTotal = () => {
		let result = 0
		if (operator == "+") {
			result = parseInt(total, 10) + parseInt(inputNum, 10)
		} else if (operator == "-") {
			result = parseInt(total, 10) - parseInt(inputNum, 10)
		} else if (operator == "/") {
			result = parseInt(total, 10) / parseInt(inputNum, 10)
		} else if (operator == "*") {
			result = parseInt(total, 10) * parseInt(inputNum, 10)
		}
		return result
	}

	const onEquals = (e) => {
		console.log("EqualsCLick")
		let result = calculateTotal()

		setInputNum(result)
		setTotal(result)
	}

	return (
		<div
			id="page"
			className="h-screen bg-slate-400 flex justify-center items-center"
		>
			<div
				id="calculatorContainer"
				className="bg-slate-200 px-2 py-2 h-1/2 w-1/2"
			>
				<input
					type="text"
					onChange={onValueChange}
					value={inputNum}
					className="h-12 w-full"
				/>
				<div id="calculatorPad" className="flex">
					<div id="container1">
						<div id="row1C1">
							<button
								className="bg-red-300 hover:bg-red-200 active:bg-red-500 h-14 w-14 mx-2 my-2"
								onClick={onClearClick}
							>
								C
							</button>
							<button
								className="bg-blue-300 hover:bg-blue-200 active:bg-blue-500 h-14 w-14 mx-2 my-2"
								value={"/"}
								onClick={onOperatorClick}
							>
								/
							</button>
							<button
								className="bg-blue-300 hover:bg-blue-200 active:bg-blue-500 h-14 w-14 mx-2 my-2"
								value={"*"}
								onClick={onOperatorClick}
							>
								*
							</button>
						</div>
						<div id="row2C1">
							<button
								className="bg-neutral-300 hover:bg-neutral-200 active:bg-neutral-500 h-14 w-14 mx-2 my-2"
								value={7}
								onClick={onValueClick}
							>
								7
							</button>
							<button
								className="bg-neutral-300 hover:bg-neutral-200 active:bg-neutral-500 h-14 w-14 mx-2 my-2"
								value={8}
								onClick={onValueClick}
							>
								8
							</button>
							<button
								className="bg-neutral-300 hover:bg-neutral-200 active:bg-neutral-500 h-14 w-14 mx-2 my-2"
								value={9}
								onClick={onValueClick}
							>
								9
							</button>
						</div>
						<div id="row3C1">
							<button
								className="bg-neutral-300 hover:bg-neutral-200 active:bg-neutral-500 h-14 w-14 mx-2 my-2"
								value={4}
								onClick={onValueClick}
							>
								4
							</button>
							<button
								className="bg-neutral-300 hover:bg-neutral-200 active:bg-neutral-500 h-14 w-14 mx-2 my-2"
								value={5}
								onClick={onValueClick}
							>
								5
							</button>
							<button
								className="bg-neutral-300 hover:bg-neutral-200 active:bg-neutral-500 h-14 w-14 mx-2 my-2"
								value={6}
								onClick={onValueClick}
							>
								6
							</button>
						</div>
						<div id="row4C1">
							<button
								className="bg-neutral-300 hover:bg-neutral-200 active:bg-neutral-500 h-14 w-14 mx-2 my-2"
								value={1}
								onClick={onValueClick}
							>
								1
							</button>
							<button
								className="bg-neutral-300 hover:bg-neutral-200 active:bg-neutral-500 h-14 w-14 mx-2 my-2"
								value={2}
								onClick={onValueClick}
							>
								2
							</button>
							<button
								className="bg-neutral-300 hover:bg-neutral-200 active:bg-neutral-500 h-14 w-14 mx-2 my-2"
								value={3}
								onClick={onValueClick}
							>
								3
							</button>
						</div>
						<div id="row5C1">
							<button
								className="bg-neutral-300 hover:bg-neutral-200 active:bg-neutral-500 h-14 w-14 mx-2 my-2"
								value={0}
								onClick={onValueClick}
							>
								0
							</button>
							<button className="bg-neutral-300 hover:bg-neutral-200 active:bg-neutral-500 h-14 w-14 mx-2 my-2">
								.
							</button>
							<button className="bg-neutral-300 hover:bg-neutral-200 active:bg-neutral-500 h-14 w-14 mx-2 my-2">
								@
							</button>
						</div>
					</div>
					<div id="container2">
						<div id="Col1C2" className="flex flex-col">
							<button
								className="bg-blue-300 hover:bg-blue-200 active:bg-blue-500 h-14 w-14 mx-2 my-2"
								value={"-"}
								onClick={onOperatorClick}
							>
								-
							</button>
							<button
								className="bg-blue-300 hover:bg-blue-200 active:bg-blue-500 h-14 w-14 mx-2 my-2"
								value={"+"}
								onClick={onOperatorClick}
							>
								+
							</button>
							<button
								className="bg-green-300 hover:bg-green-200 active:bg-green-500 h-14 w-14 mx-2 my-2"
								onClick={onEquals}
							>
								=
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CalculatorApp
