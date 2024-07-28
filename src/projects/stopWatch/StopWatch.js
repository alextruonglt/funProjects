import React from "react"
import { useState, useEffect } from "react"

const StopWatch = () => {
  const [seconds, setSeconds] = useState(0)
  const [isTiming, setIsTiming] = useState(false)

  useEffect(() => {
    if (isTiming) {
      const timerId = setInterval(() => {
        setSeconds((prevSeconds) => (prevSeconds += 1))
        console.log(seconds)
      }, 1000)
      return () => {
        clearInterval(timerId)
      }
    }
  }, [isTiming])

  const onStartClick = () => {
    setIsTiming(true)
  }

  const onStopClick = () => {
    setIsTiming(false)
  }

  const onResetClick = () => {
    setIsTiming(false)
    setSeconds(0)
  }

  const formatNum = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${minutes}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div
      id="page"
      className="bg-slate-200 w-full h-screen flex justify-center items-center"
    >
      <div className="bg-white h-1/2 w-1/2 flex justify-center items-center flex-col">
        <h1 className="text-black-500 font-bold text-4xl mb-20">Stop Watch</h1>
        <h1 className="text-pink-500 font-bold text-6xl mb-4">
          {formatNum(seconds)}
        </h1>
        <div id="buttonHolder">
          <button
            onClick={onStartClick}
            className="bg-pink-500 hover:bg-pink-300 active:bg-pink-700 rounded-full mx-2 px-4 py-2 "
          >
            Start
          </button>
          <button
            onClick={onStopClick}
            className="bg-pink-500 hover:bg-pink-300 active:bg-pink-700 rounded-full mx-2 px-4 py-2"
          >
            Stop
          </button>
          <button
            onClick={onResetClick}
            className="bg-pink-500 hover:bg-pink-300 active:bg-pink-700 rounded-full mx-2 px-4 py-2"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default StopWatch
