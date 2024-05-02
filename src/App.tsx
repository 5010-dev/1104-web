import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import DesignSystem from './styles/design-system'
import GlobalStyle from './styles/global-style'
import Navigation from './components/global/navigation/navigation.component'
import Home from './pages/feature/home/home.page'
import Products from './pages/feature/products/products.page'
import Footer from './components/global/footer/footer.component'

import './App.css'

function App() {
	return (
		<Router>
			<ThemeProvider theme={DesignSystem}>
				<GlobalStyle />
				<div className="App">
					<Navigation />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/products" element={<Products />} />
					</Routes>
					<Footer />
				</div>
			</ThemeProvider>
		</Router>
	)
}

export default App
