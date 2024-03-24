import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import Layout from "./components/Layout";
import { Language, Mode } from "./components/createContext";
import Home from "./pages/Home";

function App() {
	const [lang, setLang] = useState('es')
	const [mode, setMode] = useState('light')

	return (
		<BrowserRouter>
			<Language.Provider value={{ lang, setLang }}>
				<Mode.Provider value={{ mode, setMode }}>
					<Routes>
						<Route path="/" element={<Layout />}>
							<Route index element={<Home />} />
						</Route>
					</Routes>
				</Mode.Provider>
			</Language.Provider>
		</BrowserRouter>
	)
}

export default App
