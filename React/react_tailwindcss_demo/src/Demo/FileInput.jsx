import React from "react"

export default function FileInput() {
	return (
		<div className="flex h-full justify-center items-center">
			<input type="file" className="file:bg-violet-400 file:border-none file:px-4 file:py-2 file:text-violet-800 file:rounded-full hover:file:bg-violet-300 " />
		</div>
	)
}
