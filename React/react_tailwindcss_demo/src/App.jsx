import React from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import Box from "./Demo/Box"
import Columns from "./Demo/Columns"
import Default from "./Demo/Default"
export default function App() {
	const navigate = useNavigate()

	const nav = path => {
		navigate(path)
	}
	return (
		<div className="flex h-screen flex-row">
			<div className="w-[150px] p-4  ">
				<div
					className="navList"
					onClick={() => {
						nav("/box")
					}}>
					小盒子
				</div>
				<div
					className="navList"
					onClick={() => {
						nav("/columns")
					}}>
					Columns
				</div>
			</div>
			<div className="p-4 w-full">
				<Routes>
					<Route path="/box" element={<Box />}></Route>
					<Route path="/columns" element={<Columns />}></Route>
					<Route path="/" element={<Default />}></Route>
				</Routes>
			</div>
		</div>
	)
}
