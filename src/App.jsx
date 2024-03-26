import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react'
import Layout from "./components/Layout";
import { Language, Luminosity } from "./components/createContext";
import Home from "./pages/Home";

function App() {
	const [lang, setLang] = useState(localStorage.getItem('lang') || 'es')
	const [mode, setMode] = useState(localStorage.getItem('mode') || 'light')

	useEffect(() => {
		localStorage.setItem('lang', lang);
		localStorage.setItem('mode', mode);
	}, [lang, mode]);

	return (
		<BrowserRouter>
			<Language.Provider value={{ lang, setLang }}>
				<Luminosity.Provider value={{ mode, setMode }}>
					<Routes>
						<Route path="/" element={<Layout />}>
							<Route index element={<Home />} />
						</Route>
					</Routes>
				</Luminosity.Provider>
			</Language.Provider>
		</BrowserRouter>
	)
}

export default App
