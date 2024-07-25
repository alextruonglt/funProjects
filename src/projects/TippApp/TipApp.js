import React from "react"
import { useState } from "react"

const TipApp = () => {
  const [total, setTotal] = useState(0)
  const [bill, setBill] = useState(0)
  const [percent, setPercent] = useState(0)
  const [grandTotal, setGrandTotal] = useState(0)

  const handleBillChange = (e) => {
    const billValue = parseFloat(e.target.value)
    if (!isNaN(billValue)) {
      setBill(billValue)
    } else {
      setBill(0) // or handle invalid input as needed
    }
  }

  const handlePercentChange = (e) => {
    const percentValue = parseFloat(e.target.value)
    if (!isNaN(percentValue)) {
      setPercent(percentValue)
    } else {
      setPercent(0) // or handle invalid input as needed
    }
  }

  const calculateTotal = () => {
    if (percent == NaN || bill == NaN) {
      return null
    }

    let percentageCalculation = percent / 100
    let tipAmount = percentageCalculation * bill
    let grandTotal = tipAmount + bill
    setTotal(tipAmount.toFixed(2))
    setGrandTotal(grandTotal.toFixed(2))
  }

  return (
    <>
      <div
        id="page"
        className="bg-gray-300 bg-cover h-screen w-screen  flex justify-center items-center"
      >
        <div id="card" className="bg-white w-1/2 h-1/2 xl:w-1/4 rounded">
          <div id="card-spacer" className="mx-3 my-3">
            <h1 className="text-xl font-bold text-center">Tip Calculator</h1>
            <p className="mt-3">
              Simply enter the total bill and percentage you want to tip!
            </p>
            <div className="flex-col flex mt-2" id="billInput">
              <label htmlFor="bill" className="font-semibold">
                Bill Amount
              </label>
              <input
                type="text"
                id="bill"
                value={bill}
                onChange={handleBillChange}
                className="mt-1 border-solid border-2 border-gray-300"
              />
            </div>
            <div className="flex-col flex mt-2" id="perecentInput">
              <label htmlFor="percent" className="font-semibold">
                Tip Percent
              </label>
              <input
                type="text"
                id="percent"
                value={percent}
                onChange={handlePercentChange}
                className="mt-1 border-solid border-2 border-gray-300"
              />
            </div>
            <button
              onClick={calculateTotal}
              className="bg-green-500 w-full rounded mt-2 py-2
              hover:bg-green-400
              active:bg-green-700
              "
            >
              Calculate Button
            </button>
            <h2 className="my-2 font-medium">Tip Amount: ${total}</h2>
            <h1 className="text-xl font-bold">Total: ${grandTotal}</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default TipApp
