import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import Layout from "./components/Layout";
import Home from "./pages/Home";

function App() {
	const [count, setCount] = useState(0)

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
