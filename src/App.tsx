import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import GlobalStyle from './styles/global-style'
import Navigation from './components/global/navigation/navigation.component'
import Home from './pages/feature/home/home.page'
import Products from './pages/feature/products/products.page'
import Footer from './components/global/footer/footer.component'

import './App.css'

function App() {
	return (
		<Router>
			<GlobalStyle />
			<div className="App">
				<Navigation />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/products" element={<Products />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	)
}

export default App
