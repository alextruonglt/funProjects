import React from "react"

const PictureApp = () => {
	const handleSubmit = () => {}
	return (
		<div className="h-screen bg-white flex justify-center">
			<div id="container" className="mt-24">
				<h1 className="text-purple-500 text-5xl font-bold text-center">
					Unsplash Images
				</h1>
				<form onSubmit={handleSubmit} className="mt-4">
					<input type="text" className="bg-slate-500" />
					<button>Seacrh</button>
				</form>
			</div>
		</div>
	)
}

export default PictureApp
