import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import Layout from "./components/Layout";
import { Language } from "./components/createContext";
import Home from "./pages/Home";

function App() {
	const [lang, setLang] = useState('es')

	return (
		<BrowserRouter>
			<Language.Provider value={{ lang, setLang }}>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
					</Route>
				</Routes>
			</Language.Provider>
		</BrowserRouter>
	)
}

export default App
