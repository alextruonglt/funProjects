import React from "react"
import { useEffect, useState } from "react"
import Loader from "./Loader"

const QuoteApp = () => {
  const [qouteInfo, setQuoteInfo] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const url =
    "https://famous-quotes4.p.rapidapi.com/random?category=all&count=1"
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": process.env.REACT_APP_QUOTE_API_KEY,
      "x-rapidapi-host": "famous-quotes4.p.rapidapi.com",
    },
  }
  const fetchCall = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(url, options)
      const result = await response.json()
      setQuoteInfo(result)
      setIsLoading(false)
    } catch (error) {
      console.error(error)
      setIsLoading(false)
    }
  }
  useEffect(() => {
    fetchCall()
  }, [])

  const handleClick = () => {
    fetchCall()
  }

  return (
    <>
      <div
        id="page"
        className="bg-gray-300 bg-cover h-screen w-screen flex justify-center items-center"
      >
        <div id="card" className="bg-white w-1/2 xl:w-1/3  rounded">
          <div id="cardContainer" className="my-3 mx-3">
            <h1 className="font-bold text-center mb-3">Random Quotes</h1>
            <>
              {qouteInfo.length > 0 ? ( // Check if quotes are available
                <>
                  <p id="quote" className="mb-1 font-mono">
                    {qouteInfo[0].text}
                  </p>
                  <p id="author" className="mb-1 ">
                    <span className="font-bold">Author</span> -{" "}
                    {qouteInfo[0].author}
                  </p>
                </>
              ) : (
                <Loader />
              )}
            </>
            <button
              className="bg-green-500 hover:bg-green-400  active:bg-green-700 w-full"
              onClick={handleClick}
            >
              Button
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
export default QuoteApp
