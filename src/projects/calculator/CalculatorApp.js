import React, { useState } from "react"

const CalculatorApp = () => {
	const [inputNum, setInputNum] = useState(0)
	const [total, setTotal] = useState(0)

	const onValueChange = (e) => {}

	const onValueClick = (e) => {
		if (inputNum == 0) {
			setInputNum(e.target.value)
		} else {
			setInputNum((prevNum) => prevNum + e.target.value)
		}
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
							<button className="bg-red-200 h-14 w-14 mx-2 my-2">C</button>
							<button className="bg-blue-200 h-14 w-14 mx-2 my-2">/</button>
							<button className="bg-blue-200 h-14 w-14 mx-2 my-2">*</button>
						</div>
						<div id="row2C1">
							<button
								className="bg-neutral-50 h-14 w-14 mx-2 my-2"
								value={7}
								onClick={onValueClick}
							>
								7
							</button>
							<button
								className="bg-neutral-50 h-14 w-14 mx-2 my-2"
								value={8}
								onClick={onValueClick}
							>
								8
							</button>
							<button
								className="bg-neutral-50 h-14 w-14 mx-2 my-2"
								value={9}
								onClick={onValueClick}
							>
								9
							</button>
						</div>
						<div id="row3C1">
							<button
								className="bg-neutral-50 h-14 w-14 mx-2 my-2"
								value={4}
								onClick={onValueClick}
							>
								4
							</button>
							<button
								className="bg-neutral-50 h-14 w-14 mx-2 my-2"
								value={5}
								onClick={onValueClick}
							>
								5
							</button>
							<button
								className="bg-neutral-50 h-14 w-14 mx-2 my-2"
								value={6}
								onClick={onValueClick}
							>
								6
							</button>
						</div>
						<div id="row4C1">
							<button
								className="bg-neutral-50 h-14 w-14 mx-2 my-2"
								value={1}
								onClick={onValueClick}
							>
								1
							</button>
							<button
								className="bg-neutral-50 h-14 w-14 mx-2 my-2"
								value={2}
								onClick={onValueClick}
							>
								2
							</button>
							<button
								className="bg-neutral-50 h-14 w-14 mx-2 my-2"
								value={3}
								onClick={onValueClick}
							>
								3
							</button>
						</div>
						<div id="row5C1">
							<button
								className="bg-neutral-50 h-14 w-14 mx-2 my-2"
								value={0}
								onClick={onValueClick}
							>
								0
							</button>
							<button className="bg-neutral-50 h-14 w-14 mx-2 my-2">.</button>
							<button className="bg-neutral-50 h-14 w-14 mx-2 my-2">@</button>
						</div>
					</div>
					<div id="container2">
						<div id="Col1C2" className="flex flex-col">
							<button className="bg-blue-200 h-14 w-14 mx-2 my-2">-</button>
							<button className="bg-blue-200 h-14 w-14 mx-2 my-2">+</button>
							<button className="bg-green-200 h-14 w-14 mx-2 my-2">=</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CalculatorApp
